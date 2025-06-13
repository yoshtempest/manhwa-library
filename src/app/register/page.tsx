import styles from "./styles.module.css";


const Register = () => {
    return (
        <div className={styles.Container}>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">E-mail:</label>
                <input type="text" id="email" name="email" placeholder="seu@email.com" required />

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Concluir</button>
            </form>
        </div>
    );
}


export default Register;