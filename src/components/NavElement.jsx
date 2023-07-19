const NavElement = ({name,src, changeLocation}) => {

  return (
    <div onClick={() => {if (name === 'Home') {changeLocation('/')}}} className='navElement'>
      <div className='navElementIconDiv'><i className='material-symbols-outlined'>{src}</i></div>
      <div className='navElementTitle'>{name}</div>
    </div>
  )
}

export default NavElement;