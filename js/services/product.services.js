const productList = () => {
    return fecth ("http://localhost:3000"/products)
        .then((res) => res.json())
        .catch((err) => console.log(err))
};

const createProducts = (name, price, image) => {
    return fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image, 
    }),
    })
    .then((res) => res.json())
    .catch((err)=> console.log(err));
};

const deleteProducts = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",},
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error('Error eliminando el producto');
        }
        return res.json();
    })
    .catch((err) => console.log(err));
};

export const servicesProducts = {
    productList,
    createProducts,
    deleteProducts,
};