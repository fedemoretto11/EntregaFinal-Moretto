import '../../styles/style.scss'
import Item from './Item'
import Loader from '../Widgets/Loader'

function ItemList({ products }) {


  return (
    products.length === 0
    ? <Loader />
    :  (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 py-8 p-16 md:px-16 lg:px-48' >
          {products.map((product) => {
          return (
            <Item 
              key={product.id}
              producto={product}
            />
          )
        })}
        </section>
      )
  )
}

export default ItemList

