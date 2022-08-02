import React,{Component} from "react";
import {  DataProducts,category, count } from "../data/DataProducts";
import '../App.css'
import WithRouter, { IWithRouter } from "./WithRouter.component";
import { Link, Outlet } from "react-router-dom";
import {creatProduct, getProduct, updateProduct} from "../services/DataProducts.service";
import { Product } from "../classes/Product";

class ProductForm extends Component<IWithRouter>  {
    arr: Product[] = [];

    constructor(props: any){
        super(props)
        getProduct().then(data => this.setState({ arrProducts: data }));   
        console.log("this id", this.props.params._id);
               
    }

    state ={
        arrProducts: this.arr,
        countId: count,
        name: "",
        price: 0,
        category: "",
        description: "",
        image: ""
    }

    render(): React.ReactNode {
        // let index:number=-1;
        // if(this.props.params.mode=="edit"){
        //     index=this.state.arrProducts.findIndex(p => p._id == this.props.params._id);
        // }     

        // const ed=()=>{
        //     this.setState({ name: this.state.arrProducts[index]?.name });
        //     this.setState({ price: this.state.arrProducts[index]?.price });
        //     this.setState({ category: this.state.arrProducts[index]?.category });
        //     this.setState({ description: this.state.arrProducts[index]?.description });
        //     return "kkk"
        // }
        const relase =()=>{
            this.setState({ name: "" });
            this.setState({ price: 0 });
            this.setState({ category: "" });
            this.setState({ description: "" });
        }
        const addProduct = () => {
            console.log("in add");
            
            creatProduct(
                { _id: "", name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description ,image: this.state.image}
            ).then(data=> console.log(data));
            relase();
        }

        const editProduct = () => { 
            console.log("in edit if");
          
            if(this.props.params._id!=null)
            {
                updateProduct(this.props.params._id,{ _id: "" , name: this.state.name, price: this.state.price, category: this.state.category, description: this.state.description ,image: this.state.image})
                .then(data=> console.log(data));
            }
            relase();
        }

        const check = (event: any) => {            
            event.preventDefault();
            if (this.props.params.mode == "add") {
                addProduct();
            } else {
                console.log(this.props.params._id);
                editProduct();
            }
        }
        // {this.state.arrProducts?this.state.arrProducts[index]?this.state.arrProducts[index].name:'loading...':''}
    return <div >
        <form id="userForm" className="input-group container-fluid navbar bg-light" onSubmit={event => check(event)}>
            <input  aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} />
            <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" value={this.state.price} onChange={e => this.setState({ price: parseInt( e.currentTarget.value) })} />
            <select aria-label="Username" aria-describedby="basic-addon1" className="form-control" value={this.state.category} onChange={e => this.setState({ category: e.currentTarget.value })}>
                {Object.values(category).map((c) => <option>{c}</option>)}
            </select>
            <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter descraption" value={this.state.description} onChange={e => this.setState({ description: e.currentTarget.value })} />
            <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter addres of image" value={this.state.image} onChange={e => this.setState({ description: e.currentTarget.value })} />
            <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="submit">OK</button>
        </form>
        <Outlet />
    </div>
    }
}

export default WithRouter(ProductForm);






// return <div >{this.state.arrProducts?this.state.arrProducts[index]?
//     // <div>{ed()}
//     <form id="userForm" className="input-group container-fluid navbar bg-light" onSubmit={event => check(event)}>
//     <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" 
//     value={this.state.name} 
//     onChange={e => this.setState({ name: e.currentTarget.value })} />
//     <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="Number" placeholder="enter price" value={this.state.price} onChange={e => this.setState({ price: parseInt( e.currentTarget.value) })} />
//     <select aria-label="Username" aria-describedby="basic-addon1" className="form-control" value={this.state.category} onChange={e => this.setState({ category: e.currentTarget.value })}>
//         {Object.values(category).map((c) => <option>{c}</option>)}
//     </select>
//     <input aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter descraption" value={this.state.description} onChange={e => this.setState({ description: e.currentTarget.value })} />
//     <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" type="submit">OK</button>
// </form>
//     // </div>

    
//     // this.setState({name: this.state.arrProducts[index].name})
//     :'loading...':''}

