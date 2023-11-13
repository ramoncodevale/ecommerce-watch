import './Products.css'

import { detailsWatchs } from '../../constants/data'
import Card from '../../components/Card/Card'

const Products = () => {
  return (
    <section className='products'>
        {detailsWatchs.map((item)=> (
          <Card  
           key={item.id}
           name={item.name}
           description={item.description}
           img={item.img}
          />
        ))}
    </section>
  )
}

export default Products