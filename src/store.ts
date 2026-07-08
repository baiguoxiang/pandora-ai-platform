import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'individual' | 'enterprise' | 'government';
  balance: number;
  isLoggedIn: boolean;
}

interface Store {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
}

const defaultUser: User = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  role: 'individual',
  balance: 0,
  isLoggedIn: false,
};

export const useStore = create<Store>((set) => ({
  user: defaultUser,
  login: (email: string, password: string) => {
    set({
      user: {
        id: '1',
        name: '潘多拉用户',
        email,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: 'individual',
        balance: 1000,
        isLoggedIn: true,
      },
    });
  },
  logout: () => {
    set({ user: defaultUser });
  },
  register: (name: string, email: string, password: string) => {
    set({
      user: {
        id: '1',
        name,
        email,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        role: 'individual',
        balance: 0,
        isLoggedIn: true,
      },
    });
  },
}));
