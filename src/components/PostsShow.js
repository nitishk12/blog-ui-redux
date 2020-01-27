import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function PostsShow(props) {
    return (
        <div>
            <h1>USER NAME : {props.user.name}</h1>
            <h2> TITLE : {props.post.title}</h2>
            <h3>BODY : {props.post.body}</h3>
            <hr />
            <h3>COMMENTS : {props.comments.map(comment => {
                return <li key={comment.id}>{comment.body}</li>
            })}</h3>
            <Link to={`/users/${props.user.id}`}>More Post of author : {props.user.name}</Link>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(user => {
            const userId = state.posts.find(post => post.id == props.match.params.id).userId
            return user.id === userId
        }),
        post: state.posts.find(post => post.id == props.match.params.id),
        comments: state.comments.filter(comment => comment.postId == props.match.params.id)
    }
}
export default connect(mapStateToProps)(PostsShow)