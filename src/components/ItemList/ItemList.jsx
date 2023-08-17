import '../../styles/style.scss'
import Item from './Item'

function ItemList({productos}) {


  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 py-8 p-16 md:px-16 lg:px-48' >
      {productos.length === 0
      ? <p>Cargando informacion...</p>
      : productos.map((producto) => {
        return (
          <Item 
            key={producto.id}
            producto={producto}
          />
        )
      })
      }
    </section>
  )
}

export default ItemList

