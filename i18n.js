const LANGUAGE_OPTIONS = [
  ["fr-FR", "Français"], ["en-IE", "English"]
];

const LANGUAGE_STORAGE_KEY = "terra-language-v1";
const UI = {
  "en-IE": {
    farmType:"Farm", farmSpace:"FARM SPACE", overview:"Overview", myParcels:"My plots", activities:"Activities", reports:"Register & reports",
    seasonLabel:"2026 season", localData:"Your data stays on this device.", farmer:"Farmer", moreOptions:"More options", openMenu:"Open menu",
    myFarm:"My farm", chooseLanguage:"Choose language", savedLocally:"Saved on this device", help:"Help", hello:"Hello", overviewIntro:"Here is what is happening on your farm.",
    addActivity:"Add activity", trackedArea:"Tracked area", seasonActivities:"Activities this season", loggedInJournal:"Recorded in your journal",
    nitrogenUsed:"Nitrogen used", onTrackedParcels:"On recorded plots", campaignProgress:"Season record progress", latestActivities:"Latest activities",
    recentTracking:"Recent work on your plots", seeAll:"See all", yourParcels:"Your plots", parcelsTracked:"plots tracked", manage:"Manage",
    addParcel:"Add a plot", tipTitle:"Keep your journal up to date, simply.", tipBody:"Record activities throughout the season. Your data is saved in this browser.",
    close:"Close", footerNote:"A practical tracking tool — check official requirements with your agricultural adviser.", yourFarm:"YOUR FARM",
    parcelsIntro:"See your farm's areas and crops.", savedParcels:"Saved plots", enteredByYou:"Information entered by you", parcel:"PLOT", crop:"CROP", area:"AREA",
    delete:"Delete", noParcels:"No plots yet", addFirstParcel:"Add your first plot to start tracking.", farmJournal:"FARM JOURNAL",
    activitiesIntro:"Keep a record of work and inputs used.", history:"History", operationsLogged:"Work recorded on your plots", date:"DATE",
    activityType:"ACTIVITY", productDose:"PRODUCT / RATE", noActivities:"No activities recorded", addFirstActivity:"Add an activity to start your journal.",
    campaign:"2026 SEASON", reportsIntro:"View and export the data in your journal.", activityRegister:"Activity register",
    exportCsvInfo:"Export recorded plots, work, products and rates as a CSV file.", updatedAutomatically:"Updated automatically",
    downloadRegister:"Download register", farmSummary:"Farm summary", printSummaryInfo:"Prepare a printable view of areas, crops and seasonal activities.",
    workingDocument:"Working document", openPrintSummary:"Open printable summary", important:"Please note",
    reportDisclaimer:"These exports are tracking tools. They are not official declarations and do not guarantee eligibility for support. Check the required format with your organisation or adviser.",
    parcelName:"Plot name", parcelNameExample:"e.g. Mill Fields", areaHa:"Area (ha)", choose:"Choose…", other:"Other", cancel:"Cancel",
    saveParcel:"Save plot", productNote:"Product or note", productExample:"e.g. Nitrogen fertiliser, variety…", doseQuantity:"Rate / quantity",
    unit:"Unit", noUnit:"No unit", nitrogenHint:"For fertilising, enter the nitrogen quantity in kg/ha to include it in the summary.", save:"Save", optional:"Optional",
    onePlot:"{count} plot", manyPlots:"{count} plots", oneActivity:"{count} activity", manyActivities:"{count} activities",
    none:"None", noNote:"No note", deletedPlot:"Deleted plot", deletePlotConfirm:"Delete “{name}” and its associated activities?",
    deleteActivityConfirm:"Delete this activity?", deletedPlotMessage:"Plot and associated activities deleted.", deletedActivityMessage:"Activity deleted.",
    addedPlotMessage:"Plot added to your journal.", savedActivityMessage:"Activity saved to your journal.", addPlotFirst:"Add a plot first to record an activity.",
    helpMessage:"Your data stays in this browser. Export your register regularly.", saveError:"Unable to save. Check the available space on this device.",
    exportDone:"CSV register downloaded.", popupBlocked:"Allow pop-ups to open the summary.", reportTitle:"Farm summary",
    reportExported:"Exported on", reportDisclaimerShort:"Working document — not an official declaration.", plotsHeading:"Plots",
    activitiesHeading:"Activities", reportDate:"Date", reportParcel:"Plot", reportCrop:"Crop", reportArea:"Area", reportActivity:"Activities",
    reportType:"Type", reportProduct:"Product / note", reportDose:"Rate",     noPlotsReport:"No plots", noActivitiesReport:"No activities", brandHome:"Terra home", mainNavigation:"Main navigation"
  },
  "fr-FR": {
    farmType:"Exploitation agricole", farmSpace:"ESPACE FERME", overview:"Vue d’ensemble", myParcels:"Mes parcelles", activities:"Interventions", reports:"Registre & rapports",
    seasonLabel:"Campagne 2026", localData:"Vos données restent sur cet appareil.", farmer:"Agriculteur", moreOptions:"Plus d’options", openMenu:"Ouvrir le menu",
    myFarm:"Mon exploitation", chooseLanguage:"Choisir la langue", savedLocally:"Enregistré sur cet appareil", help:"Aide", hello:"Bonjour",
    overviewIntro:"Voici ce qui se passe sur votre exploitation.", addActivity:"Ajouter une intervention", trackedArea:"Surface suivie",
    seasonActivities:"Interventions cette saison", loggedInJournal:"Enregistrées dans le carnet", nitrogenUsed:"Azote utilisé",
    onTrackedParcels:"Sur les parcelles enregistrées", campaignProgress:"Dossier de la campagne", latestActivities:"Dernières interventions",
    recentTracking:"Le suivi récent de vos parcelles", seeAll:"Tout voir", yourParcels:"Vos parcelles", parcelsTracked:"parcelles suivies", manage:"Gérer",
    addParcel:"Ajouter une parcelle", tipTitle:"Un carnet à jour, sans prise de tête.", tipBody:"Notez vos interventions au fil de la saison. Vos données sont sauvegardées dans ce navigateur.",
    close:"Fermer", footerNote:"Un outil de suivi pratique — vérifiez les exigences officielles auprès de votre conseiller agricole.", yourFarm:"VOTRE EXPLOITATION",
    parcelsIntro:"Retrouvez les surfaces et les cultures de votre ferme.", savedParcels:"Parcelles enregistrées", enteredByYou:"Informations saisies par vos soins",
    parcel:"PARCELLE", crop:"CULTURE", area:"SURFACE", delete:"Supprimer", noParcels:"Aucune parcelle pour le moment",
    addFirstParcel:"Ajoutez votre première parcelle pour commencer le suivi.", farmJournal:"CARNET DE FERME",
    activitiesIntro:"Gardez une trace des travaux et des intrants utilisés.", history:"Historique", operationsLogged:"Les opérations enregistrées sur vos parcelles",
    date:"DATE", activityType:"INTERVENTION", productDose:"PRODUIT / DOSE", noActivities:"Aucune intervention enregistrée",
    addFirstActivity:"Ajoutez un travail pour démarrer votre carnet.", campaign:"CAMPAGNE 2026",
    reportsIntro:"Consultez et exportez les données enregistrées dans votre carnet.", activityRegister:"Registre des interventions",
    exportCsvInfo:"Exportez les parcelles, travaux, produits et doses enregistrés en fichier CSV.", updatedAutomatically:"Mis à jour automatiquement",
    downloadRegister:"Télécharger le registre", farmSummary:"Résumé de l’exploitation",
    printSummaryInfo:"Préparez une vue imprimable des surfaces, cultures et interventions de la campagne.",
    workingDocument:"Document de travail", openPrintSummary:"Ouvrir le résumé imprimable", important:"À savoir",
    reportDisclaimer:"Ces exports sont des outils de suivi. Ils ne constituent pas une déclaration officielle et ne garantissent pas l’éligibilité à une aide. Vérifiez le format demandé auprès de votre organisme ou conseiller.",
    parcelName:"Nom de la parcelle", parcelNameExample:"Ex. Les Prés du Moulin", areaHa:"Surface (ha)", choose:"Choisir…", other:"Autre",
    cancel:"Annuler", saveParcel:"Enregistrer la parcelle", productNote:"Produit ou note", productExample:"Ex. Engrais azoté, variété…",
    doseQuantity:"Dose / quantité", unit:"Unité", noUnit:"Sans unité",
    nitrogenHint:"Pour une fertilisation, indiquez la quantité d’azote en kg/ha afin de l’inclure au résumé.", save:"Enregistrer", optional:"Optionnel",
    onePlot:"{count} parcelle", manyPlots:"{count} parcelles", oneActivity:"{count} intervention", manyActivities:"{count} interventions",
    none:"Aucune", noNote:"Aucune note", deletedPlot:"Parcelle supprimée",
    deletePlotConfirm:"Supprimer « {name} » et les interventions associées ?", deleteActivityConfirm:"Supprimer cette intervention ?",
    deletedPlotMessage:"Parcelle et interventions associées supprimées.", deletedActivityMessage:"Intervention supprimée.",
    addedPlotMessage:"Parcelle ajoutée au carnet.", savedActivityMessage:"Intervention enregistrée dans le carnet.",
    addPlotFirst:"Ajoutez d’abord une parcelle pour enregistrer une intervention.",
    helpMessage:"Vos données restent dans ce navigateur. Exportez régulièrement votre registre.",
    saveError:"Enregistrement impossible. Vérifiez l’espace disponible sur l’appareil.", exportDone:"Registre CSV téléchargé.",
    popupBlocked:"Autorisez les fenêtres contextuelles pour ouvrir le résumé.", reportTitle:"Résumé de l’exploitation",
    reportExported:"Exporté le", reportDisclaimerShort:"Document de travail — ne constitue pas une déclaration officielle.",
    plotsHeading:"Parcelles", activitiesHeading:"Interventions", reportDate:"Date", reportParcel:"Parcelle", reportCrop:"Culture",
    reportArea:"Surface", reportActivity:"Interventions", reportType:"Type", reportProduct:"Produit / note", reportDose:"Dose",
    noPlotsReport:"Aucune parcelle", noActivitiesReport:"Aucune intervention", brandHome:"Terra, accueil", mainNavigation:"Navigation principale"
  }
};

