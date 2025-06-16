import styles from "./styles.module.css";
import Input from "@/components/Input";


const Register = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Title}>Register</h1>
            <form className={styles.Form}>

                <label htmlFor="email">E-mail:</label>
                <Input placeholder="seu@email.com" type="email"/>

                <label htmlFor="username">Username:</label>
                <Input placeholder="Robisvaldo Ratimbum"/>
                
                <label htmlFor="password">Password:</label>
                <Input placeholder="senhaSegura123" type="password"/>
                <p className={styles.Text}> Já possui uma conta?
                    <a href="/login" className={styles.Link}> Ir para o login</a>
                </p>
  
                <button type="submit" className={styles.Submit}>Concluir</button>
            </form>
        </div>
    );
}


export default Register;