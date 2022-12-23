import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Book.module.scss';

const cx = classNames.bind(styles);
function Book({ data, className }) {
    return (
        <div className={className}>
            <div className={cx('book')}>
                <div className={cx('book-img')}>
                    <img className={cx('image')} src={data.image} alt="Cửa hàng thịnh vượng" />
                </div>
                <div className={cx('book-info')}>
                    <p className={cx('name')}>{data.name}</p>
                    <p className={cx('author')}>{data.author}</p>
                    <div className={cx('votes-icon')}>
                        <FontAwesomeIcon className={cx('default', { voting: true })} icon={faHeart} />
                        <FontAwesomeIcon className={cx('default', { voting: true })} icon={faHeart} />
                        <FontAwesomeIcon className={cx('default', { voting: true })} icon={faHeart} />
                        <FontAwesomeIcon className={cx('default', { voting: true })} icon={faHeart} />
                        <FontAwesomeIcon className={cx('default')} icon={faHeart} />
                    </div>
                    <p className={cx('votes')}>33 votes</p>
                    <ul className={cx('genres-list')}>
                        {data.genres.map((genre, index) => (
                            <li key={index} className={cx('genres')}>
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Book;