const TRANSLATED = {
  "de-DE": ["Landwirtschaft","HOF","Übersicht","Meine Flächen","Arbeiten","Register & Berichte","Saison 2026","Ihre Daten bleiben auf diesem Gerät.","Landwirt","Weitere Optionen","Menü öffnen","Mein Betrieb","Sprache wählen","Auf diesem Gerät gespeichert","Hilfe","Hallo","Das passiert gerade auf Ihrem Betrieb.","Arbeit hinzufügen","Erfasste Fläche","Arbeiten in dieser Saison","Im Journal erfasst","Verwendeter Stickstoff","Auf erfassten Flächen","Fortschritt Saisonakte","Letzte Arbeiten","Aktuelle Arbeiten auf Ihren Flächen","Alle ansehen","Ihre Flächen","erfasste Flächen","Verwalten","Fläche hinzufügen","Das Journal einfach aktuell halten.","Erfassen Sie Arbeiten während der Saison. Ihre Daten werden in diesem Browser gespeichert.","Schließen","Praktisches Nachverfolgungswerkzeug — klären Sie offizielle Anforderungen mit Ihrer Beratung.","IHR BETRIEB","Flächen und Kulturen Ihres Betriebs anzeigen.","Gespeicherte Flächen","Von Ihnen eingegebene Angaben","FLÄCHE","KULTUR","FLÄCHE","Löschen","Noch keine Flächen","Fügen Sie Ihre erste Fläche hinzu.","BETRIEBSJOURNAL","Arbeiten und verwendete Betriebsmittel dokumentieren.","Verlauf","Erfasste Arbeiten auf Ihren Flächen","DATUM","ARBEIT","PRODUKT / MENGE","Keine Arbeiten erfasst","Fügen Sie einen Vorgang hinzu.","SAISON 2026","Journal ansehen und Daten exportieren.","Arbeitsregister","Flächen, Arbeiten, Produkte und Mengen als CSV-Datei exportieren.","Automatisch aktualisiert","Register herunterladen","Betriebsübersicht","Druckansicht der Flächen, Kulturen und Saisonarbeiten erstellen.","Arbeitsdokument","Druckübersicht öffnen","Wichtig","Diese Exporte dienen der Dokumentation. Sie sind keine amtlichen Erklärungen und garantieren keine Förderfähigkeit. Erfragen Sie das benötigte Format bei Ihrer Stelle oder Beratung.","Flächenname","z. B. Mühlenwiesen","Fläche (ha)","Auswählen…","Sonstiges","Abbrechen","Fläche speichern","Produkt oder Notiz","z. B. Stickstoffdünger, Sorte…","Menge / Aufwand","Einheit","Keine Einheit","Geben Sie bei Düngung die Stickstoffmenge in kg/ha an, damit sie in der Übersicht erscheint.","Speichern","Optional"],
  "es-ES": ["Explotación agrícola","FINCA","Resumen","Mis parcelas","Labores","Registro e informes","Campaña 2026","Tus datos permanecen en este dispositivo.","Agricultor","Más opciones","Abrir menú","Mi explotación","Elegir idioma","Guardado en este dispositivo","Ayuda","Hola","Esto es lo que ocurre en tu explotación.","Añadir labor","Superficie registrada","Labores esta campaña","Anotadas en el cuaderno","Nitrógeno utilizado","En parcelas registradas","Progreso de campaña","Últimas labores","Seguimiento reciente de tus parcelas","Ver todo","Tus parcelas","parcelas registradas","Gestionar","Añadir parcela","Mantén tu cuaderno al día fácilmente.","Anota las labores durante la campaña. Tus datos se guardan en este navegador.","Cerrar","Una herramienta práctica: consulta los requisitos oficiales con tu asesor agrícola.","TU EXPLOTACIÓN","Consulta las superficies y cultivos de tu finca.","Parcelas guardadas","Información introducida por ti","PARCELA","CULTIVO","SUPERFICIE","Eliminar","Todavía no hay parcelas","Añade tu primera parcela para empezar.","CUADERNO DE CAMPO","Registra las labores y los insumos utilizados.","Historial","Labores registradas en tus parcelas","FECHA","LABOR","PRODUCTO / DOSIS","No hay labores registradas","Añade una labor para empezar el cuaderno.","CAMPAÑA 2026","Consulta y exporta los datos de tu cuaderno.","Registro de labores","Exporta parcelas, labores, productos y dosis a un archivo CSV.","Actualizado automáticamente","Descargar registro","Resumen de la explotación","Prepara una vista imprimible de superficies, cultivos y labores de la campaña.","Documento de trabajo","Abrir resumen imprimible","Importante","Estas exportaciones son herramientas de seguimiento. No son declaraciones oficiales ni garantizan el acceso a ayudas. Consulta el formato requerido con tu organismo o asesor.","Nombre de parcela","p. ej. Prado del Molino","Superficie (ha)","Elegir…","Otro","Cancelar","Guardar parcela","Producto o nota","p. ej. Fertilizante nitrogenado, variedad…","Dosis / cantidad","Unidad","Sin unidad","Para incluir el nitrógeno en el resumen, indica la cantidad en kg/ha.","Guardar","Opcional"],
  "it-IT": ["Azienda agricola","AZIENDA","Panoramica","I miei appezzamenti","Attività","Registro e rapporti","Annata 2026","I tuoi dati restano su questo dispositivo.","Agricoltore","Altre opzioni","Apri menu","La mia azienda","Scegli la lingua","Salvato su questo dispositivo","Aiuto","Ciao","Ecco cosa succede nella tua azienda.","Aggiungi attività","Superficie monitorata","Attività di questa stagione","Registrate nel diario","Azoto utilizzato","Sugli appezzamenti registrati","Avanzamento campagna","Attività recenti","Attività recenti nei tuoi appezzamenti","Vedi tutto","I tuoi appezzamenti","appezzamenti registrati","Gestisci","Aggiungi appezzamento","Tieni aggiornato il diario, con semplicità.","Annota le attività durante la stagione. I dati sono salvati in questo browser.","Chiudi","Uno strumento pratico: verifica i requisiti ufficiali con il tuo consulente agricolo.","LA TUA AZIENDA","Consulta superfici e colture della tua azienda.","Appezzamenti salvati","Informazioni inserite da te","APPEZZAMENTO","COLTURA","SUPERFICIE","Elimina","Nessun appezzamento","Aggiungi il primo appezzamento per iniziare.","DIARIO AZIENDALE","Registra le attività e i fattori produttivi utilizzati.","Cronologia","Attività registrate nei tuoi appezzamenti","DATA","ATTIVITÀ","PRODOTTO / DOSE","Nessuna attività registrata","Aggiungi un’attività per iniziare il diario.","CAMPAGNA 2026","Consulta ed esporta i dati del diario.","Registro attività","Esporta appezzamenti, attività, prodotti e dosi in un file CSV.","Aggiornato automaticamente","Scarica il registro","Riepilogo aziendale","Prepara una vista stampabile di superfici, colture e attività stagionali.","Documento di lavoro","Apri riepilogo stampabile","Nota bene","Queste esportazioni sono strumenti di monitoraggio, non dichiarazioni ufficiali e non garantiscono l’accesso agli aiuti. Verifica il formato richiesto con il tuo ente o consulente.","Nome appezzamento","es. Prati del Mulino","Superficie (ha)","Scegli…","Altro","Annulla","Salva appezzamento","Prodotto o nota","es. Concime azotato, varietà…","Dose / quantità","Unità","Senza unità","Per includere l’azoto nel riepilogo, indica la quantità in kg/ha.","Salva","Facoltativo"],
  "pt-PT": ["Exploração agrícola","EXPLORAÇÃO","Visão geral","As minhas parcelas","Atividades","Registo e relatórios","Campanha 2026","Os seus dados ficam neste dispositivo.","Agricultor","Mais opções","Abrir menu","A minha exploração","Escolher idioma","Guardado neste dispositivo","Ajuda","Olá","Veja o que se passa na sua exploração.","Adicionar atividade","Área acompanhada","Atividades desta campanha","Registadas no diário","Azoto utilizado","Nas parcelas registadas","Progresso da campanha","Atividades recentes","Acompanhamento recente das suas parcelas","Ver tudo","As suas parcelas","parcelas acompanhadas","Gerir","Adicionar parcela","Mantenha o diário atualizado sem complicações.","Registe as atividades ao longo da campanha. Os dados ficam guardados neste navegador.","Fechar","Uma ferramenta prática — confirme os requisitos oficiais junto do seu consultor agrícola.","A SUA EXPLORAÇÃO","Consulte as áreas e culturas da sua exploração.","Parcelas guardadas","Informação introduzida por si","PARCELA","CULTURA","ÁREA","Eliminar","Ainda não existem parcelas","Adicione a primeira parcela para começar.","DIÁRIO AGRÍCOLA","Registe os trabalhos e os fatores de produção utilizados.","Histórico","Trabalhos registados nas suas parcelas","DATA","ATIVIDADE","PRODUTO / DOSE","Nenhuma atividade registada","Adicione um trabalho para iniciar o diário.","CAMPANHA 2026","Consulte e exporte os dados do seu diário.","Registo de atividades","Exporte parcelas, trabalhos, produtos e doses num ficheiro CSV.","Atualizado automaticamente","Transferir registo","Resumo da exploração","Prepare uma vista para impressão das áreas, culturas e atividades da campanha.","Documento de trabalho","Abrir resumo para impressão","Importante","Estas exportações são ferramentas de acompanhamento. Não são declarações oficiais nem garantem o acesso a apoios. Confirme o formato exigido junto da entidade ou consultor.","Nome da parcela","Ex.: Prados do Moinho","Área (ha)","Escolher…","Outro","Cancelar","Guardar parcela","Produto ou nota","Ex.: Adubo azotado, variedade…","Dose / quantidade","Unidade","Sem unidade","Para incluir o azoto no resumo, indique a quantidade em kg/ha.","Guardar","Opcional"],
  "nl-NL": ["Landbouwbedrijf","BEDRIJF","Overzicht","Mijn percelen","Werkzaamheden","Register en rapporten","Seizoen 2026","Uw gegevens blijven op dit apparaat.","Landbouwer","Meer opties","Menu openen","Mijn bedrijf","Taal kiezen","Op dit apparaat opgeslagen","Help","Hallo","Dit gebeurt er op uw bedrijf.","Werkzaamheid toevoegen","Geregistreerd areaal","Werkzaamheden dit seizoen","Opgenomen in het logboek","Gebruikte stikstof","Op geregistreerde percelen","Voortgang seizoensdossier","Recente werkzaamheden","Recente activiteiten op uw percelen","Alles bekijken","Uw percelen","percelen bijgehouden","Beheren","Perceel toevoegen","Houd uw logboek eenvoudig bij.","Noteer werkzaamheden gedurende het seizoen. Uw gegevens worden in deze browser opgeslagen.","Sluiten","Een praktisch hulpmiddel — controleer officiële vereisten bij uw landbouwadviseur.","UW BEDRIJF","Bekijk de oppervlakten en gewassen van uw bedrijf.","Opgeslagen percelen","Door u ingevoerde gegevens","PERCEEL","GEWAS","OPPERVLAKTE","Verwijderen","Nog geen percelen","Voeg uw eerste perceel toe om te beginnen.","BEDRIJFSLOGBOEK","Houd werkzaamheden en gebruikte middelen bij.","Geschiedenis","Geregistreerde werkzaamheden op uw percelen","DATUM","WERKZAAMHEID","PRODUCT / DOSERING","Geen werkzaamheden geregistreerd","Voeg een werkzaamheid toe om te beginnen.","SEIZOEN 2026","Bekijk en exporteer de gegevens in uw logboek.","Werkzaamhedenregister","Exporteer percelen, werkzaamheden, producten en doseringen als CSV-bestand.","Automatisch bijgewerkt","Register downloaden","Bedrijfsoverzicht","Maak een afdrukbaar overzicht van arealen, gewassen en seizoenwerkzaamheden.","Werkdocument","Afdrukbaar overzicht openen","Let op","Deze exports zijn hulpmiddelen voor registratie. Het zijn geen officiële aangiften en ze garanderen geen recht op steun. Controleer het vereiste formaat bij uw instantie of adviseur.","Perceelnaam","bijv. Molenweide","Oppervlakte (ha)","Kiezen…","Anders","Annuleren","Perceel opslaan","Product of notitie","bijv. Stikstofmest, ras…","Dosering / hoeveelheid","Eenheid","Geen eenheid","Vermeld bij bemesting de stikstofhoeveelheid in kg/ha om deze in het overzicht op te nemen.","Opslaan","Optioneel"]
};

