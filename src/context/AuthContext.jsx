import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userForms, setUserForms] = useState([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      const storedForms = localStorage.getItem('formflowForms');
      if (storedForms) {
        setUserForms(JSON.parse(storedForms));
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  const signup = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        }
      }
    });
    if (error) throw error;
    return data;
  };

  const loginWithOAuth = async (provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
    });
    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setUserForms([]);
    localStorage.removeItem('formflowForms');
  };

  const addForm = (form) => {
    const newForms = [{ id: Date.now(), ...form }, ...userForms];
    setUserForms(newForms);
    localStorage.setItem('formflowForms', JSON.stringify(newForms));
  };


  return (
    <AuthContext.Provider value={{ user, userForms, login, signup, loginWithOAuth, logout, addForm, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
