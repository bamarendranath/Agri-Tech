# Terra

## UI/UX Pro Max

The UI/UX Pro Max skill is installed for GitHub Copilot at `.github/prompts/ui-ux-pro-max.prompt.md`, with its bundled reference data and supporting skills under `.github/prompts/`. In Copilot Chat, invoke it with `/ui-ux-pro-max`. It was installed with `npx ui-ux-pro-max-cli init --ai copilot`.

The skill's accessibility guidance was applied to keyboard focus indicators, mobile tap-target sizes, and the navigation drawer's screen-reader expanded state. Its Python-powered searchable catalog was not run because Python is not installed in this environment.

## Language and regional formats

The language picker currently supports French and English. French is the default. The selection is saved separately from farm records in `localStorage` (`terra-language-v1`) and is restored on refresh. The page's `lang` attribute follows the selected locale. Dates and displayed numbers use the browser's `Intl` locale formatting; stored dates remain ISO `YYYY-MM-DD` strings and farm data remains unchanged.

The other 22 EU official languages are not currently offered because their full UI translations are not complete: Bulgarian, Croatian, Czech, Danish, Dutch, Estonian, Finnish, German, Greek, Hungarian, Irish, Italian, Latvian, Lithuanian, Maltese, Polish, Portuguese, Romanian, Slovak, Slovenian, Spanish, and Swedish.

## Forms

Plot options are wheat, barley, oilseed rape, maize, sunflower, grassland, vineyard, and Other. Activity options are fertilising, sowing, treatment, irrigation, harvest, tillage, and Other. Unit options are kg/ha, L/ha, t/ha, mm, or no unit. Form labels and choices are translated in French and English; stable French option values are retained in saved farm data. Free-text names, products, and notes are never translated.

## Exports and reports

The CSV register is UTF-8 with a BOM, uses semicolons between fields, localizes its headings and supported category labels, and stores dates in ISO format. The printable farm summary uses the selected locale for its page language, headings, counts, dates, and number formatting. Both exports are working records only, not official declarations.
