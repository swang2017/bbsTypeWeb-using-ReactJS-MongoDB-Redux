
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = { username:'', title:'', message:'', postCategory:''};
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('api/renderpost')
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        posts : json
      })
    })
  }


  // title textbox
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
    }
  handleUsernameChange(event) {
      this.setState({ username: event.target.value });
      }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
    }

  handleSubmit(event) {

    let postTitle = this.state.title;
    let username = this.state.username;
    let postMessage = this.state.message;
    let postCategory = this.props.newPostCategory;
    let parentPostId = this.props.newParentPostId;

    console.log(postCategory)

    fetch('/api/newpost',{
     method: 'POST',
     body: JSON.stringify({
       title:postTitle,
       message:postMessage,
       username:username,
       postCategory:postCategory
     }),
     headers: {"Content-Type": "application/json"}
   })
   event.preventDefault();
  }

  render()  {

    return (
      <div className="container">
      <div> You are posting to: {this.props.newPostCategory} </div>
        <form onSubmit ={this.handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input placeholder='title' name="title" value={this.state.title} onChange = {this.handleTitleChange} type="text" />
            <label htmlFor="subject">Username</label>
            <input placeholder='username' name="username" value={this.state.username} onChange = {this.handleUsernameChange} type="text" />
            <label htmlFor="subject">Message</label>
            <input placeholder='message' name="message" value={this.state.message} onChange = {this.handleMessageChange} type="text" />

            <input type="submit" value="Submit" />
        </form>

</div>
    )
  }


}

// maps the global state to the properties of the component
const mapStateToProps = state => {
  return  {
    // state.counter is a global state from the redux store
    singlepost : state.post,
    newPostCategory : state.newPostCategory,
    // newParentPostId: state.newParentPostId
  }
}

// maps the global dispatches to the properties of the component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type : "INC_COUNTER"})

  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
