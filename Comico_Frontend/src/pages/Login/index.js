import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKey, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../components/Button';
import images from '../../assets/image';

const cx = classNames.bind(styles);

function Login() {
    const handleLogin = () => {};
    return (
        <div className={cx('wrapper')}>
            <form action="" method="post" className={cx('form')} onSubmit={handleLogin}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </Link>
                <h3 className={cx('heading')}>Chào mừng bạn đến với Comico</h3>
                <p className={cx('derc')}>Vui lòng hoàn thành những thông tin dưới đây.</p>
                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>
                        <input
                            className={cx('input')}
                            id="name"
                            type="text"
                            placeholder="Tên đăng nhập"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <span className={cx('icon-show')}>
                            <FontAwesomeIcon icon={faEyeSlash} />
                        </span>
                        <input
                            className={cx('input')}
                            id="passwords"
                            type="password"
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <span></span>
                <button className={cx('submit')}>Đăng nhập</button>
                <p className={cx('ask')}>
                    Bạn chưa có tài khoản?
                    <Button to="/register" underline className={cx('login')} href="">
                        Đăng ký
                    </Button>
                </p>
            </form>
        </div>
    );
}

export default Login;
