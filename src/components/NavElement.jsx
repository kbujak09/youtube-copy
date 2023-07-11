const NavElement = ({name,src}) => {
  return (
    <div className='navElement'>
      <div className='navElementIconDiv'><i className='material-symbols-outlined'>{src}</i></div>
      <div className='navElementTitle'>{name}</div>
    </div>
  )
}

export default NavElement;