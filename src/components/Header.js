import React,{ Component } from 'react';
import {Link,Route} from 'react-router-dom';
import Logo from '../logo.svg';
class Back extends Component{
    render(){
        return(<div>
            <Link to="#">返回</Link>
        </div>)
    }
}
class Header extends Component{
    state = {
        data: [
            {id: 1, name: '要闻'},
            {id: 2, name: '财经'},
            {id: 3, name: '娱乐'},
            {id: 4, name: '体育'},
            {id: 5, name: '军事'},
            {id: 6, name: '科技'},
            {id: 7, name: '历史'},
            {id: 8, name: '精选'}
        ],
        cate:1
    };
    render(){
        let els = this.state.data.map(v=>(
            <Link key={v.id}
                  to={`/main/${v.id}`}
                  onClick={()=>this.setState({cate:v.id})}
                  className={this.state.cate==v.id?'active':''}>{v.name}</Link>
        ));
        return(
            <div>
                <div className="header">
                    <Back/>
                    <p>React新闻阅读</p>
                    <img src={Logo} alt=""/>
                </div>
                <div className="header-title">
                    <div className="scroolY">{els}</div>
                </div>
            </div>
        )
    }
}

export default Header;