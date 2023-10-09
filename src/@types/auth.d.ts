interface IAuthStore {
  isLoggedIn: boolean;
}

interface IAuthService {
  login(): void;
}

interface IAuthController {
  loginClicked(): void;
}
