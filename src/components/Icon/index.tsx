import styles from './styles.module.css';

interface Props{
    iconPath: string;
    alt: string;
}

const Icon = ({
    iconPath,
    alt,
} : Props ) => {
    return (
        <img className={styles.Icon}
        src={iconPath}
        alt={alt}
        />
    )
}

export default Icon;