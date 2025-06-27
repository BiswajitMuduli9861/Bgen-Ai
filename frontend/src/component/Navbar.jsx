import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const profileRef = useRef(null);

    const navigate = useNavigate();

    const profile = localStorage.getItem('Email-id') || '@';

    const letter = profile.charAt(0).toLocaleUpperCase();
    

    // Hide logout button when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setShowLogout(false);
            }
        };
        if (showLogout) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showLogout]);

    const handleProfileClick = () => {
        setShowLogout((prev) => !prev);
    };

    const handleLogout = () =>{
        localStorage.removeItem('userExist');
        localStorage.removeItem('token');
        toast.success('Logout User', {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                
                                });

                setTimeout(() => {
                    
                    navigate('/login'); // Redirect to login page after successful password change
                }, 2000);
    }

    return (
        <nav className="flex items-center justify-between px-8 py-3 bg-[#181c2f] shadow-md " >
            <ToastContainer/>
            {/* Left: Logo */}
            <div className="w-500 flex items-center rounded-full">
                <img
                    src="/logoImg.png"
                    alt="Logo"
                    className="h-10 w-10 mr-3 rounded-full"
                />

            </div>

            {/* Right: Profile */}
            <div className="relative flex items-center" ref={profileRef}>
                {/* <img
                    src=""
                    alt="Profile"
                    className={`h-9 w-9 rounded-full cursor-pointer border-2 transition-colors ${
                        showLogout ? 'border-blue-400' : 'border-transparent'
                    }`}
                    onClick={handleProfileClick}
                /> */}
                <div
  onClick={handleProfileClick}
  className={`h-9 w-9 rounded-full flex items-center justify-center bg-blue-600 text-white font-bold text-lg cursor-pointer border-2 transition-colors ${
    showLogout ? 'border-blue-400' : 'border-transparent'
  }`}
>
  {letter}
</div>

                {showLogout && (
                    <button
                        className="absolute top-[110%] right-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-none rounded-xl shadow-2xl px-7 py-3 font-bold cursor-pointer z-10 transition-all duration-300 hover:scale-105 hover:from-pink-500 hover:to-blue-500 hover:shadow-pink-400/50 flex items-center gap-2"
                        onClick={handleLogout}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
                        </svg>
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
