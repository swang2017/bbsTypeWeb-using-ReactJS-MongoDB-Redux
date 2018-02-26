
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

export class YellowPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts : []
    }
  }
  componentDidMount() {
    fetch('/api/renderpost')
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        posts : json
      })
    })
  }
  render() {

    let postsLiItems = this.state.posts.map((post,index) => {
      if(post.postCategory === "yellowPage" && Object.keys(post.title).length !==0)
      return  <div key={index} className="post">
                <li>
                <div className="postTitleLine">
                    <div className="postTitle"><Link className="linkToPost" to='/postDetails' onClick={() => this.props.showPostDetails(post._id, post.postCategory)} >{post.title}</Link> </div>
                    <div className="postUserAndTime">{post.username}</div>
                    <div className="postUserAndTime">{post.datefield}</div>
                </div>
                </li>
              </div>
    })

    return (
      <div className="container">
      <div className="pageTitle">
      <div className="newPostTitle"><Link className = "linkOnPage" onClick={() => this.props.passPostCategory(window.location.pathname.split("/").pop())} to="/newPost">New Post</Link></div>
      <div className="pageLocation">Your Location: {window.location.pathname.split("/").pop()}</div>
      </div>
      <ul>
       {postsLiItems}
      </ul>
      </div>
    );
  }
}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    ctr : state.counter
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    showPostDetails : (postId, postCategory) => dispatch({type : "SHOW_SINGLE_POST", postId : postId, postCategory: postCategory }),
    passPostCategory : (postCategory) => dispatch({type : "PASS_POST_CATEGORY", postCategory : postCategory})

  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(YellowPage)
