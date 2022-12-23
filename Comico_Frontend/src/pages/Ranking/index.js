import classNames from 'classnames/bind';
import styles from './Ranking.module.scss';

const cx = classNames.bind(styles);

function Ranking() {
    return <div className={cx('wrapper')}>Ranking</div>;
}

export default Ranking;
