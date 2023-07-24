import RecommendedMinature from "./RecommendedMinature";
import { convertDate, convertViews } from "./HomePage";

const Recommended = ({data, stats}) => {
  
  let i = 0;

  return (
    <>
      {
        data.items.map((item) => {
          return <RecommendedMinature image={item.snippet.thumbnails.medium.url} title={item.snippet.title} channel={item.snippet.channelTitle}
          date={convertDate(stats.items[i].snippet.publishedAt.slice(0,10))} views={convertViews(stats.items[i++].statistics.viewCount) + ' views'}/>
        })
      } 
    </>
  )
} 

export default Recommended;