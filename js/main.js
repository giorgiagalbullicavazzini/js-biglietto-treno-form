'use strict';

// Il valore base del biglietto è di €0.21 al km, quindi assegno questo valore a un'altra variabile;
const basePrice = 0.21;

// Creo altre due variabili per gli sconti a minorenni (0.8) e over 65 (0.6);
const minorSale = 0.8;
const overSale = 0.6;

const ticket = document.getElementById('ticket-container');

// Inserisco un bottone che, al click, esegue una funzione anonima che mi restituisce il valore totale del biglietto in console;
const button = document.getElementById('button');
const reset = document.getElementById('reset');

button.addEventListener('click',
  function() {
    // Tramite l'utilizzo di due input, chiedo all'utente quanti chilometri deve percorrere il passeggero e quanti anni ha
    // Inserisco i due valori in altrettante variabili e, dal momento che gli input vengono forniti in formato stringa, li trasformo in numeri
    const passengerDistance = Number(document.getElementById('passenger-distance').value);
    const passengerAge = document.getElementById('passenger-age').value;

    // Moltiplico la variabile del prezzo per il numero di chilometri da percorrere e ottengo così il prezzo intero del biglietto;
    let ticketPrice = basePrice * passengerDistance;

    // SE il passeggero è minorenne, applico la variabile dello sconto del 20% (prezzo intero * 0.8);
    // SE il passeggero è over 65, applico invece la variabile dello sconto del 40% (prezzo intero * 0.6);
    if (passengerAge === 'minor') {
      ticketPrice *= minorSale;
    } else if (passengerAge === 'over') {
      ticketPrice *= overSale;
    };

    // Per fornire un output in forma umana, il numero ricavato dovrà contenere un massimo di due decimali che indicheranno i centesimi da pagare per il biglietto.
    console.log(passengerDistance, passengerAge, ticketPrice.toFixed(2));

    ticket.classList.remove('hidden');
});

reset.addEventListener('click',
  function() {
    ticket.classList.add('hidden');
  })