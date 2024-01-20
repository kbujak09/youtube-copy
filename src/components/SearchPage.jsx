import { useEffect, useState } from "react";
import SearchMinature from "./SearchMinature";
import { getAvatar, convertDate, convertViews } from './HomePage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom'

const SearchPage = ({searchResult, setVideoId}) => {

  const navigate = useNavigate();
  const [data, setData] = useState();
  const [dataSource, setDataSource] = useState();
  const [avatars, setAvatars] = useState([]);
  const [stats, setStats] = useState([]);
  const [more, setMore] = useState(true);

  const getViews = (ids, item) => {
      for (let id of ids) {
        if (item.id.videoId === id.id) {
          return id.statistics.viewCount;
        }
      }
  } 

  const addMoreData = () => {
    if (data.length < 200) {
      setTimeout(() => {
        setData(data.concat(dataSource));
      }, 700);
    }
    else {
      setMore(false);
    }
  }

  const fetchData = async() => {
    const data = await (
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${searchResult}&key=${process.env.REACT_APP_API_KEY}`)).json();
    setData(data.items);
    setDataSource(data.items);
  const avatarsId = [];
  for (let item of data.items) {
    avatarsId.push(`id=${item.snippet.channelId}&`); 
  }
  const avatars = await (
    await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&${avatarsId.join('')}key=${process.env.REACT_APP_API_KEY}`)).json();
    setAvatars(avatars.items);
  const ids = [];
  for (let item of data.items) {
    ids.push(item.id.videoId);
  } 
  const stats = await (
    await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${ids.join(',')}&key=${process.env.REACT_APP_API_KEY}`)).json();
  setStats(stats.items);
  }

  useEffect(() => {
      fetchData(searchResult);
  },[searchResult])

  
  return (
    data && 
    <div id='results'>
      {!data ? <></> : <InfiniteScroll 
      dataLength={data.length} 
      next={addMoreData} 
      hasMore={more} 
      loader={<div className='loadingDiv'></div>}>{
      data.map((item) => {
        if (getViews(stats, item)) {
          return <SearchMinature onClick={
            () => {
              setVideoId(item.id.videoId);
              navigate(`/watch/${item.id.videoId}`);
            }
          } setVideoId={setVideoId} 
          date={convertDate(item.snippet.publishedAt.slice(0,10))} 
          channelName={item.snippet.channelTitle} 
          key={item.snippet.tile} title={item.snippet.title} 
          avatar={getAvatar(item.snippet.channelTitle, avatars)} 
          views={convertViews(getViews(stats, item)) + ' views'} 
          image={item.snippet.thumbnails.medium.url}
          description={item.snippet.description}/>   
        }  
      })}</InfiniteScroll>}
      </div>
  )
}

export default SearchPage;