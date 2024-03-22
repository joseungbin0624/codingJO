import React, { useEffect, useState } from 'react';
import SettingsForm from '../components/SettingsForm';
import { getUserProfile, updateUserProfile } from '../services/userService'; // 수정: 함수 사용 변경
import '../styles/SettingsPage.scss';

function SettingsPage() {
  const [userSettings, setUserSettings] = useState(null);

  useEffect(() => {
    async function loadUserSettings() {
      try {
        const settings = await getUserProfile(); // 수정: 함수 사용 변경
        setUserSettings(settings);
      } catch (error) {
        console.error('Error fetching user settings:', error);
      }
    }
    loadUserSettings();
  }, []);

  const handleUpdateSettings = async (settings) => {
    try {
      await updateUserProfile(settings); // 수정: 함수 사용 변경
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Failed to update settings:', error);
      alert('Failed to update settings. Please try again.');
    }
  };

  return (
    <div className="settings-page">
      <h1>Account Settings</h1>
      {userSettings ? (
        <SettingsForm settings={userSettings} onUpdateSettings={handleUpdateSettings} />
      ) : (
        <p>Loading settings...</p>
      )}
    </div>
  );
}

export default SettingsPage;
