import { useState, forwardRef } from 'react';
import images from '../../assets/image';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
