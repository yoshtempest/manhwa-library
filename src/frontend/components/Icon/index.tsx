import styles from './styles.module.css';

interface Props{
    iconPath: string;
    alt: string;
    width: number;
    height: number;
}

const Icon = ({
    iconPath,
    alt,
    width,
    height,
} : Props ) => {
    return (
        <img className={styles.Icon}
        src={iconPath}
        alt={alt}
        width={width}
        height={height}
        />
    )
}

export default Icon;