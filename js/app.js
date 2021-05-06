// Coding path for estimate calculator // Render form - Create the form element. // Append  to it  each input. // Append drop down list // Append calculate button // Append summary break down table.// Append total cost// Append reset button // Append data list to drop down list // Create reset function that sets all input options to their default option // Set input fields to only allow  positive integers . For weight and positive 2 point floating numbers for dollars. // Create variable for use to conversion rate. // Render notification text to appear if the end

//Dom Selectors for main form
const body = document.querySelector('body')
const mainForm = document.createElement('form')
const categoryList = document.createElement('select')
  categoryList.id = "categoryList"
  const defaultCatOpt = document.createElement('option')
    defaultCatOpt.text = "-- Choose Product Category --"
      categoryList.append(defaultCatOpt)
const invoiceValueUSD = document.createElement('input')
  invoiceValueUSD.type = "number"
  invoiceValueUSD.value = 0
const weightInPounds = document.createElement('input')
  weightInPounds.type = "number"
  weightInPounds.value = 0
const calculateBTN = document.createElement('input')
  calculateBTN.value = "Calculate Cost"
  calculateBTN.type = 'submit'
  calculateBTN.id = "calculateBTN"
const resetBTN = document.createElement('input')
  resetBTN.value = "Clear Calcuation"
  resetBTN.type = 'reset'

//Rendering 
body.append(mainForm)
mainForm.append(categoryList,invoiceValueUSD, weightInPounds, calculateBTN, resetBTN)
renderCustomtaxList()

//Dom Selectors fo summary documents
const summaryTable = document.createElement('table')
const headerRow = document.createElement('tr')
  const td01 = document.createElement('th')
    td01.textContent = ""
  const td02 = document.createElement('th')
    td02.textContent = "USD"
  const td03 = document.createElement('th')
    td03.textContent = "TTD"

    summaryTable.append(headerRow, td01, td02, td03)

const freightRow = document.createElement('tr')
  const td11 = document.createElement('td')
    td11.textContent = "Freight"
  const td12 = document.createElement('td')
    td12.textContent = "USD Value"
  const td13 = document.createElement('td')
    td13.textContent = "TTD Value"

    summaryTable.append(freightRow, td11, td12, td13)

const fuelRow = document.createElement('tr')
  const td21 = document.createElement('td')
    td21.textContent = "Fuel"
  const td22 = document.createElement('td')
    td22.textContent = "USD Value"
  const td23 = document.createElement('td')
    td23.textContent = "TTD Value"

  summaryTable.append(fuelRow, td21, td22, td23)

const insuranceRow = document.createElement('tr')
  const td31 = document.createElement('td')
    td31.textContent = "Insurance"
  const td32 = document.createElement('td')
    td32.textContent = "USD Value"
  const td33 = document.createElement('td')
    td33.textContent = "TTD Value"

  summaryTable.append(insuranceRow, td31, td32, td33)
const dutyRow = document.createElement('tr')
  const td41 = document.createElement('td')
    td41.textContent = "Duty"
  const td42 = document.createElement('td')
    td42.textContent = "USD Value"
  const td43 = document.createElement('td')
    td43.textContent = "TTD Value"

  summaryTable.append(dutyRow, td41, td42, td43)

const vatRow = document.createElement('tr')
  const td51 = document.createElement('td')
    td51.textContent = "VAT"
  const td52 = document.createElement('td')
    td52.textContent = "USD Value"
  const td53 = document.createElement('td')
    td53.textContent = "TTD Value"

  summaryTable.append(vatRow, td51, td52, td53)

const optRow = document.createElement('tr')
  const td61 = document.createElement('td')
    td61.textContent = "Fuel"
  const td62 = document.createElement('td')
    td62.textContent = "USD Value"
  const td63 = document.createElement('td')
    td63.textContent = "TTD Value"

  summaryTable.append(optRow, td61, td62, td63)
  body.append(summaryTable)

  calculateBTN.addEventListener('click', (e) => {
    e.preventDefault()
    calculate()
  })
