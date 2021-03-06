import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                //  blog post has been created, go back to index
                this.context.router.push('/');
            })
    }
    render () {

        const {fields: {
            title, categories, content
        }, handleSubmit } = this.props;    // <- this is the same as this.handleSubmit = this.props.handleSubmit

        return (
            <div className="background row">
                <div className="container">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form-horizontal white top" role="form">
                        <fieldset>
                            <legend className="col-sm-offset-1 col-md-offset-1">Create a new Post</legend>
                            <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                                <label htmlFor="title" className="col-md-2 col-sm-2 control-label">Title </label>
                                <div className="col-md-6 col-sm-6">
                                    <input placeholder="title of blog post" classID="title" type="text"  className="form-control" {...title} />
                                    <div className=" alert-dismissible alert-danger text-danger" role="alert">
                                        {title.touched ? title.error : ''}
                                    </div>
                                </div>
                            </div>
                            <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                                <label htmlFor="categories" className="col-md-2 col-sm-2 control-label"> Category </label>
                                <div className="col-md-6 col-sm-6">
                                    <input placeholder="category type" classID="categories" type="text" className="form-control" { ...categories} />
                                    <div className=" alert-dismissible alert-danger text-danger" role="alert">
                                        {categories.touched ? categories.error : ''}
                                    </div>
                                </div>
                            </div>
                            <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                                <label htmlFor="content" className="col-sm-2 col-md-2 control-label"> Content </label>
                                <div className="col-sm-6 col-md-6">
                                    <textarea className="form-control" classID="content" placeholder="enter content here" {...content} />
                                    <div className=" alert-dismissible alert-danger text-danger" role="alert">
                                        {content.touched ? content.error : ''}
                                    </div>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <Link to="/" className="btn btn-raised btn-warning spacing"> Cancel </Link>
                                <button type="submit" className="btn  btn-raised btn-info"> Submit Post </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}


function validate(values) {
    var errors = {};

    if (!values.title) {
        errors.title = 'Enter a proper title';
    }
    if (!values.categories) {
        errors.categories = 'Enter at least one category';
    }
    if(!values.content) {
        errors.content = 'Enter some content';
    }
    return errors;
}

// connect first argument matchStateToProps and then matchDispatchToProps
// redux-form is form config second is mapStateToProps, 3rd is matchDispatchtoprops
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);
