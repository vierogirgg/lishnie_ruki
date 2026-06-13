import React, { useState, useEffect } from 'react';
import './App.css';

// Имитация данных (в реальности будут из API)
const MOCK_ADS = [
  { id: 1, title: "Выгул собак", shelter: "Приют 'Друг'", date: "15 июня", hands: 4, type: "Выгул" },
  { id: 2, title: "Покраска вольеров", shelter: "Кошкин Дом", date: "16 июня", hands: 2, type: "Ремонт" }
];

function App() {
  const [screen, setScreen] = useState('splash');
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Эффект загрузки (Splash Screen)
    const timer = setTimeout(() => setScreen('disclaimer'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const renderSplash = () => (
    <div className="screen splash">
      <h1 className="bounce">🐾 Лишние Руки</h1>
      <p>Помогай приютам. Становись нужным.</p>
    </div>
  );

  const renderDisclaimer = () => (
    <div className="screen disclaimer">
      <div className="card">
        <h3>Важно! 📢</h3>
        <p>Мы — платформа для знакомства. Встречайтесь только в приютах. Будьте осторожны!</p>
        <button onClick={() => setScreen('role_selection')}>Я согласен</button>
      </div>
    </div>
  );

  const renderRoleSelection = () => (
    <div className="screen roles">
      <h2>Кто ты сегодня?</h2>
      <div className="role-buttons">
        <button className="role-btn" onClick={() => {setRole('volunteer'); setScreen('main');}}>
          <span>🐶</span> Я волонтёр
        </button>
        <button className="role-btn" onClick={() => {setRole('coordinator'); setScreen('main');}}>
          <span>🏠</span> Я координатор
        </button>
      </div>
    </div>
  );

  const renderMain = () => (
    <div className="screen main">
      <div className="header">
        <span>Привет, Волонтер! 🐾</span>
      </div>
      <div className="map-placeholder">
        {/* Здесь будет Leaflet Map */}
        <p>🗺️ Карта приютов (игрушечный стиль)</p>
      </div>
      <div className="ads-list">
        <h3>Нужна помощь:</h3>
        {MOCK_ADS.map(ad => (
          <div key={ad.id} className="ad-card">
            <h4>{ad.title}</h4>
            <p>📍 {ad.shelter} | 📅 {ad.date}</p>
            <button className="small-btn">Откликнуться</button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {screen === 'splash' && renderSplash()}
      {screen === 'disclaimer' && renderDisclaimer()}
      {screen === 'role_selection' && renderRoleSelection()}
      {screen === 'main' && renderMain()}
    </div>
  );
}

export default App;