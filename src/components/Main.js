import React,{ Component } from 'react';
import {Top} from './Header';
import Center from './Center';
class Main extends Component{
    render(){
        return(
            <div>
                <Top/>
                <Center/>
            </div>
        )
    }
}

export default Main;