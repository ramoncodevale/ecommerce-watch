import './Navbar.css'

import { BiSolidWatchAlt, BiSolidChevronDown, BiSolidUser, BiSolidCart } from 'react-icons/bi'
import { AiOutlineSearch } from  'react-icons/ai'



const Navbar = () => {
    return (
        <nav>
            <div className="watch-logo">
            <BiSolidWatchAlt fontSize={27} color='#ffffff' />
            <p className='logo-nav'>Mohid</p>
            </div>
            <ul className='ul-list'>
                <li><a className='links' href="#">Home</a></li>
                <li><a className='links' href="#">Brands <BiSolidChevronDown color='#8B8E99' fontSize={15} /></a></li>
                <li><a className='links' href="#">Recent Products</a></li>
                <li><a className='links' href="#">Contact</a></li>
                <li><a className='links' href="#">About</a></li>
            </ul>
            <div className="icons">
         <div>
            <AiOutlineSearch color='#ffffff' fontSize={23} />
         </div>
         <div>
            <BiSolidUser color='#ffffff' fontSize={23}  />
         </div>
         <div>
            <BiSolidCart  color='#ffffff' fontSize={23} />
         </div>
            </div>
        </nav>
    )
}

export default Navbar