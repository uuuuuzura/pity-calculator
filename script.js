const COST_OF_FATE = 160;
const PITY = 90;

const printContainer = document.getElementById('primogemCalculation');

const fateInput = document.getElementById('intertwinedFates');
const primogemInput = document.getElementById('primogems');
const calculateButton = document.getElementById('calculatePity');

calculateButton.addEventListener('click', calculatePity);

function calculatePity() {
  let intertwinedFates = parseInt(fateInput.value);
  let primogems = parseInt(primogemInput.value);

  let boughtFates = Math.floor(primogems/COST_OF_FATE);
  let remainingPrimogems = primogems % COST_OF_FATE;
  let totalFates = boughtFates + intertwinedFates;

  let fatesRequiredForPity = PITY - totalFates;
  let primogemsRequiredForPity = (fatesRequiredForPity * COST_OF_FATE) - remainingPrimogems;

  if(primogemsRequiredForPity < 0) {
    primogemsRequiredForPity = 0;
  }

  printContainer.innerHTML = "<b>Primogems required for pity:</b> " + primogemsRequiredForPity;
}
