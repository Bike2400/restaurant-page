function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const ContactUs = document.createElement('h2')
    ContactUs.classList.add('contact-heading')
    ContactUs.textContent = 'Contact Us';
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = 'images/restaurant-location.png'
    restaurantLocation.alt = 'Mozzafiato restaurant location'
  
    contact.appendChild(ContactUs)
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
  }
  
  function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
  }
  
  export default loadContact
  