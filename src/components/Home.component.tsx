import React from "react";
import { useSelector, useDispatch } from 'react-redux'

// import {ThemeContext} from '../data/DataProducts'
type typeProps={
    value: string;
}
export class Home extends React.Component <typeProps> {

    render(): React.ReactNode {

        console.log("context"+this.context);
        
        console.log(this.props.value);
        
        return <div>
            <p>hello home</p>
        </div>;
    }
}

// export default Home;