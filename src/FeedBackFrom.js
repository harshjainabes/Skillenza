import React from 'react';
class FeedBackForm extends React.Component {
    constructor() {
      super();
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      
      fetch('http://localhost:8080/employees/', {
            method: 'POST',            
            body: JSON.stringify({

                'firstName': data.get('firstName'),
                'lastName': data.get('lastName'),
                'email': data.get('email')

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            console.log(response.status);
            
        });


    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">Enter firstName</label>
          <input id="firstName" name="firstName" type="text" />
  
          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="text" />
  
          <label htmlFor="lastName">Enter your birth date</label>
          <input id="lastName" name="lastName" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }
  export default FeedBackForm;