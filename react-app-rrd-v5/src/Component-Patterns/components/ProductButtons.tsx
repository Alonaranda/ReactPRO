import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface ProductButtonsProps {
    // increaseBy: (value: number) => void;
    // counter: number;
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({className, style}:ProductButtonsProps) => {

    const {increaseBy, counter, maxCount} = useContext(ProductContext);

    const isMaxReaced = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    );

    console.log({maxCount});

    return (
        <div 
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button 
                onClick={() => increaseBy(-1)} 
                className={styles.buttonMinus}
            >-</button>

            <div 
                className={styles.countLabel}
            >{counter}</div>

            <button 
                className={`${styles.buttonAdd} ${isMaxReaced() && styles.disable}`}
                onClick={() => increaseBy(+1)} 
            >+</button>
        </div>
    )
}