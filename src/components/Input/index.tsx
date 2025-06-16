import styles from './styles.module.css';


interface Props {
    placeholder: string;
    type?: string;
}

const Input = ({
    placeholder,
    type,
} : Props) => {
    return (
        <input className={styles.Input}
            placeholder={placeholder}
            type={type}
            required
        />
    );
}


export default Input;