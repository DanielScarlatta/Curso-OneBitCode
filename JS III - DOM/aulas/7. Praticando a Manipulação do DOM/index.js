function newContact() {
    const contactSection = document.getElementById('contact-list')

    const titleContact = document.createElement('h3')
    titleContact.innerText = "CONTATO"

    const ul = document.createElement('ul')

    const nameList = document.createElement('li')
    nameList.innerText = "Nome: "
    const inputName = document.createElement('input')
    inputName.type = "text"
    inputName.name = "fullName"
    nameList.appendChild(inputName)
    ul.appendChild(nameList)
    ul.appendChild(document.createElement('br'))
   
    const phoneList = document.createElement('li')
    phoneList.innerText = "Phone: "
    const inputPhone = document.createElement('input')
    inputPhone.type = "text"
    inputPhone.name = "Phone"
    phoneList.appendChild(inputPhone)
    ul.appendChild(phoneList)
    ul.appendChild(document.createElement('br'))
    
    const addressList = document.createElement('li')
    addressList.innerText = "Address: "
    const inputAddress = document.createElement('input')
    inputAddress.type = "text"
    inputAddress.name = "Address"
    addressList.appendChild(inputAddress)
    ul.appendChild(addressList)
    ul.appendChild(document.createElement('br'))
    
    contactSection.append(titleContact, ul)
}

function deleteContact() {
    const contactSection = document.getElementById('contact-list')
    const contacts = document.getElementsByTagName('ul')
    const titles = document.getElementsByTagName('h3')

    contactSection.removeChild(contacts[contacts.length -1])
    contactSection.removeChild(titles[titles.length -1])   
}