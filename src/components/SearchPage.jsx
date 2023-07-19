import { useEffect, useState } from "react";
import SearchMinature from "./SearchMinature";
import { getAvatar, convertDate, convertViews } from './Home';

const SearchPage = ({searchResult}) => {

  const [data, setData] = useState();
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const data = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${searchResult}&key=${process.env.REACT_APP_API_KEY}`)).json();
      setData(data.items);
      console.log(data.items)
    const avatarsId = [];
    for (let item of data.items) {
      avatarsId.push(`id=${item.snippet.channelId}&`); 
    }
    const avatars = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&${avatarsId.join('')}key=${process.env.REACT_APP_API_KEY}`)).json();
      setAvatars(avatars.items);
    }
      fetchData(searchResult);
  },[searchResult])

  return (
    data && <div id='results'>
      {
      data.map((item) => {
        console.log(item)
        return <SearchMinature 
          date={convertDate(item.snippet.publishedAt.slice(0,10))} 
          channelName={item.snippet.channelTitle} 
          key={item.snippet.tile} title={item.snippet.title} 
          avatar={getAvatar(item.snippet.channelTitle, avatars)} 
          views={convertViews(item.statistics.viewCount) + ' views'} 
          image={item.snippet.thumbnails.medium.url}/> 
      })
      }
      </div>
  )
}

export default SearchPage;