"use client";

import styles from "../register/styles.module.css";
import Input from "@/components/Input";
import { useRouter } from "next/navigation"
import { useState } from "react";


const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password) {
            return router.push('/')
        }
    } 
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Login</h1>
            <form className={styles.Form} onSubmit={handleSubmit}>

                    <label htmlFor="email">E-mail:</label>
                    <Input
                        placeholder="seu@email.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                
                    <label htmlFor="password">Password:</label>
                    <Input 
                        placeholder="senhaSegura123"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className={styles.Text}> Ainda não possui uma conta?
                        <a href="/register" className={styles.Link}> Cadastrar-se</a>
                    </p>

                <button type="submit" className={styles.Submit}>Entrar</button>

            </form>
        </div>
    );
}


export default Login;