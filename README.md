# Calcolo del prezzo del biglietto del treno

## Milestone 1

- Tramite l'utilizzo di due input, chiedo all'utente quanti chilometri deve percorrere il passeggero e quanti anni ha;
- Inserisco i due valori in altrettante variabili e, dal momento che gli input vengono forniti in formato stringa, li trasformo in numeri;
- Il valore base del biglietto è di €0.21 al km, quindi assegno questo valore a un'altra variabile;
- Moltiplico la variabile del prezzo per il numero di chilometri da percorrere e ottengo così il prezzo intero del biglietto;
- Creo altre due variabili per gli sconti a minorenni (0.8) e over 65 (0.6);
- SE il passeggero è minorenne, applico la variabile dello sconto del 20% (prezzo intero * 0.8);
- SE il passeggero è over 65, applico invece la variabile dello sconto del 40% (prezzo intero * 0.6);
- Inserisco un bottone che, al click, esegue una funzione anonima che mi restituisce il valore totale del biglietto in console;

## Milestone 2

- Realizzo un form completo in cui l'utente può inserire tutti i dati e visualizzare il prezzo finale con relativo biglietto;
- Per fornire un output in forma umana, il numero ricavato dovrà contenere un massimo di due decimali che indicheranno i centesimi da pagare per il biglietto.