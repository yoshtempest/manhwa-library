import styles from './styles.module.css';


interface Props {
    placeholder: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    placeholder,
    type,
    value,
    onChange,
} : Props) => {
    return (
        <input className={styles.Input}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            required
        />
    );
}


export default Input;