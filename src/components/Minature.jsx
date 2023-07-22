const Minature = ({image, avatar, title, channelName, views, date, onClick}) => {
  return (
    <div onClick={onClick} className='minature'>
      <div className="minatureImageDiv"><img className="minatureImage" src={image} alt={title} /></div>
      <div className="minatureAvatarDiv"><img className='minatureAvatar' src={avatar} alt={channelName} /></div>
      <div className="minatureTitle">{title}</div>
      <div className="minatureChannel">{channelName}</div>
      <div className="minatureInfo"><div className="minatureViews">{views}</div> • <div className="minatureDate">{date}</div></div>
    </div>
  )
}

export default Minature;