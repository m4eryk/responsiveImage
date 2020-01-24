import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';


const ResponsiveImage = ({images, className}) => {

    const img = useMemo(() => document.createElement('img'), []);

    const [currentImageSrc, setCurrentImageSrc] = useState();

    const setImageSrc = useCallback(() => {
        const currentImage = images.sort((a, b) => a.width < b.width ? 1 : -1)
            .filter(item => item.width > window.innerWidth);

        if (currentImage.length > 0 && img.src !== currentImageSrc) {
            img.src = currentImage[currentImage.length - 1].image;
        } else if (img.src !== currentImageSrc) {
            img.src = images[0].image;
        }
    },
        [images, img.src, currentImageSrc]
    );

    useEffect(() => setImageSrc(), [setImageSrc]);

    window.addEventListener('resize', () => setImageSrc());

    img.onload = useCallback(() => setCurrentImageSrc(img.src), [img.src]);

    return (
        <img
            style={{ width: '100vw' }}
            className={className}
            src={currentImageSrc}
            alt="View from aircraft window near San Francisco airport"
        />
    );
};

ResponsiveImage.propTypes = {
    images: PropTypes.array.isRequired,
    className: PropTypes.string,
};

ResponsiveImage.defaultProps = {
    images: []
};

export default ResponsiveImage;
