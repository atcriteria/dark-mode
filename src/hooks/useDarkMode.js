import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [theme, setTheme] = useLocalStorage(key, initialValue);
    const handleChanges = updatedValue => {
        setTheme(updatedValue);
    }
    return [theme, setTheme, handleChanges];
}

export default useDarkMode;