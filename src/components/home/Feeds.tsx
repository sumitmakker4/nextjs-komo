// components/Feed.tsx
import React from 'react';

const postsData = [
  { id: 1, user: 'User 1', content: 'This is a post from User 1' },
  { id: 2, user: 'User 2', content: 'Hello, this is User 2!' },
  { id: 3, user: 'User 3', content: 'What a wonderful day!' },
  // Add more posts data here
];

const Feeds: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Feeds</h2>
        {/* Example Post */}
        <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
            <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
            />
            <div>
            <p className="font-semibold">User Name</p>
            <p className="text-sm text-gray-500">Location · Date</p>
            </div>
        </div>
        <p className="mb-2">Post content goes here...</p>
        <img
            src="https://via.placeholder.com/400x200"
            alt="Post"
            className="w-full rounded-lg"
        />
        </div>
    </div>
  );
};

export default Feeds;