import {MdChair} from 'react-icons/md'
import {useState} from 'react'

const Seat = props => {
  const [isSelected, setIsSelected] = useState(false)

  const {data, handleSeatClick, category} = props
  const {seatNumber, isAvailable, id, seatType} = data
  const className = isAvailable ? 'available seat' : 'unavailable seat'
  const buttonClassName = isSelected ? 'selected seat' : className

  const onSeatClick = () => {
    setIsSelected(prev => !prev)
    handleSeatClick(id)
  }

  return (
    <button
      type="button"
      onClick={onSeatClick}
      disabled={!isAvailable || !(category === seatType)}
      className="seat-button"
    >
      <MdChair className={buttonClassName} />
      <p>{seatNumber}</p>
    </button>
  )
}

export default Seat
