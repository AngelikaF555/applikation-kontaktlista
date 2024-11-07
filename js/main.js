const inputName = document.getElementById('name-input')
const inputNumber = document.getElementById('number-input')
const btnAddContact = document.getElementById('btn-create-new-contact')
const btnDeleteList = document.getElementById('btn-delete-list')
const errorLog = document.getElementById('error-message-log')
const contactListDiv = document.getElementById('class-list')
const listOfContacts = document.getElementById('contacts')


const errormessage = document.createElement('p')
errorLog.appendChild(errormessage)

console.log(btnDeleteList)
btnAddContact.addEventListener("click", addContact)
btnDeleteList.addEventListener('click', clearContactList)


function addContact() {
    if (isInputEmpty(inputName, inputNumber) && isNumberValid(inputNumber)) {
        errormessage.textContent = ''

        const contactElement = document.createElement('li')
        listOfContacts.appendChild(contactElement)

        const nameTextField = document.createElement('input')
        contactElement.appendChild(nameTextField)
        nameTextField.value = inputName.value
        nameTextField.disabled = true

        const numberTextField = document.createElement('input')
        contactElement.appendChild(numberTextField)
        numberTextField.value = inputNumber.value
        numberTextField.disabled = true

        const btnChangeContact = document.createElement('button')
        contactElement.appendChild(btnChangeContact)
        btnChangeContact.innerHTML = 'Ändra'

        setupChangeContactBtn(btnChangeContact, nameTextField, numberTextField)

        const btnDeleteContact = document.createElement('button')
        contactElement.appendChild(btnDeleteContact)
        btnDeleteContact.innerHTML = 'Radera'

        setupDeleteContactBtn(btnDeleteContact)

        inputName.value = ''
        inputNumber.value = ''

    } else {
        displayErrorMessage(inputName, inputNumber)
    }
}

function setupChangeContactBtn(btn, nameTextField, numberTextField) {
    btn.addEventListener('click', function handleClick() {
        if (btn.innerHTML === 'Ändra') {
            btn.innerHTML = 'Spara'
            nameTextField.disabled = false
            numberTextField.disabled = false
        } else {
            if (isInputEmpty(nameTextField, numberTextField) && isNumberValid(numberTextField)) {
                btn.innerHTML = 'Ändra'
                nameTextField.disabled = true
                numberTextField.disabled = true
                errormessage.textContent = ''
            } else {
                displayErrorMessage(nameTextField, numberTextField)
            }
        }
    })
}

function setupDeleteContactBtn(btn) {
    btn.addEventListener('click', () => btn.parentElement.remove())
}

function clearContactList() {
   listOfContacts.innerHTML = ''
}

function isFieldEmpty(... fields) {
    return fields.some(field => field.value.trim() === '')
}

function isNumberValid(input) {
    const regex = /^[0-9\s-]+$/
    return regex.test(input.value)
}

function displayErrorMessage(inputName, inputNumber) {
    if (isInputEmpty(inputName, inputNumber) === false) {
        errormessage.textContent = 'Får ej spara kontakt med tomt textfält'
    } else {
        errormessage.textContent = 'Telefonnummer får endast innehålla nummer, mellanslag och bindestreck'
    }
    
}