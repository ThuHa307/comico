import classNames from 'classnames/bind';
import styles from './Main.module.scss';

import Rank from './Rank';
import Recommend from './Recommend';
import datas from '../../../components/Datas';

const cx = classNames.bind(styles);
function Main() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <Rank />
                    <Recommend datas={datas} />
                </div>
            </div>
        </div>
    );
}

export default Main;
