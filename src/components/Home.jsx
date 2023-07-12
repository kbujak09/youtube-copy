import Minature from './Minature';
import minature from '../assets/minature.jpeg';
import avatar from '../assets/channel.jpg';

const Home = () => {
  return (
    <div id="homepage">
      <Minature image={minature} avatar={avatar} title='dsadsadsadasdsaddsaaaaaaaaaaaaaaaadsaaaaa a' channelName='Kanał Sportowy' views='132131 views' date='6 days ago'/>
      <Minature image={minature} avatar={avatar} title='dsadsadsadasdsaddsaaaaaaaaaaaaaaaadsaaaaa a' channelName='Kanał Sportowy' views='132131 views' date='6 days ago'/>
    </div>
  )
}

export default Home;