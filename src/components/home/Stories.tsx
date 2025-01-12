// components/Stories.tsx
import React from 'react';

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
        <div className="relative w-28 h-34 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
            <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute top-0 bottom-0 w-full bg-black bg-opacity-20 p-2 flex items-end">
                <small className="text-white">{item.name}</small>
            </div>
        </div>
    );
};

const Stories: React.FC = () => {
  return (
    <div className="flex space-x-2 overflow-x-auto hidden-scrollbar">
        {storiesData.map((item) => (
            <StoryItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default Stories;