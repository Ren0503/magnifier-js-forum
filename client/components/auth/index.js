import React, { useState } from 'react';
import Head from 'next/head';

import { LogoIcon } from 'components/icons';
import SignupForm from './SignUpForm';
import LoginForm from './LoginForm';

import styles from './auth-forms.module.css';

const AuthForms = ({ screen = 'signup' }) => {
    const [form, setForm] = useState(screen);

    return (
        <div className={styles.authModal}>
            <Head>
                <title>{form == 'login' ? 'Log in' : 'Sign up'}</title>
            </Head>

            <LogoIcon className={styles.logo} />

            {form === 'login' ? <LoginForm /> : <SignupForm />}

            {form === 'login' ? (
                <p className={styles.authSwitchMessage}>
                    Don`t have an account?{' '}
                    <a onClick={() => setForm('signup')}>Sign up</a>
                </p>
            ) : (
                <p className={styles.authSwitchMessage}>
                    Already have an account?{' '}
                    <a onClick={() => setForm('login')}>Log in</a>
                </p>
            )}
        </div>
    );
};

export default AuthForms;