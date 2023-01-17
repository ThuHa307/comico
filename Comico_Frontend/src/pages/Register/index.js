import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEnvelope, faKey, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import Button from '../../components/Button';
import images from '../../assets/image';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            password,
            email,
        };
        registerUser(newUser, dispatch, navigate);
    };
    return (
        <div className={cx('wrapper')}>
            <form action="" method="post" className={cx('form')} onSubmit={handleRegister}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <h3 className={cx('heading')}>Chào mừng bạn đến với Comico</h3>
                <p className={cx('derc')}>Vui lòng hoàn thành những thông tin dưới đây.</p>
                <div className={cx('spacer')}></div>

                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>
                        <input
                            id="name"
                            type="text"
                            className={cx('input')}
                            placeholder="Tên đăng nhập"
                            autoComplete="off"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                            id="email"
                            type="text"
                            className={cx('input')}
                            placeholder="Email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
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
                            id="passwords"
                            type="password"
                            className={cx('input')}
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input
                            id="pass-again"
                            type="password"
                            className={cx('input')}
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="off"
                        />
                    </div>
                </div>
                <span></span>
                <div className={cx('check')}>
                    <input type="checkbox" name="" id="checkbox" />
                    <span className={cx('agree')}>Tôi đồng ý với tất cả điều khoản sử dụng</span>
                </div>
                <button className={cx('submit')}>Đăng ký</button>
                <p className={cx('ask')}>
                    Bạn đã có tài khoản?
                    <Button to="/login" underline className={cx('login')} href="">
                        Đăng nhập
                    </Button>
                </p>
            </form>
        </div>
    );
}

export default Register;
