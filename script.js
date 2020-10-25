const COST_OF_FATE = 160;
const PITY = 90;

const printContainer = document.getElementById('primogemCalculation');

const fateInput = document.getElementById('fates');
const primogemInput = document.getElementById('primogems');
const calculateButton = document.getElementById('calculatePity');

calculateButton.addEventListener('click', calculatePity);

function calculatePity() {
  let fatesOnHand = parseInt(fateInput.value);
  let primogemsOnHand = parseInt(primogemInput.value);

  if(!validateInput(fatesOnHand, primogemsOnHand)) {
    return;
  }

  let boughtFates = Math.floor(primogemsOnHand/COST_OF_FATE);
  let remainingPrimogems = primogemsOnHand % COST_OF_FATE;
  let totalFates = boughtFates + fatesOnHand;

  let fatesRequiredForPity = PITY - totalFates;
  let primogemsRequiredForPity = (fatesRequiredForPity * COST_OF_FATE) - remainingPrimogems;

  if(primogemsRequiredForPity < 0) {
    primogemsRequiredForPity = 0;
  }

  printContainer.innerHTML = "<span class=\"calculation-label\">Primogems required for pity:</span> " + primogemsRequiredForPity;
}

function validateInput(fateInputValue, primogemInputValue) {
  let isValid = true;
  fateInput.classList.remove('invalid');
  primogemInput.classList.remove('invalid');

  if(isNaN(fateInputValue)) {
    fateInput.classList.add('invalid');
    isValid = false;
  }

  if(isNaN(primogemInputValue)) {
    primogemInput.classList.add('invalid');
    isValid = false;
  }

  return isValid;
}
