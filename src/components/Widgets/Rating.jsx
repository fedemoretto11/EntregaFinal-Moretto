import '../../styles/style.scss'

function Rating({rate}) {

  const rating = [1, 1, 1, 1, 1].fill(0, rate);

  return (
    <div className='flex pt-1'>
      {rating.map((rate) => (
        rate 
        ? <i className="star__fill text-xl bi bi-star-fill"></i> 
        : <i className="star text-xl bi bi-star"></i>
      ))}
    </div>
  )
}
export default Rating