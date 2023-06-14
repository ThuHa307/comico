import classNames from 'classnames/bind';
import styles from './ProfileLayout.module.scss';
import Header from '../components/Header';
import Category from '../components/CategoryProfile';

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default ProfileLayout;
