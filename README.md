# PROJECT

## Elements

1. Tabella HTML;
2. Dati (posts, users).

## TODO

[ ] - Struttura statica HTML della tabella;
    - Definiamo un design e scriviamo solo la parte statica;
    - Definiamo l'HTML per riempire la tabella (le mie <tr>);
    - Definiamo una utility fx che ci crea l'HTML delle <tr> a partire dall'oggeto che rappresenta i dati;
[ ] - Fetch dei dati dall'API (https://jsonplaceholder.typicode.com/users, https://jsonplaceholder.typicode.com/posts);
    - Definiamo due funzioni che ci permettono di prendere i dati (users e posts) dall'API;
    - Definire una stratgia di gestione e salvataggio (state? localStorage?)
[ ] - Capire se filtrare, ordinare, manipolare e impaginare;
    - Filtrare? No | Si;
      - (CLIENT) Deve poter filtrare secondo criteri specifici
      - Definiamo una funzione da evocare per filtrare i dati in display -> `filter()`;
      – Definiamo una funzione che mi permette di filtrare i dati sulla base del valore di un input di ricerca -> `filter()`;
    - Ordinare? No | Si;
      - (CLIENT) Deve poter ordinare secondo criteri specifici
      - Definiamo una funzione da evocare per ordinare i dati in display -> `sort()`;
    - Manipolare? Si (vogliamo attribuire a ogni post il suo autore) | No;
      - (INTERNAL) Definiamo una funzione che ci permette di interpolare i dati (posts e users -> userId) -> `map()`;
    - Impaginare? Si (se troppi) | Si;
      - (INTERNAL) Definiamo una funzione che seleziona solo i dati appartenenti alla pagina selezionata -> `slice()`;
      - (CLIENT) Definiamo una funziona che permette di scorrere le pagine -> `slice()`;
[ ] - Renderizzaere i dati nella UI;
      - Definiamo una funzione che renderizza l'HTML (vedi sopra) creato sulla base dei dati ottenuri e lo pusha nella tabella;
      – Definiamo una funzione che renderizza il widget dell'impaginazione
        - Limite di elementi per pagina (10) con possibilità di modificarlo;
        - Pagina corrente;
        – Numero di pagine totali;
        - Numero di elemnti totali;
        - Button Next da disabilitare se non abbiamo più pagine successive;
        - Button Prev da disabilitare se non abbiamo più pagine precedenti;
[ ] - Definire le interazioni della UI secondo il pattern del delegate;
      - Select per filtrare i dati;
      - Select per ordinare i dati;
      – Select per gestire il limite di dati per pagina (10, 25, 50, 100);
      – Button Next per pagina successiva;
      – Button Prev per pagina precedente;
      – Input per ricerca su base titolo;
