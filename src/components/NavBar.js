import logo from '../logo.png'

function NavBar() {

  return <>
    <div className='navbar-container'>
      <div className='navbar-icon-container'>
        <img className='navbar-icon' src={logo} />
        <div className='navbar-title'>PlantMD</div>
      </div>
      <div className='navbar-links'>
        <div className='navbar-search'>
          Search
        </div>

        <div className='navbar-favorites'>
          Favorites
        </div>
      </div>
    </div>

  </>
}


export default NavBar;