import { useState, useEffect, useRef } from 'react';

function useComponentVisible(initialIsVisible) {
    const [isCompleteVisible, setIsCompleteVisible] = useState(initialIsVisible);
    const ref = useRef(null);
    const toggleRef = useRef(null);

    const handleHide = (event) => {
        if (event.key === 'Escape') {
            setIsCompleteVisible(false);
        }
    };

    const handleClickOutside = (event) => {
        if (
            ref.current &&
            !ref.current.contains(event.target) &&
            !toggleRef?.current?.contains(event.target)
        ) {
            setIsCompleteVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        document.addEventListener('keydown', handleHide, true);
        return () => {
            document.removeEventListener('keydown', handleHide, true);
            document.removeEventListener('click', handleClickOutside, true);
        }
    });

    return { ref, toggleRef, isCompleteVisible, setIsCompleteVisible };
};

export default useComponentVisible;