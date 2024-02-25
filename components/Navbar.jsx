import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from '@/components'
import { useStateContext } from '@/context/StateContext'


import './Navbar.css'
import light_mode from './assets/day.png'
import dark_mode from './assets/night.png'
import search_light from './assets/search-w.png'
import seach_dark from './assets/search-b.png'
import toogle_light from './assets/day.png'
import toogle_dark from './assets/night.png'

export default function Navbar({theme, setTheme}) {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const toogle_mode = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <>
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Anha The Best</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
        // open the cart when the user clicks on the cart icon
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      {/* only show the cart when user clicks on the cart icon above */}
      {showCart && <Cart />}
    </div>
    
    <div className='navbar'>
      <img src={theme == 'light' ? light_mode : dark_mode} alt="" className='logo'/>

      <ul>
        <li> Home </li>
        <li> About </li>

      </ul>

      <div className='search-box'> 
        <input type="text" placeholder='Search'/>
        <img src={theme == 'light' ?  search_light : seach_dark} alt="" />
      </div>

      <img onClick={() => {toogle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toogle-icon'/>
    </div>
    </>
  )
}


// const Navbar = ({theme, setTheme}) => {
//   const toogle_mode = () => {
//     theme == 'light' ? setTheme('dark') : setTheme('light');
//   }
  
// }
