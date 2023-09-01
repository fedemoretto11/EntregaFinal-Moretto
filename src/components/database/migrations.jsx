import { addDoc, collection } from "firebase/firestore"
import { db } from "./Data"

const [data, setData] = useState([])



  function agregarDatos(){
    fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA434786&q=pedal&limit=15&sort=relevance")
      .then(response => response.json())
      .then(data => {
        const productsForBd = data.results.map(producto => {
          return {
            idMeli: producto.id,
            category: "accesorios",
            description : "",
            image: `https://http2.mlstatic.com/D_NQ_NP_${producto.thumbnail_id}-O.webp`,
            price: producto.original_price || producto.price,
            rating: Math.random() * (5 - 0 + 1) + 0 > 5 ? 5 : Math.random() * (5 - 0 + 1) + 0,
            stock: producto.installments == null ? 7 : producto.installments.quantity,
            title: producto.title//.split(" ").splice(0,5).join(" ")*/,
          }
        })
        setData(productsForBd)
      })
  }

  function agregarDescripcion(){
    data.forEach(producto => {
      fetch(`https://api.mercadolibre.com/items/${producto.idMeli}/description`)
        .then(response => response.json())
        .then(rta => {
          producto.description = rta.plain_text || producto.title;
        })
    })
    console.log("descp agregada")
    console.log(data)
  }

  function agregarDatosBase(){
    data.forEach((producto) => {
      const docAdded = addDoc(collection(db, "productos"), producto)
      console.log(producto)
    })
  }