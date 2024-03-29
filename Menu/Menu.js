/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


// pulling in items from array for li element
const createList = (item) => {
  const newListItems = document.createElement('li')
  newListItems.textContent = item
  return newListItems;
}

console.log(createList(menuItems))

// This works, created my UL and LI correctly
const createMenu = (arr) => {
  const menu = document.createElement('ul')
  menu.classList.add('.menu')
  const newList = arr.map((item) => createList(item));
  newList.forEach((item) => menu.appendChild(item));

  // event expands menu when clicked. 

  const button = document.querySelector('.menu-button');
  button.addEventListener('click', () => {
    button.classList.toggle('.menu--open')
  })

  return menu;
}


const mainMenu = createMenu(menuItems)
const menuContainer = document.querySelector('.menu-button')
menuContainer.appendChild(mainMenu)

console.log('menuContainer', menuContainer)


/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.

  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/
