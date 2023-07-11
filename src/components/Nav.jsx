import Element from './NavElement';
import SignIn from './SignIn';

const Nav = () => {
  return (
    <div id='nav'>
      <div className='navBlock'>
        <Element name='Home' src='Home'/>
        <Element name='Shorts' src='60fps'/>
        <Element name='Subscriptions' src='Subscriptions'/>
      </div>
      <hr/>
      <div className='navBlock'>
        <Element name='Library' src='Video_Library'/>
        <Element name='History' src='History'/>
      </div>
      <hr/>
      <div className='navBlock navNotLogged'>
        <div className='navNotLoggedText'>Sign in to like videos, comment and subscribe.</div>
        <SignIn/>
      </div>
      <hr/>
      <div className="navBlock">
        <div className="navBlockTitle">Explore</div>
        <Element name='Trending' src='Trending_Up'/>
        <Element name='Music' src='Music_Note'/>
        <Element name='Films' src='Movie'/>
        <Element name='Live' src='Podcasts'/>
        <Element name='Gaming' src='Stadia_Controller'/>
        <Element name='News' src='News'/>
        <Element name='Sport' src='Trophy'/>
      </div>
      <hr/>
      <div className="navBlock">
        <Element name='Browse Channels' src='Add_Circle'/>
      </div>
      <hr/>
      <div className="navBlock">
        <Element name='Settings' src='Settings'/>
        <Element name='Report History' src='Flag'/>
        <Element name='Help' src='Help'/>
        <Element name='Send feedback' src='Feedback'/>
      </div>
      <hr/>
    </div>
  )
}

export default Nav;