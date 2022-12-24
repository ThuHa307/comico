import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';
import datas from '../../components/Datas';

const cx = classNames.bind(styles);

function Ranking() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-8 m-12 c-12">
                        <div className={cx('container')}>
                            <div className={cx('header')}>
                                <p className={cx('header-title')}>Bảng xếp hạng</p>
                                <div className={cx('navigation')}>
                                    <p className={cx('nav-item', { active: true })}>Lượt xem</p>
                                    <p className={cx('nav-item')}>Theo dõi</p>
                                </div>
                            </div>
                            <div className={cx('ranking')}>
                                {datas.map((data, index) => {
                                    let numberColor = '#938888';
                                    if (index === 0) numberColor = '#ff3b30';
                                    else if (index === 1) numberColor = '#007aff';
                                    else if (index === 2) numberColor = '#ff9500';
                                    else if (index === 3) numberColor = '#4cd964';
                                    else if (index === 4) numberColor = '#af52de';
                                    return (
                                        index <= 9 && (
                                            <div key={index} className={cx('rank-items')}>
                                                <div className={cx('rank-number')} style={{ color: numberColor }}>
                                                    {index + 1}
                                                </div>
                                                <div className={cx('book')}>
                                                    <div className={cx('book-image')}>
                                                        <img src={data.image} alt={data.name} />
                                                    </div>
                                                    <div className={cx('book-info')}>
                                                        <p className={cx('name')}>{data.name}</p>
                                                        <p className={cx('author')}>{data.author}</p>
                                                    </div>
                                                </div>
                                                <div className={cx('detail')}>
                                                    <FontAwesomeIcon className={cx('icon')} icon={faEye} />
                                                    <p>1025</p>
                                                </div>
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                            <div className={cx('footer')}>
                                <FontAwesomeIcon icon={faPlus} className={cx('footer-icon')} />
                                <p className={cx('footer-title')}>Xem thêm</p>
                            </div>
                        </div>
                    </div>

                    <div className="col l-4">
                        <div className={cx('recommend')}>
                            <div className={cx('recommend_header')}>
                                <p className={cx('recommend_header-title')}>Comico khuyên đọc</p>
                            </div>
                            <div className={'recommend-list'}>
                                {datas.map((data, index) => {
                                    return (
                                        <div className={cx('recommend-item')}>
                                            <div key={index} className={cx('book')}>
                                                <div className={cx('book-image')}>
                                                    <img src={data.image} alt={data.name} />
                                                </div>
                                                <div className={cx('book-info')}>
                                                    <p className={cx('name')}>{data.name}</p>
                                                    <p className={cx('author')}>{data.author}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ranking;
