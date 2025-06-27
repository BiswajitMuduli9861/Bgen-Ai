// import axios from "axios";
// import React, { useState } from "react";
// import { Link,useNavigate,useLocation } from "react-router-dom";

// const OtpVerifyPage = () => {

//   const { state } = useLocation();
//   const email = state?.email
// console.log(email,9)
//   const [otpFields, setOtpFields] = useState({
//     otp1: "",
//     otp2: "",
//     otp3: "",
//     otp4: "",
//   });
//   const [otpData, setOtpData] = useState("");
//   console.log(otpData,13)
//   const navigate = useNavigate();

//   const handleSubmit = async(e) => {
//   e.preventDefault();
  
//   if (
//     otpFields.otp1.trim().length === 0 ||
//     otpFields.otp2.trim().length === 0 ||
//     otpFields.otp3.trim().length === 0 ||
//     otpFields.otp4.trim().length === 0
//   ) {
//     alert("Enter OTP");
//     return;
//   }

//   try {
//     const res = await axios.post("http://localhost:5000/api/verifyotp", { otpData,email });
//     console.log(res);

//     const userId = res.data.userId; // Assuming the response contains userId
//     if (res.statusText === 'OK') {
//       navigate("/changepassword", {state:{userId}});
//     }

//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       alert("Enter a valid Email");
//     }
//     console.log(error);
//   }
// };


//   const resendOtp = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/sendotp", { email });
//       console.log(res);
//       if (res.statusText === "OK") {
//         alert("OTP resent successfully");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 404) {
//         alert("Enter a valid Email");
//       }
//       console.log(error);
//     }
//   }
  

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#1F1F1F]">
//       <form className="w-[350px] h-[420px] bg-[#2C303D] flex flex-col items-center justify-center p-8 gap-6 relative shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-[20px]" onSubmit={handleSubmit}>
//         <span className="text-[1.4em] text-[#7281FF] font-bold">Enter OTP</span>
//         <p className="text-[0.9em] text-gray-300 leading-[20px] text-center">
//           We have sent a verification code to your Email address
//         </p>

