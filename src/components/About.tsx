import React from "react";
import axios from "axios";


class About extends React.Component<{ params: any }, any>{
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props)
        console.log(this.props.params)
    }
    name: string | undefined;
    public fun = () => {
        console.log(this.props);
    }
    render(): React.ReactNode {
        const getUser=()=>{
            axios.get('http://localhost:3000/api/users')
            .then(res => {
              const persons = res.data;
              console.log(persons);
              
            })
        }
        return <div>
            <button onClick={getUser}></button>
            <h1>hello about</h1>
        </div>
    }
}

export default About;