const CATALOG_KEYS = Object.keys(UI["fr-FR"]);
for (const [locale, values] of Object.entries(TRANSLATED)) {
  UI[locale] = Object.fromEntries(CATALOG_KEYS.map((key, index) => [key, values[index] || UI["en-IE"][key]]));
}

const ACTIVITY_TYPES = {
  "bg-BG": ["Торене", "Сеитба", "Третиране", "Напояване", "Жътва", "Обработка на почвата"],
  "hr-HR": ["Gnojidba", "Sjetva", "Tretiranje", "Navodnjavanje", "Žetva", "Obrada tla"],
  "cs-CZ": ["Hnojení", "Setí", "Ošetření", "Zavlažování", "Sklizeň", "Zpracování půdy"],
  "da-DK": ["Gødskning", "Såning", "Behandling", "Vanding", "Høst", "Jordbearbejdning"],
  "et-EE": ["Väetamine", "Külv", "Töötlemine", "Niisutamine", "Saagikoristus", "Mullaharimine"],
  "fi-FI": ["Lannoitus", "Kylvö", "Käsittely", "Kastelu", "Sadonkorjuu", "Maanmuokkaus"],
  "fr-FR": ["Fertilisation", "Semis", "Traitement", "Irrigation", "Récolte", "Travail du sol"],
  "el-GR": ["Λίπανση", "Σπορά", "Εφαρμογή", "Άρδευση", "Συγκομιδή", "Κατεργασία εδάφους"],
  "hu-HU": ["Trágyázás", "Vetés", "Növényvédelem", "Öntözés", "Betakarítás", "Talajművelés"],
  "ga-IE": ["Toirchiú", "Cur", "Cóireáil", "Uisciú", "Fómhar", "Saothrú ithreach"],
  "en-IE": ["Fertilising", "Sowing", "Treatment", "Irrigation", "Harvest", "Tillage"],
  "de-DE": ["Düngung", "Aussaat", "Behandlung", "Bewässerung", "Ernte", "Bodenbearbeitung"],
  "lv-LV": ["Mēslošana", "Sēja", "Apstrāde", "Apūdeņošana", "Ražas novākšana", "Augsnes apstrāde"],
  "lt-LT": ["Tręšimas", "Sėja", "Apdorojimas", "Drėkinimas", "Derliaus nuėmimas", "Dirvos dirbimas"],
  "mt-MT": ["Fertilizzazzjoni", "Żrigħ", "Trattament", "Tisqija", "Ħsad", "Ħdim tal-ħamrija"],
  "pl-PL": ["Nawożenie", "Siew", "Zabieg", "Nawadnianie", "Zbiór", "Uprawa gleby"],
  "es-ES": ["Fertilización", "Siembra", "Tratamiento", "Riego", "Cosecha", "Laboreo"],
  "it-IT": ["Fertilizzazione", "Semina", "Trattamento", "Irrigazione", "Raccolta", "Lavorazione del terreno"],
  "ro-RO": ["Fertilizare", "Semănat", "Tratament", "Irigare", "Recoltare", "Lucrarea solului"],
  "sk-SK": ["Hnojenie", "Sejba", "Ošetrenie", "Zavlažovanie", "Zber", "Obrábanie pôdy"],
  "sl-SI": ["Gnojenje", "Setev", "Tretiranje", "Namakanje", "Žetev", "Obdelava tal"],
  "sv-SE": ["Gödsling", "Sådd", "Behandling", "Bevattning", "Skörd", "Jordbearbetning"],
  "pt-PT": ["Fertilização", "Sementeira", "Tratamento", "Rega", "Colheita", "Mobilização do solo"],
  "nl-NL": ["Bemesting", "Zaaien", "Behandeling", "Irrigatie", "Oogst", "Grondbewerking"]
};

