// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
// Total and order list
let total = 0;
let order = [];

// Function to display menu items by category
function displayMenuItems(menu) {  const menuContainer = document.getElementById('menu');

    // Loop through each category in the menu
    for (let category in menu) {
        const categoryElement = document.createElement('h3');
        categoryElement.textContent = category;

        const itemsList = document.createElement('ul');
   // Loop through the items in each category
        menu[category].forEach(item => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

            // Add item to the order on click
            itemElement.addEventListener('click', () => addToOrder(item));

            itemsList.appendChild(itemElement);
        });

        menuContainer.appendChild(categoryElement);
        menuContainer.appendChild(itemsList);
    }
}
// Callback function for adding an item to the order
function addToOrder(item) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderItemElement = document.createElement('li');
    orderItemElement.textContent = `${item.name} - R${item.price.toFixed(2)}`;

    // Add functionality to remove the item from the order
    orderItemElement.addEventListener('click', () => removeFromOrder(orderItemElement, item));

    // Append the list item to the order items list
    orderItemsList.appendChild(orderItemElement);

    // Add the item to the total
    total += item.price;
    order.push(item);

    // Update the total display
    orderTotalElement.textContent = total.toFixed(2);
}

    // Get the menu container element from the HTML

    // Loop through each category and its items in the menu object

        // Create an element to represent the category

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
