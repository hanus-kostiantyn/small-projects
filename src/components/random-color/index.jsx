import { useState, useEffect, useCallback } from "react";

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    

    const randomColorUtility = useCallback((length) => {
        return Math.floor(Math.random()*length)
    }, [])

    const handleCreateRandomHexColor = useCallback(() => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor);
    }, [randomColorUtility])

    const handleCreateRandomRgbColor = useCallback(() => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256); 

        setColor(`rgb(${r},${g},${b})`);
    }, [randomColorUtility])

    const handleRandomColor = useCallback((color) => {
        switch (color) {
            case 'hex':
            handleCreateRandomHexColor();
            break;
        case 'rgb':
            handleCreateRandomRgbColor();
            break;
        default:
            break;
        }
    }, [handleCreateRandomHexColor, handleCreateRandomRgbColor])

    useEffect(() => {

        handleRandomColor(typeOfColor);
        
    }, [typeOfColor, handleRandomColor])

    const colorLabel = {
        hex: 'HEX Color',
        rgb: 'RGB Color'
    }


    return <div style={{
        width: '100vw',
        height: '100vh',
        background: color,
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={() => handleRandomColor(typeOfColor)}>Generate Random Color</button>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                gap: '20px'
            }}>
                <h3>{colorLabel[typeOfColor]}</h3> 
                <h1>{color}</h1>                
            </div>
    </div>
}



