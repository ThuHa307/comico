import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '../../Popper';

const cx = classNames.bind(styles);

function Menu({ children, datas = [] }) {
    return (
        <HeadlessTippy
            interactive
            delay={[0, 500]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {datas.map((data, index) => (
                            <MenuItem key={index} data={data} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
