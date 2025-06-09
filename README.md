<img src="https://www.de-passer.be/themes/depasser/img/logo-passer.svg" alt="img" style="width:25%;" />

```
Naam:
Familienaam:

Klas: 5ADB
Leerkracht: Dhr. R. Hennebel
Vak: Webdevelopment
```

# Examen Javascript & Node.js – webapplicatie voor olijfbomenkwekerij

## Situatie

Juan García Jiménez runt een olijfbomenkwekerij in Spanje. Hij wil een webapplicatie waarmee hij het overzicht van zijn bomen digitaal kan beheren.

Je krijgt een **gedeeltelijk afgewerkt project** waarin:

- Swagger al correct geconfigureerd is
- de nodige **Node.js-modules reeds geïnstalleerd** zijn
- het project al volledig **geïnitialiseerd** is
- de frontend, styling en layout **volledig klaar** staan

Via **Swagger** kun je de API testen en controleren of de routes juist werken.

In je **GitHub-repository** vind je ook een **screencast (video)** waarin je duidelijk kan zien hoe de applicatie er op het einde moet uitzien.  
Gebruik deze als visuele referentie voor:

- de werking van de frontend
- de gebruikerservaring
- de verwachte dataflow tussen frontend en backend

> [!TIP]
>
> Bekijk en **analyseer de screencast aandachtig**. Bestudeer ook grondig de bestaande HTML- en CSS-code.  
> Je hoeft niets aan de opmaak of frontend te wijzigen, maar je moet goed begrijpen hoe de structuur in elkaar zit.

---

### Pagina's van de webapplicatie

- **Homepagina**  
  Toont een overzicht van alle bomen die Juan verkoopt. Deze gegevens worden automatisch geladen uit de databank.

- **Administratiepagina**  
  Geeft Juan toegang tot zijn assortiment: hij kan bomen toevoegen, aanpassen, verwijderen of bekijken.  
  Dit gebeurt via een formulier en dynamische knoppen naast elk item.

---

## Start en voorbereiding

Bij aanvang van het examen ontvang je via **Smartschool**:

- de link naar jouw **persoonlijke GitHub repository**
- een **SQL-bestand** dat je moet uitvoeren in je eigen databank

Je clonet de GitHub-repository en opent het bestaande project in WebStorm.  
De databank is reeds zichtbaar via jouw DataGrip-account.  
**Je moet zelf de SQL uit het bestand importeren** om de tabel `olijfbomen` aan te vullen.

Indienen gebeurt door te **pushen naar de GitHub repository**. 

---

## Te voltooien bestanden

Je past uitsluitend onderstaande drie bestanden aan:

- `backend/services/db.js`
- `backend/app.js`
- `frontend/assets/js/script.js`

Swagger is reeds voorzien. Gebruik Swagger om je API-routes te testen.

---

## 1. db.js (4 punten)

Maak verbinding met de databank via Knex.

Vul volgende zaken aan:

- host
- gebruikersnaam
- wachtwoord
- databanknaam

Zorg dat je connectie correct geëxporteerd wordt zodat die bruikbaar is in `app.js`.

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

---

## 2. app.js (18 punten)

Gebruik Express en Knex. Zorg voor correcte HTTP-statuscodes (`400`, `404`, `500`), gebruik `try/catch` en `async/await`.

### POST `/bomen` – 6 punten

- Leest `soort`, `leeftijd` en `aantal_in_stock` uit `req.body`.
- Controleer of alle velden ingevuld zijn (anders status 400).
- Voeg de boom toe met `insert`.
- Geef bij succes status 201 en een bevestigingsboodschap terug met het nieuw toegevoegde ID.

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

### PUT `/bomen/:id` – 6 punten

- Leest het ID uit `req.params.id`.
- Controleer opnieuw de velden uit `req.body`.
- Update de juiste rij met `where({ id }).update(...)`.
- Als de boom niet bestaat (update count = 0): geef status 404.
- Geef bij succes status 200 en het aangepaste record terug.

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

### DELETE `/bomen/:id` – 6 punten

- Leest het ID uit `req.params.id`.
- Verwijder de juiste rij.
- Bij geen resultaat: status 404.
- Bij succes: status 200 en korte boodschap.

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

<hr style="page-break-after: always;">


## 3. script.js (18 punten)

In `frontend/assets/js/script.js` schrijf je **vier functies** die het gedrag van de gebruikersinterface regelen.  
Zorg voor:

- `async/await` + `try/catch`
- correcte `fetch()`-calls naar `http://localhost:3333/bomen`

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

### `renderBomen(bomen)` – 3 punten

- Leegt eerst de `#bomen` container
- Voor elke boom maak je een `div.boom` aan
- Toont: soort, leeftijd, voorraad
- Als formulier aanwezig is, toon 2 knoppen:
  - “Wijzig” → roept `editBoom(boom)` aan
  - “Verwijder” → roept `deleteBoom(id)` aan

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

### `handleFormSubmit(e)` – 5 punten

- Voorkomt standaard gedrag van formulier
- Leest alle velden uit het formulier: `#id`, `#soort`, `#leeftijd`, `#stock`
- Zet deze om naar een object: `{ soort, leeftijd, aantal_in_stock }`
- Verzendt `POST` of `PUT` naar:
  - `"http://localhost:3333/bomen"` (voor toevoegen)
  - `"http://localhost:3333/bomen/:id"` (voor aanpassen)
- Verstuur JSON met correcte headers
- Roept `resetForm()` en `fetchBomen()` opnieuw aan

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

<hr style="page-break-after: always;">


### `editBoom(boom)` – 5 punten

- Vul het formulier in met de waarden van de geselecteerde boom
- Scroll naar het formulier via:
  `document.getElementById('boomForm').scrollIntoView({ behavior: 'smooth' });`

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

###  `deleteBoom(id)` – 5 punten

- Verstuur `DELETE` naar `http://localhost:3333/bomen/:id`
- Roep daarna `fetchBomen()` opnieuw aan

> [!TIP]
>
> Commit je aanpassingen naar je GitHub repository.

---

> [!TIP]
>
> Controleer je volledige applicatie & push je commits naar je GitHub repository.

<hr style="page-break-after: always;">


## Totaal: /45 punten

---

## Evaluatietabel 

| Onderdeel        | Subonderdeel                                          | Max. punten | Behaalde punten |
| ---------------- | ----------------------------------------------------- | ----------- | --------------- |
| **1. db.js**     | Knex-configuratie                                     | 1           |                 |
|                  | Correcte databankgegevens (gebruiker, wachtwoord, DB) | 2           |                 |
|                  | Export connectie                                      | 1           |                 |
|                  | **Totaal db.js**                                      | **4**       |                 |
| **2. app.js**    | POST /bomen                                           | 6           |                 |
|                  | PUT /bomen/:id                                        | 6           |                 |
|                  | DELETE /bomen/:id                                     | 6           |                 |
|                  | **Totaal app.js**                                     | **18**      |                 |
| **3. script.js** | renderBomen()                                         | 3           |                 |
|                  | handleFormSubmit()                                    | 5           |                 |
|                  | editBoom()                                            | 5           |                 |
|                  | deleteBoom()                                          | 5           |                 |
|                  | **Totaal script.js**                                  | **18**      |                 |
| **4. GitHub**    | Repository correct gecloned                           | 1           |                 |
|                  | Minstens 6 commits (0.5 per commit, max. 3)           | 3           |                 |
|                  | Correct push naar GitHub                              | 1           |                 |
|                  | **Totaal GitHub**                                     | **5**       |                 |
|                  | **TOTAAL EXAMEN**                                     | **/45**     |                 |