const CROP_TYPES = {
  "bg-BG": ["Пшеница", "Ечемик", "Рапица", "Царевица", "Слънчоглед", "Пасища", "Лозе"],
  "hr-HR": ["Pšenica", "Ječam", "Uljana repica", "Kukuruz", "Suncokret", "Travnjaci", "Vinograd"],
  "cs-CZ": ["Pšenice", "Ječmen", "Řepka", "Kukuřice", "Slunečnice", "Louka", "Vinice"],
  "da-DK": ["Hvede", "Byg", "Raps", "Majs", "Solsikke", "Græsareal", "Vingård"],
  "et-EE": ["Nisu", "Oder", "Raps", "Mais", "Päevalill", "Rohumaa", "Viinamarjaistandus"],
  "fi-FI": ["Vehnä", "Ohra", "Rypsi", "Maissi", "Auringonkukka", "Niitty", "Viinitarha"],
  "fr-FR": ["Blé tendre", "Orge", "Colza", "Maïs", "Tournesol", "Prairie", "Vigne"],
  "el-GR": ["Σιτάρι", "Κριθάρι", "Ελαιοκράμβη", "Καλαμπόκι", "Ηλίανθος", "Λειμώνας", "Αμπελώνας"],
  "hu-HU": ["Búza", "Árpa", "Repce", "Kukorica", "Napraforgó", "Gyep", "Szőlő"],
  "ga-IE": ["Cruithneacht", "Eorna", "Síol ráibe", "Arbhar", "Lus na gréine", "Féarach", "Fíonghort"],
  "en-IE": ["Wheat", "Barley", "Oilseed rape", "Maize", "Sunflower", "Grassland", "Vineyard"],
  "de-DE": ["Weichweizen", "Gerste", "Raps", "Mais", "Sonnenblume", "Grünland", "Weinberg"],
  "lv-LV": ["Kvieši", "Mieži", "Rapsis", "Kukurūza", "Saulespuķe", "Pļava", "Vīna dārzs"],
  "lt-LT": ["Kviečiai", "Miežiai", "Rapsai", "Kukurūzai", "Saulėgrąžos", "Pievos", "Vynuogynas"],
  "mt-MT": ["Qamħ", "Xgħir", "Żerriegħa tal-kolza", "Qamħirrum", "Ġirasol", "Mergħa", "Vinja"],
  "pl-PL": ["Pszenica", "Jęczmień", "Rzepak", "Kukurydza", "Słonecznik", "Łąka", "Winnica"],
  "es-ES": ["Trigo blando", "Cebada", "Colza", "Maíz", "Girasol", "Pradera", "Viñedo"],
  "it-IT": ["Frumento tenero", "Orzo", "Colza", "Mais", "Girasole", "Prato", "Vigneto"],
  "ro-RO": ["Grâu", "Orz", "Rapiță", "Porumb", "Floarea-soarelui", "Pajiște", "Vie"],
  "sk-SK": ["Pšenica", "Jačmeň", "Repka", "Kukurica", "Slnečnica", "Lúka", "Vinica"],
  "sl-SI": ["Pšenica", "Ječmen", "Oljna ogrščica", "Koruza", "Sončnica", "Travnik", "Vinograd"],
  "sv-SE": ["Vete", "Korn", "Raps", "Majs", "Solros", "Gräsmark", "Vingård"],
  "pt-PT": ["Trigo mole", "Cevada", "Colza", "Milho", "Girassol", "Prado", "Vinha"],
  "nl-NL": ["Zachte tarwe", "Gerst", "Koolzaad", "Maïs", "Zonnebloem", "Grasland", "Wijngaard"]
};

