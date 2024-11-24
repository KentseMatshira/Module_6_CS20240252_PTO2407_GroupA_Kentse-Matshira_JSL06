"use strict";

// Sample menu data with fixed prices
const menu = {
  Starters: [
    { name: "Garlic Bread", price: 20.0 },
    { name: "Bruschetta", price: 25.0 },
  ],
  MainCourses: [
    { name: "Margherita Pizza", price: 85.0 },
    { name: "Spaghetti Carbonara", price: 95.0 },
  ],
  Desserts: [
    { name: "Tiramisu", price: 50.0 },
    { name: "Cheesecake", price: 45.0 },
  ],
};

// Total and order list
let total = 0;
let order = [];

// Function to display menu items by category
function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");

  // Loop through each category in the menu
  for (let category in menu) {
    const categoryElement = document.createElement("h3");
    categoryElement.textContent = category;

    const itemsList = document.createElement("ul");

    // Loop through the items in each category
    menu[category].forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

      // Add item to the order on click
      itemElement.addEventListener("click", () => addToOrder(item));

      itemsList.appendChild(itemElement);
    });

    menuContainer.appendChild(categoryElement);
    menuContainer.appendChild(itemsList);
  }
}

// Callback function for adding an item to the order
function addToOrder(item) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");

  // Create a list item for the order
  const orderItemElement = document.createElement("li");
  orderItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

  // Add functionality to remove the item from the order
  orderItemElement.addEventListener("click", () =>
    removeFromOrder(orderItemElement, item)
  );

  // Append the list item to the order items list
  orderItemsList.appendChild(orderItemElement);

  // Add the item to the total
  total += item.price;
  order.push(item);

  // Update the total display
  orderTotalElement.textContent = total.toFixed(2);
}

// Callback function for removing an item from the order
function removeFromOrder(orderItemElement, item) {
  const orderTotalElement = document.getElementById("order-total");

  // Remove the item from the DOM
  orderItemElement.remove();

  // Deduct the item's price from the total
  total -= item.price;
  order = order.filter((orderItem) => orderItem.name !== item.name);

  // Update the total display
  orderTotalElement.textContent = total.toFixed(2);
}

// Initialize the menu system
function initMenuSystem(menu) {
  displayMenuItems(menu);
}

// Start the menu system
initMenuSystem(menu);
