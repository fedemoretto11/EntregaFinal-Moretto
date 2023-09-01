function ItemCounter() {
  return (
    <>
      <label htmlFor="cardDetail__btns__cantidad" className='text-sm md:text-md'>Cantidad</label>
      <select className='cardDetail__btns__cantidad__select w-12 text-center' name="cardDetail__btns__cantidad" id="cardDetail__btns__cantidad">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  )
}
export default ItemCounter