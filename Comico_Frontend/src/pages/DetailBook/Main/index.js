import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Button from '../../../components/Button';
import Breadcrumb from '../../../components/Breadcrumb';

const cx = classNames.bind(styles);

function Main({ book }) {
    return (
        <div className={cx('wrapper')}>
            {book !== null && (
                <div>
                    <Breadcrumb title={book.name} to="#" path="/detail" />

                    <div className={cx('container')}>
                        <div className="grid wide">
                            <div className="row">
                                <div className="col l-8 m-12 c-12">
                                    <div className={cx('detail-book')}>
                                        <div className={cx('book-thumb')}>
                                            <img className={cx('book-img')} src={book.image} alt="" />
                                            <div className={cx('book-rate')}>
                                                <FontAwesomeIcon className={cx('book-rate-icon')} icon={faHeart} />
                                                <p className={cx('following')}>Theo dõi!</p>
                                            </div>
                                        </div>
                                        <div className={cx('content')}>
                                            <div className={cx('book-info')}>
                                                <h1 className={cx('name')}>{book.name}</h1>
                                                <div className={cx('book-info-line')}>
                                                    <span>Tác giả:</span>
                                                    <div className={cx('detail-tag')}>
                                                        <Link to={'#'}>{book.author.name}</Link>
                                                    </div>
                                                </div>
                                                <div className={cx('book-info-line')}>
                                                    <span>Thể loại:</span>
                                                    <div className={cx('detail-tag')}>
                                                        {book.genres.map((g) => (
                                                            <Link to={''}>{g} </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className={cx('book-info-line')}>
                                                    <span>Tình trạng:</span>
                                                    <div className={cx('detail-tag')}>
                                                        <p>Đang ra</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('control-btn')}>
                                                <Button className={cx('read-btn')} fullfill>
                                                    ĐỌC SÁCH
                                                </Button>
                                                <Button
                                                    className={cx('follow-btn')}
                                                    leftIcon={<FontAwesomeIcon icon={faHeartSolid} />}
                                                    fullfill
                                                >
                                                    THEO DÕI
                                                </Button>
                                            </div>
                                            <div className={cx('book-decs')}>
                                                <p>{book.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-4 m-12 c-12">
                                    <div className={cx('chapter-list')}>
                                        <div className={cx('header')}>
                                            <h4 className={cx('header-title')}>Danh sách chương</h4>
                                        </div>
                                        <ul className={cx('list')}>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 1</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 2</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 3</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 4</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 5</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 1</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 2</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 3</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 4</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 5</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 1</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 2</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 3</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 4</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                            <li className={cx('list-item')}>
                                                <p className={cx('chapter')}>Chương 5</p>
                                                <p className={cx('date-updated')}>22/12/2022</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
