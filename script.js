const printContainer = document.getElementById('primogemCalculation');

const fateInput = document.getElementById('intertwinedFates');
const primogemInput = document.getElementById('primogems');
const calculateButton = document.getElementById('calculatePity');

calculateButton.addEventListener('click', calculatePity);

function calculatePity() {
  let intertwinedFates = parseInt(fateInput.value);
  let primogems = parseInt(primogemInput.value);

  let boughtFates = Math.floor(primogems/160);
  let remainingPrimogems = primogems % 160;
  let totalFates = boughtFates + intertwinedFates;

  let fatesRemainingForPity = 90 - totalFates;
  let primogemsRemainingForPity = (fatesRemainingForPity * 160) - remainingPrimogems;

  printContainer.innerText = "Primogems required for pity: " + primogemsRemainingForPity;
}
