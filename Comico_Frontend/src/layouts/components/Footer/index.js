import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('content')}>© 2022 - 2023 comico - All rights reserved.</h4>
            <div className={cx('contact')}>
                <h4 className={cx('des')}>Thông tin liên hệ:</h4>

                <p className={cx('email')}>thuhadev@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer;
