import React, { Component } from 'react'
import '../components/style.css';
import { UserList } from './List';
import { PostList } from './List'

export default class FetchApi extends Component {
    //created a users state.
    state = {
        users: [],
        posts: [],
        title: '',
        body: '',
        isMessageSuccess: false,
        isMessageFailure: false
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

    addPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json , text/plain , */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title, body: this.state.body })

        }).then((res) => res.json)
            .then((data) => {
                console.log(data);
                this.clearInputs()

            }

            )

    }


    setAddPost = (data) => {
        const name = data.target.name
        const value = data.target.value
        this.setState({ [name]: value })
    }

    setUsers = (data) => {
        //created a new function to set the state of users
        this.setState({ users: data })
    }

    setPost = (postData) => this.setState({ posts: postData })


    renderPost = () => {
        return this.state.posts.map((post, index) => <PostList key={index} post={post} />)
        //we have removed join from here because in react everything is javascript and we are using JSX.
    }

    clearInputs = () => {
        this.setState({
            title: '',
            body: '',
            isMessageSuccess: !this.state.isMessageSuccess

        })

    }

    submitHandler = (e) => {
        e.preventDefault()
        const {title,body} =this.state
        if ((title === '' && body === '') || (title === '') || (body === '')) {
            this.setState({ isMessageFailure: !this.state.isMessageFailure })
            return          
        }
        if (title !== '' && body !== '') {
            if (this.state.isMessageFailure) {
                //toggled the boolean variable by using the not operator for it's state
                this.setState({
                    isMessageSuccess: !this.state.isMessageSuccess,
                    isMessageFailure: !this.state.isMessageFailure
                })
                this.addPost()
                return 
              }
              if(!this.state.isMessageFailure){
                  this.setState({
                      isMessageSuccess:!this.state.isMessageSuccess
                  })
                  this.addPost()
                  return 
              }
                 
        }

    }




    //Create a functional component for rendering users 
    renderUser = () => {
        return this.state.users.map((user, index) => <UserList key={index} user={user} />)
        //we have removed join from here because in react everything is javascript and we are using JSX.
    }



    render() {

        return (
            <div>
                <nav className="navBar">
                    <button onClick={() => this.fetchUserHandler()} className="btn" id="getUser">Fetch User</button>
                    <button onClick={this.fetchPostHandler} className="btn" id="getPost">Fetch Post</button>
                    <div>
                        <button className="btn" id="addPost1">Add Post</button></div>
                </nav>
                <div id="output"> {this.renderPost()} {this.renderUser()} </div>

                <form className="addPostForm ">
                    <div className="postDiv">
                        <h3>Add Posts</h3>
                        {this.state.isMessageSuccess && <span className="notification">Post Added</span>}
                        {this.state.isMessageFailure && <span className="notification__warning">Please enter all fields</span>}

                    </div>
                    <div className="inputWrapper">
                        <input onChange={this.setAddPost} value={this.state.title} name="title" type="text" id="title" placeholder="Title" />
                        <input onChange={this.setAddPost} value={this.state.body} type="text" name="body" placeholder="Body" id="body" />
                    </div>
                    <button onClick={this.submitHandler} type="submit" id="submit">Submit</button>
                </form>
            </div>

        )
    }

}




