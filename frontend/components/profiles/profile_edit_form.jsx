import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.profile;            
        this.state.photoFile = null;
        this.state.photoUrl= null;
         this.state.redirect = false;
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.props.updateProfile(this.state);
    //     // this.setState({ redirect: `/users/${this.state.id}/show`})
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
    
          this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
      }

      handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[username]', this.state.username);
        formData.append('user[birthday]', this.state.birthday);
        if (this.state.photoFile) {    
          formData.append('user[photo]', this.state.photoFile);
        }
        this.props.updateProfile(formData, this.state.id);
        this.setState({ redirect: `/users/${this.state.id}/show`})
      }



    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }
    render() {
      if(this.state.redirect){
          return(
              <Redirect to={this.state.redirect}/>
          )
      }
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div> 

                <form className='profile-edit-form' onSubmit={this.handleSubmit}>
                    <p>Profile</p> 
                    <label className='edit-p'>Name:
                    <input className='edit-p'
                        type='text'
                        value={this.state.username}
                        onChange={this.update('username')} />
                    </label>
                    <label className='edit-p'>Birthday:
                    <input
                        className='edit-p'
                        type='date'
                        value={this.state.birthday}
                        onChange={this.update('birthday')} />
                    </label>Photo:
                    <input type="file"
                        onChange={this.handleFile.bind(this)}
                    />
          {preview}
                    {/* <Link to={`/users/${this.state.id}/show`}> */}
                        <button className='profile-edit-button' type='submit'>Update Profile</button>
                    {/* </Link> */}

                </form>
            </div>
        )
    }
}

export default ProfileEditForm;