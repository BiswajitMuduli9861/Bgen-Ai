import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const SendOtp = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
     if(email.trim().length === 0){
            alert("Enter your Email")
            return;
        }
    // setLoading(true);
    // setTimeout(() => {
    //   setSent(true);
    //   setLoading(false);
    // }, 1500);

    try {
            const res = await axios.post("http://localhost:5000/api/sendotp",{email})
            // console.log(res.statusText)
            // console.log(res)
             setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
          
           
                if(res.status === 200){

                setTimeout(()=>{

                  navigate('/otpverifypage',{state:{email}})
                },5000)
                
                }

            } catch (error) {
              if(error.response && error.response.status === 404){
                    alert("Enter a valid Email")
                }

                console.log(error)
            }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#111113]">
      <div className="relative max-w-[420px] w-full bg-[#18181b] p-10 text-base font-sans text-[#f4f4f5] flex flex-col gap-7 box-border rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.55)] border border-[#23272f] overflow-hidden">
        {/* Neon Glow */}
        <div className="absolute -top-14 -left-14 w-44 h-44 bg-gradient-to-br from-[#00eaff] to-[#7f5cff] opacity-40 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-gradient-to-tr from-[#7f5cff] to-[#00eaff] opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>
        {/* Animated Dots */}
        <div className="absolute top-6 right-10 flex gap-2 z-10">
          <span className="w-2 h-2 bg-[#00eaff] rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-[#7f5cff] rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-[#00eaff] rounded-full animate-bounce delay-300"></span>
        </div>
        {/* Content */}
        <div className="relative z-10 text-center font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#00eaff] via-[#7f5cff] to-[#00eaff] mb-2 tracking-wide drop-shadow-[0_2px_8px_rgba(127,92,255,0.3)]">
          Forgot Password?
        </div>
        <div className="relative z-10 text-center text-[#a1a1aa] mb-2">
          Enter your email address and we’ll send you a link to reset your password.
        </div>
        {sent ? (
          <div className="relative z-10 flex flex-col items-center gap-3">
            <svg className="w-16 h-16 text-[#00eaff] mb-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#00eaff" strokeWidth="2" fill="#23272f" />
              <path stroke="#7f5cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
            </svg>
            <span className="text-lg font-semibold text-[#00eaff]">Check your inbox!</span>
            <span className="text-[#a1a1aa] text-sm">We’ve sent a password reset link to <span className="font-bold text-[#7f5cff]">{email}</span>.</span>
          </div>
        ) : (
          <form className="relative z-10 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="mb-1 block font-semibold text-[#e0e0e0]">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@gmail.com"
                autoComplete='off'
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-4 rounded-lg font-medium border border-[#23272f] bg-[#23272f] text-[#f4f4f5] placeholder:text-[#7f7f8c] focus:outline-none focus:border-[#00eaff] transition shadow-[0_1px_4px_0_rgba(0,234,255,0.08)] focus:ring-2 focus:ring-[#00eaff]/40"
              />
            </div>
            <button
              className={`flex justify-center items-center font-bold text-white bg-gradient-to-r from-[#00eaff] via-[#7f5cff] to-[#00eaff] border-none w-full p-4 text-lg gap-2 mt-2 cursor-pointer rounded-lg shadow-[0_4px_16px_0_rgba(127,92,255,0.25)] hover:from-[#7f5cff] hover:to-[#00eaff] active:scale-95 transition-all duration-150 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <svg className="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#7f5cff" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="#00eaff" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                </svg>
              )}
              {loading ? 'Sending...' : 'Send Email'}
            </button>
          </form>
        )}
        <div className="relative z-10 flex flex-col items-center gap-1 mt-2">
          <span className="font-medium text-[#e0e0e0]">
            Don&apos;t have an account?
          </span>
          <Link to="/signup" className="text-[#00eaff] font-bold hover:underline transition">Sign up now</Link>
        </div>
      </div>
    </div>
  );
};

export default SendOtp;
