import React from 'react';
import { Link, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdOutlineLogout, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/user/userSlice';
import ProfileOverviewComponent from '../../components/ProfileOverviewComponent/ProfileOverviewComponent';

const ProfilePageComponent = () => {
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
            <Route path="overview" element={<ProfileOverviewComponent/>} />
            <Route path="education-results" element={<div>Education Results Content</div>} />
            <Route path="test-results" element={<div>Test Results Content</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageComponent;
