import {useState} from 'react'
import {v4} from 'uuid'
import {MdChair} from 'react-icons/md'
import Seat from '../Seat'

import './index.css'

const seatingCapacity = [
  {
    category: 'Standard',
    displayText: 'Standard',
    id: 'Standard',
  },
  {
    category: 'Premium',
    displayText: 'Premium',
    id: 'Premium',
  },
]

const seatQuantity = [
  {
    id: 1,
    displayText: 1,
  },
  {
    id: 2,
    displayText: 2,
  },
  {
    id: 3,
    displayText: 3,
  },
  {
    id: 4,
    displayText: 4,
  },
  {
    id: 5,
    displayText: 5,
  },
  {
    id: 6,
    displayText: 6,
  },
  {
    id: 7,
    displayText: 7,
  },
  {
    id: 8,
    displayText: 8,
  },
  {
    id: 9,
    displayText: 9,
  },
  {
    id: 10,
    displayText: 10,
  },
]

const StandardSeatsData = [
  {
    seatNumber: 1,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 2,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 3,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 4,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 5,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 6,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 7,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 8,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 9,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 10,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 1,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 2,
    isAvailable: true,

    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 3,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 11,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 12,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 13,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 14,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 15,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 16,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 17,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 18,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 4,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 5,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 6,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 7,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 8,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 9,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 19,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 20,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 21,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 22,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 23,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 24,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 25,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 26,
    isAvailable: true,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 27,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 28,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 29,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 30,
    isAvailable: false,
    id: v4(),
    seatType: 'Standard',
  },
  {
    seatNumber: 10,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 11,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 12,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 13,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 14,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 15,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 16,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 17,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 18,
    isAvailable: true,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 19,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
  {
    seatNumber: 20,
    isAvailable: false,
    id: v4(),
    seatType: 'Premium',
  },
]

const BookMySeat = () => {
  const [seatsData, setSeatsData] = useState(StandardSeatsData)
  const [userInputs, setUserInputs] = useState({
    category: '',
    quantity: '',
  })
  const [selectedSeats, setSelectedSeats] = useState([])
  const [progress, setProgress] = useState('INITIAL')
  const [isCategoryBlur, setCategoryBlur] = useState(false)
  const [isQuantityBlur, setQuantityBlur] = useState(false)

  const onSubmitForm = event => {
    event.preventDefault()
    if (userInputs.category === '') {
      setCategoryBlur(true)
    } else if (userInputs.quantity === '') {
      setQuantityBlur(true)
    } else {
      setCategoryBlur(false)
      setQuantityBlur(false)
      setProgress('BOOKING')
    }
  }

  const handleSeatClick = id => {
    const filteredSeats = seatsData.filter(each => {
      if (each.id === id) {
        const {isAvailable} = each
        return {...each, isAvailable: !isAvailable}
      }
      return each
    })

    if (selectedSeats.includes(id)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== id))
    } else {
      setSelectedSeats([...selectedSeats, id])
    }
    setSeatsData(filteredSeats)
  }

  const renderForm = () => (
    <div>
      <form onSubmit={onSubmitForm} className="form-container">
        <p> Select These options to continue </p>
        <select
          name="Category"
          className="select-box"
          onBlur={() => {
            if (userInputs.category === '') {
              setCategoryBlur(true)
            } else {
              setCategoryBlur(false)
            }
          }}
          onChange={event => {
            setUserInputs(prev => ({
              ...prev,
              category: event.target.value,
            }))
          }}
          value={userInputs.category}
        >
          <option value="" disabled selected>
            Ticket Type
          </option>
          {seatingCapacity.map(each => (
            <option id={each.id} key={each.id} value={each.category}>
              {each.displayText}
            </option>
          ))}
        </select>
        <select
          className="select-box"
          onBlur={() => {
            if (userInputs.quantity === '') {
              setQuantityBlur(true)
            } else {
              setQuantityBlur(false)
            }
          }}
          onChange={event => {
            setUserInputs(prev => ({
              ...prev,
              quantity: event.target.value,
            }))
          }}
          value={userInputs.quantity}
        >
          <option value="" disabled selected>
            Quantity
          </option>
          {seatQuantity.map(each => (
            <option id={each.id} key={each.id} value={each.id}>
              {each.displayText}
            </option>
          ))}
        </select>
        <button className="submit-button" type="submit">
          Proceed
        </button>
        {isCategoryBlur && (
          <p className="error-message"> Please Enter Category Value </p>
        )}
        {isQuantityBlur && (
          <p className="error-message"> Please Enter Quantity Value </p>
        )}
      </form>
    </div>
  )

  const renderSeating = () => {
    const standardSeats = seatsData.filter(each => each.seatType === 'Standard')
    const premiumSeats = seatsData.filter(each => each.seatType === 'Premium')

    return (
      <div className="theater-layout">
        <div className="premium-seats">
          <h1>Premium Seats</h1>
          <div className="seat-row">
            {premiumSeats.map(each => (
              <Seat
                data={each}
                key={each.id}
                handleSeatClick={handleSeatClick}
                category={userInputs.category}
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="standard-seats">
          <h1>Standard Seats</h1>
          <div className="seat-row">
            {standardSeats.map(each => (
              <Seat
                data={each}
                key={each.id}
                handleSeatClick={handleSeatClick}
                category={userInputs.category}
              />
            ))}
          </div>
        </div>
        <button
          type="button"
          className="proceed-button"
          onClick={() => {
            setProgress('THANK YOU NOTE')
          }}
        >
          Proceed
        </button>
        <div className="chair-status">
          <div className="status">
            <MdChair className="available seat" />
            <p className="available">Available</p>
          </div>
          <div className="status">
            <MdChair className="unavailable seat" />
            <p className="unavailable">Unavailable</p>
          </div>
          <div className="status">
            <MdChair className="selected seat" />
            <p className="selected">Selected</p>
          </div>
        </div>
      </div>
    )
  }

  const renderThankYou = () => (
    <div className="thank-you">
      <h1 className="thank-you-title">Thank you for booking</h1>
      <p className="thank-you-message">See you in the Theatre</p>
      <button
        className="book-again-button"
        type="button"
        onClick={() => {
          setProgress('INITIAL')
          setUserInputs({quantity: '', category: ''})
        }}
      >
        Book Again
      </button>
    </div>
  )

  const renderBookMySeat = () => {
    switch (progress) {
      case 'INITIAL':
        return renderForm()
      case 'BOOKING':
        return renderSeating()
      case 'THANK YOU NOTE':
        return renderThankYou()
      default:
        return null
    }
  }

  return (
    <div className="back">
      <div className="header">
        <div>
          <h1>RRR</h1>
          <p>Time : 10.00 AM</p>
          <p>Theatre : PVR cine hall</p>
        </div>
        <button
          type="button"
          className="proceed-button"
          onClick={() => {
            setProgress('INITIAL')
          }}
        >
          Filters
        </button>
      </div>
      <div className="book-my-seat">{renderBookMySeat()}</div>
    </div>
  )
}

export default BookMySeat
