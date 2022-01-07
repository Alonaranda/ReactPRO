import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {
    const [counter, setCounter] = useState(0);

    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter( prev => Math.min(prev + 1, MAXIMUN_COUNT));
        // if (counter < MAXIMUN_COUNT) {
        //     setCounter( prev => prev +1 );
        // } else {
        //     console.log('%cYa no puedes aumentar', 'color: green');
        // }
    }

    //UseLayoutEffect tambien se puede usar, se espera a que termine de montarse todo el HTML
    useEffect(() => {
        if(counter < 3) return;
        console.log('%cSuperaste el limite','color: red');

        //Animacion GSAP
        const timeLine = gsap.timeline();
        timeLine.to(counterElement.current, {y: -10, duration: 0.3, ease: 'ease.out'})
        timeLine.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}> { counter } </h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}
