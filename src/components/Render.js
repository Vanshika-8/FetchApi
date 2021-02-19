import React, { Component } from 'react'
import '../components/style.css';


export const Render  =(props) => {
 return <div className="user">
    <h3>User Id: {props.user.id}</h3>
    <span className="userInfo">Name: {props.user.name}</span>
    <span className="userInfo userName">User Name: {props.user.username}</span>
    <span className="userInfo">Address: {props.user.address.street},{props.user.address.city},{props.user.address.suite}</span>
    <span className="userInfo">Email: {props.user.email}</span>
    <span className="userInfo">Contact: {props.user.phone}</span>
    <span className="userInfo">Website-link: {props.user.website}</span>
</div>

}

export const RenderPost=(props)=>{
    console.log(props.post)
    return <div >
                <h3>Post Id: {props.post.id}</h3>
                <span className="userInfo">Title: {props.post.title}</span>
                <span className="userInfo">Body: {props.post.body}</span>
            </div>
       }

