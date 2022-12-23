import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    className,
    children,
    to,
    href,
    small = false,
    ssmall = false,
    large = false,
    defaultBtn = false,
    primary = false,
    underline = false,
    disabled = false,
    text = false,
    fullfill = false,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        underline,
        text,
        disabled,
        defaultBtn,
        fullfill,
        small,
        ssmall,
        large,
        leftIcon,
        rightIcon,
    });

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove events listener when btn disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
