
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext, hasMasterSpinner} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export class Home extends Component {

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

    let jobsLiItems = this.state.posts.map((post,index) => {
      if(post.postCategory === "jobs" && Object.keys(post.title).length !==0)
      return  <div key={index} className="post">
                <li className = "postListItem">
                <div className="postTitleLine">
                    <div className="postTitle"><Link className="linkToPost" to='/postDetails' onClick={() => this.props.showPostDetails(post._id, post.postCategory)} >{post.title}</Link> </div>
                    <div className="postUserAndTime">{post.username}</div>
                    <div className="postUserAndTime">{post.datefield}</div>
                </div>
                </li>
              </div>
    })

    let fleaMarketLiItems = this.state.posts.map((post,index) => {
      if(post.postCategory === "fleaMarket" && Object.keys(post.title).length !==0)
      return  <div key={index} className="post">
                <li className = "postListItem">
                <div className="postTitleLine">
                    <div className="postTitle"><Link className="linkToPost" to='/postDetails' onClick={() => this.props.showPostDetails(post._id, post.postCategory)} >{post.title}</Link> </div>
                    <div className="postUserAndTime">{post.username}</div>
                    <div className="postUserAndTime">{post.datefield}</div>
                </div>
                </li>
              </div>
    })

    let yellowPageLiItems = this.state.posts.map((post,index) => {
      if(post.postCategory === "yellowPage" && Object.keys(post.title).length !==0)
      return  <div key={index} className="post">
                <li className = "postListItem">
                <div className="postTitleLine">
                    <div className="postTitle"><Link className="linkToPost" to='/postDetails' onClick={() => this.props.showPostDetails(post._id, post.postCategory)} >{post.title}</Link> </div>
                    <div className="postUserAndTime">{post.username}</div>
                    <div className="postUserAndTime">{post.datefield}</div>
                </div>
                </li>
              </div>
    })

    return (
      <div className="containerHomePage">
        <div className ="imgCarousel">

           <CarouselProvider
             naturalSlideWidth={100}
             naturalSlideHeight={50}
             totalSlides={4}
           >
           <Slider>
             <Slide index={0}><Image src="http://partners-dynamic.bdxcdn.com/Images/Homes/PerryH68/max1500_16017580-150831.jpg"/></Slide>
             <Slide index={1}><Image src="https://cdn.tollbrothers.com/communities/12715/images/Dad-and-Son-Biking_1O7A0535_4000x2667_1920.jpg"/></Slide>
             <Slide index={2}><Image src="https://image.dynamixse.com/crop/1600x750/q80/http://cdn.dynamixse.com/typhoontexascom/typhoontexascom_307485551.png"/></Slide>
             <Slide index={3}><Image src="https://19ecc05a05d7c6bd5508-fe453cfe00977a743e98d480a2f68fee.ssl.cf1.rackcdn.com/layoutimgs/hero/1253m.jpg"/></Slide>
             </Slider>

             <ButtonBack>Back</ButtonBack>
             <ButtonNext>Next</ButtonNext>
           </CarouselProvider>

         </div>

        <div className = "allColumnDiv">
          <div className ="singleColumnDiv">
            <div className = "singleColumnTitleDiv"><Link className = "linkOnPage" to="/Jobs">Jobs</Link></div>
            <ul>
             {jobsLiItems}
            </ul>
          </div>
          <div className ="singleColumnDiv">
            <div className = "singleColumnTitleDiv"><Link className = "linkOnPage" to="/fleaMarket">Flea Market</Link></div>
            <ul>
             {fleaMarketLiItems}
            </ul>
          </div>
          <div className ="singleColumnDiv">
            <div className = "singleColumnTitleDiv"><Link className = "linkOnPage" to="/yellowPage">Yellow Page</Link></div>
            <ul>
             {yellowPageLiItems}
            </ul>
          </div>
        </div>
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
    // write the code for DEC_COUNTER
    // write the code to ADD_COUNTER
    // write code for SUBTRACT_COUNTER
  }
}
// link the props and dispatches to the component
export default connect(mapStateToProps, mapDispatchToProps)(Home)
