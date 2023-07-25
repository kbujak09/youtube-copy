const RecommendedMinature = ({image, title, channel, views, date, onClick}) => {
  return (
    <div onClick={onClick} className="recMinature">
      <div className="recMinatureImageDiv"><img src={image} alt={title} className="recMinatureImage" /></div>
      <div className="recMinatureInfo">
        <div className="recMinatureTitle">{title}</div>
        <div className="recMinatureChannel">{channel}</div>
        <div className="recMinatureSegment">
          <div className="recMinatureViews">{views}</div>
          <div className="recMinatureDate">{date}</div>
        </div>
      </div>
    </div>
  )
}

export default RecommendedMinature;