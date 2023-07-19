const SearchMinature = ({image, title, views, channelName, date, description, avatar}) => {
  return (
    <div className='searchMinature'>
      <div className="searchMinatureImageDiv"><img className="searchMinatureImage" src={image} alt={title} /></div>
      <div className="searchMinatureTitle">{title}</div>
      <div className="searchMinatureInfo"><div className="searchMinatureViews">{views}</div> • <div className="searchMinatureDate">{date}</div></div>
      <div className="searchMnatureAvatarDiv"><img className='searchMinatureAvatar' src={avatar} alt={channelName} /></div>
      <div className="searchMinatureChannel">{channelName}</div>
      <div className="searchMinatureDescription">{description}</div>
    </div>
  )
}

export default SearchMinature;