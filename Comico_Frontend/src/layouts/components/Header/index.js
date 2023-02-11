import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faList,
    faRankingStar,
    faBars,
    faXmark,
    faChevronDown,
    faUser,
    faBookBookmark,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { createAxios } from '../../../createInstance';
import Menu from '../../../components/Popper/Menu';
import styles from './Header.module.scss';
import images from '../../../assets/image';
import Button from '../../../components/Button';
import genres from '../../../components/Genres';
import Image from '../../../components/Image';
import { logoutSuccess } from '../../../redux/authSlice';
import { logoutUser } from '../../../redux/apiRequest';

const cx = classNames.bind(styles);

function Header() {
    const [state, setSate] = useState(false);
    const user = useSelector((state) => state.auth.login?.currentUser);
    let userId = user?._id;
    const dispatch = useDispatch();
    const accessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Trang cá nhân',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faBookBookmark} />,
            title: 'Truyện theo dõi',
            to: '#',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: 'Đăng xuất',
            to: '/login',
            onClick: () => {
                logoutUser(dispatch, userId, axiosJWT, accessToken);
            },
        },
    ];
    const handleMenu = () => {
        setSate(!state);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav className={cx('navigation')}>
                    <Link to={'/'}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                    </Link>

                    <nav className={cx('nav-items')}>
                        <Menu datas={genres}>
                            <p className={cx('nav-item')}>
                                <FontAwesomeIcon className={cx('nav-icon')} icon={faList} />
                                Thể loại
                            </p>
                        </Menu>
                        <Link to={'/rank'} className={cx('nav-item', 'rank')}>
                            <FontAwesomeIcon className={cx('nav-icon')} icon={faRankingStar} />
                            BXH
                        </Link>
                    </nav>
                </nav>
                <div className={cx('search')}>
                    <input placeholder="Nhập tên sách, tác giả,..." spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('actions')}>
                    {user ? (
                        <div className={cx('account')}>
                            <Image
                                className={cx('acc-thumb')}
                                src=""
                                // src="https://bizweb.dktcdn.net/100/303/962/files/87126502-2509242206005371-2073523065622364160-n-f697e400-e8b2-4bb1-9698-d00b50b2d9c3.jpg?v=1627804121650"
                                alt="Meo Meo"
                            />
                            <Menu datas={userMenu} className={cx('acc-menu')}>
                                <div className={cx('acc-info')}>
                                    <p className={cx('acc-username')}>{user.username}</p>
                                    <FontAwesomeIcon className={cx('acc-icon')} icon={faChevronDown} />
                                </div>
                            </Menu>
                        </div>
                    ) : (
                        <Fragment>
                            <Button to="/login" underline>
                                Đăng nhập
                            </Button>
                            <Button to="/register" primary>
                                Đăng ký
                            </Button>
                        </Fragment>
                    )}
                </div>
                <div className={cx('menu-icon')} onClick={handleMenu}>
                    {state ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                {/* Mobile & Tablet */}
                <div className={cx('menu-list', { active: state })}>
                    <div className={cx('mobile_search')}>
                        <input placeholder="Tìm sách, tác giả..." />
                        <button className={cx('mobile_search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('menu-items')}>
                        <Link to="/" className={cx('menu-item')}>
                            Trang chủ
                        </Link>
                        <div className={cx('mobile-genres')}>
                            {genres.map((data, index) => (
                                <Link key={index} to={data.to} className={cx('menu-item')}>
                                    {data.title}
                                </Link>
                            ))}
                        </div>
                        <Link to="/register" className={cx('menu-item')}>
                            Đăng ký
                        </Link>
                        <Link to="/login" className={cx('menu-item')}>
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
