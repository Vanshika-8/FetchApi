import React, { Component } from 'react'
import '../components/style.css';

export default class FetchApi extends Component {
//created a users state.
state={
    users:[]
}

//in this function the users from being fetched from the api
    fetchUserHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())  //the fetched data is parsed into json format.
            .then((data) => this.setUsers(data)); // Calling setUsers and passing the data.
    }

    setUsers=(data)=>{
        //created a new function to set the state of users
        this.setState({
            users:data
        })
    }

    
  renderUser=()=> {
    return  this.state.users.map((user) => {
            return <div class="user">
        <h3>User Id: ${user.id}</h3>
         <span className="userInfo">Name: ${user.name}</span>
         <span className="userInfo userName">User Name: ${user.username}</span>
         <span className="userInfo">Address: ${user.address.street},${user.address.city},${user.address.suite}</span>
         <span className="userInfo">Email: ${user.email}</span>
         <span className="userInfo">Contact: ${user.phone}</span>
         <span className="userInfo">Website-link: ${user.website}</span>
        </div> })
    //we have removed join from here because in react everything is javascript and we are using JSX.
      }


    render() {
        return (
            <div className="body">
                <nav className="navBar">
                    <button onClick={this.fetchUserHandler} id="getUser">Fetch User</button>
                     </nav>
                <div  id="output"> {this.renderUser()}</div>
            </div>
        )
    }

}

