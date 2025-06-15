import styles from "./styles.module.css";
import Input from "@/components/Input";


const Register = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Register</h1>
            <form className={styles.Form}>
                <label htmlFor="email">E-mail:</label>
                <Input placeholder="seu@email.com"/>

                <label htmlFor="username">Username:</label>
                <Input placeholder="nome de usuário"/>
                
                <label htmlFor="password">Password:</label>
                <Input placeholder="digite sua senha aqui"/>
                
                <button type="submit">Concluir</button>
            </form>
        </div>
    );
}


export default Register;