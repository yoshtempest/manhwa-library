import styles from "./styles.module.css";


const Login = () => {
    return (
        <div className={styles.Container}>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">email:</label>
                <input type="text" id="email" name="email" required />
                
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}


export default Login;