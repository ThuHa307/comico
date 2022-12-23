import classNames from 'classnames/bind';
import styles from './DetailBook.module.scss';
import Main from './Main';
import GenresBook from './GenresBook';
import AuthorsBook from './AuthorsBook';

const cx = classNames.bind(styles);

function DetailBook() {
    return (
        <div className={cx('wrapper')}>
            <Main />
            <GenresBook />
            <AuthorsBook />
        </div>
    );
}

export default DetailBook;
