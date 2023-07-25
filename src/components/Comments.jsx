import defaultAvatar from '../assets/defaultavatar.png';
import Comment from './Comment';

const Comments = ({comments, data}) => {
  return (
    <div className='comments'>
      <div className="commentsData">
        <div className="commentsAmount">{data.items[0].statistics.commentCount + ' Comments'}</div>
        <div className="commentsSort"><i className='material-symbols-outlined'>Sort</i>Sort by</div>
      </div>
      <div className="commentsAdd">
        <div className="commentsAddAvatarDiv"><img src={defaultAvatar} alt='default' className="commentsAddAvatar" /></div>
        <div><input type="text" className="commentsAddInput" placeholder='Add a comment...'/></div>
      </div>
      {
      comments.items.map((item) => {
        return <Comment data={item.snippet.topLevelComment.snippet}/>
      })
      }
    </div>
  )
}

export default Comments;