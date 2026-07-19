import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
]

const BookingSection = () => {
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time!")
      return
    }
    navigate('/login')
  }

  // Next 7 days generate karo
  const getDates = () => {
    const dates = []
    for (let i = 0; i < 7; i++) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      dates.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        full: date.toISOString().split('T')[0],
      })
    }
    return dates
  }

  return (
    <div className="w-80 flex-shrink-0">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">

        {/* Header */}
        <h3 className="text-slate-800 font-bold text-lg mb-6">
          Book Appointment
        </h3>

        {/* Select Date */}
        <div className="mb-6">
          <p className="text-slate-700 font-semibold text-sm mb-3">
            Select Date
          </p>
          <div className="grid grid-cols-4 gap-2">
            {getDates().map((d, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(d.full)}
                className={`flex flex-col items-center py-2 px-1 rounded-xl text-xs transition-all ${
                  selectedDate === d.full
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#EFF6FF] text-slate-600 hover:border-blue-300'
                }`}
              >
                <span className="font-medium">{d.day}</span>
                <span className="text-lg font-bold">{d.date}</span>
                <span>{d.month}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Select Time */}
        <div className="mb-6">
          <p className="text-slate-700 font-semibold text-sm mb-3">
            Select Time
          </p>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-xl text-xs font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#EFF6FF] text-slate-600 hover:border-blue-300'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Summary */}
        {selectedDate && selectedTime && (
          <div className="bg-[#EFF6FF] rounded-xl p-4 mb-6">
            <p className="text-slate-600 text-xs font-medium mb-2">
              Appointment Summary
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-blue-500 text-xs">📅</span>
              <span className="text-slate-700 text-xs font-medium">
                {selectedDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-xs">🕐</span>
              <span className="text-slate-700 text-xs font-medium">
                {selectedTime}
              </span>
            </div>
          </div>
        )}

        {/* Fee */}
        <div className="flex items-center justify-between mb-6 py-4 border-t border-b border-slate-100">
          <span className="text-slate-500 text-sm">Consultation Fee</span>
          <span className="text-slate-800 font-bold text-lg">Rs. 2,000</span>
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-blue-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all mb-3"
        >
          Book Appointment
        </button>

        <p className="text-slate-400 text-xs text-center">
          Free cancellation up to 2 hours before appointment
        </p>

      </div>
    </div>
  )
}

export default BookingSection