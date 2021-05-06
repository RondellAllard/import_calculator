//Rendering  Item description list with relevant value attribute.
const itemDescriptionSelector = document.getElementById("itemDescription");
for(let i = 0; i < itemDescriptionList.length; i++ ) {
  const option = document.createElement("option");
  const txt = document.createTextNode(itemDescriptionList[i].name);
  option.appendChild(txt);
  option.setAttribute("value",itemDescriptionList[i].name)
  itemDescriptionSelector.insertBefore(option,itemDescriptionSelector.lastChild);
}

const itemDes = () => {
  const d = document.getElementById('itemDescription');
  let itemText = d.options[d.selectedIndex].text;
  return itemDescription = itemText
}

const shippingM = () => {
  const d = document.getElementById('shippingMethod');
  let itemText = d.options[d.selectedIndex].text;
  return shippingMethod = itemText
}

const cart = () => {
  const d = document.getElementById('carting');
  let itemText = d.options[d.selectedIndex].text;
  if (itemText.toLowerCase() ===  "yes") {
    return carting = true
  }
  else return carting = false
}

//Make it so that on keyup the costinUSD variable would be = to the value in the input
const invoice = () => {

}