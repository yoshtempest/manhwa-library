import styles from './styles.module.css';


interface Props {
    imagePath: string | undefined;
    alt: string;
}

const bookImage = ({
    imagePath,
    alt
} : Props) => {
    return (
        <img src={imagePath} alt={alt} className={styles.image}/>
    )
};


export default bookImage;