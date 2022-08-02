import React, { Component } from "react";
import { User } from "../classes/User";
import '../css/login.css'
import { getAllUser, signIn, signUp } from "../services/Login.service";

class Login extends Component {
    state = {
        name: "",
        password: "",
        email: ""
    }
    render(): React.ReactNode {
        const csignUp = () => {
            
        }
        const csignIn = () => {
            signIn(new User(this.state.name, this.state.email, this.state.password));
        }
        const getAllUsers =()=>{
            getAllUser();
        }
        return <div>

            <form id="userForm">
                <input type="text" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter name" value={this.state.name} onChange={e => this.setState({ name: e.currentTarget.value })} /><br />
                <input type="email" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter email" value={this.state.email} onChange={e => this.setState({ email: e.currentTarget.value })} /><br />
                <input type="password" aria-label="Username" aria-describedby="basic-addon1" className="form-control" placeholder="enter password" value={this.state.password} onChange={e => this.setState({ password: e.currentTarget.value })} /><br />
            </form>
            <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" onClick={csignIn}>signIn</button>
            <button aria-label="Username" aria-describedby="basic-addon1" className="form-control" onClick={csignUp}>signUp</button>

        </div>
    }
}

export default Login;