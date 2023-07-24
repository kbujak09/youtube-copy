import ReactPlayer from 'react-player';
import VideoInfo from './VideoInfo';
import Description from './Description';
import Comments from './Comments';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { convertViews, convertDate } from './HomePage';

const VideoPage = () => {

  const location = useLocation();
  const [ data, setData ] = useState();
  const [ comments, setComments ] = useState();
  const [ creator, setCreator ] = useState();

  const getId = () => location.pathname.slice(7);

  const fetchData = async () => {
    const fetched = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${getId()}&key=${process.env.REACT_APP_API_KEY}`)).json();
    setData(fetched);
    const comments = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${getId()}&key=${process.env.REACT_APP_API_KEY}`)).json();
    setComments(comments);
    const channel = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2c statistics&id=${fetched.items[0].snippet.channelId}&key=${process.env.REACT_APP_API_KEY}`)).json();
    setCreator(channel);
  }

  useEffect(() => {
    fetchData();  
    console.log(data)
  }, [])


  return (
    <div id='videoPage'>
      <div className="videoContainer">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${getId()}`}
          playing={true}
          width={1280}
          height={720}
          controls={true}/>
        {data && comments && creator ? <VideoInfo data={data.items[0]} channel={creator.items[0]} comments={comments.items} videoId={getId()}/> : null}
        {data && comments && creator ? <Description text={data.items[0].snippet.description} date={convertDate(data.items[0].snippet.publishedAt.slice(0,10))} views={convertViews(data.items[0].statistics.viewCount) + ' views'}/> : null}
        {comments && data ? <Comments data={data} comments={comments}/> : null}
      </div>
    </div>
  )
}

export default VideoPage;