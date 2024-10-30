// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteUserComment} = props
  const {name, comment, isLiked, id} = commentDetails

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeContainer = isLiked ? 'liked' : 'like'

  const onClickLikeIcon = () => {
    toggleLike(id)
  }

  const onClickDeleteIcon = () => {
    deleteUserComment(id)
  }
  const commentsList = props
  let commentsCount = commentsList.length
  let className

  if (commentsCount < 7) {
    className = commentsList[commentsCount]
  } else {
    commentsCount = commentsCount - 7
    className = commentsList[commentsCount]
  }

  return (
    <li className="comment-item">
      <div className="comment-details-container">
        <div>
          <p className="initial">{name[0]}</p>
        </div>
        <div className="comment-details">
          <div className="name-time-details">
            <h1 className="name">{name}</h1>
            <p className="commented-time">{formatDistanceToNow(new Date())}</p>
          </div>
          <div>
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-delete-container">
        <div className={`${likeContainer}`}>
          <button
            type="button"
            onClick={onClickLikeIcon}
            aria-label="like-button"
          >
            <img src={likeImgUrl} alt="like" />
            Like
          </button>
        </div>
        <div className="delete-icon-container">
          <button
            type="button"
            onClick={onClickDeleteIcon}
            data-testid="delete"
            aria-label="delete-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default CommentItem
