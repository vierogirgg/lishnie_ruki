'use client';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [screen, setScreen] = useState('splash');

  useEffect(() => {
    const timer = setTimeout(() => setScreen('disclaimer'), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (screen === 'splash') {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#FFF9F0] text-center">
        <h1 className="text-6xl animate-bounce mb-4">🐾</h1>
        <h1 className="text-4xl font-black text-[#FF8B94]">Лишние Руки</h1>
        <p className="text-lg opacity-70">Помогай приютам. Становись нужным.</p>
      </div>
    );
  }

  if (screen === 'disclaimer') {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#FFF9F0] p-6">
        <div className="bg-white p-8 rounded-[40px] border-4 border-[#FFD3B6] shadow-[0_8px_0_#FFD3B6] text-center">
          <h2 className="text-2xl font-bold mb-4">Важно! 📢</h2>
          <p className="mb-6 text-gray-600">Лишние Руки — это платформа для добрых дел. Встречайтесь только в приютах!</p>
          <button 
            onClick={() => setScreen('main')}
            className="w-full bg-[#FF8B94] text-white py-4 rounded-2xl font-black shadow-[0_5px_0_#e5737a] active:translate-y-1 active:shadow-none transition-all"
          >
            Я СОГЛАСЕН
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#FFF9F0]">
      <header className="p-4 flex justify-between items-center">
        <span className="font-black text-xl">Привет, Друг! 🐾</span>
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">👤</div>
      </header>

      <main className="flex-1 overflow-y-auto p-4">
        <div className="w-full h-48 bg-[#e0f7fa] rounded-[30px] border-4 border-dashed border-[#A8E6CF] flex flex-col items-center justify-center mb-6">
          <span className="text-4xl mb-2">🗺️</span>
          <span className="font-bold text-[#00acc1]">Игрушечная карта</span>
        </div>

        <h3 className="text-xl font-black mb-4">Нужна помощь:</h3>
        
        <div className="bg-white p-4 rounded-3xl border-2 border-gray-100 mb-4">
          <h4 className="font-bold text-[#FF8B94]">Выгул собак (8 лапок)</h4>
          <p className="text-sm text-gray-500">📍 Приют "Верный друг"</p>
          <p className="text-sm text-gray-500">📅 15 июня, 17:00</p>
          <button className="mt-3 bg-[#A8E6CF] text-white px-4 py-2 rounded-xl font-bold text-sm">Откликнуться</button>
        </div>
      </main>

      <nav className="bg-white p-6 rounded-t-[40px] shadow-lg flex justify-around text-2xl">
        <span>🏠</span>
        <span>🔍</span>
        <span>💬</span>
        <span>⚙️</span>
      </nav>
    </div>
  );
}