//         <div className="w-full flex flex-row gap-4 items-center justify-center">
//           <input
//             required
//             maxLength={1}
//             type="text"
//             className="bg-[#e4e4e4] w-[50px] h-[50px] text-center text-[1.5em] border-none rounded-[10px] caret-[#7f81ff] text-black outline-none font-bold focus:bg-[#7f81ff33] valid:bg-[#7f81ff33] transition duration-300"
//             id="otp-input1"
//             autoComplete="off"
//             onChange={(e) => {
//               const val = e.target.value.slice(0, 1);
//               const updated = { ...otpFields, otp1: val };
//               setOtpFields(updated);
//               setOtpData(
//                 updated.otp1 + updated.otp2 + updated.otp3 + updated.otp4
//               );
//               e.target.value = e.target.value.slice(0, 1); // Only 1 char
//               if (e.target.value && e.target.nextElementSibling) {
//                 e.target.nextElementSibling.focus(); // 🔁 Go to next input
//               }
//             }}
//             onKeyDown={(e) => {
//               if (
//                 e.key === "Backspace" &&
//                 !e.target.value &&
//                 e.target.previousElementSibling
//               ) {
//                 e.target.previousElementSibling.focus();
//               }
//             }}
//           />
//           <input
//             required
//             maxLength={1}
//             type="text"
//             className="bg-[#e4e4e4] w-[50px] h-[50px] text-center text-[1.5em] border-none rounded-[10px] caret-[#7f81ff] text-black outline-none font-bold focus:bg-[#7f81ff33] valid:bg-[#7f81ff33] transition duration-300"
//             id="otp-input2"
//             autoComplete="off"
//             onChange={(e) => {
//               const val = e.target.value.slice(0, 1);
//               const updated = { ...otpFields, otp2: val };
//               setOtpFields(updated);
//               setOtpData(
//                 updated.otp1 + updated.otp2 + updated.otp3 + updated.otp4
//               );
//               e.target.value = e.target.value.slice(0, 1); // Only 1 char
//               if (e.target.value && e.target.nextElementSibling) {
//                 e.target.nextElementSibling.focus(); // 🔁 Go to next input
//               }
//             }}
//             onKeyDown={(e) => {
//               if (
//                 e.key === "Backspace" &&
//                 !e.target.value &&
//                 e.target.previousElementSibling
//               ) {
//                 e.target.previousElementSibling.focus();
//               }
//             }}
//           />
//           <input
//             required
//             maxLength={1}
//             type="text"
//             className="bg-[#e4e4e4] w-[50px] h-[50px] text-center text-[1.5em] border-none rounded-[10px] caret-[#7f81ff] text-black outline-none font-bold focus:bg-[#7f81ff33] valid:bg-[#7f81ff33] transition duration-300"
//             id="otp-input3"
//             autoComplete="off"
//             onChange={(e) => {
//               const val = e.target.value.slice(0, 1);
//               const updated = { ...otpFields, otp3: val };
//               setOtpFields(updated);
//               setOtpData(
//                 updated.otp1 + updated.otp2 + updated.otp3 + updated.otp4
//               );
//               e.target.value = e.target.value.slice(0, 1); // Only 1 char
//               if (e.target.value && e.target.nextElementSibling) {
//                 e.target.nextElementSibling.focus(); // 🔁 Go to next input
//               }
//             }}
//             onKeyDown={(e) => {
//               if (
//                 e.key === "Backspace" &&
//                 !e.target.value &&
//                 e.target.previousElementSibling
//               ) {
//                 e.target.previousElementSibling.focus();
//               }
//             }}
//           />
//           <input
//             required
//             maxLength={1}
//             type="text"
//             className="bg-[#e4e4e4] w-[50px] h-[50px] text-center text-[1.5em] border-none rounded-[10px] caret-[#7f81ff] text-black outline-none font-bold focus:bg-[#7f81ff33] valid:bg-[#7f81ff33] transition duration-300"
//             id="otp-input4"
//             autoComplete="off"
//             onChange={(e) => {
//               const val = e.target.value.slice(0, 1);
//               const updated = { ...otpFields, otp4: val };
//               setOtpFields(updated);
//               setOtpData(
//                 updated.otp1 + updated.otp2 + updated.otp3 + updated.otp4
//               );
//               e.target.value = e.target.value.slice(0, 1); // Only 1 char
//               if (e.target.value && e.target.nextElementSibling) {
//                 e.target.nextElementSibling.focus(); // 🔁 Go to next input
//               }
//             }}
//             onKeyDown={(e) => {
//               if (
//                 e.key === "Backspace" &&
//                 !e.target.value &&
//                 e.target.previousElementSibling
//               ) {
//                 e.target.previousElementSibling.focus();
//               }
//             }}
//           />
//         </div>

//         <button
//           className="w-full h-[45px] border-none bg-[#7f81ff] text-white text-[1.1em] font-semibold cursor-pointer rounded-[12px] transition duration-200 hover:bg-[#6365f5]"
//           type="submit"
//         >
//           Verify
//         </button>
//         <Link to="/sendotp">
//           <button
//             className="absolute top-[10px] right-[10px] shadow-[0_0_20px_rgba(0,0,0,0.17)] bg-white rounded-full w-[30px] h-[30px] border-none text-black text-[1.3em] font-bold cursor-pointer flex items-center justify-center"
//             type="button"
//           >
//             ×
//           </button>
//         </Link>

//         <p className="text-[0.85em] text-gray-300 w-full text-center">
//           Didn't receive the code?{" "}
//           <button
//             className="bg-transparent border-none text-[#7f81ff] hover:underline cursor-pointer font-semibold"
//             type="button"
//             onClick={resendOtp}
//           >
//             Resend Code
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };


// export default OtpVerifyPage;






import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

