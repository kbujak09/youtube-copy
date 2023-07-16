import Nav from './Nav';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';

const Content = () => {
  return (
    <div id='content'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Content;