import React, { Component } from "react";
import { connect } from 'react-redux';
import { thunk_fetch_user_action } from './actions/fetchAction';
import UserInfo from './UserInfo';

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const user = this.getUserName.value;
    this.props.dispatch(thunk_fetch_user_action(user));
    this.getUserName.value = '';
  }


  render() {
    
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h3 className="Title">Enter the Github UserName</h3>
          <input type="text" required placeholder="Enter Github Username"
            ref={input=> (this.getUserName = input)} />
          <button className="button">Submit</button>
        </form>
        {this.props.loading ? <h3>Loading...</h3> : null}
        {this.props.error ? (
          <h3 className="Error">Error! {this.props.error.message}</h3>
          ) : null}
        {Object.keys(this.props.user).length > 0 ? (
          <UserInfo user={this.props.user} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userData,
  loading: state.user.isFetching,
  error: state.user.error
});

export default connect(mapStateToProps)(App);
