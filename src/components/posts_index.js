import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class IndexPost extends Component  {
  componentWillMount() {
      this.props.fetchPosts();

  }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <div className="well" key={post.id}>
                    <Link to={"posts/" + post.id } >
                        <h4>{post.title}</h4>
                        <p><strong>Categories:</strong> {post.categories}</p>
                    </Link>
                </div>
            )
        })
    }

  render() {
  return (
      <div className="top container">
        <div className="col-sm-8 col-md-8 col-sm-offset-1 col-md-offset-1">
            <h2> List of Posts </h2>
          <div className=" block">
            <div >
                {this.renderPosts() }
            </div>
          </div>
        </div>
        <div className="pull-right ">
          <Link to="/posts/new" className="btn btn-raised btn-info"> Add post </Link>
        </div>
      </div>
  )

 }
}


function mapStateToProps(state) {
    // console.log('hello' , state.posts.all);
    return {
        posts: state.posts.all
    }
}



export default connect(mapStateToProps , { fetchPosts })(IndexPost);
