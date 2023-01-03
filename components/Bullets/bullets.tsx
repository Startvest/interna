import { forwardRef, useState } from "react";
import styles from "./stepper.module.scss";

interface BulletsProps {
    value?: number
}

export const Bullets: React.FC<BulletsProps> = ({ value }) => {
    return(
        <div className={styles.container}>
            <span 
                className={`${styles.bullet} ${value === 0 ? styles.active : null}`}
            />
            <span 
                className={`${styles.bullet} ${value === 1 ? styles.active : null}`}
            />
            <span 
                className={`${styles.bullet} ${value === 2 ? styles.active : null}`}
            />
        </div>
    )
}
