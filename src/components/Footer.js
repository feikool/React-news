import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <div  className="tabbar">
                <Link to="/">首页</Link>
                <Link to="/new">新闻</Link>
                <Link to="/hot">查看</Link>
                <Link to="/me">我的</Link>
            </div>
        )
    }
}

export default Footer;