export function loadAbout() {
  const content = document.getElementById('content');

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'About Us';

  const phone = document.createElement('p');
  phone.textContent = 'Phone: +123 456 789';

  const address = document.createElement('p');
  address.textContent = 'Address: 123 Main Street, Foodville';

  aboutContainer.appendChild(headline);
  aboutContainer.appendChild(phone);
  aboutContainer.appendChild(address);

  content.appendChild(aboutContainer);
}
