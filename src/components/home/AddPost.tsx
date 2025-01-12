'use client';

import React from 'react';
import { FaVideo,FaImages,FaRegSmile } from 'react-icons/fa';

const AddPost: React.FC = () => {

    return (
    <div className="bg-white p-4 pb-2 rounded-lg shadow mb-4 mt-24">
        <div className="flex items-center space-x-2 mb-2">
        <img
            src="https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/277568352_958602771359206_3536659945590028084_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=fe756c&_nc_ohc=mqzEa9XtEbsQ7kNvgFL6VQa&_nc_zt=24&_nc_ht=scontent.fdel3-2.fna&_nc_gid=A7YechD6LGILpP59PzXYyLA&oh=00_AYCioov3rk8_q1WWBqKG1XGsmj-CvNezgRKeZM7D60Qf6A&oe=6789A4E5"
            alt="Profile"
            className="w-10 h-10 rounded-full"
        />
        <div className='flex-grow bg-gray-100 text-gray-500 p-2 px-4 rounded-full'>
            What's on your mind?
        </div>
        </div>
        <div className="flex justify-between mt-3">
            <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                <FaVideo className="text-red-500 mr-3 text-lg" />
                <span className="font-medium">Live video</span>
            </button>
            <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                <FaImages className="text-green-500 mr-3 text-lg" />
                <span className="font-medium">Photo/Video</span>
            </button>
            <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition">
                <FaRegSmile className="text-yellow-500 mr-3 text-lg" />
                <span className="font-medium">Feeling/Activity</span>
            </button>
        </div>
    </div>
    );
};

export default AddPost;
