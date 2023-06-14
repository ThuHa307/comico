import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHeart, faBookBookmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './CategoryProfile.module.scss';

import { logoutSuccess } from '../../../redux/authSlice';
import { logoutUser } from '../../../redux/apiRequest';
import { createAxios } from '../../../createInstance';
import Image from '../../../components/Image';

const cx = classNames.bind(styles);

const options = [
    {
        name: 'Thông tin chung',
        icon: <FontAwesomeIcon icon={faCircleInfo} />,
        path: '/profile/userInfo',
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

function CategoryProfile() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    let userId = user?._id;
    const dispatch = useDispatch();
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const [state, setState] = useState(0);
    const hanldeOption = (index) => {
        setState(index);
        logoutUser(dispatch, userId, axiosJWT, accessToken);
    };

    return (
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
                        return (
                            // <Button
                            //     key={index}
                            //     leftIcon={option.icon}
                            //     to={option.path}
                            //     onClick={() => hanldeOption(index)}
                            //     className={cx(styles.option, index === state && styles.active)}
                            // >
                            //     {option.name}
                            // </Button>
                            <div
                                key={index}
                                className={cx(styles.option, index === state && styles.active)}
                                onClick={() => hanldeOption(index)}
                            >
                                <div className={cx('option-item')}>
                                    <span className={cx('icon')}>{option.icon}</span>
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
    );
}

export default CategoryProfile;
