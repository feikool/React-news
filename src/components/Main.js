import React,{ Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Center from './Center';
class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Center/>
                <Footer/>
            </div>
        )
    }
}

export default Main;