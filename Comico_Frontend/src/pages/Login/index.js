import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKey, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/apiRequest';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '../../components/Button';
import images from '../../assets/image';

const cx = classNames.bind(styles);

function Login() {
    const [loginErr, setLoginErr] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [typeInputPassword, setTypeInputPassword] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () => {
        setShowPassword((state) => !state);
        setTypeInputPassword((state) => !state);
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Cần nhập thông tin!'),
            password: Yup.string().required('Cần nhập thông tin!'),
        }),
        onSubmit: (values) => {
            loginUser(values, dispatch, navigate);
            setLoginErr(false);
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form action="" method="post" className={cx('form')} onSubmit={formik.handleSubmit}>
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
                            id="username"
                            type="text"
                            placeholder="Tên đăng nhập"
                            autoComplete="off"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.username && <p className={cx('err-message')}>{formik.errors.username}</p>}
                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <span className={cx('icon-show')} onClick={handleShowPassword}>
                            {showPassword ? (
                                <FontAwesomeIcon className={cx('showPassword')} icon={faEye} />
                            ) : (
                                <FontAwesomeIcon className={cx('showPassword')} icon={faEyeSlash} />
                            )}
                        </span>
                        <input
                            className={cx('input')}
                            id="password"
                            type={typeInputPassword ? 'password' : 'text'}
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.password && <p className={cx('err-message')}>{formik.errors.password}</p>}
                <span></span>
                <Button type="submit" className={cx('submit')}>
                    Đăng nhập
                </Button>
                {loginErr ? undefined : <p className={cx('err-message')}>Tài khoản hoặc mật khẩu chưa chính xác!</p>}
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
