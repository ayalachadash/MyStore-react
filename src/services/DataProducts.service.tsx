import { Product } from "../classes/Product";
// let token = JSON.parse(sessionStorage.getItem("token"));
let token = sessionStorage.getItem('token');

export async function getProduct() {

    const response = await fetch('http://localhost:3000/api/products',
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token,
            },
        });
    const body = await response.json();

    if (response.status !== 200) {
        throw Error("err not status 200")
    }

    return body;
}

export async function deleteProduct(_id: string) {
    const response = await fetch(`http://localhost:3000/api/products/${_id}`, {
        method: "DELETE",
        headers: {
            "content-type": "app/json",
            'Authorization': 'Bearer ' + token,
        },
    })
    const body = await response.json();
    if (response.status !== 200) {
        throw Error("err not status 200")
    }

    return body;
}


export async function creatProduct(obj: Product) {
    let item = {
        name: obj.name,
        price: obj.price,
        category: obj.category,
        description: obj.description,
        image: obj.image
    }
    const response = await fetch('http://localhost:3000/api/products',
        {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(item)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Unable to get items.', error));
}

export async function updateProduct(_id: string, obj: Product) {
    console.log("in update");

    let item = {
        name: obj.name,
        price: obj.price,
        category: obj.category,
        description: obj.description,
        image: obj.image
    }
    const response = await fetch(`http://localhost:3000/api/products/${_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(item)
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Unable to get items.', error));
}
export const add = (a: number, b: number) => {
    return a + b;
}


