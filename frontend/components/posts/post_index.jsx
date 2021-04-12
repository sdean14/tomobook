import React from "react";
import { connect } from "react-redux";
import PostIndexItem from './post_index_item'
import PostCreateFormContainer from './post_create_form_container'

class PostIndex extends React.Component{
  constructor(props){
    super(props)

  }
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){

    return(
      <div>
        <div className='wall'>
          <div className='mid-column'>

          <PostCreateFormContainer/>
          <div className='post'>
            <ul>
              { this.props.posts.map(post => (
                <PostIndexItem
                post={post}
                deletePost={this.props.deletePost}
                key={post.id} />
                ))}
            
            </ul>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

export default PostIndex;