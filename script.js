// Form Validation for Contact Page
function validateForm(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent submission if fields are empty
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent submission for invalid email
        return false;
    }

    // If validation passes, allow form submission
    alert("Thank you for contacting us, " + name + "! Your message has been sent.");
    return true; 
}

// Attach the form validation only if the contact page is loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("script.js loaded successfully!");

    // Contact Form Validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", validateForm);
    }

    // Load products dynamically if on the services page
    const productList = document.getElementById("product-list");
    if (productList) {
        console.log("Product list found! Loading products...");
        loadProducts();
    } else {
        console.log("No product list found on this page.");
    }
});

// Dynamic Product List
const products = [
    { name: "670 HP, 950 RPM", description: "Fault : winding is burned out. Service done: rewinding, bearing and machanical seal also changed.", image: "images/670_HP.jpg" },
    { name: "Dewatering Pump High Discharge", description: "Fault : winding is burned out. Service done: rewinding.", image: "images/Dewatering -pump.jpg" },
    { name: "20 HP-Aqua Pump", description: "Fault : winding is burned out. Service done: rewinding.", image: "images/20HP-Aqua pump.jpg" },
    { name: "120 HP Aqua Pump", description: "Service done: Mechanical seal changed", image: "images/120_HP.jpg" },
    { name: "200 HP", description: "Fault : winding is burned out. Service done: rewinding, bearing and mechanical seal also changed.", image: "images/200_HP.jpg" },
    { name: "Wilo Fire Pump", description: "Fault : winding is burned out. Service done: rewinding. ", image: "images/wilo_1.jpg" },
    { name: "Wilo High-Pressure Pump", description: "Fault : winding is burned out. Service done: rewinding.", image: "images/wilo_2.jpg" },
    { name: "Hitech Sewage Pump", description: "Fault : winding is burned out. Service done: rewinding.", image: "images/hitech_1.jpg" },
    { name: "Wilo Horizontal Split Case Fire Pump", description: "Service done: Pump service.", image: "images/wilo_3.jpg" },
    { name: "CMRL Errection and Commissioning Aqua Dewatering Pump", description: "", image: "images/cmrl_1.jpg" },
    { name: "Wilo Split Case Pump ", description: "Service done: Pump service.", image: "images/wilo_4.jpg" },
    { name: "320 HP Winding ", description: "", image: "images/320_HP.jpg" },
    { name: "50 HP Winding ", description: "", image: "images/50_HP.jpg" },
    { name: "120 HP Winding ", description: "", image: "images/120_HP2.jpg" },
    { name: "80 HP Aqua Pump ", description: "Fault : winding is burned out. Service done: rewinding.", image: "images/Aqua_1.jpg" }
];

function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        console.log("Adding product:", product.name);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
        `;
        productList.appendChild(card);
    });
}

const salesProducts = [
    { name: "60 HP Aqua Dewatering Pump", description: "", image: "images/60_HP.jpg" },
    { name: "235 HP Aqua Pump", description: "", image: "images/235_HP.jpg" },
    { name: "Aqua Pump ATP Model", description: "", image: "images/aquapmp_1.jpg" },
    { name: "Aqua Pump", description: "", image: "images/aquapump_2.jpg" },
    { name: "Aqua Pump", description: "", image: "images/aquapump_3.jpg" },
    { name: "Algo Pump", description: "", image: "images/algopump_1.jpg" },
    { name: "Algo Pump", description: "", image: "images/algopump_3.jpg" },
    { name: "Ekki Pump", description: "", image: "images/ekkipump_1.jpg" }
];

function loadSales() {
    const salesList = document.getElementById("sales-list");
    if (salesList) {
        salesProducts.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            `;
            salesList.appendChild(card);
        });
    }
}

// Run only when Sales page is loaded
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector("#sales-list")) {
        loadSales();
    }
});
