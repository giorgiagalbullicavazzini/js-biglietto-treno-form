'use strict';

// Il valore base del biglietto è di €0.21 al km, quindi assegno questo valore a un'altra variabile;
const basePrice = 0.21;

// Creo altre due variabili per gli sconti a minorenni (0.8) e over 65 (0.6);
const minorSale = 0.8;
const overSale = 0.6;

// Creo una variabile per identificare il codice html del biglietto;
const ticket = document.getElementById('ticket-container');

// Inserisco un bottone che, al click, esegue una funzione anonima che mi restituisce il valore totale del biglietto in console;
const button = document.getElementById('button');

// Inserisco un altro bottone che identifica il pulsante di reset del form;
const reset = document.getElementById('reset');

button.addEventListener('click',
  function () {
    // Tramite l'utilizzo di tre input, chiedo all'utente il nome del passeggero, quanti chilometri deve percorrere e quanti anni ha
    // Inserisco i tre valori in altrettante variabili e, dal momento che gli input vengono forniti in formato stringa, trasformo la distanza in numero
    const passengerName = document.getElementById('passenger-name').value;
    const passengerDistance = Number(document.getElementById('passenger-distance').value);
    const passengerAge = document.getElementById('passenger-age').value;

    // Moltiplico la variabile del prezzo per il numero di chilometri da percorrere e ottengo così il prezzo intero del biglietto;
    let ticketPrice = basePrice * passengerDistance;

    // SE il passeggero è minorenne, applico la variabile dello sconto del 20% (prezzo intero * 0.8);
    // SE il passeggero è over 65, applico invece la variabile dello sconto del 40% (prezzo intero * 0.6);
    let ticketType = 'Biglietto Standard';

    if (passengerAge === 'minor') {
      ticketPrice *= minorSale;
      ticketType = 'Biglietto Ridotto';
    } else if (passengerAge === 'over') {
      ticketPrice *= overSale;
      ticketType = 'Biglietto Silver';
    };

    // Per fornire un output in forma umana, il numero ricavato dovrà contenere un massimo di due decimali che indicheranno i centesimi da pagare per il biglietto.
    console.log(passengerName, passengerDistance, passengerAge, ticketPrice.toFixed(2));

    // Cliccando sul pulsante "Genera", compare il ticket generato dall'utente;
    if (passengerName !== '' && passengerDistance !== 0 && passengerAge !== '') {
      ticket.classList.remove('hidden');

      document.getElementById('ticket-name').innerHTML = passengerName;
      document.getElementById('ticket-type').innerHTML = ticketType;
      document.getElementById('ticket-coach').innerHTML = Math.floor(Math.random() * 9) + 1;
      document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * 90000) + 10000;
      document.getElementById('ticket-price').innerHTML = `${ticketPrice.toFixed(2)}€`;
    } else {
      alert('Compila tutti i campi!');
    };
  });

// Cliccando sul pulsante "Annulla", scompare il ticket generato dall'utente;
reset.addEventListener('click',
  function () {
    ticket.classList.add('hidden');
  });