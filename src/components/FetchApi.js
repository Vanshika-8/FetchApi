import React, { Component } from 'react'
import '../components/style.css';
import {Render } from './Render';
import{RenderPost} from './Render'

export default class FetchApi extends Component {
    //created a users state.
    state = {
        users: [],
        posts: [],
        title:'',
        body:''
    }



    //in this function the users from being fetched from the api
    fetchUserHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())  //the fetched data is parsed into json format.
            .then((data) => this.setUsers(data)); // Calling setUsers and passing the data.
    }


    fetchPostHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((resp) => resp.json())  //the fetched data is parsed into json format.
            .then((postData) => this.setPost(postData)); // Calling setUsers and passing the data.
    }

    addPost=(e)=> {
      fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json , text/plain , */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
    
        }).then((res) => res.json())
        .then((data) => this.setAddPost(data))
        e.preventDefault()
    }
    
    setAddPost=(data)=>{
        const name=data.target.name
        const value=data.target.value
        this.setState({
            [name]:value
             },
             )
    }
  
    setUsers = (data) => {
        //created a new function to set the state of users
        this.setState({
            users: data
        })
    }

    setPost = (postData) => {
        this.setState({
            posts: postData
        })
    }

   

submitHandler=(e)=>{
    e.preventDefault()
    console.log(this.state.title,this.state.body)
}

  //Create a functional component for rendering users 
    renderUser = () => {
        return this.state.users.map((user) => {
         return    <Render user={user} />  })
        //we have removed join from here because in react everything is javascript and we are using JSX.
    }

    renderPost = () => {
        return this.state.posts.map((post) => {
    return <RenderPost post={post}/>
        })
        //we have removed join from here because in react everything is javascript and we are using JSX.
    }

    render() {
    
        return (
            <div>
                <nav className="navBar">
                    <button onClick= {()=>this.fetchUserHandler()} className="btn" id="getUser">Fetch User</button>
                    <button onClick={this.fetchPostHandler} className="btn" id="getPost">Fetch Post</button>
                    <div>
                        <button onClick={this.submitHandler} className="btn" id="addPost1">Add Post</button></div>
                </nav>
                <div id="output"> {this.renderPost()} {this.renderUser()} </div>

                <form onSubmit={this.addPost} className="addPostForm ">
                    <div className="postDiv">
                        <h3>Add Posts</h3>
                        <span className="notification messageInvisible">Post Added</span>

                    </div>
                    <div className="inputWrapper">
                        <input onChange={this.setAddPost}  value={this.state.title} name="title" type="text" id="title" placeholder="Title" />
                        <input onChange={this.setAddPost} value={this.state.body} type="text" name="body" placeholder="Body" id="body" />
                    </div>
                    <button onClick={this.submitHandler}  type="submit" id="submit">Submit</button>
                </form>
            </div>

        )
    }

}




