import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Rank.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className="col l-3">
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <FontAwesomeIcon icon={faBookOpen} />
                    <p className={cx('header-title')}>Sách nổi bật</p>
                </div>
                <div className={cx('book-list')}>
                    <div className={cx('book')}>
                        <h3 className={cx('number')}>01</h3>
                        <div className={cx('book-item')}>
                            <img
                                className={cx('image')}
                                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28165.jpg?v=1&w=340&h=497"
                                alt="Muôn kiếp nhân sinh"
                            />
                            <div className={cx('book-info')}>
                                <h4 className={cx('name')}>Muôn kiếp nhân sinh Muôn kiếp nhân sinh</h4>
                                <p className={cx('author')}>Nguyên Phong</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('book')}>
                        <h3 className={cx('number')}>01</h3>
                        <div className={cx('book-item')}>
                            <img
                                className={cx('image')}
                                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28165.jpg?v=1&w=340&h=497"
                                alt="Muôn kiếp nhân sinh"
                            />
                            <div className={cx('book-info')}>
                                <h4 className={cx('name')}>Muôn kiếp nhân sinh</h4>
                                <p className={cx('author')}>Nguyên Phong</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('book')}>
                        <h3 className={cx('number')}>01</h3>
                        <div className={cx('book-item')}>
                            <img
                                className={cx('image')}
                                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28165.jpg?v=1&w=340&h=497"
                                alt="Muôn kiếp nhân sinh"
                            />
                            <div className={cx('book-info')}>
                                <h4 className={cx('name')}>Muôn kiếp nhân sinh</h4>
                                <p className={cx('author')}>Nguyên Phong</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('book')}>
                        <h3 className={cx('number')}>01</h3>
                        <div className={cx('book-item')}>
                            <img
                                className={cx('image')}
                                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28165.jpg?v=1&w=340&h=497"
                                alt="Muôn kiếp nhân sinh"
                            />
                            <div className={cx('book-info')}>
                                <h4 className={cx('name')}>Muôn kiếp nhân sinh</h4>
                                <p className={cx('author')}>Nguyên Phong</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('book')}>
                        <h3 className={cx('number')}>01</h3>
                        <div className={cx('book-item')}>
                            <img
                                className={cx('image')}
                                src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/28165.jpg?v=1&w=340&h=497"
                                alt="Muôn kiếp nhân sinh"
                            />
                            <div className={cx('book-info')}>
                                <h4 className={cx('name')}>Muôn kiếp nhân sinh</h4>
                                <p className={cx('author')}>Nguyên Phong</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
