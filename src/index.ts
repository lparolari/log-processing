import {
  mappa,
  filtra,
  splitta,
  unisci,
  toInt,
  toData,
  leggiLog,
} from "./func";

type Log = {
  data: Date;
  servizio: string;
  importanza: number;
  utente: string;
  log: string;
};

function main() {
  const myLogs = leggiLog();

  // stringa contenente i log.
  console.log(myLogs);

  // NOTA: utilizzare le funzioni definite in `func.ts`
  // mappa, filtra, splitta, unisci, toInt, toData.
  // Per comodità sono già state importate.

  // 1. dividere `myLogs` per gli *a capo*
  const logs1: string[] = undefined; // TODO (~ 1 linea di codice)

  console.log(logs1);
  // OUTPUT: [ log1, log2, ... logN ]

  // 2. rimuovere le possibili stringhe vuote
  const logs2: string[] = undefined; // TODO (~ 1 linea di codice)

  console.log(logs2);
  // OUTPUT:
  // [ log1, log2, ..., logM ] con M = N-1  (toglie l'ultima riga!)

  // 3. dividere il log in 2 parti tramite i due punti `:` così
  //    da separare i dettagli del log dal log vero e proprio
  const logs3: string[][] = undefined; // TODO (~ 1 linea di codice)

  console.log(logs3);
  // OUTPUT: [ [dettagli1, log1], [dettagli2, log2], ..., [dettagliM, logM] ]

  // 4. dividere i dettagli del log per spazio ` `, così da poter
  //    accedere alle singole parti dei dettagli. Unire questo array
  //    al valore del log ottenuto precedentemente!
  const logs4: string[][] = undefined;

  console.log(logs3);
  // OUTPUT:
  // [
  //   [data1, servizio1, importanza1, utente1, log1],
  //   [data2, servizio2, importanza2, utente2, log2],
  //   ...
  //   [dataM, servizioM, importanzaM, utenteM, logM],
  // ]

  // 5. creare l'oggetto log a partire dalla tupla con le 5 componenti
  // ottenuta sopra
  const logs5: Log[] = undefined;

  console.log(logs5);
  // OUTPUT:
  // [
  //   { data: data1, servizio: servizio1, importanza: importanza1, utente: utente1, log: log1 },
  //   { data: data2, servizio: servizio2, importanza: importanza2, utente: utente2, log: log2 },
  //   ...
  //   { data: dataM, servizio: servizioM, importanza: importanzaM, utente: utenteM, log: logM },
  // ]

  // 6. filtrare i log e matenere solo quello con importanza 3 (errore)
  const logs6: Log[] = undefined;

  console.log(logs6);
  // OUTPUT: (vero)
  // [
  //   {
  //     data: 2021-02-14T13:02:24.565Z,
  //     servizio: 'System',
  //     importanza: 3,
  //     utente: 'Root',
  //     log: 'Memoria piena, ucciso il processo con PID 23612'
  //   },
  //   {
  //     data: 2021-02-14T14:25:45.287Z,
  //     servizio: 'AccountService',
  //     importanza: 3,
  //     utente: 'Caio',
  //     log: 'Accesso proibito per 2 ore'
  //   },
  //   {
  //     data: 2021-02-14T13:53:24.773Z,
  //     servizio: 'YoutubeService',
  //     importanza: 3,
  //     utente: 'Unknown',
  //     log: 'Bloccato IP 75.12.66.123 per elevato numero di richieste'
  //   }
  // ]
}

main();
