
let products = [
    { id: 1, name: 'Laptop', price: 800, image: 'https://www.itaf.eu/wp-content/uploads/2021/01/Best-laptops-in-2021-7-things-to-consider-when-buying-a-laptop.jpg' },
    { id: 2, name: 'Mobile', price: 500, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7mH2Kxr3-D5XYdCPx3e3NAaDRIZyar4X2Q&s' },
    { id: 3, name: 'Tablet', price: 300, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElvBzg520NGL3DV00RIdbH4L0sPZSgSGh-Q&s' },
    { id: 4, name: 'Headphones', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPRAb4lmS-aXLGELTFTXy1gJ-JQnv17J8ESg&s' }
];

const displayProducts = () => {
    const container = document.getElementById('product-container');

    container.innerHTML = products
        .map(product => `
            <div class="product-card" id="product-${product.id}">
                <img class="product-image" src="${product.image}" alt="${product.name}">
                <div class="product-details">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">$${product.price}</div>
                    <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `)
        .join('');

    document.getElementById('show-product-btn').style.display = 'none';
};

const deleteProduct = (id) => {
    products = products.filter(product => product.id !== id);

    displayProducts();
};

document.getElementById('show-product-btn').addEventListener('click', displayProducts);




























// let arr = [
//     {
//         name: "jamil",
//         product: "pizza",
//         phone: 123456789
//     },
//     // {
//     //     name: "Ashbar",
//     //     product: "cloth",
//     //     phone: 123456789
//     // },
//     {
//         name: "Ahsan",
//         product: "shoes",
//         phone: 123456789
//     },
//     {
//         name: "Shahmir",
//         product: "watch",
//         phone: 123456789
//     }
// ];

// // const result = arr.filter((item) => item.name === "Ashbar");

// // const result = arr.find((item) => item.name === "Ashbar");

// // const result = arr.some((item) => item.name === "Ashbar");





// console.log(result);
