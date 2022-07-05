export interface LoginView {
    showLoader(): void;

    hideLoader(): void;

    showErrorMessage(message: string): void;

    navigateToNewPath(path: string): void;
}

export class LoginPagePresenter {
    private view: LoginView;

    constructor(
        view: LoginView,
        // logIn: LogIn,
    ) {
        this.view = view;
        // this.logIn = logIn;
    }
}