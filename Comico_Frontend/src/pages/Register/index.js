import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faEnvelope, faKey, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import styles from './Register.module.scss';
import Button from '../../components/Button';
import images from '../../assets/image';

const cx = classNames.bind(styles);

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [typeInputPassword, setTypeInputPassword] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Cần nhập thông tin!').min(6, 'Tên đăng nhập nhiều hơn 5 ký tự'),
            email: Yup.string()
                .required('Cần nhập thông tin!')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email không chính xác!'),
            password: Yup.string()
                .required('Cần nhập thông tin!')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    'Mật khẩu cần ít nhất 8 kí tự bao gồm ít nhất 1 kí tự thường và số!',
                ),
            confirmPassword: Yup.string()
                .required('Cần nhập thông tin!')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không chính xác!'),
        }),
        onSubmit: (values) => {
            registerUser(values, dispatch, navigate);
            window.alert('Đăng ký thành công!');
        },
    });
    const handleShowPassword = () => {
        setShowPassword((state) => !state);
        setTypeInputPassword((state) => !state);
    };

    return (
        <div className={cx('wrapper')}>
            <form action="" method="post" className={cx('form')} onSubmit={formik.handleSubmit}>
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
                            id="username"
                            type="text"
                            name="username"
                            className={cx('input')}
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
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <input
                            id="email"
                            type="email"
                            className={cx('input')}
                            placeholder="Email"
                            autoComplete="off"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.email && <p className={cx('err-message')}>{formik.errors.email}</p>}
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
                            id="password"
                            type={typeInputPassword ? 'password' : 'text'}
                            className={cx('input')}
                            placeholder="Nhập mật khẩu"
                            autoComplete="off"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.password && <p className={cx('err-message')}>{formik.errors.password}</p>}

                <span></span>
                <div className={cx('form-group')}>
                    <div className={cx('input-form')}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input
                            id="confirmPassword"
                            type="password"
                            className={cx('input')}
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="off"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                {formik.errors.confirmPassword && <p className={cx('err-message')}>{formik.errors.confirmPassword}</p>}

                <span></span>
                {/* <div className={cx('check')}>
                    <input type="checkbox" name="" id="checkbox" />
                    <span className={cx('agree')}>Tôi đồng ý với tất cả điều khoản sử dụng</span>
                </div> */}
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
