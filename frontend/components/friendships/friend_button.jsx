import React from 'react';
import { Link } from 'react-router-dom';

//make friends logic and button for list
class FriendButton extends React.Component {
    constructor(props) {
      super(props);
      this.fetched = false;

      this.handlefriend = this.handlefriend.bind(this)
      let temp = this.props.profile.followed_by_current_user
      if(!!temp){
        this.state = {
          followed: true
        } 
      } else {
        this.state = {
          followed: false
        }
      }
    }
    refetch() {
      this.fetched = false;
    }

    componentDidMount() {
      console.log(this.props)
      this.props.fetchUsers();
      this.props.fetchUser(this.props.profile.id); 
    }
    
    handlefriend(e){
      // e.preventDefault()
      if (this.props.profile.followed_by_current_user){
        this.refetch();
        console.log(this.props.profile)
        this.props.deleteFriend(this.props.profile.id).then(() => {
          this.setState({ followed: false });
        });
      } else {
        this.refetch();
        this.props.createFriend(this.props.profile.id).then(() => {
          this.setState({ followed: true });
        });
      }
      
    }
    
    render(){
      // console.log(this.props)
      return(
        <div >
          {(this.props.profile.followed_by_current_user) ? (
            <button className='friend-button' onClick={() =>this.handlefriend()}>unfriend</button>
          ) : (
            <button className='friend-button' onClick={() =>this.handlefriend()}>friend</button>
          )}

        </div>
      )
    }
}
export default FriendButton;