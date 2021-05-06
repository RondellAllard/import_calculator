const renderCustomtaxList = () => {
  for(let i = 0; i < customTaxList.length; i++ ) {
    const option = document.createElement("option");
    const txt = document.createTextNode(customTaxList[i].name);
    option.appendChild(txt);
    option.setAttribute("value",customTaxList[i].name)
    categoryList.insertBefore(option,categoryList.lastChild);
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

const calculate = () => {
 let valueUSD= parseInt(invoiceValueUSD.value)
 let valueWeight = parseInt(weightInPounds.value)
 let duty = dutyOnItem()
 let vat = vatOnItem()
 console.log(duty)
 console.log(vat)
}
