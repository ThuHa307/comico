import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Rank.module.scss';
import { useEffect, useState } from 'react';

import * as bookServices from '../../../../apiServices/bookServices';

const cx = classNames.bind(styles);

function Sidebar() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        bookServices
            .getBook()
            .then((data) => setBooks(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="col l-3">
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <FontAwesomeIcon icon={faBookOpen} />
                    <p className={cx('header-title')}>Sách nổi bật</p>
                </div>
                <div className={cx('book-list')}>
                    {books.map(
                        (book, index) =>
                            index < 5 && (
                                <div className={cx('book')}>
                                    <h3 className={cx('number')}>{index + 1}</h3>
                                    <div className={cx('book-item')}>
                                        <img className={cx('image')} src={book.image} alt={book.name} />
                                        <div className={cx('book-info')}>
                                            <h4 className={cx('name')}>{book.name}</h4>
                                            <p className={cx('author')}>{book.author.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ),
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
