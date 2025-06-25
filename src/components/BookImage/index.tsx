import styles from './styles.module.css';


interface Props {
    imagePath: string | undefined;
    alt: string;
}

const bookImage = ({
    imagePath,
    alt
} : Props) => {
    const src = typeof imagePath === 'string' ? imagePath : imagePath;
    return (
        <img src={src} alt={alt} className={styles.image}/>
    )
};


export default bookImage;