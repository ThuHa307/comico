// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import images from '../../../assets/image';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);

function Slider() {
    const slides = [
        {
            id: 0,
            src: images.slide,
            alt: 'image 1',
        },
        {
            id: 1,
            src: images.slide1,
            alt: 'image 2',
        },
        {
            id: 2,
            src: images.slide2,
            alt: 'image 3',
        },
        {
            id: 3,
            src: images.slide3,
            alt: 'image 4',
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timerId = setTimeout(
            () => setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
            2500,
        );

        return () => {
            clearTimeout(timerId);
        };
    }, [index]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideshowSliders')} style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {slides.map((slide, idx) => (
                    <img key={idx} className={cx('slide')} src={slide.src} alt={slide.alt} />
                ))}
            </div>

            <div className={cx('slideshowDots')}>
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={cx(`slideshowDot${idx === index ? 'active' : ''}`)}
                        onClick={() => setIndex(idx)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
