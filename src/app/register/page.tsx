"use client";

import styles from "./styles.module.css";
import Input from "@/components/Input";
import { useRouter } from "next/navigation"
import { useState } from "react";


const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && username && password) {
            return router.push('/login')
        }
        else {
            alert('Preencha todos os campos!');
        }
    } 
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Register</h1>
            <form className={styles.Form} onSubmit={handleSubmit}>

                <label htmlFor="email">E-mail:</label>
                <Input
                    placeholder="seu@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="username">Username:</label>
                <Input
                    placeholder="Robisvaldo Ratimbum"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <label htmlFor="password">Password:</label>
                <Input
                    placeholder="senhaSegura123"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                
                <p className={styles.Text}> Já possui uma conta?
                    <a href="/login" className={styles.Link}> Ir para o login</a>
                </p>
  
                <button type="submit" className={styles.Submit}>Concluir</button>
            </form>
        </div>
    );
}


export default Register;