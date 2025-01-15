import React from 'react';
import { FaBirthdayCake, FaSearch, FaEllipsisH, FaPen } from 'react-icons/fa';

const RightMenu: React.FC = () => {

  return (
    <div className="fixed w-72 right-0 mr-4 rounded-md p-4 overflow-y-auto hidden-scrollbar mt-20" style={{ maxHeight: '88vh' }}>
      {/* Friend Requests Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">Friend Requests</h2>
          <a href="#" className="text-blue-600 text-sm hover:bg-gray-200 px-2 py-1 rounded-sm">See All</a>
        </div>
        <div className="flex items-center space-x-4 mb-3">
          <img
            src="https://scontent.fdel3-3.fna.fbcdn.net/v/t39.30808-1/459186436_489603507174158_9120422350225723790_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_ohc=LY9Rkm-ePbgQ7kNvgF_NDO2&_nc_zt=24&_nc_ht=scontent.fdel3-3.fna&_nc_gid=AEd1BmETgkHDrfrePQ6frzC&oh=00_AYCWjxn5JlStr0nLNwbZyrHIgwFh_mJXrqSeeH0MuVg6AQ&oe=678C5C56"
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
      <div className="border-y-2 mb-5 py-3">
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
            { name: 'Sakshi Sourav Thakral', online: true,profilePic : 'https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-1/473037467_1290248582177621_639955150940123361_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lxtVA3S_DpMQ7kNvgHAhvkt&_nc_zt=24&_nc_ht=scontent.fdel3-1.fna&_nc_gid=ARm6ZHHi--VSbckCeJpOnDB&oh=00_AYAnE7YsWMID2ArjzB3Drxw88uMOxh7zPAPckUdTJZi9Iw&oe=678DAB36'},
            { name: 'Kuldeep Sehrawat', online: true,profilePic : 'https://scontent.fdel3-2.fna.fbcdn.net/v/t1.6435-1/106620819_1173944439665021_1514476512304560211_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=lGyIila4KLIQ7kNvgHzxSrJ&_nc_zt=24&_nc_ht=scontent.fdel3-2.fna&_nc_gid=ARm6ZHHi--VSbckCeJpOnDB&oh=00_AYBGnHkSzkaiw4bRjGoJ3UM6rgpMrEKHDGF_IVnIKK9aYA&oe=67AF696A'},
            { name: 'Gautam Kumar', online: true,profilePic : 'https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-1/296739353_1031632527539524_5345666994005361750_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=PPy90UPsB98Q7kNvgGEROnA&_nc_zt=24&_nc_ht=scontent.fdel3-1.fna&_nc_gid=ANyn-ojWBnYmshcS9Humufu&oh=00_AYAyp1OjPCC3n6X5sVaGS9MzpkFwfVoa58GSougRxl6dBg&oe=678DA044'},
            { name: 'Dipesh Sharma', online: true,profilePic : 'https://scontent.fdel3-5.fna.fbcdn.net/v/t39.30808-1/462625507_2314777385537968_854133501278523703_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_ohc=-kr8UZ2L0YQQ7kNvgElR7it&_nc_zt=24&_nc_ht=scontent.fdel3-5.fna&_nc_gid=AmYNzLtjuoyDSQtZFltzcxn&oh=00_AYCuBug2_dy9rt07J4ha5TbBB5D2uvHNRtEq2yTCiylMPQ&oe=678DB664'},
            { name: 'Manoj Makkar', online: true,profilePic : 'https://scontent.fdel3-1.fna.fbcdn.net/v/t39.30808-1/395365592_993902068578774_4546113184901114981_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=Onjpo-BCeMAQ7kNvgFF0GSn&_nc_zt=24&_nc_ht=scontent.fdel3-1.fna&_nc_gid=AnxMg3IBvo_FFu8FUWOXF66&oh=00_AYBtkMJ0zle099a7it6EtSxOzV16IUkkDKyG1ssxEyQU9g&oe=678DC17C'},
          ].map((contact, index) => (
            <li key={index} className="flex items-center space-x-4">
              <img
                src={contact.profilePic}
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
