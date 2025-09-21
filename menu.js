const menuData = [
    { name: "Cheeseburger", price: "$5.99", img: "pictures/Zinger.jpg" },
    { name: "Chicken Tikka", price: "$10.00", img: "pictures/chicken tikka.jpg" },
    { name: "French Fries", price: "$2.99", img: "pictures/fries.jpg" },
    { name: "Chicken Nuggets", price: "$4.50", img: "pictures/nuggets.jpg" },
    { name: "Hot Dog", price: "$3.99", img: "pictures/hotdog.jpg" },
    { name: "Chicken Korma", price: "$8.00", img: "pictures/Chicken Korma.jpg" },
    { name: "Pepperoni Pizza", price: "$8.99", img: "pictures/Pepperoni Pizza.jpg" },
    { name: "Veggie Pizza", price: "$7.99", img: "pictures/Veggie Pizza.jpg" },
    { name: "Dal Chawal", price: "$7.50", img: "pictures/Dal Chawal.jpg" },
    { name: "Kung Pao Chicken", price: "$9.99", img: "pictures/Kung PAo Chicken.jpg" },
    { name: "Keema", price: "$4.99", img: "pictures/Keema.jpg" },
    { name: "Sweet and Sour Pork", price: "$10.50", img: "pictures/Sweet and Sour Pork.jpg" },
    { name: "Spring Rolls", price: "$4.00", img: "pictures/Spring Rolls.jpg" },
    { name: "Fried Rice", price: "$6.50", img: "pictures/Fried Rice.jpg" },
    { name: "Chow Mein", price: "$7.00", img: "pictures/Chow Mein.jpg" },
    { name: "Biryani", price: "$4.99", img: "pictures/Biryani.jpg" },
    { name: "Beef Burger", price: "$6.50", img: "pictures/Beef Burger.jpg" },
    { name: "Nihari", price: "$8.00", img: "pictures/Nihari.jpg" },
    { name: "Chicken Burger", price: "$6.00", img: "pictures/Chicken Burger.jpg" },
    { name: "Mozzarella Sticks", price: "$3.50", img: "pictures/Mozzarella Sticks.jpg" },
    { name: "Tacos", price: "$4.99", img: "pictures/Tacos.jpg" },
    { name: "Dim Sum", price: "$8.00", img: "pictures/Dim Sum.jpg" },
    { name: "Chicken Karahi", price: "$9.50", img: "pictures/Chicken Karahi.jpg" },
    { name: "Szechuan Chicken", price: "$10.00", img: "pictures/Szechuan Chicken.jpg" },
    { name: "Egg Fried Rice", price: "$5.50", img: "pictures/Egg Fried Rice.jpg" },
    { name: "Beef Pulao", price: "$5.50", img: "pictures/Beef pulao.jpg" },
    { name: "General Tso's Chicken", price: "$9.50", img: "pictures/General Tso's Chicken.jpg" },
    { name: "BBQ Chicken Wings", price: "$7.50", img: "pictures/BBQ Chicken Wings.jpg" },
    { name: "Paneer Tikka", price: "$8.50", img: "pictures/paneer tikka.jpg" },
    { name: "Veg Spring Rolls", price: "$4.50", img: "pictures/veg roll.jpg" }

];

// Render menu cards
const menuContainer = document.getElementById("menu");

menuData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="card-content">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price}</div>
        </div>
    `;
    menuContainer.appendChild(card);
});
