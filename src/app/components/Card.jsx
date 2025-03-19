import styles from "../styles/Card.module.css"; // Import CSS module
import Link from "next/link";
export default function Card({ id, image, title, duration }) {
    return (
        <div className={styles.card}>
            <Link href={`/video/${id}`} style={{ color: "blue" }}>
                <img src={image} alt={title} className={styles.cardImage} />
            </Link>
            <div className={styles.cardContent}>
                <Link href={`/video/${id}`} style={{ color: "blue" }}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                </Link>
                <p className={styles.cardDuration}>Duration: {duration}</p>
            </div>
        </div>
    );
}
