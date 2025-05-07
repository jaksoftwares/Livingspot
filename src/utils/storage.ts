// LocalStorage/sessionStorage helpers
export function setToken(token: string) {
  localStorage.setItem('authToken', token);
}

export function getToken(): string | null {
  return localStorage.getItem('authToken');
}

export function clearStorage() {
  localStorage.clear();
}
