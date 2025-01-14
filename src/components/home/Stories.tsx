'use client'

import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';

const storiesData = [
  { id: 1, name: 'Virat Kohli', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg/260px-Virat_Kohli_in_New_Delhi_in_December_2018.jpg' },
  { id: 2, name: 'Yashasvi Jaswal', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FITMLgeRHKxMuSACI8qVfNIe1ahphHxhhA&s' },
  { id: 3, name: 'Brad Pit', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ki0UJzug5pKLTNO857vXfY-tWYr1rFG7Cg&s' },
  { id: 4, name: 'Selena Gomez', imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/selena-gomez-07515652-16x9_0.jpg?VersionId=xqw2zINghau.ZbUV9OL6l5K.IIamXdjs&size=690:388' },
  { id: 5, name: 'Virat Kohli', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg/260px-Virat_Kohli_in_New_Delhi_in_December_2018.jpg' },
  { id: 6, name: 'Yashasvi Jaswal', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FITMLgeRHKxMuSACI8qVfNIe1ahphHxhhA&s' },
  { id: 7, name: 'Brad Pit', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ki0UJzug5pKLTNO857vXfY-tWYr1rFG7Cg&s' },
  { id: 8, name: 'Selena Gomez', imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202409/selena-gomez-07515652-16x9_0.jpg?VersionId=xqw2zINghau.ZbUV9OL6l5K.IIamXdjs&size=690:388' },
];

interface StoryItemProps {
    item: {
      id: number;
      name: string;
      imageUrl: string;
    };
}

const StoryItem: React.FC<StoryItemProps> = ({ item }) => {
    return (
        <div className="relative group w-28 h-34 bg-gray-200 rounded-lg flex-shrink-0 cursor-pointer overflow-hidden">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full transform transition-transform duration-300 group-hover:scale-105 object-cover" />
            <div className="absolute top-0 bottom-0 w-full bg-black bg-opacity-20 p-2 flex items-end">
                <small className="text-white">{item.name}</small>
            </div>
        </div>
    );
};

const Stories: React.FC = () => {

  const containerRef = useRef<any>(null);
  const [showLeft, setShowLeft] = useState<Boolean>(false);
  const [showRight, setShowRight] = useState<Boolean>(true);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust scroll amount
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust scroll amount
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Scroll Button */}
      {
        showLeft &&
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <FaChevronLeft className="text-gray-700 text-xl" />
        </button>
      }

      {/* Story Items */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="flex space-x-2 overflow-x-auto hidden-scrollbar scroll-smooth"
      >
        {/* Create Story */}
        <div className="relative group w-28 h-34 bg-gray-200 rounded-lg flex-shrink-0 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 cursor-pointer z-10"></div>
          <img
            src={
              'https://scontent.fdel3-2.fna.fbcdn.net/v/t39.30808-1/277568352_958602771359206_3536659945590028084_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=6LHRVYRdyu0Q7kNvgFBucMm&_nc_zt=24&_nc_ht=scontent.fdel3-2.fna&_nc_gid=AEwP1PClUEuc-lWEkWcfaQi&oh=00_AYDBP6Ce-8oUp4gyk_cbgU-yKO2vqrHQ7cyBddj7AD6p4w&oe=678C47E5'
            }
            alt={'Sumit Makker'}
            className="w-full h-[78%] object-cover"
          />
          <div className="absolute flex flex-col items-center top-[68%] w-full">
            <div className="flex items-center justify-center bg-white rounded-full h-7 w-7">
              <FaPlus
                className="bg-purple-600 p-1 rounded-full text-xl text-white"
                strokeWidth={2}
              />
            </div>
            <small className="text-center">{'Create story'}</small>
          </div>
        </div>

        {/* Map Stories */}
        {storiesData.map((item) => (
          <div
            key={item.id}
            className="group relative w-28 h-34 bg-gray-200 rounded-lg flex-shrink-0 cursor-pointer overflow-hidden"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full group-hover:scale-105 transition-scale duration-300 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2">
              <small className="text-white">{item.name}</small>
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {
        showRight &&
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 z-10 shadow-md"
        >
          <FaChevronRight className="text-gray-700 text-xl" />
        </button>
      }
    </div>
  );
};

export default Stories;