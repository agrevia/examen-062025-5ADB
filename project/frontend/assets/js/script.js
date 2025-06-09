'use strict';

document.addEventListener('DOMContentLoaded', init);

function init() {
    fetchBomen();

    const form = document.getElementById('boomForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

// Haalt alle bomen op van de backend
async function fetchBomen() {
    try {
        const res = await fetch("http://localhost:3333/bomen");
        const bomen = await res.json();
        renderBomen(bomen);
    } catch (err) {
        console.error("Fout bij ophalen van bomen:", err);
    }
}

// Toont alle bomen in het DOM
function renderBomen() {

}

// Verwerkt het formulier bij verzenden
async function handleFormSubmit() {

}

// Vult het formulier met de gegevens van een bestaande boom
function editBoom() {

}

// Verwijdert een boom op basis van ID
async function deleteBoom() {

}

// Zet het formulier terug leeg
function resetForm() {
    document.getElementById('id').value = '';
    document.getElementById('boomForm').reset();
}
