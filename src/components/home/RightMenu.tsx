import React from 'react';
import { FaBirthdayCake, FaSearch, FaEllipsisH, FaPen } from 'react-icons/fa';

const RightMenu: React.FC = () => {
  return (
    <div className="h-screen fixed right-0 w-72 mr-4 bg-white rounded-md shadow-md p-4 overflow-y-auto mt-24 z-10">
      {/* Friend Requests Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Friend Requests</h2>
          <a href="#" className="text-blue-600 text-sm">
            See All
          </a>
        </div>
        <div className="flex items-center space-x-4 mb-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Friend Request"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <h4 className="font-medium text-gray-800">S Himanshu</h4>
            <p className="text-sm text-gray-500">1 mutual friend</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-blue-600 text-white rounded-md py-1 text-sm font-medium">
            Confirm
          </button>
          <button className="flex-1 bg-gray-200 text-gray-800 rounded-md py-1 text-sm font-medium">
            Delete
          </button>
        </div>
      </div>

      {/* Birthdays Section */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-800 mb-2">Birthdays</h2>
        <div className="flex items-center space-x-2">
          <FaBirthdayCake className="text-pink-500" />
          <p className="text-sm text-gray-700">
            <strong>Deepak Sehrawat</strong> and <strong>Mukesh Jaat</strong>{' '}
            have their birthdays today.
          </p>
        </div>
      </div>

      {/* Contacts Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Contacts</h2>
          <div className="flex items-center space-x-2">
            <FaSearch className="text-gray-500" />
            <FaEllipsisH className="text-gray-500" />
          </div>
        </div>
        <ul className="space-y-4">
          {[
            { name: 'Sakshi Sourav Thakral', online: true },
            { name: 'Kuldeep Sehrawat', online: true },
            { name: 'Archna Thakur', online: true },
            { name: 'Seema Narula', online: true },
            { name: 'Manoj Makkar', online: true },
            { name: 'Sunil Uppal', online: true },
            { name: 'Piyush Bansal', online: true },
            { name: 'Piyush Bansal', online: true },
            { name: 'Piyush Bansal', online: true },
            { name: 'Piyush Bansal', online: true },
          ].map((contact, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt={contact.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-800">{contact.name}</h4>
              </div>
              {contact.online && (
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Edit Button */}
      {/* <button className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-md">
        <FaPen />
      </button> */}
    </div>
  );
};

export default RightMenu;