const COUNT_WORDS = {
  "bg-BG": [["парцел", "парцела"], ["дейност", "дейности"]],
  "hr-HR": [["parcela", "parcele"], ["aktivnost", "aktivnosti"]],
  "cs-CZ": [["parcela", "parcely"], ["činnost", "činnosti"]],
  "da-DK": [["mark", "marker"], ["aktivitet", "aktiviteter"]],
  "nl-NL": [["perceel", "percelen"], ["activiteit", "activiteiten"]],
  "en-IE": [["plot", "plots"], ["activity", "activities"]],
  "et-EE": [["põld", "põllud"], ["tegevus", "tegevused"]],
  "fi-FI": [["lohko", "lohkoa"], ["toiminto", "toimintoa"]],
  "fr-FR": [["parcelle", "parcelles"], ["intervention", "interventions"]],
  "de-DE": [["Fläche", "Flächen"], ["Arbeit", "Arbeiten"]],
  "el-GR": [["αγροτεμάχιο", "αγροτεμάχια"], ["δραστηριότητα", "δραστηριότητες"]],
  "hu-HU": [["parcella", "parcella"], ["tevékenység", "tevékenység"]],
  "ga-IE": [["ceapach", "ceapacha"], ["gníomhaíocht", "gníomhaíochtaí"]],
  "it-IT": [["appezzamento", "appezzamenti"], ["attività", "attività"]],
  "lv-LV": [["lauks", "lauki"], ["darbība", "darbības"]],
  "lt-LT": [["sklypas", "sklypai"], ["veikla", "veiklos"]],
  "mt-MT": [["għalqa", "għelieqi"], ["attività", "attivitajiet"]],
  "pl-PL": [["działka", "działki"], ["działanie", "działania"]],
  "pt-PT": [["parcela", "parcelas"], ["atividade", "atividades"]],
  "ro-RO": [["parcelă", "parcele"], ["activitate", "activități"]],
  "sk-SK": [["parcela", "parcely"], ["činnosť", "činnosti"]],
  "sl-SI": [["parcela", "parcele"], ["dejavnost", "dejavnosti"]],
  "es-ES": [["parcela", "parcelas"], ["actividad", "actividades"]],
  "sv-SE": [["skifte", "skiften"], ["aktivitet", "aktiviteter"]]
};

