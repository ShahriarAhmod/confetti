import React,{ useEffect, useState} from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
    return (

        <>
            <ReactConfetti
                width={window.innerWidth}
                height={window.innerHeight}
                tweenDuration={10000}
                numberOfPieces={900}
                recycle={false}
            />

        </>
    );
};

export default Confetti;