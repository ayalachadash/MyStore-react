import React, { Component } from "react";
import { DataProducts } from "../data/DataProducts";
import { MDBInput } from "mdbreact";
import { Link, Location, NavigateOptions, Outlet, Params, useLocation } from 'react-router-dom';
import { urlToHttpOptions } from "url";
import WithRouter, { IWithRouter } from "./WithRouter.component";
import { getProduct } from "../services/DataProducts.service";
import { Product } from "../classes/Product";

class ShowProduct extends Component<IWithRouter>{
    arr: Product[] = [];
    state = {
        arrProducts: this.arr,
    }
    constructor(props: any) {
        super(props);
        getProduct().then(data => this.setState({ arrProducts: data }))
       }

    render() {
        const index=this.state.arrProducts.findIndex(p => p._id == this.props.params._id);

         console.log(this.props.location);
        return <div>
            {this.state.arrProducts ? <div><h2>{this.state.arrProducts[index] ? this.state.arrProducts[index].name : 'please wait'}</h2>
                <h2>{this.state.arrProducts[index] ? this.state.arrProducts[index].price : ''}</h2>
            </div> : <div>ppppp</div>}
            hello
            <Outlet />
        </div>
    }
}
export default WithRouter(ShowProduct);