function localizedCount(kind, count) {
  const form = new Intl.PluralRules(currentLocale()).select(count) === "one" ? 0 : 1;
  return `${formatNumber(count)} ${COUNT_WORDS[currentLocale()][kind][form]}`;
}

function getLanguage() {
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return LANGUAGE_OPTIONS.some(([locale]) => locale === savedLanguage) ? savedLanguage : "fr-FR";
  } catch {
    return "fr-FR";
  }
}

function currentLocale() {
  return getLanguage();
}

function translation(key) {
  const locale = currentLocale();
  return (UI[locale] || UI["en-IE"])[key] || UI["en-IE"][key] || key;
}

function translate(key, values = {}) {
  return translation(key).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
}

function activityTypeLabel(value) {
  const index = ACTIVITY_TYPES["fr-FR"].indexOf(value);
  return index < 0 ? value : (ACTIVITY_TYPES[currentLocale()] || ACTIVITY_TYPES["en-IE"])[index];
}

function cropTypeLabel(value) {
  const index = CROP_TYPES["fr-FR"].indexOf(value);
  return index < 0 ? value : (CROP_TYPES[currentLocale()] || CROP_TYPES["en-IE"])[index];
}

function applyTranslations() {
  document.documentElement.lang = currentLocale();
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translation(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translation(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translation(element.dataset.i18nAria));
  });
  const activeLink = document.querySelector(".nav-link.active [data-i18n]");
  const breadcrumb = document.getElementById("breadcrumbCurrent");
  if (activeLink && breadcrumb) breadcrumb.textContent = activeLink.textContent;
  document.title = `Terra — ${translation("farmJournal")}`;
}

function setupLanguagePicker() {
  const picker = document.getElementById("languageSelect");
  picker.innerHTML = LANGUAGE_OPTIONS.map(([locale, name]) =>
    `<option value="${locale}">${name}</option>`
  ).join("");
  picker.value = getLanguage();
  applyTranslations();
  picker.addEventListener("change", () => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, picker.value);
    } catch (error) {
      console.error("Could not save language preference:", error);
    }
    applyTranslations();
    if (typeof render === "function") render();
  });
}

setupLanguagePicker();
