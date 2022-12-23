import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Quote.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const quotes = [
    {
        title: 'Lúc buồn thì xem phim, đọc sách, lúc vui thì nghe nhạc, uống trà. Thế giới cạnh khóe nhau mặc kệ họ. Việc của mình suy cho cùng vẫn chỉ là sống một đời thảnh thơi… ',
        source: '__MINH MẪN__',
    },
    {
        title: 'Không ai có thể làm ta tổn thương nặng nề bằng những người ta yêu quý',
        source: '__Thư viện linh hồn, Ransom Riggs__',
    },
    {
        title: 'Sách có một đặc thù gần như là phép thuật: chúng là tấm hộ chiếu để đi đến nơi khác, là cuộc đào tẩu vĩ đại.',
        source: '__Cô gái Brooklyn, Guillaume Musso__',
    },
    {
        title: 'Thật dễ dàng để chấp nhận và yêu thương một kẻ nào đó giống mình, nhưng để yêu thương một ai đó khác mình thực sự rất khó khăn.',
        source: '__Chuyện con mèo dạy hải âu bay, Luis Sepulveda__',
    },
    {
        title: 'Tất cả những thứ tốt đẹp trên đời đều mong manh và dễ mất.',
        source: '__VÀ RỒI NÚI VỌNG, Khaled Hosseini__',
    },
    {
        title: 'Cuộc đời thường để lại trái tim mềm yếu của chúng ta những vết thương, thường khiến đôi mắt chúng ta phải nhìn vào u ám, nhưng nó không bao giờ tước đoạt được nụ cười, cũng như dũng khí để chúng ta tìm về ánh sáng.',
        source: '__BÍ MẬT BỊ THỜI GIAN VÙI LẤP, Đồng Hoa__',
    },
];

function Quote() {
    let nextDisabled, prevDisabled;
    console.log('re-render');

    const [state, setState] = useState(0);
    state === quotes.length - 1 ? (nextDisabled = true) : (nextDisabled = false);
    state === 0 ? (prevDisabled = true) : (prevDisabled = false);
    const handleNextSlide = () => {
        setState((prev) => (prev === quotes.length - 1 ? prev : prev + 1));
    };

    const handlePrevSlide = () => {
        setState((prev) => (prev === 0 ? 0 : prev - 1));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sliders')} style={{ transform: `translate3d(${-state * 100}%, 0, 0)` }}>
                    {quotes.map((quote, index) => (
                        <div key={index} className={cx('quote')}>
                            <p className={cx('source')}>{quote.source}</p>
                            <p className={cx('title')}>{quote.title}</p>
                        </div>
                    ))}
                </div>
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

export default Quote;
