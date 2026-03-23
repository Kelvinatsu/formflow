import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userForms, setUserForms] = useState([]);

  useEffect(() => {
    // Check local storage for an existing session mock
    const storedUser = localStorage.getItem('formflowSession');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    const storedForms = localStorage.getItem('formflowForms');
    if (storedForms) {
      setUserForms(JSON.parse(storedForms));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const mockUser = { email, name: email.split('@')[0], id: 'user_' + Date.now() };
    setUser(mockUser);
    localStorage.setItem('formflowSession', JSON.stringify(mockUser));
    return true;
  };

  const signup = (name, email, password) => {
    const mockUser = { email, name, id: 'user_' + Date.now() };
    setUser(mockUser);
    localStorage.setItem('formflowSession', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setUserForms([]);
    localStorage.removeItem('formflowSession');
    localStorage.removeItem('formflowForms');
  };

  const addForm = (form) => {
    const newForms = [{ id: Date.now(), ...form }, ...userForms];
    setUserForms(newForms);
    localStorage.setItem('formflowForms', JSON.stringify(newForms));
  };


  return (
    <AuthContext.Provider value={{ user, userForms, login, signup, logout, addForm, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
