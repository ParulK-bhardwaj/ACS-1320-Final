import React from "react";
import { useState } from 'react';


function Like () {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount(count + 1);
    }

    const handleDisLike = () => {
        setCount(count -1);
    }

    return (
        <div>
            <p><button className="Dislike" onClick={handleDisLike}>👎</button>
            {count}
            <button className="Like" onClick={handleLike}>👍</button>
            </p>
        </div>
    )
};

export default Like;