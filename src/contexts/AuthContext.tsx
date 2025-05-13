"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import users from "@/data/users.json"; // Mock de dados de usuários

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  // Função para obter o cookie pelo nome
  const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
  };

  useEffect(() => {
    const storedUser = getCookie("auth_user");  // Recupera o cookie 'auth_user'
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));  // Define o usuário se o cookie estiver presente
      } catch {
        document.cookie = "auth_user=; max-age=0; path=/";  // Remove o cookie se houver erro
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (matchedUser) {
      const { password, ...userData } = matchedUser;
      setUser(userData);  // Atualiza o estado com os dados do usuário
      // Armazena o usuário no cookie por 1 dia
      document.cookie = `auth_user=${encodeURIComponent(JSON.stringify(userData))}; path=/; max-age=86400; SameSite=Lax`;
      
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);  // Limpa o estado
    // Remove o cookie de autenticação
    document.cookie = "auth_user=; path=/; max-age=0;"; 
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
