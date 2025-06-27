import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './component/SearchBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OtpVerifyPage from './component/OtpVerifyPage'
import PageNotFound from './component/PageNotFound'
import ChangePassword from './component/ChangePassword'
import SendOtp from './component/SendOtp'
import SignUp from './component/SignUp'
import Login from './component/Login'
import ProtectedRoute from './component/ProtectedRoute'
import AutoLogout from './component/AutoLogout'

function App() {



const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    const user = localStorage.getItem("userExist");
    if (user === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("userExist", "true");
    setIsLoggedIn(true);
  };

  
 

  return (

    <>

    <BrowserRouter>
        {/* ✅ AutoLogout should only mount if user is logged in */}
      {isLoggedIn && <AutoLogout />}
      <Routes>
        <Route path="/login" element={<Login Login={login}/> }/>
        <Route path="/signup" element={<SignUp/> }/>
        <Route path="/" element={<ProtectedRoute><SearchBar/></ProtectedRoute> }/>
        <Route path="/otpverifypage" element={<OtpVerifyPage/>}/>
        <Route path="/*" element={ <PageNotFound/>}/>
        <Route path="/changepassword" element={ <ChangePassword/>}/>
        <Route path="/sendotp" element={<SendOtp/>}/>
      </Routes>
    </BrowserRouter>
      
    
    </>
  )
}

export default App




// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import SearchBar from './component/SearchBar';
// import OtpVerifyPage from './component/OtpVerifyPage';
// import PageNotFound from './component/PageNotFound';
// import ChangePassword from './component/ChangePassword';
// import SendOtp from './component/SendOtp';
// import SignUp from './component/SignUp';
// import Login from './component/Login';
// import ProtectedRoute from './component/ProtectedRoute';
// import SessionManager from './component/SessionManager';

// function App() {
//   const login = () => {
//     localStorage.setItem("userExist", "true");
//     localStorage.setItem("lastActiveTime", new Date().getTime());
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* ❌ Public routes: No session or auth required */}
//         <Route path="/login" element={<Login Login={login} />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/" element={<SearchBar />} />

//         {/* ✅ Protected routes wrapped with SessionManager */}
//         {/* <Route
//           path="/searchbar"
//           element={
//             <ProtectedRoute>
//               <SessionManager>
//                 <SearchBar />
//               </SessionManager>
//             </ProtectedRoute>
//           }
//         /> */}
//         <Route
//           path="/otpverifypage"
//           element={
//             <ProtectedRoute>
//               <SessionManager>
//                 <OtpVerifyPage />
//               </SessionManager>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/changepassword"
//           element={
//             <ProtectedRoute>
//               <SessionManager>
//                 <ChangePassword />
//               </SessionManager>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/sendotp"
//           element={
//             <ProtectedRoute>
//               <SessionManager>
//                 <SendOtp />
//               </SessionManager>
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/*"
//           element={
//             <ProtectedRoute>
//               <SessionManager>
//                 <PageNotFound />
//               </SessionManager>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
