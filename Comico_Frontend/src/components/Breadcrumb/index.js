import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';
import BreadcrumbItem from './BreadcrumbItem';

const cx = classNames.bind(styles);

function Breadcrumb({ path, title, to }) {
    return (
        <div className={cx('breadcrumb')}>
            <ul className={cx('links')}>
                <li className={cx('link')}>
                    <Link className={cx('link-title')} to={'/'}>
                        Trang chủ
                    </Link>
                </li>
                <BreadcrumbItem path={path} title={title} to={to} />
            </ul>
        </div>
    );
}

export default Breadcrumb;
