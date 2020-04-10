import React, { useEffect, useState } from 'react'

export default ref => {
    const [dims, setDims] = useState(null);
    useEffect(() => {
        const target = ref.current;
        const observer = new ResizeObserver(entries =>  {
            entries.forEach(d => {
                setDims(d.contentRect);
            })
        })
        observer.observe(target)
        return () => {observer.unobserve(target)};
    }, [ref]);
    return dims;
};