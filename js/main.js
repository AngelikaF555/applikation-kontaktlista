const inputName = document.getElementById('name-input')
const inputNumber = document.getElementById('number-input')
const btnAddContact = document.getElementById('btn-create-new-contact')
const btnDeleteList = document.getElementById('btn-delete-list')
const errorLog = document.getElementById('error-message-log')
const listOfContacts = document.getElementById('contacts')


const errorMessage = document.createElement('p')
errorLog.appendChild(errorMessage)

btnAddContact.addEventListener('click', addContact)
btnDeleteList.addEventListener('click', clearContactList)


function addContact() {
    if (isInputValid(inputName, inputNumber)) {
        clearErrorMessage()

        const contactElement = createContactElement(inputName.value, inputNumber.value)
        listOfContacts.appendChild(contactElement)

        inputName.value = ''
        inputNumber.value = ''

    } else {
        displayErrorMessage(inputName, inputNumber)
    }
}

function createContactElement(name, number) {
    const contactItem = document.createElement('li')

    const nameField = createTextField(name)
    const numberField = createTextField(number)
    
    const editButton = createButton('Ändra', () => editContact(editButton, nameField, numberField))
    const deleteButton = createButton('Radera', () => contactItem.remove())

    contactItem.append(nameField, numberField, editButton, deleteButton)
    return contactItem
}

function createTextField(value) {
    const field = document.createElement('input')
    field.value = value
    field.disabled = true
    return field
}

function createButton(label, onClick) {
    const button = document.createElement('button')
    button.textContent = label
    button.addEventListener('click', onClick)
    return button
}

function editContact(btn, nameTextField, numberTextField) {
    const isEditing = btn.textContent === 'Spara'
    if (isEditing) {
        if ((isInputValid(nameTextField, numberTextField))) {
            btn.innerHTML = 'Ändra'
            nameTextField.disabled = numberTextField.disabled = true
            clearErrorMessage()
        } else {
            displayErrorMessage(nameTextField, numberTextField)
        }
    } else {
        btn.innerHTML = 'Spara'
        nameTextField.disabled = numberTextField.disabled = false
    }
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

function isInputValid(nameInput, numberInput) {
    return !isFieldEmpty(nameInput, numberInput) && isNumberValid(numberInput);
}

function displayErrorMessage(inputName, inputNumber) {
    if (isFieldEmpty(inputName, inputNumber)) {
        errorMessage.textContent = 'Får ej spara kontakt med tomt textfält'
    } else {
        errorMessage.textContent = 'Telefonnummer får endast innehålla nummer, mellanslag och bindestreck'
    }
    
}

function clearErrorMessage() {
    errorMessage.textContent = ''
}