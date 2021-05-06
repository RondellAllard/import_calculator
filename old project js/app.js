let shippingMethod = "air"
let carting = undefined
let itemDescription = undefined
const costInUSD = document.getElementById("costInUSD");
const shippingWeight = document.getElementById("shippingWeight");

let costInUSDValue = 0;
let shippingWeightValue = 0;
//Resets the value of the input field to undefined on page reset.
costInUSD.value = undefined
shippingWeight.value = undefined

//Event listener for invoice cost and shipping weight
costInUSD.addEventListener("keyup", e => {
console.log(costInUSD.value)
costInUSDValue = parseInt(costInUSD.value)
console.log(costInUSDValue)
})
shippingWeight.addEventListener("keyup", e => {
console.log(shippingWeight.value)
shippingWeightValue = parseInt(shippingWeight.value)
console.log(shippingWeightValue)
})

const cratingFeeValue = () => {
  if(crating) {
    return 200
  } 
  else return 0
}

const handlingVatValue = .6;

//Items Tax

const dutyOnItem = () => {
  const itemArray = document.getElementById('itemDescription');
  let itemValue = itemArray.value
  for (let i = 0; i < itemDescriptionList.length; i++) {
    if (itemDescriptionList[i].name === itemValue)
    {
      index = i
    }
  }
  return itemDuty = itemDescriptionList[index].duty
  // const itemVat = itemDescriptionList[index].vat
}

const vatOnItem = () => {
  const itemArray = document.getElementById('itemDescription');
  let itemValue = itemArray.value
  for (let i = 0; i < itemDescriptionList.length; i++) {
    if (itemDescriptionList[i].name === itemValue)
    {
      index = i
    }
  }
  return itemVat = itemDescriptionList[index].vat
}

// const itemDuty = itemDescriptionSelected.duty;
// const itemVat = itemDescriptionSelected.vat;
// const dutyValue = () =>  costInUSD * itemDuty;
// const customsVatValue = () =>  costInUSD * itemVat;
// const totalEstimateValue = freightChargeValue() + fuelSurchargeValue() + cratingFeeValue() + handlingVatValue + onlineTaxValue() + basicInsurnaceValue() + dutyValue() + customsVatValue();


// Cost per pound is $30 per pound  under 5 lbs, $20 per pound > 10lbs  $10 per pound for 10 pounds and over. 
const freightCharge = () => {
  if (shippingWeightValue < 5) {
    return freightChargeValue = shippingWeightValue * 30;
  }
  else if (shippingWeightValue < 10) {
    return freightChargeValue = shippingWeightValue * 20;
  }
  else return freightChargeValue = shippingWeightValue * 10
}


document.getElementById('calculator').addEventListener('submit', function(e) {
  e.preventDefault()
 
  let fuelSurchargeValue = shippingWeightValue * 3;
  let onlineTaxValue = costInUSDValue * .07;
  let basicInsurnaceValue =  costInUSDValue * .01;
  let itemDutyValue = itemDuty * costInUSDValue;
  let itemVatValue = itemVat * costInUSDValue; 
const summary = {
  freightCharges:freightCharge(),
  fuelSurcharge: fuelSurchargeValue,
  onlineTax: onlineTaxValue,
  basicInsurnace: basicInsurnaceValue,
  dutyCost: itemDutyValue,
  vatCost: itemVatValue,
}



  let totalEst = summary.freightCharges + fuelSurchargeValue + onlineTaxValue + basicInsurnaceValue + itemDutyValue + itemVatValue

  console.log(summary)
  const fc = document.createElement('li')
  fc.innerText = `Freight Charges: $${summary.freightCharges}`;

  const fuelS = document.createElement('li')
  fuelS.innerText = `Fuel Surcharge: $${fuelSurchargeValue}`;

  const onlineT = document.createElement('li')
  onlineT.innerText = `Online Tax: $${onlineTaxValue}`;

  const bInsure = document.createElement('li')
  bInsure.innerText = `Basic Insrance: $${basicInsurnaceValue}`;

  const dValue = document.createElement('li')
  dValue.innerText = `Duty: $${itemDutyValue}`;

  const vatVal = document.createElement('li')
  vatVal.innerText = `Vat: $${itemVatValue}`;
  
  const totalVal = document.createElement('li')
  totalVal.innerText = `Total Cost: $${totalEst}USD`;



  document.getElementById('summaryInvoice').append(fc, fuelS, onlineT, bInsure, dValue, vatVal, totalVal)
})
