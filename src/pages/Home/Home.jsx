import './Home.css'

import { HiOutlineSearch } from 'react-icons/hi'
import Watch from '../../assets/watch.png'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <h1 className='titulo-discover'>Discover <br></br> Most Suitable <br></br> Watches</h1>
      <p className='texto-watch'>Find the best, reliable, and cheap smart watches here. <br></br> We focus on product quality. Here you can find smart <br></br> watches of almost all brands. So why you are waiting? Just order now!</p>
      <div className="input">
        <div>
      <HiOutlineSearch fontSize={21} color='#8B8E99'/>
      <input type="text" placeholder='Find the best brands'/>
        </div>
       <button>Search</button>
      </div>
      </div>
      
      <img src={Watch} alt="foto do relógio" />
    </div>
  )
}

export default Home