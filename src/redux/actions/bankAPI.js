const API = 'http://localhost:3001/api/v1/user'

export const bankAPI = {
  login: async (userData) => {
    const answer = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
    const result = await answer.json()
    if (!answer.ok) throw result
    return result
  },

  getProfile: async (token) => {
    const answer = await fetch(`${API}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
    const result = await answer.json()
    if (!answer.ok) throw result
    return result
  },

  updateUserProfile: async (profileData, token) => {
    const answer = await fetch(`${API}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    })
    const result = await answer.json()
    if (!answer.ok) throw result
    return result
  },
};