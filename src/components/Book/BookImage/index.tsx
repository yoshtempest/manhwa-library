import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from './styles.module.css';
import Image from 'next/image';


interface Props {
    imagePath: string | StaticImport;
    alt: string;
}

const bookImage = ({
    imagePath,
    alt
} : Props) => {
    return (
        <div className={styles.Container}>
            <Image src={imagePath} width={100} height={100} layout="responsive" alt={alt} className={styles.image}/>
        </div>
    )
};


export default bookImage;