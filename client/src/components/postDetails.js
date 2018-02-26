
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'


export class PostDetails extends Component {

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
      if(post._id === this.props.selectedPostId)
      return  <div key={index} className="postDetails">
                <li>
                <div className="postTitleLine">
                    <div className="postTitle"> <Link className="linkToPostForm" to='/newReply' onClick={() => this.props.replyIsClicked(post._id, post.postCategory)} >Reply</Link></div>
                    <div className="postTitle"> <Link className="linkToPostForm" to='/postDetails' onClick={() => this.props.reviseIsClicked(post._id)} >Revise</Link></div>
                    <div className="postTitle"> <Link className="linkToPostForm" to='/postDetails' onClick={() => this.props.deleteIsClicked(post._id)} >Delete</Link> </div>
                    <div className="postUserAndTime">{post.datefield}</div>
                  </div>
                  <div className="titleInPostDetails"><div className="titleAndMessageFont">Title:</div> <div className="postTitle">{post.title}</div></div>
              <div className="titleAndMessageFont">Message:</div>  <div className="postMessage">{post.message}</div>
                </li>
              </div>
    })

    return (
      <div className="container">
      <div><Link className = "linkOnPage" to="/newPost">New Post</Link></div>
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
    singlepost : state.post,
    selectedPostId : state.selectedPostId
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {

    replyIsClicked :  (postId, postCategory) => dispatch({type : "PASS_PARENTPOSTID_REPLYISCLICKED", postId : postId, postCategory:postCategory}),
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
