import styles from "./styles.module.css";
import Input from "@/components/Input";

// Todos os inputs serão iguais(só muda quando muda o tema) então dá pra componentizar
const Login = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Login</h1>
            <form className={styles.Form}>
                <label htmlFor="email">e-mail:</label>
                <input type="text" id="email" name="email" placeholder="seu@email.com" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}


export default Login;