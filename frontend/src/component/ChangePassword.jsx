import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer , toast} from 'react-toastify';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const {state} = useLocation();
    const userId = state?.userId; // Assuming userId is passed in the state
    // console.log(userId, 9);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (newPassword.trim().length === 0 || confirmPassword.trim().length === 0) {
            alert("Please fill in all fields");
            return;
        }
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post("https://bgen-ai.onrender.com/api/updatepassword", {newPassword, userId});
            // console.log(res);
            if (res.status === 200) {
                setNewPassword("");
                setConfirmPassword("");
                
                toast.success('Password Change', {
                                    position: "top-right",
                                    autoClose: 4000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                });

                setTimeout(() => {
                    
                    navigate('/login'); // Redirect to login page after successful password change
                }, 4000);
                
            }

        } catch (error) {
            console.log(error)
        }

    }
    

    return (
        <div className="w-full h-screen grid place-content-center bg-black relative z-0">
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
            <div className="h-full relative p-8 md:p-12 grid place-items-center gap-12 border-x-2 border-transparent bg-[radial-gradient(100%_61.73%_at_100%_50%,rgba(255,224,166,0.05)_0%,transparent_100%),radial-gradient(91.09%_56.23%_at_0%_50%,rgba(255,224,166,0.05)_0%,transparent_100%)] before:content-[''] before:absolute before:inset-[-1rem] before:border before:border-inherit before:opacity-15 before:z-[-1] after:content-[''] after:absolute after:inset-[-2rem] after:border after:border-inherit after:opacity-5 after:z-[-1]">
                <span className="uppercase text-2xl font-bold tracking-[1rem] text-transparent bg-gradient-to-b from-[#aaaaaa] to-[#4e4e4e] bg-clip-text text-center">
                    Change Password
                </span>
                {/* First Password Field */}
                <div className="flex items-center border-b border-transparent bg-[radial-gradient(47.3%_73.08%_at_50%_94.23%,rgba(255,255,255,0.1)_5%,rgba(0,0,0,0)_100%)] focus-within:bg-[radial-gradient(47.3%_73.08%_at_50%_94.23%,rgba(255,224,166,0.1)_5%,rgba(0,0,0,0)_100%)] transition">
                    {/* Key SVG */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-400 group-focus-within:stroke-[#ffe0a6]">
                        <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                            <path d="M3.5 15.5503L9.20029 9.85L12.3503 13L11.6 13.7503H10.25L9.8 15.1003L8 16.0003L7.55 18.2503L5.5 19.6003H3.5V15.5503Z" />
                            <path d="M16 3.5H11L8.5 6L16 13.5L21 8.5L16 3.5Z" />
                            <path d="M16 10.5L18 8.5L15 5.5H13L12 6.5L16 10.5Z" />
                        </g>
                        <defs>
                            <linearGradient id="gradient-stroke" x1={0} y1={0} x2={24} y2={24} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <input
                        className="bg-transparent border-none px-4 py-2 text-white focus:outline-none focus:text-[#ffe0a6] w-full"
                        type={showPassword ? "text" : "password"}
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="ml-2 focus:outline-none cursor-pointer"
                        tabIndex={-1}
                    >
                        {showPassword ? (
                            // Eye Open SVG
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="#ffe0a6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx={12} cy={12} r={3} stroke="#ffe0a6" strokeWidth={2}/></svg>
                        ) : (
                            // Eye Closed SVG
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="#ffe0a6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.77 21.77 0 015.06-6.94M1 1l22 22"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 9.53A3.001 3.001 0 0012 15a3 3 0 002.47-5.47"/></svg>
                        )}
                    </button>
                </div>
                {/* Second Password Field */}
                <div className="flex items-center border-b border-transparent bg-[radial-gradient(47.3%_73.08%_at_50%_94.23%,rgba(255,255,255,0.1)_5%,rgba(0,0,0,0)_100%)] focus-within:bg-[radial-gradient(47.3%_73.08%_at_50%_94.23%,rgba(255,224,166,0.1)_5%,rgba(0,0,0,0)_100%)] transition">
                    {/* Key SVG */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-gray-400 group-focus-within:stroke-[#ffe0a6]">
                        <g stroke="url(#gradient-stroke)" fill="none" strokeWidth={1}>
                            <path d="M3.5 15.5503L9.20029 9.85L12.3503 13L11.6 13.7503H10.25L9.8 15.1003L8 16.0003L7.55 18.2503L5.5 19.6003H3.5V15.5503Z" />
                            <path d="M16 3.5H11L8.5 6L16 13.5L21 8.5L16 3.5Z" />
                            <path d="M16 10.5L18 8.5L15 5.5H13L12 6.5L16 10.5Z" />
                        </g>
                        <defs>
                            <linearGradient id="gradient-stroke" x1={0} y1={0} x2={24} y2={24} gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="white" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <input
                        className="bg-transparent border-none px-4 py-2 text-white focus:outline-none focus:text-[#ffe0a6] w-full"
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirm((prev) => !prev)}
                        className="ml-2 focus:outline-none cursor-pointer"
                        tabIndex={-1}
                    >
                        {showConfirm ? (
                            // Eye Open SVG
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="#ffe0a6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"/><circle cx={12} cy={12} r={3} stroke="#ffe0a6" strokeWidth={2}/></svg>
                        ) : (
                            // Eye Closed SVG
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none" viewBox="0 0 24 24" stroke="#ffe0a6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.77 21.77 0 015.06-6.94M1 1l22 22"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.53 9.53A3.001 3.001 0 0012 15a3 3 0 002.47-5.47"/></svg>
                        )}
                    </button>
                </div>
                <div className="w-full relative transition-all duration-200 group flex justify-center">
                    <input
                        className="cursor-pointer py-4 w-1/2 bg-[radial-gradient(100%_45%_at_100%_50%,rgba(255,224,166,0.084)_0%,rgba(115,115,115,0)_100%),radial-gradient(100%_45%_at_0%_50%,rgba(255,224,166,0.084)_0%,rgba(115,115,115,0)_100%)] border-x border-transparent text-[#ffe0a6] text-base text-center transition-all duration-200"
                        type="submit"
                        value="Submit"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.38)_0.5px,transparent_0.5px)] bg-[length:0.1px_3px] mix-blend-soft-light mask-[radial-gradient(40%_45%_at_100%_50%,white_0%,transparent_100%),radial-gradient(40%_45%_at_0%_50%,white_0%,transparent_100%)]" />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(0deg,#fff_1px,transparent_1px)] bg-[length:1px_5px] mix-blend-soft-light mask-[radial-gradient(30%_45%_at_100%_50%,white_0%,transparent_100%),radial-gradient(30%_45%_at_0%_50%,white_0%,transparent_100%)] animate-[movingLines_1s_linear_infinite]" />
            </div>
            <style>
                {`
                    @keyframes flicker {
                        0% { filter: brightness(100%);}
                        10% { filter: brightness(80%);}
                        20% { filter: brightness(120%);}
                        30% { filter: brightness(90%);}
                        40% { filter: brightness(110%);}
                        50% { filter: brightness(100%);}
                        60% { filter: brightness(85%);}
                        70% { filter: brightness(95%);}
                        80% { filter: brightness(105%);}
                        90% { filter: brightness(115%);}
                        100% { filter: brightness(100%);}
                    }
                    @keyframes movingLines {
                        0% { background-position: 0 0;}
                        100% { background-position: 0 5px;}
                    }
                    .group:hover input[type="submit"] {
                        animation: flicker 0.5s infinite;
                        width: 105%;
                    }
                    .group:active input[type="submit"] {
                        width: 95%;
                    }
                `}
            </style>
            </form>
        </div>
    );
};

export default ChangePassword;
