import React, { Component } from 'react';

class PostsShow extends Component {
    render() {
        return (
            <div>
                Show individual Post {this.props.params.id}
            </div>
        )
    }
}

export default PostsShow;