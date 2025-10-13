'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import IMG1 from '../../../public/images/img_image.png';
import IMG2 from '../../../public/images/img_image_114x114.png';
import IMG3 from '../../../public/images/img_image_1.png';

const LeaderboardPage = () => {
  const topUsers = [
    { name: 'Brian Ngo', img: IMG1, plates: 20, chars: 4, trophy: '🏆', bgColor: 'bg-[#cdcdcd]' },
    { name: 'Jolie Joie', img: IMG2, plates: 2000, chars: 5, trophy: '🏆', bgColor: 'bg-[#ffd365]' },
    { name: 'David Do', img: IMG3, plates: 2000, chars: 3, trophy: '🏆', bgColor: 'bg-[#b38a48]' },
  ];

  const leaderboardRows = [
    { rank: 4, name: "Henrietta O'Connell", handle: '@henrietta', plates: 12, chars: 2, emoji: '👩‍💼', color: 'from-blue-400 to-blue-600' },
    { rank: 5, name: 'Darrel Bins', handle: '@darrel', plates: 13, chars: 5, emoji: '👨‍🔬', color: 'from-green-400 to-green-600' },
    { rank: 6, name: 'Alex Chen', handle: '@alexchen', plates: 11, chars: 8, emoji: '👨‍💻', color: 'from-purple-400 to-purple-600' },
    { rank: 7, name: 'Sarah Wilson', handle: '@sarahw', plates: 11, chars: 0, emoji: '👩‍🎨', color: 'from-red-400 to-red-600' },
    { rank: 8, name: 'Mike Johnson', handle: '@mikej', plates: 11, chars: 1, emoji: '👨‍🚀', color: 'from-cyan-400 to-cyan-600' },
  ];

  return (
    <div className="min-h-screen bg-[#0e0f15]">
      <Navbar />

      <div className="w-full max-w-7xl mx-auto pt-8 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e0f15] rounded-[40px] overflow-hidden">

          {/* Top 3 Users */}
          <div className="flex justify-center items-end gap-6 sm:gap-12 lg:gap-32 flex-nowrap overflow-x-auto pt-16 pb-16">
            {topUsers.map((user, index) => (
              <div key={index} className="flex flex-col items-center gap-4 min-w-[120px]">
                <div className="w-28 h-32 sm:w-36 sm:h-40 lg:w-40 lg:h-44 rounded-xl overflow-hidden bg-[rgba(23,28,41,0.8)] backdrop-blur-[10px] flex items-center justify-center">
                  <Image
                    src={user.img}
                    alt={user.name}
                    className="w-full h-full object-cover"
                    width={160}
                    height={176}
                  />
                </div>
                <h3 className={`${index === 1 ? 'text-3xl sm:text-4xl font-bold' : 'text-2xl sm:text-3xl font-semibold'} text-white text-center`}>
                  {user.name}
                </h3>
                
                {/* Stats aligned with table */}
                <div className="gap-4 ml-10 w-full text-center">
                  <div className="flex gap-2  items-center">
                    <div className={`w-10 h-10 ${user.bgColor} rounded-lg flex items-center justify-center mb-2`}>
                      {user.trophy}
                    </div>
                    <span className="text-white text-sm font-bold">{user.plates} Plates</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    {user.chars !== null && (
                      <>
                        <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">🃏</div>
                        <span className="text-white text-sm font-bold">{user.chars} Characters</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Leaderboard */}
          <div className="px-0 sm:px-8 lg:px-16 pb-8">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>

            {/* Table Header */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-4 px-4 text-sm text-white/60 font-medium">
              <span>Rank</span>
              <span>User name</span>
              <span>Plates Collected</span>
              <span>Characters Unlocked</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-3">
              {leaderboardRows.map((user) => (
                <div key={user.rank} className="bg-[#171c29] rounded-xl p-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 items-center p-4 text-white text-sm">
                    <span className="font-semibold">{user.rank}</span>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center text-sm`}>
                        {user.emoji}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-white/60 text-xs">{user.handle}</span>
                      </div>
                    </div>
                    <span className="font-semibold">{user.plates}</span>
                    <span className="font-semibold">{user.chars}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
