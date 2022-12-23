import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

function Main() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('breadcrumb')}>
                <ul className={cx('links')}>
                    <li className={cx('link')}>
                        <Link className={cx('link-title')} to={'/'}>
                            Trang chủ
                        </Link>
                    </li>
                    <span className={cx('breadcrumb-divider')}></span>
                    <li className={cx('link')}>
                        <Link className={cx('link-title')} to={'#'}>
                            Lạc mất cô dâu xung hỉ
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={cx('container')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-8 m-12 c-12">
                            <div className={cx('detail-book')}>
                                <div className={cx('book-thumb')}>
                                    <img
                                        className={cx('book-img')}
                                        src="https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/1/34181.jpg?v=2&w=340&h=497"
                                        alt=""
                                    />
                                    <div className={cx('book-rate')}>
                                        <FontAwesomeIcon className={cx('book-rate-icon')} icon={faHeart} />
                                        <p className={cx('following')}>Theo dõi!</p>
                                    </div>
                                </div>
                                <div className={cx('content')}>
                                    <div className={cx('book-info')}>
                                        <h1 className={cx('name')}>Lạc mất cô dâu xung hỉ</h1>
                                        <div className={cx('book-info-line')}>
                                            <span>Tác giả:</span>
                                            <div className={cx('detail-tag')}>
                                                <Link to={'#'}>Nguyên Lai</Link>
                                            </div>
                                        </div>
                                        <div className={cx('book-info-line')}>
                                            <span>Thể loại:</span>
                                            <div className={cx('detail-tag')}>
                                                <Link to={''}>Ngôn tình</Link>
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
                                        <p>
                                            Cảnh Thiên khi xưa là một cô gái mù quáng liều lĩnh vì tình yêu. Sau khi ngã
                                            cầu thang rồi “đi đời nhà ma”, Cảnh Thiên tỉnh dậy và trở thành một con
                                            người hoàn toàn khác: quyến rũ tuyệt đỉnh, thông minh linh hoạt. Chiến Lê
                                            Xuyên – cậu ba nhà họ Chiến – là người nắm mọi quyền hành trong gia tộc. Anh
                                            bị tai nạn nghiêm trọng tới mức tàn tật, phải cưới một cô vợ có tử vi phù
                                            hợp về để “thay đổi vận mệnh”.
                                        </p>
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
    );
}

export default Main;
