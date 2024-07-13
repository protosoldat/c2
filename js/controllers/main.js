import { servicesProducts } from "../services/product.services.js";

const productContainer = document.querySelector("[data-product]");
const productForm = document.querySelector("[data-product-form]");
const deleteButton = document.querySelectorAll("[delete-button]");

function createCard(name, price, image, id) {
    const card = document.createElement("div");
    card.classList.add("card")

    card.innerHTML = `
            <div class="img-container">
                <img src="${image}" alt="${nombre}">
            </div>

            <div class="card-container--info"> 
                <p>${name}</p>
                <div class="card-container--value">
                    <p>$${price}</p>
                    <button class="delete-button" id="${id}">
                        <img src="./assets/trashIcon.svg" alt="Eliminar">
                    </button>
                </div>
            </div> 
            `;
    productContainer.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const producList = await servicesProducts.producList();

        producList.forEach(product => {
            productContainer.appendChild(
                createCard(product.name, product.price, product.image, product.id)
            )
        });

    } catch (error) {
        console.log(error)
    }
};

productForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;

    servicesProducts
        .createProducts(name, price, image)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
});
deleteButton.forEach(button => {
deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
        
    const id = document.querySelector("[id]").value;
        
     servicesProducts
        .deleteProducts(id)
        .then((res) => connsole.log(res))
        .catch((error) => console.log(error)); 
    });
});

render();