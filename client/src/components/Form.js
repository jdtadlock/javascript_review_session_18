import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
  state = {
    name: '',
    error: '',
    showError: false
  }

  onSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state.name);
    axios.post('/api/shop', {
      name: this.state.name
    }).then(res => {
      // Maybe redirect to Main?
      this.setState({
        name: ''
      });

      this.props.history.push('/');
    }).catch(err => {
      let message = err.response.data.message;

      switch (message.code) {
        case 11000:
          this.setState({ error: 'This shop name has already been created.', showError: true });
          break;
        default:
          return '';
      }
    });
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <form className="shop-form" onSubmit={this.onSubmit}>
        <h3>Create Coffee Shop</h3>

        {this.state.showError ? (
          <p className="error-message">{this.state.error}</p>
        ) : ''}

        <input onChange={this.handleChange} type="text" placeholder="Name of Shop" value={this.state.name} />
        <button>Submit</button>
      </form>
    )
  }
}

export default withRouter(Form);