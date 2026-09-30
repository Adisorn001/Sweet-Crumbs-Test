import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('sweetcrumbs_currentUser');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        localStorage.removeItem('sweetcrumbs_currentUser');
      }
    }
  }, []);

  const getUsers = () => {
    try {
      const saved = localStorage.getItem('sweetcrumbs_users');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const saveUsers = (users) => {
    localStorage.setItem('sweetcrumbs_users', JSON.stringify(users));
  };

  const login = (username) => {
    const trimmed = username.trim();
    if (!trimmed) return { success: false, error: 'กรุณาระบุชื่อผู้ใช้' };
    if (trimmed.length < 3)
      return { success: false, error: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร' };

    const users = getUsers();
    const found = users.find(
      (u) => u.username.toLowerCase() === trimmed.toLowerCase()
    );
    if (found) {
      setUser(found);
      localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(found));
      return { success: true };
    }
    return {
      success: false,
      error: 'ไม่พบชื่อผู้ใช้นี้ กรุณาสมัครสมาชิกก่อน',
    };
  };

  const register = (username) => {
    const trimmed = username.trim();
    if (!trimmed) return { success: false, error: 'กรุณาระบุชื่อผู้ใช้' };
    if (trimmed.length < 3)
      return { success: false, error: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร' };
    if (!/^[a-zA-Z0-9_ก-๙]+$/.test(trimmed))
      return {
        success: false,
        error: 'ชื่อผู้ใช้ใช้ได้เฉพาะตัวอักษร ตัวเลข และ _',
      };

    const users = getUsers();
    if (users.find((u) => u.username.toLowerCase() === trimmed.toLowerCase())) {
      return { success: false, error: 'ชื่อผู้ใช้นี้ถูกใช้งานแล้ว' };
    }

    const newUser = {
      username: trimmed,
      displayName: trimmed,
      bio: '',
      phone: '',
      joinDate: new Date().toISOString(),
    };
    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(newUser));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sweetcrumbs_currentUser');
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem('sweetcrumbs_currentUser', JSON.stringify(updated));
    const users = getUsers();
    const idx = users.findIndex((u) => u.username === user.username);
    if (idx >= 0) {
      users[idx] = updated;
      saveUsers(users);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}

export { AuthContext };
