import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteUserComment = id => {
    const {commentsList} = this.state
    const fliteredComments = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: fliteredComments})
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {commentsList, name, comment} = this.state
    const commentLength = commentsList.length

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="comments-input-container">
            <div className="input-container">
              <h1 className="heading">Comments</h1>
              <p className="description">
                Say something about 4.O Technologies
              </p>
              <form
                className="comment-form-container"
                onSubmit={this.onAddComment}
              >
                <input
                  onChange={this.onChangeName}
                  type="text"
                  placeholder="Your Name"
                  className="your-name"
                  value={name}
                />
                <textarea
                  className="your-comment"
                  onChange={this.onChangeComment}
                  placeholder="Your Comment"
                  cols="30"
                  rows="8"
                  value={comment}
                ></textarea>
                <div className="button-container">
                  <button type="submit" className="add-comment-button">
                    Add Comment
                  </button>
                </div>
              </form>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-img"
              />
            </div>
          </div>
          <hr className="separator" />
          <div className="comments-count-container">
            <p>
              <span className="comments-count">{commentLength}</span> Comments
            </p>
          </div>

          <ul className="comment-item-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                deleteUserComment={this.deleteUserComment}
                toggleLike={this.toggleLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
