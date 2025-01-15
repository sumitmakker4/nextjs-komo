"use client"

import React, { useState } from 'react';
import { FaCommentAlt, FaShare, FaThumbsUp } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { MdOutlineComment, MdOutlineShare, MdThumbUpOffAlt } from 'react-icons/md';

interface FeeItemProps {
  post : {
    id: string;
    user : object,
    description : string,
    media : string[],
    commentCount : number,
    likeCount : number,
    createdAt : string,
  };
}

const FeedItem: React.FC<FeeItemProps> = ({ post }) => {

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  let widthClass = 'w-full'

  if(post.media.length == 2){
    widthClass = 'w-2/4'
  }

  return (
    <div className="rounded-lg shadow bg-white mb-4 overflow-hidden">

      {/* Post Header */}
      <div className="flex justify-between items-center p-3 w-full">

        <div className='flex items-center space-x-2'>
          <img className="w-10 h-10 rounded-full" src="https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-1/460720433_3231339693668095_1388335444695293731_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=tMsa5W56jpAQ7kNvgFj3A2t&_nc_zt=24&_nc_ht=scontent.fdel3-3.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYACFWWRs1SJsgfs2CM7OkHIIqehTJkujZUcnmO1_CKVwA&oe=678C5920" alt="Profile"/>
          <div>
            <p className="font-semibold">{post.user.name}</p>
            <p className="text-sm text-gray-500">{post.createdAt}</p>
          </div>
        </div>

        <button className='rounded-full hover:bg-gray-100 bg-opacity-20 p-3'>
          <FaX />
        </button>

      </div>

      {/* Post description */}
      {
        post.description &&
        <p className="mb-3 px-3">{post.description}</p>
      }

      {/* Post media */}
      <div className='flex space-x-1'>
        {
          post.media.map((item,index) => <img key={`post-${index}`} src={item} alt="Post" className={`${widthClass}`}/>)
        }
      </div>

      {/* Like and comments */}

      <div className='flex flex-col'>

        {/* Like button and comments count */}
        <div className="border-gray-300 p-3">
          <div className="flex justify-between items-center px-1">

            {/* Like Button */}
            <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
              <span className="text-sm font-medium me-2">{formatNumber(post.likeCount)}</span>
              <FaThumbsUp className="text-lg" />
            </button>

            {/* Comment Counts */}
            <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
              <span className="text-sm font-medium me-2">{formatNumber(post.commentCount)}</span>
              <FaCommentAlt className="text-lg" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t bg-white">
          {/* Like Button */}
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <MdThumbUpOffAlt className="text-lg" />
            <span>Like</span>
          </button>

          {/* Comment Button */}
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <MdOutlineComment className="text-lg" />
            <span>Comment</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
            <MdOutlineShare className="text-lg" />
            <span>Share</span>
          </button>
        </div>

      </div>

    </div>
  );
};

const Feeds: React.FC = () => {

  const [posts,setPosts] = useState([
    { id: '66f1510bea0cbcc3f5ff2osj', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-6/473570003_1009052461267142_2955127471446537895_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OrFwBh4B0tUQ7kNvgF1euDB&_nc_zt=23&_nc_ht=scontent.fdel3-2.fna&_nc_gid=Ali9_OaAoLYeOwFAykmLsql&oh=00_AYBNXKq7x60jiNenGTMi-q_PLz6KPZhvPxOhrCY0q9AXkQ&oe=678DCF76'],createdAt : '2024-09-23T11:29:15.991+00:00',commentCount : 5,likeCount : 123},
    { id: '66f1510bea0cbcc3f5ff8fdf', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t51.75761-15/473779988_18486798469058318_6920037260414309427_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EqNo9v4w8K8Q7kNvgEv5RbI&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=A-dytcfxRILlWpaTf9zZz23&oh=00_AYCUu9HEupTKUQjQZTINbSLnax2-CBDvz-Vr9LZtFSlbTA&oe=678DBB37','https://scontent.fdel3-1.fna.fbcdn.net/v/t51.75761-15/473779170_18486798478058318_5921174067933956000_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=1&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jttVucy_OlkQ7kNvgFy6yyn&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=A-dytcfxRILlWpaTf9zZz23&oh=00_AYCua_gmnh5OnJznonnzhyoeFJytQsXvgisTgIVAJg_bDQ&oe=678DCB40'],createdAt : '2024-09-23T11:29:15.991+00:00',commentCount : 2000,likeCount : 2756},
    { id: '66f1510bea0cbcc3f5ff10fd', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00',commentCount : 19100,likeCount : 20000},
    { id: '66f1510bea0cbcc3f5ff7rdh', user: {name : 'Sumit Makker'}, description: 'This is a post from User 1', media : ['https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-6/472045500_3345180558950674_6187932664295444949_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=k7XxyTeBzvEQ7kNvgEzbqis&_nc_zt=23&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AqW-wN0fj5IeC8q_qAt1q6O&oh=00_AYBaOgHNlVjBn8uWHnHBQKlXDKg0kj7kTM2XvBFgrN5wlw&oe=678C66FF'],createdAt : '2024-09-23T11:29:15.991+00:00',commentCount : 155,likeCount : 1500},
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