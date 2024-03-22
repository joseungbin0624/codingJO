import React, { useState } from 'react';
import { updateUserProfile } from '../services/userService';
import '../styles/SettingsForm.scss';

function SettingsForm({ userId }) {
  const [settings, setSettings] = useState({ username: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateUserProfile(userId, settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Failed to update settings:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <input type="text" name="username" placeholder="Username" value={settings.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={settings.email} onChange={handleChange} />
      <button type="submit">Update Settings</button>
    </form>
  );
}

export default SettingsForm;
