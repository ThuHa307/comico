import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretRight,
    faHeartCrack,
    faBookmark,
    faCircleXmark,
    faCircleInfo,
    faHeart,
    faBookBookmark,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { logoutSuccess } from '../../redux/authSlice';
import { logoutUser } from '../../redux/apiRequest';
import { createAxios } from '../../createInstance';
import Image from '../../components/Image';

const cx = classNames.bind(styles);

const options = [
    {
        name: 'Thông tin chung',
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        ref: '/profiluserInfoe/',
    },
    {
        name: 'Sách yêu thích',
        icon: <FontAwesomeIcon icon={faHeart} />,
        path: '/profile/favorites',
    },
    {
        name: 'Sách đang theo dõi',
        icon: <FontAwesomeIcon icon={faBookBookmark} />,
        path: '/profile/following',
    },
    {
        name: 'Đăng xuất',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        path: '/login',
    },
];

function Profile() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    let userId = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const [state, setState] = useState(0);

    const refInfo = useRef(null);
    const refLike = useRef(null);
    const refFollow = useRef(null);

    const hanldeOption = (index, ref) => {
        setState(index);
        const scrollPosition = ref.current.offsetTop - 120;
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });

        logoutUser(dispatch, userId, axiosJWT, accessToken, navigate);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3">
                            <div className={cx('sidebar')}>
                                <h2 className={cx('profile')}>Profile</h2>
                                <div className={cx('user-info')}>
                                    <Image
                                        className={cx('image')}
                                        src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                        alt="cat"
                                    />
                                    <p className={cx('user-name')}>Trần Thị Thu Hà</p>
                                </div>
                                <div className={cx('options')}>
                                    <div className={cx(styles.option, styles.hidden)}>
                                        <div></div>
                                    </div>
                                    {options.map((option, index) => {
                                        let ref;
                                        if (index === 0) ref = refInfo;
                                        else if (index === 1) ref = refLike;
                                        else ref = refFollow;
                                        return (
                                            <div
                                                key={index}
                                                className={cx(styles.option, index === state && styles.active)}
                                                onClick={() => hanldeOption(index, ref)}
                                            >
                                                <div className={cx('option-item')}>
                                                    <span className={cx('icon-dashboard')}>{option.icon}</span>
                                                    <span>{option.name}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className={cx(styles.option, styles.hidden)}>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l-9">
                            <div ref={refInfo} className={cx('section')}>
                                <div className={cx('main-title')}>
                                    <h2 className={cx('main')}>
                                        <FontAwesomeIcon icon={faCaretRight} className={cx('icon')} />
                                        Thông tin tài khoản
                                    </h2>
                                </div>

                                <ul className={cx('details')}>
                                    <li className={cx('detail')}>Họ và tên</li>
                                    <li className={cx('detail')}>Email</li>
                                    <li className={cx('detail')}>Giới tính</li>
                                    <li className={cx('detail')}>Thể loại yêu thích</li>
                                </ul>
                            </div>
                            <div ref={refLike} className={cx('section')}>
                                <div className={cx('main-title')}>
                                    <h2 className={cx('main')}>
                                        <FontAwesomeIcon icon={faCaretRight} className={cx('icon')} />
                                        Sách yêu thích
                                    </h2>
                                </div>
                                <div className={cx('books')}>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                                                Bỏ yêu thích
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                                                Bỏ yêu thích
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                                                Bỏ yêu thích
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                                                Bỏ yêu thích
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faHeartCrack} />
                                                Bỏ yêu thích
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref={refFollow} className={cx('section')}>
                                <div className={cx('main-title')}>
                                    <h2 className={cx('main')}>
                                        <FontAwesomeIcon icon={faCaretRight} className={cx('icon')} />
                                        Sách đang theo dõi
                                    </h2>
                                </div>
                                <div className={cx('books')}>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                                                Bỏ theo dõi
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                                                Bỏ theo dõi
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                                                Bỏ theo dõi
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                                                Bỏ theo dõi
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('book')}>
                                        <div className={cx('book-detail')}>
                                            <img
                                                className={cx('book-img')}
                                                src="https://hips.hearstapps.com/hmg-prod/images/large-cat-breed-1553197454.jpg?crop=1xw:0.75xh;center,top&resize=1200:*"
                                                alt="Meow"
                                            />
                                            <i className={cx('book-name')}>Cây cam ngọt của tôi</i>
                                        </div>

                                        <div className={cx('attribute')}>
                                            <p className={cx('reading')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                                                Đang đọc
                                            </p>
                                            <p className={cx('following')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faCircleXmark} />
                                                Bỏ theo dõi
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
