const renderCustomtaxList = () => {
  for(let i = 0; i < customTaxList.length; i++ ) {
    const option = document.createElement("option");
    const txt = document.createTextNode(customTaxList[i].name);
    option.appendChild(txt);
    option.setAttribute("value",customTaxList[i].name)
    categoryList.lastChild.insertAdjacentElement('afterend' ,option);
  }
}

const dutyOnItem = () => {
  const customTaxSelect = document.getElementById('categoryList');
  let itemValue = customTaxSelect.value
  for (let i = 0; i < customTaxList.length; i++) {
    if (customTaxList[i].name === itemValue)
    {
      return customTaxList[i].duty
    }
  }
}

const vatOnItem = () => {
  const customTaxSelect = document.getElementById('categoryList');
  let itemValue = customTaxSelect.value
  for (let i = 0; i < customTaxList.length; i++) {
    if (customTaxList[i].name === itemValue)
    {
      return customTaxList[i].vat
    }
  }
}
// To be inside of the calculate function and focusout eventlistener of invoiceUSD

const invoiceUSDFuncIn = () => invoiceUSD.value = invoiceValueUSD

const invoiceUSDFuncOut = () => {
  let v = +invoiceUSD.value 
  if(v.toString() != "NaN") {
    invoiceValueUSD = +invoiceUSD.value
    invoiceUSD.value = `$${invoiceValueUSD} USD`
  } 
  else if (typeof invoiceValueUSD === "number") {
    invoiceUSD.value = `$${invoiceValueUSD} USD`
  }
}

const valueWeight = () => parseInt(weightInPounds.value)

const calFreightAir =  ()=> {
  if(valueWeight() < .5) {
    return 2.5
  }
  else if(valueWeight() < 2) {
    return 3.99
  }
  else if (valueWeight() < 3) {
    return 7.49
  }
  else if (valueWeight() < 4) {
    return 8.99
  }
  else if (valueWeight() < 5) {
    return 11.99
  }
  else if (valueWeight() < 6) {
    return 14.99
  }
  else if (valueWeight() < 7) {
    return 17.99
  }
  else if (valueWeight() < 8) {
    return 19.99
  }
  else if (valueWeight() < 9) {
    return 22.99
  }
  else if (valueWeight() < 10) {
    return 27.99
  }
  else if (valueWeight() < 11) {
    return 30.99
  }
  else if (valueWeight() < 12) {
    return 32.99
  }
  else if (valueWeight() < 13) {
    return 36.99
  }
  else if (valueWeight() < 14) {
    return 39.99
  }
  else if (valueWeight() < 15) {
    return 42.99
  }
  else if (valueWeight() < 16) {
    return 45.99
  }
  else if (valueWeight() <= 100) {
    return valueWeight() * 3.5
  }
  else if(valueWeight() <= 250)
  { return valueWeight() * 3.4 }
  else return "Too heavy"
}

const CalFreightSea = () => {
  if (valueWeight() < 1)
    {return 2.5}
  else if (valueWeight() <= 50) {
    return 1.65 * valueWeight()
  } 
  else if (valueWeight() <= 100) {
    return 1.55 * valueWeight()
  }
   else if (valueWeight() <= 250) {
    return 1.45 * valueWeight()
  } 
  else {
    return "Too heavy"
  }
}
const USDtoTTD = 7;
const OTPRate = .07;

const calculateAir = () => {
  //variables for calculation
  const duty = dutyOnItem()
  const vat = vatOnItem()
  //Freight Calc
  let airFreightValueUSD = calFreightAir()
    td12.textContent = "$" + Number((airFreightValueUSD).toFixed(2))
  let airFreightValueTTD = airFreightValueUSD * USDtoTTD
    td13.textContent = "$" + Number((airFreightValueTTD).toFixed(2))
  // Fule Surcharge calc
  let fuelSurchargeValueUSD = 0
    td22.textContent = "$" + Number((fuelSurchargeValueUSD).toFixed(2))
  let fuelSurchargeValueTTD = fuelSurchargeValueUSD * USDtoTTD
    td23.textContent = "$" + Number((fuelSurchargeValueTTD).toFixed(2))
  //Insurance calc
  let insuranceValueUSD = 0
    td32.textContent = "$" + Number((insuranceValueUSD).toFixed(2))
  let insuranceValueTTD = insuranceValueUSD * USDtoTTD
    td33.textContent = "$" + Number((insuranceValueTTD).toFixed(2))
  //Duty value
  let dutyValueUSD = duty * invoiceValueUSD
    td42.textContent = "$" + Number((dutyValueUSD).toFixed(2))
  let dutyValueTTD = dutyValueUSD * USDtoTTD
    td43.textContent = "$" + Number((dutyValueTTD).toFixed(2))
  let afterDutyPrice = dutyValueUSD + invoiceValueUSD
  //Vat Valuse
  let vatValueUSD = vat * afterDutyPrice
    td52.textContent = "$" + Number((vatValueUSD).toFixed(2))
  let vatValueTTD = vatValueUSD * USDtoTTD
    td53.textContent = "$" + Number((vatValueTTD).toFixed(2))
  let afterVatPrice = afterDutyPrice +vatValueUSD
  //OTP
  let onlineTaxUSD = OTPRate * afterVatPrice
    td62.textContent = "$" + Number((onlineTaxUSD).toFixed(2))
  let onlineTaxTTD = onlineTaxUSD * USDtoTTD
    td63.textContent = "$" + Number((onlineTaxTTD).toFixed(2))
  //Total Estimate
  let totalESTUSD = afterVatPrice + onlineTaxUSD + airFreightValueUSD + fuelSurchargeValueUSD + insuranceValueUSD
    td72.textContent = "$" + Number((totalESTUSD).toFixed(2))
  let totalESTTTD = totalESTUSD * USDtoTTD
    td73.textContent = "$" + Number((totalESTTTD).toFixed(2))

} 




// !!!!!!!!!!! Sea Calc
// const calculateSea = () => {

//   let seaFreightValueUSD = CalFreightSea()
//   let seaFreightValueTTD = seaFreightValueUSD * 7
//   console.log(seaFreightValueTTD)
// }

