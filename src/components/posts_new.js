import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

    render () {

        const {fields: {
            title, categories, content
        }, handleSubmit } = this.props;    // <- this is the same as this.handleSubmit = this.props.handleSubmit

        return (
            <div className="background row">
                <div className="container">
                    <form onSubmit={handleSubmit(this.props.createPost)} className="form-horizontal white top">
                        <fieldset>
                            <legend className="col-sm-offset-1 col-md-offset-1">Create a new Post</legend>
                            <div className="form-group">
                                <label htmlFor="title" className="col-md-2 col-sm-2 control-label">Title </label>
                                <div className="col-md-6 col-sm-6">
                                    <input placeholder="title of blog post" classID="title" type="text"  className="form-control" {...title} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="categories" className="col-md-2 col-sm-2 control-label"> Category </label>
                                <div className="col-md-6 col-sm-6">
                                    <input placeholder="category type" classID="categories" type="text" className="form-control" { ...categories} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content" className="col-sm-2 col-md-2 control-label"> Content </label>
                                <div className="col-sm-6 col-md-6">
                                    <textarea className="form-control" classID="content" placeholder="enter content here" {...content} />
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn  btn-raised btn-info"> Submit Post </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}


// connect first argument matchStateToProps and then matchDispatchToProps
// redux-form is form config second is mapStateToProps, 3rd is matchDispatchtoprops
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
