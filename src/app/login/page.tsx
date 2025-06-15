import styles from "./styles.module.css";
import Input from "@/components/Input";

// Todos os inputs serão iguais(só muda quando muda o tema) então dá pra componentizar
const Login = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Login</h1>
            <form className={styles.Form}>

                <label htmlFor="email">e-mail:</label>
                <Input placeholder="seu@email.com"/>
                
                <label htmlFor="password">Password:</label>
                <Input placeholder="12345678"/>
                
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}


export default Login;