import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 배열 생략 -> 변경 시마다 먼저 호출됨 
    useEffect( () => {
        console.log("=====================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 가득 찼을 경우 state 변경
    useEffect( () => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value : ${count}`);
    }, [count]); 

    return (
        <div style={{ padding : 16 }}>
             <p>{`총 ${count}명 수용했습니다.`}</p>

             <button onClick={increaseCount} disabled={isFull}>
                입장
             </button>
             <button onClick={decreaseCount}>퇴장</button>

             {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>} {/* 가득 찼을 경우 경고문 */}
        </div>
    );
}

export default Accommodate;