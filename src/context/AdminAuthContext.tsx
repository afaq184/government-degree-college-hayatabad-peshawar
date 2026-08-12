import { createContext, useContext, useState, type ReactNode } from 'react';

const ADMIN_ID = 'admin';
const ADMIN_PASSWORD = 'admin';
const STORAGE_KEY = 'gcp_admin_session';

type AdminAuthContextValue = {
  isAuthenticated: boolean;
  login: (id: string, password: string) => boolean;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      return false;
    }
  });

  const login = (id: string, password: string) => {
    const ok = id.trim() === ADMIN_ID && password === ADMIN_PASSWORD;
    if (ok) {
      sessionStorage.setItem(STORAGE_KEY, '1');
      setIsAuthenticated(true);
    }
    return ok;
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
