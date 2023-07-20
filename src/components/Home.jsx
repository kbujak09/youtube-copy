import Minature from './Minature';
import { useState, useEffect } from 'react'; 
import InfiniteScroll from 'react-infinite-scroll-component';

const convertDate = (date) => {
  const inMinutes = Math.floor((new Date() - new Date(date))/60000);
  const inHours = Math.floor((new Date() - new Date(date))/3600000);
  const inDays = Math.floor((new Date() - new Date(date))/(24*3600*1000));
  const inWeeks = Math.floor((new Date() - new Date(date))/(24*3600*1000*7));
  const inMonths = (inDays / 30.437).toFixed(0)
  const inYears = (inDays / 365.25).toFixed(0)

  if (inMinutes === 1) {
    return `${inMinutes} minute ago`;
  }
  else if (inMinutes < 60) {
    return `${inMinutes} minutes ago`;
  }
  else if (inHours === 1) {
    return `${inHours} hour ago`;
  }
  else if (inHours < 24) {
    return `${inHours} hours ago`;
  }
  else if (inDays === 1) {
    return `${inDays} day ago`;
  }
  else if (inDays < 7) {
    return `${inDays} days ago`;
  }
  else if (inDays < 30 && inDays / 7 === 1) {
    return `${inWeeks} week ago`;
  }
  else if (inDays < 30) {
    return `${inWeeks} weeks ago`;
  }
  else if (inDays < 365 && inDays / 30 === 1) {
    return `${inMonths} month ago`;
  }
  else if (inDays < 365) {
    return `${inMonths} months ago`;
  }
  else if (inDays / 365 === 1) {
    return `${inYears} year ago`;
  }
  else {
    return `${inYears} years ago`;
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

const getAvatar = (channelTitle, channels) => {
  for (let channel of channels) {
    if (channel.snippet.title === channelTitle) {
      return channel.snippet.thumbnails.default.url;
    }
  }
}

const Home = ({data, dataSource, avatars, setData}) => {

  const [more, setMore] = useState(true);

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
      {!data ? <></> : <InfiniteScroll 
      dataLength={data.length} 
      next={addMoreData} 
      hasMore={more} 
      loader={<div className='loadingDiv'></div>}>{
        data.map((item) => {
          return <Minature 
          date={convertDate(item.snippet.publishedAt.slice(0,10))} 
          channelName={item.snippet.channelTitle} 
          key={item.snippet.tile} 
          title={item.snippet.title} 
          avatar={getAvatar(item.snippet.channelTitle, avatars)} 
          views={convertViews(item.statistics.viewCount) + ' views'} 
          image={item.snippet.thumbnails.medium.url}/>
        })}
        </InfiniteScroll>}
    </div>
  )
}

export { getAvatar, convertDate, convertViews }
export default Home;