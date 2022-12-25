import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './Breadcrumb.module.scss';

const cx = classNames.bind(styles);
function BreadcrumbItem({ path, title, to }) {
    const location = useLocation();
    return (
        <Fragment>
            <span className={cx('breadcrumb-divider')}></span>
            <li className={cx('link')}>
                <Link className={cx(location.pathname === path ? 'link-title-active' : 'link-title')} to={to}>
                    {title}
                </Link>
            </li>
        </Fragment>
    );
}

export default BreadcrumbItem;
