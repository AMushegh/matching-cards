interface IAuthStore {
  isLoggedIn: boolean;
}

interface IAuthService {
  login(): void;
  setAuthStateOnAppReady(): void;
}

interface IAuthController {
  loginSumbitted(): void;
  appReady(): void;
}
