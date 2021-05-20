import React from 'react';


class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        body: '',
        commenter_id: this.props.currentUser.id,
        post_id: null,
      }

    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(this.props, 'ooooo')
  }

 
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.post_id){
      let newComment = this.state;
      newComment.post_id = this.props.post_id
      this.props.createComment(newComment);
    }

  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.body}
              onChange={this.update('body')}
              placeholder={'Write a comment...'}
              // post_id={this.props.post_id}
            />
        </form>

      </div>
    )
  }
}

export default CommentForm;