import React, {Component} from "react";
import {LoginPagePresenter, LoginView} from "../../presenters/LoginPagePresenter";
import {PresenterFactory} from "../../presenters/PresenterFactory";
import {Button, Link, TextField} from "@material-ui/core";
import ItemLogo from "../../assets/images/item-logo.svg"
import "./LoginPage.scss";

class LoginPage extends Component<{}, LoginState> implements LoginView {
    state: LoginState = {
        username: '',
        password: '',
        isLoaderVisible: true,
    }
    presenter: LoginPagePresenter;

    constructor(props: any) {
        super(props);
        const presenters = new PresenterFactory();
        this.presenter = presenters.loginPage(this);
    }

    hideLoader(): void {
    }

    navigateToNewPath(path: string): void {
    }

    showErrorMessage(message: string): void {
    }

    showLoader(): void {
    }

    render = () => {
        const { isLoaderVisible, password, username } = this.state;
        return (
            <div className={'login-page__container__'}>
                <img className={'login-page__container__logo'} src={ItemLogo} alt={'ITEM APP'}/>
                <h3 className={'login-page__container__welcome'}>{'Bienvenido a ITEM'}</h3>
                <div className={'login-page__container__form'}>
                    <span className={'login-page__container__title'}>{'Iniciar Sesión'}</span>
                    <TextField className={'login-page__container__input'} id="password" label="Usuario/Email" variant="filled" />
                    <TextField className={'login-page__container__input'} type={'password'} id="username" label="Contraseña" variant="filled" />
                    <Link className={'login-page__container__forgot'} href="#">
                        {'¿Olvidaste tu contraseña?'}
                    </Link>
                </div>
                <Button className={'login-page__container__login-btn'} variant="contained" color="primary">
                    {'Ingresar'}
                </Button>

            </div>
        );
    }
}

interface LoginState {
    username: string;
    password: string;
    isLoaderVisible: boolean;
}

export default LoginPage;