export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  username: string;
  phone: string;
}

export interface UserSession extends User {
  jwt: string;
}
