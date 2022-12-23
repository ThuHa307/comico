import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';
import Book from '../../../../components/Book';

import genres from '../../../../components/Genres';

const cx = classNames.bind(styles);

function Recommend({ datas }) {
    return (
        <div className={cx('wrapper', 'col', 'l-9')}>
            <nav className={cx('navbar')}>
                <h4 className={cx('main-title')}>Sách đề cử</h4>
                <p className={cx('genre', { active: true })}>Tất cả</p>
                {genres.map((genre, index) => (
                    <p key={index} className={cx('genre')}>
                        {genre.title}
                    </p>
                ))}
            </nav>
            <div className={cx('books-list')}>
                <div className={cx('row')}>
                    {datas.map((data, index) => (
                        <Book key={index} data={data} className="col l-4 m-6 c-12" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommend;
