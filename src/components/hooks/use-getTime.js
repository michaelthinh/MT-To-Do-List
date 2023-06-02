import { useState, useEffect } from "react";

const useGetTime = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return { time: time.toLocaleTimeString() };
};

export default useGetTime;
