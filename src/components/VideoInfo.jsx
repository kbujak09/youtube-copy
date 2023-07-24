import { convertViews } from './HomePage';

const VideoInfo = ({data, comments, channel}) => {

  return (
    <>
    <div id='videoInfo'>
      <div className="videoTitle">{data.snippet.title}</div>
        <div className="videoChannelInfo">
          <div className="videoAvatarDiv"><img src={channel.snippet.thumbnails.default.url} alt={data.snippet.channelId} className="videoAvatar" /></div>
          <div className="videoChannel">{data.snippet.channelTitle}</div>
          <div className="videoSubs">{convertViews(channel.statistics.subscriberCount) + ' subscribers'}</div>
          <button className="videoButton videoSubButton">Subscribe</button>
        </div>
        <div className="videoChannelButtons">
          <div className="videoLikeButtons">
            <div className="videoLikes videoButton">
              <i className="material-symbols-outlined ">thumb_up</i>{convertViews(data.statistics.viewCount)}
            </div>
            <div className="videoDislikes videoButton">
              <i className="material-symbols-outlined">Thumb_down</i>
            </div>
          </div>
          <div className='videoButton'><i className="material-symbols-outlined">Share</i>Share</div>
          <div className="videoButton"><i class="material-symbols-outlined">playlist_add</i>Save</div>
          <div className="videoButton videoButtonMore"><i class="material-symbols-outlined">more_horiz</i></div>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default VideoInfo;