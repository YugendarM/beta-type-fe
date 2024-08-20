// // import React from 'react'
// // import profileAvatar from "../../assets/avatar.svg"
// // import { FaBoltLightning } from 'react-icons/fa6'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { logoutUser } from '../../redux/user/userSlice'
// // import { Link, Route, Routes, useNavigate } from 'react-router-dom'
// // import { MdOutlineShutterSpeed } from "react-icons/md";
// // import { AiOutlineAim } from "react-icons/ai";
// // import { MdOutlineLogout } from "react-icons/md";
// // import { MdDarkMode } from "react-icons/md";

// // const ProfilePageComponent = () => {

// //   const userData = useSelector((state) => state.user)
// //   const dispatch = useDispatch()

// //   const navigate = useNavigate()

// //   const createdAt = new Date(userData.data.createdAt && userData.data.createdAt);
// //   const formattedDate = createdAt.toLocaleDateString('en-GB', {
// //     day: '2-digit',
// //     month: 'long',
// //     year: '2-digit',
// //   });

// //   const handleLogout = () => {
// //     dispatch(logoutUser())
// //     alert("User logged out")
// //     navigate("/login")
// //   }

// //   return (
// //     <div className='profile-page-container flex justify-center h-[85vh]'>
// //       <div className='w-full max-w-[1220px] px-5 md:px-10 flex gap-5 py-5'>

// //         <div className='w-[30%] flex flex-col gap-4'>
// //           {/* <button className='text-betatypeDarkBlue text-xl font-medium  border-gray-200 text-start py-2 px-3 rounded-lg w-2/3 flex items-center gap-3 justify-center hover:bg-gray-100 transition'>Dark Mode<MdDarkMode className='text-2xl'/></button> */}
// //           {/* <button onClick={handleLogout} className='text-betatypeDarkBlue text-xl font-medium border-2 border-gray-200 text-start py-2 px-3 rounded-lg w-2/3 flex items-center gap-3 justify-center hover:bg-gray-100 transition'>Logout<MdOutlineLogout className='text-2xl'/></button> */}
// //           <Link to={"/profile/overview"}>Profile Overview</Link>
// //         </div>

// //         <Routes>
// //           <Route exact path='/profile/overview' element={<div>overview</div>}/>
// //           <Route path='/education-results' element={<div>overview</div>}/>
// //           <Route path='/test-results' element={<div>overview</div>}/>
// //           <Route path='/overview' element={<div>overview</div>}/>
// //           <Route path='/overview' element={<div>overview</div>}/>
// //           <Route path='/overview' element={<div>overview</div>}/>
// //         </Routes>

        
// //       </div>
// //     </div>
// //   )
// // }

// // export default ProfilePageComponent


// import React from 'react'
// import profileAvatar from "../../assets/avatar.svg"
// import { useDispatch, useSelector } from 'react-redux'
// import { logoutUser } from '../../redux/user/userSlice'
// import { Link, Route, Routes, useNavigate } from 'react-router-dom'
// import { MdOutlineLogout } from "react-icons/md";
// import { MdDarkMode } from "react-icons/md";

// const ProfilePageComponent = () => {

//   const userData = useSelector((state) => state.user)
//   const dispatch = useDispatch()

//   const navigate = useNavigate()

//   const createdAt = new Date(userData.data.createdAt && userData.data.createdAt);
//   const formattedDate = createdAt.toLocaleDateString('en-GB', {
//     day: '2-digit',
//     month: 'long',
//     year: '2-digit',
//   });

//   const handleLogout = () => {
//     dispatch(logoutUser())
//     alert("User logged out")
//     navigate("/login")
//   }

//   return (
//     <div className='profile-page-container flex justify-center h-[85vh]'>
//       <div className='w-full max-w-[1220px] px-5 md:px-10 flex gap-5 py-5'>

//         {/* Sidebar */}
//         <div className='w-[30%] flex flex-col gap-4'>
//           <button className='text-betatypeDarkBlue text-xl font-medium border-gray-200 text-start py-2 px-3 rounded-lg w-full flex items-center gap-3 hover:bg-gray-100 transition'>
//             Dark Mode <MdDarkMode className='text-2xl'/>
//           </button>
//           <button onClick={handleLogout} className='text-betatypeDarkBlue text-xl font-medium border-2 border-gray-200 text-start py-2 px-3 rounded-lg w-full flex items-center gap-3 hover:bg-gray-100 transition'>
//             Logout <MdOutlineLogout className='text-2xl'/>
//           </button>
          
//           {/* Navigation Links */}
//           <nav className='flex flex-col gap-3'>
//             <Link to="/profile/overview" className='text-betatypeDarkBlue text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition'>
//               Profile Overview
//             </Link>
//             <Link to="/profile/education-results" className='text-betatypeDarkBlue text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition'>
//               Education Results
//             </Link>
//             <Link to="/profile/test-results" className='text-betatypeDarkBlue text-lg font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition'>
//               Test Results
//             </Link>
//           </nav>
//         </div>

//         {/* Main Content Area */}
//         <div className='w-[70%] flex flex-col'>
//           <Routes>
//             <Route exact path='/profile/overview' element={<div>Profile Overview Content</div>} />
//             <Route path='/profile/education-results' element={<div>Education Results Content</div>} />
//             <Route path='/profile/test-results' element={<div>Test Results Content</div>} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfilePageComponent


import React from 'react';
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineLogout, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/user/userSlice';

const ProfilePageComponent = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    alert("User logged out");
    navigate("/login");
  };

  const location = useLocation()
  const parameter = location.pathname.split("/")[2]

  return (
    <div className='profile-page-container flex justify-center h-[85vh]'>
      <div className='w-full max-w-[1220px] px-5 md:px-10 flex gap-10 py-5'>
        <div className='w-[25%] flex flex-col gap-4'>
          <nav className='flex flex-col gap-4'>
            <Link to="/profile/overview" className={` text-xl font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition ${parameter === "overview" ? "text-betatypePrimaryBlue" : "text-betatypeDarkBlue"}`}>
              Profile
            </Link>
            <Link to="/profile/education-results" className={` text-xl font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition ${parameter === "education-results" ? "text-betatypePrimaryBlue" : "text-betatypeDarkBlue"}`}>
              Education Results
            </Link>
            <Link to="/profile/test-results" className={` text-xl font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition ${parameter === "test-results" ? "text-betatypePrimaryBlue" : "text-betatypeDarkBlue"}`}>
              Test Results
            </Link>

            <div className='bg-gray-200 h-[2px] w-full'></div>
            
            <button className='text-betatypeDarkBlue text-xl font-medium border-gray-200 text-start py-2 px-3 rounded-lg w-full flex items-center gap-3 hover:bg-gray-100 transition'>
              Dark Mode <MdDarkMode className='text-2xl'/>
            </button>
            <button onClick={handleLogout} className='text-betatypeDarkBlue text-xl font-medium text-start py-2 px-3 rounded-lg w-full flex items-center gap-3 hover:bg-gray-100 transition'>
              Logout <MdOutlineLogout className='text-2xl'/>
            </button>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className='w-[70%] flex flex-col'>
          <Routes>
            <Route path="/" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<div>Profile Overview Content</div>} />
            <Route path="education-results" element={<div>Education Results Content</div>} />
            <Route path="test-results" element={<div>Test Results Content</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
