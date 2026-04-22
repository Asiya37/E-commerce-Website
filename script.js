const products = [
  { name: "Leather Backpack", category: "bags", price: "$79", img: "https://via.placeholder.com/300x220?text=Backpack", link: "#" },
  { name: "Handbag", category: "bags", price: "$59", img: "https://via.placeholder.com/300x220?text=Handbag", link: "#" },

  { name: "Lipstick Set", category: "beauty", price: "$29", img: "https://via.placeholder.com/300x220?text=Lipstick", link: "#" },

  { name: "Wall Decor", category: "homedecor", price: "$39", img: "https://via.placeholder.com/300x220?text=Decor", link: "#" },

  { name: "Yoga Mat", category: "fitness", price: "$25", img: "https://via.placeholder.com/300x220?text=Fitness", link: "#" },

  { name: "Dress", category: "fashion", price: "$89", img: "https://via.placeholder.com/300x220?text=Fashion", link: "#" },

  { name: "Blender", category: "kitchen", price: "$49", img: "https://via.placeholder.com/300x220?text=Kitchen", link: "#" },

  { name: "Earbuds", category: "tech", price: "$99", img: "https://via.placeholder.com/300x220?text=Tech", link: "#" }
];

const grid = document.getElementById("productGrid");
const title = document.getElementById("title");

function displayProducts(items) {
  grid.innerHTML = "";

  items.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank">Buy on Amazon</a>
      </div>
    `;
  });
}

function showCategory(category) {
  if (category === "all") {
    title.innerText = "All Products";
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    title.innerText = category.charAt(0).toUpperCase() + category.slice(1);
    displayProducts(filtered);
  }
}

// Initial load
displayProducts(products);