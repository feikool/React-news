import React,{ Component } from 'react';
import { Route } from 'react-router-dom';
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
        fetch(`/news/${id}`)
            .then(res=>res.json())
            .then(res=> {
                this.setState({
                    data: res
                });
            });
    };
    render(){
        var el = this.state.data.map((v,i)=>
            <div className="lis-item" key={i}>
                <div className="lis-img" style={{background:`url(${v.thumbnail})`}}></div>
                <div className="lis-text">{v.title}</div>
            </div>
        );
        return(
            <div>
                {el}
            </div>
        )
    }
}
class Center extends Component{
    render(){
        return(
            <div>
                <Route exact path="/main/:cate" component={List}/>
            </div>
        )
    }
}

export default Center;