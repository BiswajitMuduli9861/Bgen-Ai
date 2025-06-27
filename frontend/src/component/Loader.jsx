import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-11/12 fixed">
            <div className="flex items-center justify-center relative w-[130px] h-fit">
                <div className="w-full h-fit flex flex-col items-start justify-center gap-2.5 bg-left">
                    <span className="w-full h-2 rounded-[10px] animate-bar bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 bg-[length:200%_100%]" />
                    <span className="w-1/2 h-2 rounded-[10px] animate-bar bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 bg-[length:200%_100%]" />
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 101 114"
                    className="absolute left-[-25px] mt-[18px] z-20 w-[70%] animate-search"
                >
                    <circle
                        strokeWidth={7}
                        stroke="rgb(162, 55, 255)"
                        transform="rotate(36.0692 46.1726 46.1727)"
                        r="29.5497"
                        cy="46.1727"
                        cx="46.1726"
                        fill="rgba(98, 65, 142, 0.238)"
                    />
                    <line
                        strokeWidth={7}
                        stroke="rgb(162, 55, 255)"
                        y2="111.784"
                        x2="97.7088"
                        y1="67.7837"
                        x1="61.7089"
                    />
                </svg>
            </div>
            {/* Tailwind custom animations below */}
            <style>
                {`
                    @keyframes bar {
                        0% { background-position: left; }
                        100% { background-position: right; }
                    }
                    .animate-bar {
                        animation: bar 3s ease-in-out infinite alternate-reverse;
                    }
                    @keyframes search {
                        0% { transform: translateX(0%) rotate(70deg); }
                        100% { transform: translateX(100px) rotate(10deg); }
                    }
                    .animate-search {
                        animation: search 3s ease-in-out infinite alternate-reverse;
                    }
                `}
            </style>
        </div>
    );
};

export default Loader;
