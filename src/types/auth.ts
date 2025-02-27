export interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'client_admin';
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
