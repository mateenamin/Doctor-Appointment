import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields!')
      return
    }

    try {
      setLoading(true)

      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Login failed!')
        return
      }

      // Token save karo
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      // Role ke hisaab se redirect
      if (data.user.role === 'admin') {
        navigate('/admin/dashboard')
      } else if (data.user.role === 'doctor') {
        navigate('/doctor/dashboard')
      } else {
        navigate('/')
      }

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
          Welcome back
        </h1>
        <p className="text-slate-400 text-sm">
          Login to your DocBook account
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-500 text-sm px-4 py-3 rounded-xl mb-6">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

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
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-slate-700 text-sm font-medium">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-500 text-xs hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-400 transition-all"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-600 transition-all mt-2 disabled:opacity-60"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-slate-400 text-xs">or</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      {/* Signup Link */}
      <p className="text-center text-slate-500 text-sm">
        Don't have an account?{' '}
        <Link to="/signup" className="text-blue-500 font-medium hover:underline">
          Sign up
        </Link>
      </p>

    </div>
  )
}

export default LoginForm