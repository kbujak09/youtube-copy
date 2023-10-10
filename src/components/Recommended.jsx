import RecommendedMinature from "./RecommendedMinature";
import { convertDate, convertViews } from "./HomePage";
import { useReducer, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Recommended = ({data, stats, setVideoId, videoId}) => {
  

  const [ counter, setCounter ] = useState(0);
  const navigate = useNavigate();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    forceUpdate();
  }, [videoId])

  return (
    <>
      {
        data.map((item) => {
          console.log(item);
          return <RecommendedMinature onClick={
            () => {
              setVideoId(item.id.videoId);
              navigate(`/watch/${item.id.videoId}`);
            }
          } image={item.snippet.thumbnails.medium.url} title={item.snippet.title} channel={item.snippet.channelTitle}
          date={convertDate(item.stats.snippet.publishedAt.slice(0,10))} views={convertViews(item.stats.statistics.viewCount) + ' views'}/>
        })
      } 
    </>
  )
} 

export default Recommended;