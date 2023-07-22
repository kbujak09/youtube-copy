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
          <button className="videoSubButton videoButton">Subscribe</button>
        </div>
        <div className="videoChannelButtons">
          <div className="videoLikes videoButton">
            <div className="material-symbols-outlined ">thumb_up</div>{convertViews(data.statistics.viewCount)}
          </div>
          <div className="videoDislikes videoButton">
            <div className="material-symbols-outlined">Thumb_down</div>
          </div>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default VideoInfo;