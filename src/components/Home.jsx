import Minature from './Minature';
import { useState, useEffect } from 'react'; 
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

  const [avatars, setAvatars] = useState();
  const [dataSource, setDataSource] = useState();
  const [data, setData] = useState();
  const [more, setMore] = useState(true);

  const fetchData = async () => {
    const fetched = await (
      await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=AIzaSyDY9WP-Y6gB_aWmJvWQBouNCR8d-aCyV50')).json();
    const avatarsId = [];
    for (let data of fetched.items) {
      avatarsId.push(`id=${data.snippet.channelId}&`); 
    }
    const avatars = await (
      await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&${avatarsId.join('')}key=AIzaSyDY9WP-Y6gB_aWmJvWQBouNCR8d-aCyV50`)).json()
    setAvatars(avatars.items);
    setData(fetched.items);
    setDataSource(fetched.items);
  }

  const convertDate = (date) => {
    const inDays = Math.floor((new Date() - new Date(date))/(24*3600*1000));
    if (inDays === 1) {
      return `${inDays} day ago`;
    }
    else if (inDays < 7) {
      return `${inDays} days ago`;
    }
    else if (inDays < 30 && inDays / 7 === 1) {
      return `${inDays / 7} week ago`;
    }
    else if (inDays < 30) {
      return `${inDays / 7} weeks ago`;
    }
    else if (inDays < 365 && inDays / 30 === 1) {
      return `${inDays / 30} month ago`;
    }
    else if (inDays < 365) {
      return `${inDays / 30} months ago`;
    }
    else if (inDays / 365 === 1) {
      return `${inDays / 365} year ago`;
    }
    else {
      return `${inDays / 365} years ago`;
    }
  }

  const convertViews = (views) => {
    if (views < 1000) {
      return views;
    }
    else if (views < 10000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    else if (views < 1000000) {
      return `${(views / 1000).toFixed(0)}K`;
    }
    else if (views < 10000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    }
    else {
      return `${(views / 1000000).toFixed(0)}M`;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getAvatar = (channelTitle, channels) => {
    for (let channel of channels) {
      if (channel.snippet.title === channelTitle) {
        return channel.snippet.thumbnails.default.url;
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

  return (
    <div id="homepage">
      {!data ? <></> : <InfiniteScroll dataLength={data.length} next={addMoreData} hasMore={more} loader={<div className='loadingDiv'></div>}>{
        data.map((item) => {
          return <Minature date={convertDate(item.snippet.publishedAt.slice(0,10))} channelName={item.snippet.channelTitle} key={item.snippet.tile} title={item.snippet.title} avatar={getAvatar(item.snippet.channelTitle, avatars)} views={convertViews(item.statistics.viewCount) + ' views'} image={item.snippet.thumbnails.medium.url}/>
        })}
        </InfiniteScroll>}
    </div>
  )
}

export default Home;