"use client";

import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <>
            <CountUp 
            decimal=","
            prefix="$"
            end={amount} />
        </>
    );
}

export default AnimatedCounter;