import Star from "./Star";
import styles from "./styles.module.css";

interface BookStarsProps {
    rating: number; // rating between 0 and 5, can be a decimal (e.g., 4.5)
}

export default function BookStars({rating}: BookStarsProps) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push(<Star key={i} filled={true} halfFilled={false} />);
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars.push(<Star key={i} filled={false} halfFilled={true} />);
        } else {
            stars.push(<Star key={i} filled={false} halfFilled={false} />);
        }
    }
    return <div className={styles.horizontalContainer}>{stars}</div>;
}