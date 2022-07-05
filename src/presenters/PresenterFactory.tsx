import {LoginPagePresenter, LoginView} from "./LoginPagePresenter";


export class PresenterFactory {

    loginPage = (view: LoginView): LoginPagePresenter =>
        new LoginPagePresenter(
            view,
            // Provider.logIn(),
        );

}
