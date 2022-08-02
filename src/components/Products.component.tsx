import { count } from "console";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { text } from "stream/consumers";
import { MDBInput } from "mdbreact";
import { Outlet, Link } from "react-router-dom";
import '../App.css';
import '../css/products.css'
import { creatProduct, deleteProduct, getProduct } from "../services/DataProducts.service";
import { Product } from "../classes/Product";

class Products extends React.Component {
    arr: Product[] = [];
    constructor(props: any) {
        super(props);
        getProduct().then(data => { this.setState({ arrProducts: data }); this.setState({ arrp: data }); console.log("data get: " + data) });
    }

    state = {
        arrProducts: this.arr,
        arrp: this.arr
    }
    getData = () => {

    }
    //zommer
    //0527145098
    //0504127139
    render(): React.ReactNode {
        const FuncDel = (_id: string) => {
            deleteProduct(_id).then(data => console.log("data" + data));
            getProduct().then(data => { this.setState({ arrProducts: data }); });
        }

        const rows = this.state.arrProducts.map((a) => {
            return (
                <div className="singleProduct">
                    <img className="imgProduct" src={a.image} />
                    <p>{a.name}</p>
                    <h1>{a.description}</h1>
                    <h3>{a.category}</h3>
                    <h3>{a._id}</h3>
                    <h3>price: {a.price}</h3>
                    <Link to={`ShowProduct/${a._id}`}>show this product</Link><br />
                    <Link to={`ProductFormEdit/${a._id}/edit`}>Edit this product</Link><br />
                    <h2><Button onClick={() => { FuncDel(a._id); }}>Delete</Button></h2>
                </div>
            );
        });



        const Search = (event: string) => {
            console.log(this.state.arrp);

            // getProduct().then(data => this.setState({ arrp: data }));
            this.setState({ arrProducts: this.state.arrp.filter(p => p.name.indexOf(event) != -1) });
        }
        return <div id="products">
            <Link to={`ProductFormAdd/add`}>Add</Link><br />

            <div id="productsFlex">
                <div id="productsFlex1">
                    <MDBInput id='search' background size="lg" onChange={(event) => Search(event.currentTarget.value)} />
                    <div><Outlet /></div>

                    <div id="allProducts">{rows}</div>

                </div>
            </div>
        </div>;
    }
}
export default Products;


