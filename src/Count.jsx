import React, { useState } from 'react'
// 상태값이 바뀌게 되면 리턴을 시킨다 그것을 리렌더라고 한다.
const Count = () => {
    const [count, setCount] = useState(0);
    // console.log(count)
    const onInc = () => {
        setCount(count + 1)
    }
    const onSub = () => {
        setCount(count - 1)
    }

    const [count2, setCount2] = useState(0);
    const onInc2 = () => {
        setCount2(count2 + 1)
    }
    const onSub2 = () => {
        setCount2(count2 - 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button
                onClick={onInc}>+</button>
            <button
                onClick={onSub}>-</button>

            <h2>{count2}</h2>
            <button
                onClick={onInc2}>+</button>
            <button
                onClick={onSub2}>-</button>
        </div>
    )
}

export default Count
