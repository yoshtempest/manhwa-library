"use client";

import styles from "../register/styles.module.css";
import Input from "@/frontend/components/Input";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useLogin } from "@/frontend/hooks/user";


const Login = () => {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const login = useLogin();

    const setEmail = (email: string) => {
        setLoginData(prev => ({ ...prev, email }));
    };
    const setPassword = (password: string) => {
        setLoginData(prev => ({ ...prev, password }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            try {
                const user = await login(loginData.email, loginData.password);
                if (user) {
                    router.push('/');
                }
            }
            catch (error) {
                alert('Erro ao fazer login: ' + error);
            }
        }
    } 
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Login</h1>
            <form className={styles.Form} onSubmit={handleSubmit}>

                    <label htmlFor="email"></label>
                    <Input
                        placeholder="Email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                    <label htmlFor="password"></label>
                    <Input 
                        placeholder="Senha"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className={styles.Text}> Ainda não possui uma conta?
                        <Link href="/register" className={styles.Link}> Cadastrar-se</Link>
                    </p>

                <button type="submit" className={styles.Submit}>Entrar</button>

            </form>
        </div>
    );
}


export default Login;