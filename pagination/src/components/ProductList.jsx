import React, { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const ProductList = () => {

const [products, setProducts] = useState([])
const [productsPerPage, setProductsPerPage] = useState(6)
const [cuerrentPage, setCurrentPage] = useState(1)

const produtList = async() => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products =  await data.json()
  setProducts(products)
}
useEffect(() => {
    produtList()
},[])

return (
    <>
    <div className="container-products">
        {products.map(product =>(
            <div className="card-produt">
                <figure className="container-img">
                    <img src={product.image} alt={product.title} />
                </figure>
                <div className="info-product">
                    <h3>{product.title}</h3>
                    <p className="price">$ {product.price}</p>
                    <button>Añadir al carrito</button>
                </div>
            </div>
        ))}

    </div>
    <Pagination />
    </>
);
}