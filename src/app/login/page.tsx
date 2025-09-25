"use client";

import styles from "../register/styles.module.css";
import Input from "@/frontend/components/Input";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/uploads";
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className={styles.LittleDistance}>
                    <Input 
                        placeholder="Senha"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link href="/register" className={styles.Link}>Esqueci Minha Senha</Link>
                </div>


                <button type="submit" className={styles.Submit}>Entrar</button>
                <div className={styles.HorizontalContainer}>
                    <hr />
                    <h3>Ou Entrar Com</h3>
                    <hr />
                </div>
                <div className={styles.LittleDistance}>
                    <button type="submit" className={styles.Google}
                        onClick={() => router.push('/auth/google')}>
                        <Image src={IMAGES.google} alt="Google Logo" width={30} height={30}/>
                        Google
                    </button>
                    <p> Ainda não possui uma conta?
                        <Link href="/register" className={styles.Link}> Cadastre-se</Link>
                    </p>
                </div>

            </form>
        </div>
    );
}


export default Login;