import styles from './styles.module.css';


interface Props {
    placeholder: string;
    type?: string;
    value?: string;
}

const Input = ({
    placeholder,
    type,
    value,
} : Props) => {
    return (
        <input className={styles.Input}
            placeholder={placeholder}
            type={type}
            value={value}
            required
        />
    );
}


export default Input;