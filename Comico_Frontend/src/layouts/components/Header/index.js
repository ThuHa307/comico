import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faList,
    faRankingStar,
    faBars,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Menu from '../../../components/Popper/Menu';
import styles from './Header.module.scss';
import images from '../../../assets/image';
import Button from '../../../components/Button';
import genres from '../../../components/Genres';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const [state, setSate] = useState(false);

    const handleMenu = () => {
        setSate(!state);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <nav className={cx('navigation')}>
                    <img className={cx('logo')} src={images.logo} alt="logo" />

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
                    <Button to="/login" underline>
                        Đăng nhập
                    </Button>
                    <Button to="/register" primary>
                        Đăng ký
                    </Button>
                </div>
                <div className={cx('menu-icon')} onClick={handleMenu}>
                    {state ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
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
