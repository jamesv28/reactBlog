import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link } from 'react-router';

class PostsShow extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then( () => {
                this.context.router.push('/');
            });
    }

    render() {

        const post = this.props.post;
        if(!this.props.post) {
            return (
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
            )
        }
        return (
            <div>
                <div className="jumbotron col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">

                    <h1 className="text-center"> {post.title} </h1>
                    <div className="text-center">
                        <span className="label label-primary">{post.categories} </span>
                    </div>
                    <p>{post.content}</p>
                    <div className="text-center">
                        <Link to="/" className="btn btn-raised btn-info ">Go Back </Link>
                        <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger btn-raised">Delete </button>
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {post: state.posts.post};
}
export default connect(mapStateToProps, {fetchPost, deletePost} )(PostsShow);