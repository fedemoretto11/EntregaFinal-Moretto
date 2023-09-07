import '../../styles/style.scss'

function Loader() {

  return (
    <div className="loaderContainer w-screen flex justify-center items-center absolute">
      <div className="loader flex flex-col gap-2 justify-center items-center w-[20rem] h-[20rem]">
        <div className="loader__spinner"></div>
        <p className='loader__text'>Cargando...</p>
      </div>
    </div>
  )
}
export default Loader