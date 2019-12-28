import React, {Component} from 'react';

class UserInfo extends Component {
    
    render() {
        return (
            <div className="user-info">
                <div className="avatar">
                    <img src={this.props.user.avatar_url} alt="avatar" width="250px" />
                </div>
                <div className="content">
                    <h1>{this.props.user.name}</h1>
                    <p>
                    <strong>Bio: </strong>
                    {this.props.user.bio}
                    </p>
                    <p>
                    <strong>Location:</strong> {this.props.user.location}
                    </p>
                    <p>
                    <strong>Followers:</strong> {this.props.user.followers}
                    </p>
                    <p>
                    <strong>Following:</strong> {this.props.user.following}
                    </p>
                </div>
            </div>
        )
    }
}

export default UserInfo;