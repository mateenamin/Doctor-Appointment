import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const SignupForm = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState('patient')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    experience: '',
    fee: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields!')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    if (role === 'doctor' && (!formData.specialization || !formData.experience || !formData.fee)) {
      setError('Please fill in all doctor fields!')
      return
    }

    try {
      setLoading(true)

      const body = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role,
        ...(role === 'doctor' && {
          specialization: formData.specialization,
          experience: Number(formData.experience),
          fee: Number(formData.fee),
        }),
      }

      const response = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Signup failed!')
        return
      }

      navigate('/login')

    } catch (err) {
      setError('Something went wrong. Try again!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 w-full max-w-md">

      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-xl font-bold">D</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-1">
          Create account
        </h1>
        <p className="text-slate-400 text-sm">
          Join DocBook today
        </p>
      </div>

      {/* Role Toggle */}
      <div className="flex bg-[#EFF6FF] rounded-xl p-1 mb-6">
        <button
          type="button"
          onClick={() => setRole('patient')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
            role === 'patient'
              ? 'bg-white text-blue-500 shadow-sm'
              : 'text-slate-500'
          }`}
        >
          I am a Patient
        </button>
        <button
          type="button"
          onClick={() => setRole('doctor')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
            role === 'doctor'
              ? 'bg-white text-blue-500 shadow-sm'
              : 'text-slate-500'
          }`}
        >
          I am a Doctor
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-xl mb-6">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Name */}
        <div>
          <label className="text-slate-700 text-sm font-medium block mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Muhammad Ali"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-slate-700 text-sm font-medium block mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ali@email.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Doctor Extra Fields */}
        {role === 'doctor' && (
          <>
            <div>
              <label className="text-slate-700 text-sm font-medium block mb-2">
                Specialization
              </label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all text-slate-700"
              >
                <option value="">Select specialization</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Dentistry</option>
                <option>Dermatology</option>
                <option>Gynecology</option>
                <option>Eye Care</option>
              </select>
            </div>

            <div className="flex gap-3">
              <div className="flex-1">
                <label className="text-slate-700 text-sm font-medium block mb-2">
                  Experience (years)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="5"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
                />
              </div>
              <div className="flex-1">
                <label className="text-slate-700 text-sm font-medium block mb-2">
                  Consultation Fee (Rs.)
                </label>
                <input
                  type="number"
                  name="fee"
                  value={formData.fee}
                  onChange={handleChange}
                  placeholder="2000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
                />
              </div>
            </div>
          </>
        )}

        {/* Password */}
        <div>
          <label className="text-slate-700 text-sm font-medium block mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="text-slate-700 text-sm font-medium block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all mt-2 disabled:opacity-60"
        >
          {loading ? 'Creating account...' : 'Create Account'}
        </button>

      </form>

      {/* Login Link */}
      <p className="text-center text-slate-500 text-sm mt-6">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 font-medium hover:underline">
          Login
        </Link>
      </p>

    </div>
  )
}

export default SignupForm