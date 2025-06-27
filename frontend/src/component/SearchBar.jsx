// import React, { useState } from 'react';
// import { IoIosArrowRoundUp } from "react-icons/io";
// import axios from 'axios';
// import SearchData from './SearchData';

// const SearchBar = () => {
//     const [searchValue,setSearchValue] = useState('')

// const [searchResults, setSearchResults] = useState('');

//   const[loading, setLoading] = useState(true);
//   const [loadQuestion, setLoadQuestion] = useState('');
//   const [displayQuestion, setDisplayQuestion] = useState(true);

//     const handleSubmit = async() => {
//       setDisplayQuestion(false); // 
//       setLoading(false); // Set loading to true when starting the search
//       setLoadQuestion(searchValue.trim());
//       try {
//     //  setLoadQuestion(searchValue.trim());
//         if (searchValue.trim().length === 0){
//           alert("Please enter a question");
//         }
//         setSearchValue(''); // Clear the input field after submission
//         const response = await axios.post('http://localhost:5000/api/content', {
//           question: searchValue.trim(),

//         })  
//         // return response.json();
//         console.log("AI Response:", response.data,16);
//         if (response.data.status === 200) {
//           setLoading(true);
//           setSearchResults(response.data.data);
//           console.log("Search Results:", response.data.data, 19);
//         } else {
//           console.error("Error in response:", response.data.message);
//         }
    
//    } catch (error) {
//        console.error("Error during search:", error);
    
//    }
//     }
//   return (
//     <>
//       <div className="h-screen bg-[#212121]">
//         <div className='flex w-full h-10/12 flex-col items-center  justify-start overflow-y-scroll custom-scrollbar '>
//           {
//             displayQuestion ? "" :
//           <div className='text-white  w-1/5 ms-80 rounded-3xl mt-3 p-3 bg-[#303030]'>{loadQuestion}</div>
//           }


//         <SearchData searchresult={searchResults} Loading={loading} SearchQuestion={searchValue}/>
//         </div>
//         <div className="w-full flex justify-center items-end pb-10">
//           <div className="w-4/5 md:w-3/5 sm:w-4/5 lg:w-3/5 xl:w-3/5 2xl:w-2/5 h-25 rounded-3xl bg-[#303030] flex items-center fixed bottom-10 ">
//             <input
//               type="text"
//               placeholder="Ask anything"
//               value={searchValue}
//               onChange={(e)=>{setSearchValue(e.target.value)}}
//               className="w-full h-full px-5 text-xl border-none outline-none text-[#A6A6A6] bg-transparent"
//             />
//             <div className="w-11 h-11 rounded-full m-5  bg-white cursor-pointer flex justify-center items-center" onClick={handleSubmit}>

//             <IoIosArrowRoundUp className=' text-4xl  h-8' />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchBar;







import React, { useState } from 'react';
import { IoIosArrowRoundUp } from "react-icons/io";
import axios from 'axios';
import SearchData from './SearchData';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

const SearchBar = () => {
    const [searchValue,setSearchValue] = useState('')

const [searchResults, setSearchResults] = useState('');

  const[loading, setLoading] = useState(true);
  const [loadQuestion, setLoadQuestion] = useState('');
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const [searchIcon, setSearchIcon] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async() => {
    setDisplayQuestion(false); // 
      setLoading(false); // Set loading to true when starting the search
      setLoadQuestion(searchValue.trim());
      try {
        //  setLoadQuestion(searchValue.trim());
        if (searchValue.trim().length === 0){
          alert("Please enter a question");
        }
        setSearchValue(''); // Clear the input field after submission
        const response = await axios.post('https://bgen-ai.onrender.com/api/content', {
          question: searchValue.trim(),
          
        },{withCredentials: true})   // ||withCredentials: true||---ye ek Axios ka config option hai jo cookies ko automatically request ke sath bhejne ya receive karne ki permission deta hai — jab aapka frontend aur backend alag origins pe ho (e.g., frontend: localhost:3000, backend: localhost:5000).
        // return response.json();
        // console.log("AI Response:", response.data,16);
        if (response.status === 200) {
          setLoading(true);
          setSearchResults(response.data.data);
          setSearchIcon(true);
          // console.log("Search Results:", response.data.data, 19);
        } else {
          console.error("Error in response:", response.data.message);
        }
        
      } catch (error) {
        if(error.response && error.response.status === 401){
          navigate("/login")
        }
        console.error("Error during search:", error);
        
      }
    }
    // console.log(searchResults)



     const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      handleSubmit();
    }
  };
  return (
    <>
    <div className="h-screen overflow-y-scroll hide-scrollbar">
      <Navbar/>

      <div className="h-full bg-[#212121]  hide-scrollbar overflow-y-scroll">

      
        <div className='flex w-full h-10/12 flex-col items-center  justify-start overflow-y-scroll custom-scrollbar'>
          {
            displayQuestion ? "" :
          <div className='w-4/5 md:w-2/4 sm:w-3/5 lg:w-2/4 xl:w-2/5 2xl:w-1/3 ms-22 sm:ms-30 md:ms-24 text-white rounded-3xl mt-3 p-3 bg-[#303030] overflow-visible'>{loadQuestion}</div>
          }

          
        <SearchData searchresult={searchResults} Loading={loading} SearchQuestion={searchValue} SearchIcon={setSearchIcon}/>
        </div>
        <div className="w-full flex justify-center items-center p-2 bg-[#212121]">
          <div className={`w-5/5 md:w-3/5 sm:w-4/5 lg:w-3/5 xl:w-2/4 2xl:w-2/5 ${searchValue.length>60 ? "h-70 " : "h-25"} bg-[#303030] flex justify-center p-2  rounded-3xl`}>

          <div className="bg-transparent w-5/5 custom-scrollbar">
            <textarea
              type="text"
              placeholder="Ask anything"
              value={searchValue}
               onKeyDown={handleKeyDown} // 👈 Add Enter support here
              onChange={(e)=>{setSearchValue(e.target.value)}}
              className="w-full h-4/5  px-5 text-xl border-none outline-none text-[#A6A6A6] bg-transparent mt-6 resize-none"
              />
          </div>
           <div 
  className={`h-11 w-12 bg-white flex justify-center items-center text-black rounded-full ${searchValue.length > 60 ? "mt-55" : "mt-11"} cursor-pointer`} 
  onClick={handleSubmit}
>
  {
    searchIcon ? (
      <img 
        src="/typpingIndicater.svg" 
        alt="typing" 
        className="size-6 object-contain ms-1 mt-1" // use smaller size to fit properly
      />
    ) : (
      <IoIosArrowRoundUp className="text-4xl h-8" />
    )
  }
</div>

              </div>
        </div>
          
      </div>
          
    </div>
    </>
  );
};

export default SearchBar;
