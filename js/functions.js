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
    invoiceValueUSD = Math.abs(+invoiceUSD.value);
    invoiceUSD.value = `$${invoiceValueUSD} USD`
  } 
  else if (typeof invoiceValueUSD === "number") {
    invoiceUSD.value = `$${invoiceValueUSD} USD`
  }
  else invoiceUSD.value = "Enter Only Digits"
}

const weightFuncIn = () => weightInPounds.value = weightValue
const weightFuncOut = () => {
  let v = +weightInPounds.value 
  if(v.toString() != "NaN") {
    weightValue = Math.abs(+weightInPounds.value)
    weightInPounds.value = `${weightValue} LBS`
  } 
  else if (typeof weightValue === "number") {
    weightInPounds.value = `${weightValue} LBS`
  }
  else weightInPounds.value = "Enter Only Digits"
}


const calFreightAir =  ()=> {
  if(weightValue < .5) {
    return 2.5
  }
  else if(weightValue < 2) {
    return 3.99
  }
  else if (weightValue < 3) {
    return 7.49
  }
  else if (weightValue < 4) {
    return 8.99
  }
  else if (weightValue < 5) {
    return 11.99
  }
  else if (weightValue < 6) {
    return 14.99
  }
  else if (weightValue < 7) {
    return 17.99
  }
  else if (weightValue < 8) {
    return 19.99
  }
  else if (weightValue < 9) {
    return 22.99
  }
  else if (weightValue < 10) {
    return 27.99
  }
  else if (weightValue < 11) {
    return 30.99
  }
  else if (weightValue < 12) {
    return 32.99
  }
  else if (weightValue < 13) {
    return 36.99
  }
  else if (weightValue < 14) {
    return 39.99
  }
  else if (weightValue < 15) {
    return 42.99
  }
  else if (weightValue < 16) {
    return 45.99
  }
  else if (weightValue <= 100) {
    return weightValue * 3.5
  }
  else if(weightValue <= 250)
  { return weightValue * 3.4 }
  else return alert("We do not ship items over 250 LBS")
}

const calFreightSea = () => {
  if (weightValue < 1)
    {return 2.5}
  else if (weightValue <= 50) {
    return 1.65 * weightValue
  } 
  else if (weightValue <= 100) {
    return 1.55 * weightValue
  }
   else if (weightValue <= 250) {
    return 1.45 * weightValue
  } 
  else return alert("We do not ship items over 250 LBS")
}
const USDtoTTD = 7;
const OTPRate = .07;

const calculateCost = () => {
  //variables for calculation
  const duty = dutyOnItem()
  if(duty === undefined) {
    alert("Please enter product category")
    return 
 }
  const vat = vatOnItem()
  //Freight Calc
  let freightValueUSD
  if (shippingType.value === "air"){
  freightValueUSD = calFreightAir()
    td12.textContent = "$" + Number((freightValueUSD).toFixed(2))
  let freightValueTTD = freightValueUSD * USDtoTTD
    td13.textContent = "$" + Number((freightValueTTD).toFixed(2))
  }
  else if (shippingType.value === "sea") {
  freightValueUSD = calFreightSea()
    td12.textContent = "$" + Number((freightValueUSD).toFixed(2))
  let freightValueTTD = freightValueUSD * USDtoTTD
    td13.textContent = "$" + Number((freightValueTTD).toFixed(2))
  }
  // // Fule Surcharge calc
  // let fuelSurchargeValueUSD = 0
  //   td22.textContent = "$" + Number((fuelSurchargeValueUSD).toFixed(2))
  // let fuelSurchargeValueTTD = fuelSurchargeValueUSD * USDtoTTD
  //   td23.textContent = "$" + Number((fuelSurchargeValueTTD).toFixed(2))
  //Insurance calc
  // let insuranceValueUSD = 0
  //   td32.textContent = "$" + Number((insuranceValueUSD).toFixed(2))
  // let insuranceValueTTD = insuranceValueUSD * USDtoTTD
  //   td33.textContent = "$" + Number((insuranceValueTTD).toFixed(2))
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
  let totalESTUSD = afterVatPrice + onlineTaxUSD + freightValueUSD
    td72.textContent = "$" + Number((totalESTUSD).toFixed(2))
  let totalESTTTD = totalESTUSD * USDtoTTD
    td73.textContent = "$" + Number((totalESTTTD).toFixed(2))
} 


