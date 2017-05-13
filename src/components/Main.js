import React,{ Component } from 'react';
import {Top} from './Header';
import Center from './Center';
class Main extends Component{
    state={
        url:`/main/this.props.match.params.cate`
    };
    change(t){
        this.setState({
            url:t
        })
    }
    render(){
        return(
            <div>
                <Top url={this.state.url}/>
                <Center temp={1111} />
            </div>
        )
    }
}

export default Main;