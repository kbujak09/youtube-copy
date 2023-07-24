import { convertDate, convertViews } from './HomePage';

const Comment = ({data}) => {
  return (
    <div className="comment">
      <div className="commentAvatarDiv"><img src={data.authorProfileImageUrl} alt="avatar" className="commentAvatar" /></div>
      <div className="commentData">
        <div className="commentSegment">
          <div className="commentAuthor">{data.authorDisplayName}</div>
          <div className="commentDate">{convertDate(data.publishedAt.slice(0, 10))}</div>
        </div>
        <div className="commentText">{data.textDisplay}</div>
        <div className="commentSegment">
          <div className="commentLikes"><i className='material-symbols-outlined'>Thumb_up</i>{data.likeCount > 0 ? convertViews(data.likeCount) : null}</div>
          <div className="commentDislikes"><i className='material-symbols-outlined'>Thumb_down</i></div>
        </div>
      </div>
    </div>
  )
}

export default Comment;