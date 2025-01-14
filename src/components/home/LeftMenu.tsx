import React from 'react';
import {
  FaUserFriends,
  FaClock,
  FaBookmark,
  FaUsers,
  FaVideo,
  FaStore,
  FaNewspaper,
  FaChartBar,
  FaBirthdayCake,
  FaLeaf,
  FaCalendarAlt,
  FaWallet,
} from 'react-icons/fa';

const LeftMenu: React.FC = () => {
  return (

    <div className="fixed left-0 ml-4 rounded-md p-4 overflow-y-auto hidden-scrollbar mt-20" style={{ maxHeight: '88vh' }}>
      {/* Profile Section */}
      <div className="flex items-center space-x-4 p-2 mb-2">
        <img
          src="https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/277568352_958602771359206_3536659945590028084_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=105&ccb=1-7&_nc_sid=fe756c&_nc_ohc=mqzEa9XtEbsQ7kNvgFL6VQa&_nc_zt=24&_nc_ht=scontent.fdel3-2.fna&_nc_gid=A7YechD6LGILpP59PzXYyLA&oh=00_AYCioov3rk8_q1WWBqKG1XGsmj-CvNezgRKeZM7D60Qf6A&oe=6789A4E5"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <h4 className="font-semibold text-gray-800">Sumit Makker</h4>
      </div>

      {/* Navigation Items */}
      <nav className="space-y-2">
        <NavItem icon={FaUserFriends} label="Friends" />
        <NavItem icon={FaClock} label="Memories" />
        <NavItem icon={FaBookmark} label="Saved" />
        <NavItem icon={FaUsers} label="Groups" />
        <NavItem icon={FaVideo} label="Video" />
        <NavItem icon={FaStore} label="Marketplace" />
        <NavItem icon={FaNewspaper} label="Feeds" />
        <NavItem icon={FaChartBar} label="Ads Manager" />
        <NavItem icon={FaBirthdayCake} label="Birthdays" />
        <NavItem icon={FaLeaf} label="Climate Science Centre" />
        <NavItem icon={FaCalendarAlt} label="Events" />
        <NavItem icon={FaWallet} label="Facebook Pay" />
      </nav>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ElementType; label: string }> = ({ icon: Icon, label }) => (
  <a
    href="#"
    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
  >
    <Icon className="text-purple-600 mr-3 text-lg" />
    <span className="font-medium">{label}</span>
  </a>
);

export default LeftMenu;
