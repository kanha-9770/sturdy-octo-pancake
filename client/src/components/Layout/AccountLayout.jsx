import React from 'react';

const AccountLayout = () => {
  return (<div className="absolute right-[-6.5rem] mt-4 w-72 bg-white rounded-lg shadow-md">
    <div className="flex items-center p-4">
      <img
        src="https://i.pinimg.com/236x/69/d8/e4/69d8e43aee196d752aff0a6179364bc5.jpg"
        alt="User"
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h2 className="text-lg font-semibold">Atul Kumar</h2>
      </div>
    </div>
    <div className="px-4 pb-4">
      <p className="text-gray-700">+91 78499 04963</p>
      <p className="text-gray-700">atul.kumar@nesscoindia.com</p>
    </div>
    <div className="flex items-center justify-start py-2 px-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" // Replace with the actual flag image URL
        alt="India Flag"
        className="w-5 h-5 mr-2 rounded-full object-cover"
      />
      <p className="text-gray-700">EN</p>
    </div>
    <div className="absolute w-4 h-4 -top-2 right-[6.8rem] bg-white transform rotate-45"></div>
  </div>
  );
};

export default AccountLayout;
