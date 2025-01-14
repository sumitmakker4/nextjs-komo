"use client"

import React, { useState } from 'react';
import { FaX } from 'react-icons/fa6';

interface FeeItemProps {
  post : {
    id: string;
    user : object,
    description : string,
    media : string[],
    createdAt : string,
  };
}

const FeedItem: React.FC<FeeItemProps> = ({ post }) => {

  return (
    <div className="rounded-lg shadow bg-white p-3 mb-4">

      {/* Post Header */}
      <div className="flex justify-between items-center mb-2 w-full">

        <div className='flex items-center space-x-2'>
          <img className="w-10 h-10 rounded-full" src="https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-1/460720433_3231339693668095_1388335444695293731_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tMsa5W56jpAQ7kNvgFj3A2t&_nc_zt=24&_nc_ht=scontent.fdel3-3.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYACFWWRs1SJsgfs2CM7OkHIIqehTJkujZUcnmO1_CKVwA&oe=678C5920" alt="Profile"/>
          <p className="font-semibold">{post.user.name}</p>
          <p className="text-sm text-gray-500">{post.createdAt}</p>
        </div>

        <button className='rounded-full hover:bg-gray-100 bg-opacity-20 p-3'>
          <FaX />
        </button>

      </div>

      {/* Post description */}
      {
        post.description &&
        <p className="mb-2 px-3">{post.description}</p>
      }

      {/* Post media */}
      {
        post.media.map(item => <img key={`post-`} src={item} alt="Post" className="w-full rounded-lg"/>)
      }

      {/* Like and comments */}
      <div className='p-3'>

      </div>
    </div>
  );
};

const Feeds: React.FC = () => {

  const [posts,setPosts] = useState([
    { id: '66f1510bea0cbcc3f5ff8fdf', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00'},
    { id: '66f1510bea0cbcc3f5ff10fd', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00'},
    { id: '66f1510bea0cbcc3f5ff7rdh', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00'},
    { id: '66f1510bea0cbcc3f5ff2osj', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00'},
  ]);

  return (
    <div className="mt-4">

      {/* Example Post */}
      {
        posts.map(post => <FeedItem key={post.id} post={post}/>)
      }

    </div>
  );
};

export default Feeds;