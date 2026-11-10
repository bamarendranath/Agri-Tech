const STORAGE_KEY = "terra-farm-v1";

const initialData = {
  parcels: [
    { id: "p1", name: "Les Trois Chênes", area: 24.5, crop: "Blé tendre" },
    { id: "p2", name: "La Prairie Haute", area: 18, crop: "Colza" },
    { id: "p3", name: "Le Clos du Moulin", area: 12.2, crop: "Orge" }
  ],
  activities: [
    { id: "a1", date: "2026-10-28", parcelId: "p1", type: "Semis", product: "Blé tendre — variété Chevignon", dose: "", unit: "" },
    { id: "a2", date: "2026-10-19", parcelId: "p2", type: "Fertilisation", product: "Engrais azoté", dose: "35", unit: "kg/ha" },
    { id: "a3", date: "2026-10-12", parcelId: "p3", type: "Travail du sol", product: "Déchaumage", dose: "", unit: "" }
  ]
};

let data = loadData();
let toastTimer;

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(initialData);
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed.parcels) || !Array.isArray(parsed.activities)) throw new Error("Format de données invalide");
    return parsed;
  } catch (error) {
    console.error("Impossible de charger les données locales :", error);
    return structuredClone(initialData);
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    document.querySelector(".sync-status").innerHTML = `<span class="status-dot"></span> <span>${translation("savedLocally")}</span>`;
  } catch (error) {
    console.error("Impossible d’enregistrer les données locales :", error);
    document.querySelector(".sync-status").textContent = translation("saveError");
    showToast(translation("saveError"));
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function formatDate(value) {
  if (!value) return "—";
  return new Intl.DateTimeFormat(currentLocale(), { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T12:00:00`));
}

function formatNumber(value) {
  return new Intl.NumberFormat(currentLocale(), { maximumFractionDigits: 2 }).format(value);
}

function parcelName(id) {
  return data.parcels.find((parcel) => parcel.id === id)?.name || translation("deletedPlot");
}

function activityIcon(type) {
  return ({ Fertilisation: "✳", Semis: "⌁", Traitement: "◌", Irrigation: "≋", Récolte: "⌂", "Travail du sol": "↗" })[type] || "•";
}

function render() {
  const totalArea = data.parcels.reduce((sum, parcel) => sum + Number(parcel.area || 0), 0);
  const nitrogen = data.activities.reduce((sum, activity) => {
    if (activity.type !== "Fertilisation" || activity.unit !== "kg/ha") return sum;
    const parcel = data.parcels.find((item) => item.id === activity.parcelId);
    return sum + (parcel ? Number(activity.dose || 0) * Number(parcel.area) : 0);
  }, 0);
  const completion = Math.min(100, data.parcels.length ? Math.round((data.activities.length / Math.max(data.parcels.length * 3, 1)) * 100) : 0);
  document.getElementById("areaStat").textContent = formatNumber(totalArea);
  document.getElementById("plotStat").textContent = localizedCount(0, data.parcels.length);
  document.getElementById("activityStat").textContent = formatNumber(data.activities.length);
  document.getElementById("nitrogenStat").textContent = formatNumber(nitrogen);
  document.getElementById("completionStat").textContent = formatNumber(completion);
  document.getElementById("completionBar").style.width = `${completion}%`;
  document.getElementById("parcelCount").textContent = localizedCount(0, data.parcels.length);
  document.getElementById("parcelsCountPill").textContent = formatNumber(data.parcels.length);
  document.getElementById("activitiesCountPill").textContent = formatNumber(data.activities.length);
  document.getElementById("reportActivityCount").textContent = localizedCount(1, data.activities.length);
  document.getElementById("reportPlotCount").textContent = localizedCount(0, data.parcels.length);
  document.getElementById("todayLabel").textContent = new Intl.DateTimeFormat(currentLocale(), { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date());
  renderParcelPreview();
  renderParcelTable();
  renderActivityList();
  renderActivityTable();
  renderParcelOptions();
}

function renderParcelPreview() {
  const preview = document.getElementById("parcelPreview");
  preview.innerHTML = data.parcels.slice(0, 4).map((parcel) => `
    <div class="parcel-item">
      <span class="parcel-crop">▧</span>
      <span><strong>${escapeHtml(parcel.name)}</strong><small>${escapeHtml(cropTypeLabel(parcel.crop))}</small></span>
      <span class="parcel-area">${formatNumber(Number(parcel.area))} ha</span>
    </div>`).join("");
}

function renderParcelTable() {
  const body = document.getElementById("parcelsTable");
  document.getElementById("parcelsEmpty").hidden = data.parcels.length > 0;
  body.innerHTML = data.parcels.map((parcel) => {
    const count = data.activities.filter((item) => item.parcelId === parcel.id).length;
    return `<tr><td>${escapeHtml(parcel.name)}</td><td><span class="crop-tag"><span></span>${escapeHtml(cropTypeLabel(parcel.crop))}</span></td><td>${formatNumber(Number(parcel.area))} ha</td><td>${formatNumber(count)}</td><td><button class="row-action" data-delete-parcel="${escapeHtml(parcel.id)}" aria-label="${escapeHtml(translation("delete"))} ${escapeHtml(parcel.name)}">${escapeHtml(translation("delete"))}</button></td></tr>`;
  }).join("");
}

function renderActivityList() {
  const activities = [...data.activities].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  document.getElementById("recentActivities").innerHTML = activities.map((activity) => `
    <div class="activity-item">
      <span class="activity-symbol">${activityIcon(activity.type)}</span>
      <span><strong>${escapeHtml(activityTypeLabel(activity.type))} · ${escapeHtml(parcelName(activity.parcelId))}</strong><small>${escapeHtml(activity.product || translation("noNote"))}${activity.dose ? ` · ${escapeHtml(activity.dose)} ${escapeHtml(activity.unit)}` : ""}</small></span>
      <span class="activity-date">${formatDate(activity.date)}</span>
    </div>`).join("") || `<div class="empty-state"><span>↗</span><strong>${escapeHtml(translation("noActivities"))}</strong><p>${escapeHtml(translation("addFirstActivity"))}</p></div>`;
}

function renderActivityTable() {
  const activities = [...data.activities].sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById("activitiesEmpty").hidden = activities.length > 0;
  document.getElementById("activitiesTable").innerHTML = activities.map((activity) => `
    <tr><td>${formatDate(activity.date)}</td><td><span class="crop-tag"><span></span>${escapeHtml(activityTypeLabel(activity.type))}</span></td><td>${escapeHtml(parcelName(activity.parcelId))}</td><td>${escapeHtml(activity.product || "—")}${activity.dose ? ` · ${escapeHtml(activity.dose)} ${escapeHtml(activity.unit)}` : ""}</td><td><button class="row-action" data-delete-activity="${escapeHtml(activity.id)}" aria-label="${escapeHtml(translation("delete"))}">${escapeHtml(translation("delete"))}</button></td></tr>`).join("");
}

function renderParcelOptions() {
  const select = document.getElementById("activityParcel");
  const selected = select.value;
  select.innerHTML = data.parcels.map((parcel) => `<option value="${escapeHtml(parcel.id)}">${escapeHtml(parcel.name)}</option>`).join("");
  if (data.parcels.some((parcel) => parcel.id === selected)) select.value = selected;
  document.querySelectorAll("[data-activity]").forEach((option) => {
    option.textContent = (ACTIVITY_TYPES[currentLocale()] || ACTIVITY_TYPES["en-IE"])[Number(option.dataset.activity)];
  });
  document.querySelectorAll("[data-crop]").forEach((option) => {
    option.textContent = (CROP_TYPES[currentLocale()] || CROP_TYPES["en-IE"])[Number(option.dataset.crop)];
  });
  document.getElementById("addActivityButton").disabled = data.parcels.length === 0;
  document.getElementById("addActivityTop").disabled = data.parcels.length === 0;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (id === "activityDialog" && data.parcels.length === 0) {
    showToast(translation("addPlotFirst"));
    openDialog("parcelDialog");
    return;
  }
  if (id === "activityDialog") document.querySelector('#activityForm [name="date"]').value = new Date().toISOString().slice(0, 10);
  dialog.showModal();
}

function navigate(view) {
  const target = document.getElementById(view);
  if (!target) return;
  document.querySelectorAll(".page").forEach((page) => page.classList.toggle("active-page", page === target));
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.dataset.view === view));
  const activeLink = document.querySelector(`.nav-link[data-view="${view}"]`);
  document.getElementById("breadcrumbCurrent").textContent = activeLink?.querySelector("[data-i18n]")?.textContent || translation("overview");
  document.getElementById("sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigate(link.dataset.view);
  });
});

document.getElementById("addParcelButton").addEventListener("click", () => openDialog("parcelDialog"));
document.getElementById("addParcelFromHome").addEventListener("click", () => openDialog("parcelDialog"));
document.getElementById("addActivityButton").addEventListener("click", () => openDialog("activityDialog"));
document.getElementById("addActivityTop").addEventListener("click", () => openDialog("activityDialog"));
document.querySelectorAll("[data-close]").forEach((button) => button.addEventListener("click", () => document.getElementById(button.dataset.close).close()));
document.getElementById("menuToggle").addEventListener("click", (event) => {
  const isOpen = document.getElementById("sidebar").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.getElementById("helpButton").addEventListener("click", () => showToast(translation("helpMessage")));
document.getElementById("tipClose").addEventListener("click", (event) => event.currentTarget.closest(".tip-banner").remove());

document.getElementById("parcelForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const parcel = { id: crypto.randomUUID(), name: form.get("name").trim(), area: Number(form.get("area")), crop: form.get("crop") };
  if (!parcel.name || !Number.isFinite(parcel.area) || parcel.area <= 0) return;
  data.parcels.push(parcel);
  saveData();
  render();
  event.currentTarget.reset();
  document.getElementById("parcelDialog").close();
  showToast(translation("addedPlotMessage"));
});

document.getElementById("activityForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const activity = {
    id: crypto.randomUUID(), date: form.get("date"), parcelId: form.get("parcelId"),
    type: form.get("type"), product: form.get("product").trim(),
    dose: form.get("dose"), unit: form.get("unit")
  };
  if (!activity.date || !activity.parcelId || !activity.type) return;
  data.activities.push(activity);
  saveData();
  render();
  event.currentTarget.reset();
  document.getElementById("activityDialog").close();
  showToast(translation("savedActivityMessage"));
});

document.addEventListener("click", (event) => {
  const parcelId = event.target.closest("[data-delete-parcel]")?.dataset.deleteParcel;
  const activityId = event.target.closest("[data-delete-activity]")?.dataset.deleteActivity;
  if (parcelId) {
    const parcel = data.parcels.find((item) => item.id === parcelId);
    if (!parcel || !window.confirm(translate("deletePlotConfirm", { name: parcel.name }))) return;
    data.parcels = data.parcels.filter((item) => item.id !== parcelId);
    data.activities = data.activities.filter((item) => item.parcelId !== parcelId);
    saveData();
    render();
    showToast(translation("deletedPlotMessage"));
  }
  if (activityId) {
    if (!window.confirm(translation("deleteActivityConfirm"))) return;
    data.activities = data.activities.filter((item) => item.id !== activityId);
    saveData();
    render();
    showToast(translation("deletedActivityMessage"));
  }
});

document.getElementById("downloadCsv").addEventListener("click", () => {
  const rows = [[translation("reportDate"), translation("reportParcel"), translation("reportCrop"), `${translation("reportArea")} (ha)`, translation("reportType"), translation("reportProduct"), translation("reportDose"), translation("unit")]];
  [...data.activities].sort((a, b) => a.date.localeCompare(b.date)).forEach((activity) => {
    const parcel = data.parcels.find((item) => item.id === activity.parcelId);
    rows.push([activity.date, parcel?.name || translation("deletedPlot"), parcel ? cropTypeLabel(parcel.crop) : "", parcel?.area || "", activityTypeLabel(activity.type), activity.product || "", activity.dose || "", activity.unit || ""]);
  });
  const csv = "\uFEFF" + rows.map((row) => row.map((field) => `"${String(field).replace(/"/g, '""')}"`).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "terra-registre-interventions-2026.csv";
  link.click();
  URL.revokeObjectURL(url);
  showToast(translation("exportDone"));
});

