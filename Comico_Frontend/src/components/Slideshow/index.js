import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Slideshow.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Slideshow({ datas, title, className }) {
    let prevDisabled, nextDisabled;
    const vw = window.innerWidth;
    let amountOfBooks;
    let move;

    if (vw > 1024) amountOfBooks = 6;
    else if (vw >= 740 && vw < 1024) amountOfBooks = 3;
    else if (vw < 740) amountOfBooks = 2;

    vw < 740 ? (move = 160) : (move = 190);

    const [limit, setLimit] = useState(amountOfBooks);
    const [state, setState] = useState(0);

    if (limit <= amountOfBooks) prevDisabled = true;
    if (limit >= datas.length) nextDisabled = true;

    const handleNextSlide = () => {
        if (limit >= datas.length) {
            return;
        } else {
            setLimit((prev) => prev + 1);
            setState((prev) => prev + move);
        }
    };

    const handlePrevSlide = () => {
        if (limit <= amountOfBooks) {
            return;
        } else {
            setLimit((prev) => prev - 1);
            setState((prev) => prev - move);
        }
    };

    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            <div className={cx('header')}>
                <h4 className={cx('header-title')}>{title}</h4>
                <p className={cx('header-seemore')}>XEM TẤT CẢ</p>
            </div>

            <div className={cx('container')}>
                <div className={cx('sliders')} style={{ transform: `translate3d(${-state}px, 0, 0)` }}>
                    {datas.map((book, index) => (
                        <div key={index} className={cx('book')}>
                            <img className={cx('book-img')} src={book.image} alt={book.name} />
                            <div className={cx('book-info')}>
                                <p className={cx('name')}>{book.name}</p>
                                <p className={cx('author')}>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('control-btn')}>
                <FontAwesomeIcon
                    className={cx('prev-btn', { active: prevDisabled })}
                    icon={faChevronLeft}
                    onClick={handlePrevSlide}
                />
                <FontAwesomeIcon
                    className={cx('next-btn', { active: nextDisabled })}
                    icon={faChevronRight}
                    onClick={handleNextSlide}
                />
            </div>
        </div>
    );
}

export default Slideshow;
