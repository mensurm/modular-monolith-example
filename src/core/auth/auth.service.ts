class AuthService {
  
  authenticate(username: string, password: string): boolean {
    return username === 'admin' && password === 'password';
  }
}

export const authService = new AuthService();