document.getElementById("printReport").addEventListener("click", () => {
  const rows = data.parcels.map((parcel) => `<tr><td>${escapeHtml(parcel.name)}</td><td>${escapeHtml(cropTypeLabel(parcel.crop))}</td><td>${formatNumber(Number(parcel.area))} ha</td><td>${formatNumber(data.activities.filter((item) => item.parcelId === parcel.id).length)}</td></tr>`).join("");
  const activityRows = [...data.activities].sort((a, b) => b.date.localeCompare(a.date)).map((activity) => `<tr><td>${formatDate(activity.date)}</td><td>${escapeHtml(activityTypeLabel(activity.type))}</td><td>${escapeHtml(parcelName(activity.parcelId))}</td><td>${escapeHtml(activity.product || "—")}</td><td>${activity.dose ? `${escapeHtml(activity.dose)} ${escapeHtml(activity.unit)}` : "—"}</td></tr>`).join("");
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast(translation("popupBlocked"));
    return;
  }
  printWindow.document.write(`<!doctype html><html lang="${currentLocale()}"><meta charset="utf-8"><title>${escapeHtml(translation("reportTitle"))} — Terra</title><style>body{font:14px Arial,sans-serif;color:#24342b;padding:30px}h1{font-size:26px}h2{font-size:17px;margin-top:32px}p{color:#667267}table{width:100%;border-collapse:collapse;margin:15px 0}th,td{text-align:left;padding:9px;border-bottom:1px solid #ddd;font-size:12px}th{color:#667267}small{color:#7d867d}@media print{body{padding:0}}</style><h1>${escapeHtml(translation("reportTitle"))}</h1><p>La Ferme des Prés · ${escapeHtml(translation("seasonLabel"))} · ${escapeHtml(translation("reportExported"))} ${formatDate(new Date().toISOString().slice(0, 10))}</p><small>${escapeHtml(translation("reportDisclaimerShort"))}</small><h2>${escapeHtml(translation("plotsHeading"))} (${formatNumber(data.parcels.length)})</h2><table><thead><tr><th>${escapeHtml(translation("reportParcel"))}</th><th>${escapeHtml(translation("reportCrop"))}</th><th>${escapeHtml(translation("reportArea"))}</th><th>${escapeHtml(translation("reportActivity"))}</th></tr></thead><tbody>${rows || `<tr><td colspan="4">${escapeHtml(translation("noPlotsReport"))}</td></tr>`}</tbody></table><h2>${escapeHtml(translation("activitiesHeading"))} (${formatNumber(data.activities.length)})</h2><table><thead><tr><th>${escapeHtml(translation("reportDate"))}</th><th>${escapeHtml(translation("reportType"))}</th><th>${escapeHtml(translation("reportParcel"))}</th><th>${escapeHtml(translation("reportProduct"))}</th><th>${escapeHtml(translation("reportDose"))}</th></tr></thead><tbody>${activityRows || `<tr><td colspan="5">${escapeHtml(translation("noActivitiesReport"))}</td></tr>`}</tbody></table><script>window.onload=()=>window.print()<\/script></html>`);
  printWindow.document.close();
});

render();
