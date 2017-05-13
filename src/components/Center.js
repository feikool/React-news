import React,{ Component } from 'react';
import { Route,Link } from 'react-router-dom';
import {Header} from './Header';
// 列表页
class List extends Component{
    state={
        data:[]
    };

    componentDidMount(){
        // this.props.match.params  获取路由 :cate  所匹配的参数
        this.FetchData(this.props.match.params.cate ||1);
    };

    // 生命周期函数: 组件props发生改变时被调用, 传入的参数,为改变props后的组件对象信息
    componentWillReceiveProps(nextProps){
        this.FetchData(nextProps.match.params.cate||1);
    };
    FetchData=(id)=>{
        fetch(`/news?id=${id}`)
            .then(res=>res.json())
            .then(res=> {
                this.setState({
                    data: res
                });
            });
    };
    render(){
        var el = this.state.data.map((v,i)=>
        <Link key={i} to={{pathname:`/main/${this.props.match.params.cate||1}/${v.id}`,state:{url:v.url}}}>
            <div className="lis-item">
                <div className="lis-img" style={{background:`url(${v.thumbnail})`}}></div>
                <div className="lis-text">{v.title}</div>
            </div>
        </Link>
        );
        return(
            <div>
                <Header/>
                <div className="list-wrap">
                    {el}
                </div>
            </div>
        )
    }
}

// ================ 详情页  ==================
class Page extends Component{
    render(){
        return(
                <iframe src={this.props.location.state.url}></iframe>
        )
    }
}
// ===========  路由  =========================
class Center extends Component{
    render(){
        return(
            <div>
                <Route exact path="/main/:cate" component={List}/>
                <Route exact path="/main/:cate/:id" component={Page}/>
            </div>
        )
    }
}
export default Center;