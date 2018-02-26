import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export class Baselayout extends Component{

  render(){
    return(
      <div>
      <Header/>
      {this.props.children}
      <Footer/>
      </div>
    )
  }
}

export class Header extends Component {
  render() {
    return (
      <div className="nav">
        <div> Welcome to KatyForum</div>
        <div><Link className = "linkFont" to='/'>Home</Link></div>
        <div><Link className = "linkFont" to="/jobs">Jobs</Link></div>
        <div><Link className = "linkFont" to="/fleaMarket">FleaMarket</Link></div>
        <div><Link className = "linkFont" to="/yellowPage">Yellow Page</Link></div>
      </div>

    )
  }
}

export class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>Copyright 2018</div>
      </div>
    )
  }

}
