'use client'
import React from 'react';
import Navbar from '@/components/navbar/Navbar';

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-[#090701] relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/10 to-gray-800/20"></div>
      
      <Navbar />
      
      <div className="relative mt-5 z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Top 3 Podium */}
        <div className="flex justify-center items-end mb-6 sm:mb-8 gap-2 sm:gap-4 lg:gap-6">
          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              
              {/* Avatar circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-2xl sm:text-3xl border-2 sm:border-4 border-purple-400 relative">
                🥬
                {/* Number 2 badge */}
                <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg border-2 border-white">
                  2
                </div>
              </div>
            </div>
            
            {/* Card */}
            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center w-28 sm:w-36 border border-slate-600">
              <h3 className="text-white font-bold text-sm sm:text-lg mb-1">ThommyTom</h3>
              <p className="text-gray-300 text-lg sm:text-xl font-bold mb-2 sm:mb-3">18k GXP</p>
              <div className="flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-sm sm:text-lg">+200</span>
                <div className="w-3 h-3 sm:w-5 sm:h-5 bg-emerald-400 rounded ml-2"></div>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="flex flex-col items-center -mt-4 sm:-mt-6">
            <div className="relative">
              {/* Crown */}
              <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-yellow-400 text-2xl sm:text-4xl">👑</div>
              
              {/* Avatar circle */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center text-3xl sm:text-4xl border-2 sm:border-4 border-yellow-400 relative">
                🐷
                {/* Number 1 badge */}
                <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center text-black font-bold text-lg sm:text-xl border-2 border-white">
                  1
                </div>
              </div>
            </div>
            
            {/* Card */}
            <div className="bg-gradient-to-b from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center w-32 sm:w-40 border border-yellow-400/50">
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">Sparkles</h3>
              <p className="text-yellow-200 text-xl sm:text-2xl font-bold mb-2 sm:mb-3">32.5k GXP</p>
              <div className="flex items-center justify-center mb-2 sm:mb-3">
                <span className="text-emerald-400 font-bold text-lg sm:text-xl">+250</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded ml-2"></div>
              </div>
              <div className="bg-yellow-600/80 text-yellow-100 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                You
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Avatar circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl sm:text-3xl border-2 sm:border-4 border-orange-400 relative">
                🐯
                {/* Number 3 badge */}
                <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg border-2 border-white">
                  3
                </div>
              </div>
            </div>
            
            {/* Card */}
            <div className="bg-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center w-28 sm:w-36 border border-slate-600">
              <h3 className="text-white font-bold text-sm sm:text-lg mb-1">HarryBradley</h3>
              <p className="text-orange-300 text-lg sm:text-xl font-bold mb-2 sm:mb-3">14k GXP</p>
              <div className="flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-sm sm:text-lg">+150</span>
                <div className="w-3 h-3 sm:w-5 sm:h-5 bg-emerald-400 rounded ml-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar separator */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <div className="h-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* Rest of Rankings */}
        <div className="w-full px-4 sm:px-6 lg:px-8 space-y-2 sm:space-y-3">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl">
                4
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-cyan-500 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
                😎
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">ShadowStorm</h4>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl lg:text-3xl">13.9k GXP</div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl">
                5
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-red-500 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
                😡
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">TempestFury</h4>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl lg:text-3xl">13.8k GXP</div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl">
                6
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-green-500 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
                🥬
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">FrostyCold</h4>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl lg:text-3xl">13.7k GXP</div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl">
                7
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-pink-500 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
                🐷
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">Sparkles</h4>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl lg:text-3xl">13.5k GXP</div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded flex items-center justify-center text-white font-bold text-base sm:text-lg lg:text-xl">
                8
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gray-500 flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
                🤖
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg sm:text-xl lg:text-2xl">ArcadeCoinz</h4>
              </div>
            </div>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl lg:text-3xl">13.4k GXP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;