export function loadMenu() {
  const content = document.getElementById('content');

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('tab-content');

  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu';

  const itemList = document.createElement('ul');

  const item1 = document.createElement('li');
  item1.textContent = 'Margherita Pizza - $12';

  const item2 = document.createElement('li');
  item2.textContent = 'Pasta Carbonara - $15';

  const item3 = document.createElement('li');
  item3.textContent = 'Caesar Salad - $10';

  itemList.appendChild(item1);
  itemList.appendChild(item2);
  itemList.appendChild(item3);

  menuContainer.appendChild(headline);
  menuContainer.appendChild(itemList);

  content.appendChild(menuContainer);
}
