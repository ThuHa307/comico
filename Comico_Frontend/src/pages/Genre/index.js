import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Genre.module.scss';
import Book from '../../components/Book';
import Button from '../../components/Button';
import * as bookServices from '../../apiServices/bookServices';

const cx = classNames.bind(styles);

function Genre() {
    const [page, setPage] = useState(1);
    const [books, setBooks] = useState({});
    let isNextButtonDisabled = page === books.lastPage;
    let isPreviousButtonDisabled = page === 1;

    useEffect(() => {
        bookServices
            .getNumberOfBook({ genre: 'ngon-tinh', page: page, limit: 16 })
            .then((data) => setBooks(data))
            .catch((err) => console.log(err));
    }, [page]);

    const handleNextPage = () => {
        if (page <= books.lastPage) {
            setPage((page) => page + 1);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((page) => page - 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('header-title')}>Văn học</h3>
            </div>
            <div className={cx('container')}>
                <div className="grid wide">
                    <div className="row">
                        {books.data?.map((book, index) => (
                            <Book key={index} data={book} className="col l-3 m-6 c-12" />
                        ))}
                    </div>
                </div>
            </div>
            <nav className={cx('nav-pagination')}>
                <ul className={cx('pagination')}>
                    <li className={cx('page-item')}>
                        <Button
                            className={cx('page-btn')}
                            text
                            ssmall
                            disabled={isPreviousButtonDisabled}
                            onClick={handlePreviousPage}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                        {Array.from({ length: books.lastPage }).map((_, index) =>
                            index + 1 === page ? (
                                <Button key={index} className={cx('page-btn', { active: true })} text ssmall>
                                    {index + 1}
                                </Button>
                            ) : (
                                <Button
                                    key={index}
                                    className={cx('page-btn')}
                                    text
                                    ssmall
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </Button>
                            ),
                        )}
                        <Button
                            className={cx('page-btn')}
                            text
                            ssmall
                            disabled={isNextButtonDisabled}
                            onClick={handleNextPage}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Genre;
