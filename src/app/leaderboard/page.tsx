'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';
import IMG1 from '../../../public/images/img_image.png'
import IMG2 from '../../../public/images/img_image_114x114.png'
import IMG3 from '../../../public/images/img_image_1.png'

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-[#0e0f15]">
      <Navbar />
      
      <div className="w-full max-w-7xl mx-auto pt-8 pb-32">
        <div className="bg-[#0e0f15] rounded-[40px] overflow-hidden">
          {/* Main Content */}
          <div className="relative bg-cover bg-center">
            {/* Featured Top 3 Users */}
            <div className="flex flex-col sm:flex-row justify-center items-end gap-8 sm:gap-12 lg:gap-48 px-4 sm:px-16 lg:px-64 pt-16 pb-16">
              {/* 2nd Place - Brian Ngo */}
              <div className="flex flex-col items-center gap-8 bg-[rgba(23,28,41,0.8)] backdrop-blur-[10px] rounded-2xl  sm:bg-transparent sm:backdrop-blur-none sm:p-0">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 lg:w-40 lg:h-44 rounded-xl overflow-hidden">
                    <Image 
                      src={IMG1} 
                      alt="Brian Ngo" 
                      className='w-full h-full object-cover'
                      width={160}
                      height={176}
                    />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-semibold text-center">Brian Ngo</h3>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-11 h-11 bg-[#cdcdcd] rounded-lg flex items-center justify-center p-2">
                      <div className="w-6 h-6 bg-gray-800 rounded">🏆</div>
                    </div>
                    <span className="text-white text-sm">Earned 2,000 points</span>
                  </div>
                </div>
              </div>

              {/* 1st Place - Jolie Joie */}
               <div className="flex flex-col items-center gap-8 bg-[rgba(23,28,41,0.8)] backdrop-blur-[10px] rounded-2xl  sm:bg-transparent sm:backdrop-blur-none sm:p-0">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 lg:w-40 lg:h-44 rounded-xl overflow-hidden">
                    <Image 
                      src={IMG2} 
                      alt="Brian Ngo" 
                      className='w-full h-full object-cover'
                      width={160}
                      height={176}
                    />
                  </div>
                  
                  <h3 className="text-white text-3xl sm:text-4xl font-bold text-center">Jolie Joie</h3>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-11 h-11 bg-[#ffd365] rounded-lg flex items-center justify-center p-2">
                      <div className="w-6 h-6 bg-gray-800 rounded">🏆</div>
                    </div>
                    <span className="text-white text-sm">Earned 2,000 points</span>
                  </div>
                </div>
              </div>

              {/* 3rd Place - David Do */}
               <div className="flex flex-col items-center gap-8 bg-[rgba(23,28,41,0.8)] backdrop-blur-[10px] rounded-2xl  sm:bg-transparent sm:backdrop-blur-none sm:p-0">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-32 h-36 sm:w-36 sm:h-40 lg:w-40 lg:h-44 rounded-xl overflow-hidden">
                    <Image 
                      src={IMG3} 
                      alt="Brian Ngo" 
                      className='w-full h-full object-cover'
                      width={160}
                      height={176}
                    />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-semibold text-center">David Do</h3>
                </div>
                <div className="flex flex-col items-center gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-11 h-11 bg-[#b38a48] rounded-lg flex items-center justify-center p-2">
                      <div className="w-6 h-6 bg-gray-400 rounded">🏆</div>
                    </div>
                    <span className="text-white text-sm">Earned 2,000 points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="px-4 sm:px-8 lg:px-16 pb-8 bg-[#0e0f15]">
            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>
            
            {/* Leaderboard Table */}
            <div className="flex flex-col gap-6">
              {/* Table Header */}
              <div className="hidden sm:grid sm:grid-cols-5 gap-4 px-4 text-sm text-white/60">
                <span>Rank</span>
                <span>User name</span>
                <span>Followers</span>
                <span>Points</span>
                <span>Reward</span>
              </div>
              
              {/* Table Rows */}
              <div className="bg-[#171c29] rounded-xl p-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-4">
                  <span className="text-white font-semibold text-lg sm:text-base">4</span>
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-sm">
                      👩‍💼
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Henrietta O&apos;Connell</span>
                      <span className="text-white/60 text-xs">@henrietta</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-right sm:text-left">12,241</span>
                  <span className="text-white font-semibold text-right sm:text-left">2,114,424</span>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-start">
                    <button className="bg-[#21293d] hover:bg-[#2a3447] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                      1000
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#171c29] rounded-xl p-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-4">
                  <span className="text-white font-semibold text-lg sm:text-base">5</span>
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-sm">
                      👨‍🔬
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Darrel Bins</span>
                      <span className="text-white/60 text-xs">@darrel</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-right sm:text-left">12,241</span>
                  <span className="text-white font-semibold text-right sm:text-left">2,114,424</span>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-start">
                    <button className="bg-[#21293d] hover:bg-[#2a3447] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                      1000
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#171c29] rounded-xl p-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-4">
                  <span className="text-white font-semibold text-lg sm:text-base">6</span>
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-sm">
                      👨‍💻
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Alex Chen</span>
                      <span className="text-white/60 text-xs">@alexchen</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-right sm:text-left">11,890</span>
                  <span className="text-white font-semibold text-right sm:text-left">2,098,120</span>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-start">
                    <button className="bg-[#21293d] hover:bg-[#2a3447] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                      900
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#171c29] rounded-xl p-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-4">
                  <span className="text-white font-semibold text-lg sm:text-base">7</span>
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center text-sm">
                      👩‍🎨
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Sarah Wilson</span>
                      <span className="text-white/60 text-xs">@sarahw</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-right sm:text-left">11,456</span>
                  <span className="text-white font-semibold text-right sm:text-left">2,045,890</span>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-start">
                    <button className="bg-[#21293d] hover:bg-[#2a3447] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                      800
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-[#171c29] rounded-xl p-2">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-4">
                  <span className="text-white font-semibold text-lg sm:text-base">8</span>
                  <div className="flex items-center gap-3 col-span-1 sm:col-span-1">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-sm">
                      👨‍🚀
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-medium">Mike Johnson</span>
                      <span className="text-white/60 text-xs">@mikej</span>
                    </div>
                  </div>
                  <span className="text-white font-semibold text-right sm:text-left">11,123</span>
                  <span className="text-white font-semibold text-right sm:text-left">1,998,750</span>
                  <div className="col-span-2 sm:col-span-1 flex justify-end sm:justify-start">
                    <button className="bg-[#21293d] hover:bg-[#2a3447] text-white font-semibold px-6 py-2 rounded-md transition-colors">
                      700
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;