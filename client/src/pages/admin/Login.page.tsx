import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";
import { useLoginMutation } from "@/redux/api/Auth.api"; // Adjust path to your authApi
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/User"; // Adjust path to your user slice
import { useNavigate } from "react-router-dom";
import signupimg from '@/assets/signup/signupimg.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async () => {
    const isValidEmail = (email: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      if (!res.data) {
        setError("User data not returned from server");
        return;
      }
      const result=res.data;
      const user = {
        email: result.user.email,
        username: result.user.username,
        
      };
      dispatch(
        setUser({
          user,
          token: result.token,
        })
      );
      // Redirect after login
      navigate("/admin/dashboard");
    } catch (err: any) {
      const detail = err?.data?.detail;

      if (Array.isArray(detail)) {
        // FastAPI validation error
        setError(detail[0]?.msg || "Invalid input");
      } else if (typeof detail === "string") {
        setError(detail);
      } else {
        setError(err?.data?.message || "Login failed");
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="absolute"><img src={signupimg} alt=""  className="h-194 w-700"/></div>
      <div className="w-full md:w-1/4 py-2 flex justify-center absolute top-25 left-50">
    
        <div className=" max-w-sm flex-col flex gap-6 bg-transparent px-2 py-5 rounded-2xl">
          {/* Header */}

          <div className="flex gap-2 items-center w-64 mb-10 text-white text-left  rounded-2xl">
            <img src="/Common/Logo_Light.svg" className="" />

          </div>
          <div className="text-black  text-left">
            
            <p className="micorcontent text-white font-bold text-2xl ">
              Sign in to access your dashboard to continue.
            </p>
          </div>

          {/* Form */}
          <div className=" ">
            {error && (
              <div className="mb-6 p-2 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 shrink mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-4 py-2 bg-black/20 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="you@example.com"
                    disabled={isLoading}
                    />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-11 pr-12 py-2 bg-black/20 text-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="••••••••"
                    disabled={isLoading}
                    />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
 text-white py-2 rounded-lg font-semibold hover:from-primary/80 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>


            </div>
          </div>
        
        </div>
      </div>

       
    </div>
  );
};

export default Login;


