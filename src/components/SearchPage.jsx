import { useEffect, useState } from "react";
import SearchMinature from "./SearchMinature";
import { getAvatar, convertDate, convertViews } from './Home';
import { useNavigate } from 'react-router-dom';

const SearchPage = ({searchResult}) => {

  const [data, setData] = useState();
  const [avatars, setAvatars] = useState([]);
  const [stats, setStats] = useState([]);

  const getViews = (ids, item) => {
      for (let id of ids) {
        if (item.id.videoId === id.id) {
          return id.statistics.viewCount;
        }
      }
  } 

  useEffect(() => {
    const fetchData = async() => {
      const data = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchResult}&key=${process.env.REACT_APP_API_KEY}`)).json();
      setData(data.items);
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
      fetchData(searchResult);
  },[searchResult])

  
  return (
    data && 
    <div id='resultsOuter'>
      <div id='resultsInner'>
      {
      data.map((item) => {
        return <SearchMinature 
          date={convertDate(item.snippet.publishedAt.slice(0,10))} 
          channelName={item.snippet.channelTitle} 
          key={item.snippet.tile} title={item.snippet.title} 
          avatar={getAvatar(item.snippet.channelTitle, avatars)} 
          views={convertViews(getViews(stats, item)) + ' views'} 
          image={item.snippet.thumbnails.medium.url}
          description={item.snippet.description}/>    
      })
      }
        </div>
      </div>
  )
}

export default SearchPage;