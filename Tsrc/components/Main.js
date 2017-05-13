import React, {Component} from 'react';
import './Main.css';
import {
  Route,
  Link
} from 'react-router-dom';
//noinspection JSUnresolvedVariable
import logo from '../logo.svg';
import Tabbar from './Tabbar';

class Header extends Component {
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
    ]
  };

  // componentDidMount() {
  //   //noinspection JSUnresolvedFunction
  //   fetch('/cate')
  //     .then(res=>res.json())
  //     .then(data=> {
  //       this.setState({
  //         data: data.reverse()
  //       })
  //     })
  // }

  render() {
    var els = this.state.data.map(v=>
      <Link key={v.id} to={`/main/${v.id}`}
      /*<Link key={v.id} to={`/news?id=${v.id}`}*/
            className={this.props.cate==v.id?'active':''}
            onClick={()=>this.setState({cate:v.id})}>
        {v.name}
      </Link>
    );
    return (
      <div className="header">
        <div className={`menu-content`}>
          {els}
        </div>
        <div className="logo">
          <img className={this.props.l?'rotate':''} src={logo} height={25} alt=""/>
        </div>
      </div>

    )
  }
}

class List extends Component {
  state = {
    loading: true,
    data: []
  };

  componentDidMount() {
    this.fetchData(this.props.match.params.cate || 1);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchData(nextProps.match.params.cate || 1);
  }

  fetchData = (id)=> {
    this.setState({loading: true});
    console.log(id);
      // fetch(`/news/${id}`)
    fetch(`/news?id=${id}`)
      .then(res=>res.json())
      .then(res=> {
        this.setState({
          loading: false,
          data: res
        });
      });
  };

  render() {
    //noinspection JSUnresolvedVariable
    var els = this.state.data.map(v=>
      <Link key={v.id} to={
        {
        pathname:`/main/${this.props.match.params.cate||1}/${v.id}`,
        state:{url:v.url}
        }
      }>
        <div className="card">
          <div className="left" style={{background:`url(${v.thumbnail}) no-repeat center/cover`}}></div>
          <div className="right">
            {v.title}
          </div>
        </div>
      </Link>
    );
    return (
      <div>
        <Header l={this.state.loading} cate={this.props.match.params.cate||1}/>
        <div className="content">
          {els}
        </div>
        <Tabbar/>
      </div>
    )
  }
}

import Back from './Back';

class Show extends Component {
  render() {
    // this.props.location
    return (
      <div>
        <Back url={`/main/${this.props.match.params.cate}`}/>
        <iframe src={this.props.location.state.url}
                style={{border:'none',width:'100%',height:'100vh'}}></iframe>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={List}/>
        <Route exact path="/main" component={List}/>
        <Route exact path="/main/:cate" component={List}/>
        <Route path="/main/:cate/:id" component={Show}/>
      </div>
    )
  }
}

export default Main;
