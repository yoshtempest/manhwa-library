"use client";

import styles from "./styles.module.css";
import Input from "@/frontend/components/Input";
import Link from "next/link";
import { useRegister } from "@/frontend/hooks/user";
import { useRouter } from "next/navigation"
import { useState } from "react";


const Register = () => {
    const router = useRouter();
    const [registerData, setRegisterData] = useState({
        email: '',
        username: '',
        password: ''
    });
    const register = useRegister();

    const setEmail = (email: string) => {
        setRegisterData(prev => ({ ...prev, email }));
    };
    const setUsername = (username: string) => {
        setRegisterData(prev => ({ ...prev, username }));
    };
    const setPassword = (password: string) => {
        setRegisterData(prev => ({ ...prev, password }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (registerData.email && registerData.username && registerData.password) {
            try{
                const user = await register(
                    registerData.username,
                    registerData.email,
                    registerData.password
                )
                if (user) {
                    router.push('/');
                }
            }
            catch (error) {
                alert('Erro ao registrar usuário: ' + error);
            }
        }
    };

    return (
        <div className={`${styles.Container} ${styles.RegisterContainer}`}>
            <h1 className={styles.Title}>Cadastro</h1>
            <form className={styles.Form} onSubmit={handleSubmit}>

                <Input
                    placeholder="Email"
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Username"
                    value={registerData.username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <Input
                    placeholder="Senha"
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.LittleDistance}>
                    <button type="submit" className={styles.Submit}>Enviar</button>
                    <p className={styles.Text}> Já possui uma conta?
                        <Link href="/login" className={styles.Link}> Ir para o login</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}


export default Register;