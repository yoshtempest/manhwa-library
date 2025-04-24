import styles from './styles.module.css';

interface Props{
    iconPath: string;
    alt: string;
    onClick?: () => void;
}

const Icon = ({
    iconPath,
    alt,
    onClick,
} : Props ) => {
    return (
        <img className={styles.Icon}
        src={iconPath}
        alt={alt}
        />
    )
}

export default Icon;