const OtpVerifyPage = () => {
  const { state } = useLocation();
  const email = state?.email;

  const [otpFields, setOtpFields] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });
  const [otpData, setOtpData] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(otpFields).some((v) => v.trim().length === 0)) {
      setError(true);
      setTimeout(() => setError(false), 700);
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/verifyotp", { otpData, email });
      const userId = res.data.userId;
      if (res.status === 200) {
        setSuccess(true);
        setTimeout(() => navigate("/changepassword", { state: { userId } }), 4000);
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 700);
    }
  };

  const resendOtp = async () => {
    if (timer > 0) return;
    try {
      const res = await axios.post("http://localhost:5000/api/sendotp", { email });
      if (res.status === 200) {
        setTimer(60);
        alert("OTP resent successfully");
      }
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 700);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#232526] to-[#414345]">
      <div className="relative w-[370px] rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7f81ff33] rounded-full blur-2xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7281FF44] rounded-full blur-2xl opacity-60 animate-pulse"></div>
        <form
          className="relative z-10 flex flex-col items-center px-10 py-12 gap-7"
          onSubmit={handleSubmit}
        >
          <span className="text-2xl font-extrabold text-[#7281FF] tracking-wide drop-shadow-lg flex items-center gap-2">
            OTP Verification
            {success && <FiCheckCircle className="text-green-400 animate-bounce" size={28} />}
            {error && <FiAlertCircle className="text-red-400 animate-shake" size={28} />}
          </span>
          <p className="text-center text-gray-200 text-sm mb-2">
            Enter the 4-digit code sent to <span className="font-semibold text-[#7f81ff]">{email}</span>
          </p>
          <div className="flex gap-4 mb-2">
            {["otp1", "otp2", "otp3", "otp4"].map((key, idx) => (
              <input
                key={key}
                ref={inputRefs[idx]}
                required
                maxLength={1}
                type="text"
                className={`w-14 h-14 rounded-xl bg-white/80 text-center text-2xl font-bold text-[#7281FF] border-2 border-[#7281FF] focus:bg-[#7281FF22] focus:border-[#7f81ff] outline-none shadow-md transition-all duration-200
                  ${error ? "animate-shake border-red-400" : ""}
                  ${success ? "border-green-400 bg-green-50" : ""}
                `}
                autoComplete="off"
                value={otpFields[key]}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
                  const updated = { ...otpFields, [key]: val };
                  setOtpFields(updated);
                  setOtpData(
                    updated.otp1 + updated.otp2 + updated.otp3 + updated.otp4
                  );
                  if (val && idx < 3) {
                    inputRefs[idx + 1].current.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.target.value &&
                    idx > 0
                  ) {
                    inputRefs[idx - 1].current.focus();
                  }
                }}
              />
            ))}
          </div>
          <button
            className={`w-full py-3 rounded-xl bg-gradient-to-r from-[#7281FF] to-[#7f81ff] text-white font-bold text-lg shadow-lg hover:from-[#6365f5] hover:to-[#7281FF] transition-all duration-200
              ${success ? "bg-green-400 from-green-400 to-green-500" : ""}
            `}
            type="submit"
            disabled={success}
          >
            {success ? "Verified!" : "Verify OTP"}
          </button>
          <Link to="/sendotp" className="absolute top-4 right-4">
            <button
              className="w-8 h-8 rounded-full bg-white/80 text-[#7281FF] font-bold text-xl flex items-center justify-center shadow hover:bg-[#7281FF] hover:text-white transition"
              type="button"
              title="Cancel"
            >
              ×
            </button>
          </Link>
          <div className="w-full text-center mt-2">
            <span className="text-gray-300 text-sm">
              Didn't get the code?{" "}
              <button
                className={`text-[#7f81ff] font-semibold hover:underline disabled:opacity-50`}
                type="button"
                onClick={resendOtp}
                disabled={timer > 0}
              >
                Resend {timer > 0 && `(${timer}s)`}
              </button>
            </span>
          </div>
        </form>
      </div>
      {/* Animations */}
      <style>
        {`
        @keyframes shake {
          10%, 90% { transform: translateX(-2px); }
          20%, 80% { transform: translateX(4px); }
          30%, 50%, 70% { transform: translateX(-8px); }
          40%, 60% { transform: translateX(8px); }
        }
        .animate-shake { animation: shake 0.4s; }
        `}
      </style>
    </div>
  );
  
};

export default OtpVerifyPage;












