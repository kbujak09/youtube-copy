const SearchMinature = ({image, title, views, channelName, date, description, avatar, onClick}) => {

  return (
    <div onClick={onClick} className='searchMinature'>
      <div className="searchMinatureImageDiv"><img className="searchMinatureImage" src={image} alt={title} /></div>
      <div className='searchMinatureData'>
        <div className="searchMinatureTitle">{title}</div>
        <div className="searchMinatureInfo"><div className="searchMinatureViews">{views}</div> • <div className="searchMinatureDate">{date}</ div></div>
        <div className="searchMinatureChannel">
          <div className="searchMinatureAvatarDiv"><img className='searchMinatureAvatar' src={avatar} alt={channelName} /></div>
          <div className="searchMinatureChannelName">{channelName}</div>
        </div>
        <div className="searchMinatureDescription">{description}</div>
      </div>
    </div>
  )
}

export default SearchMinature;