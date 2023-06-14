import classNames from 'classnames/bind';
import styles from './Main.module.scss';

import Rank from './Rank';
import Recommend from './Recommend';
import { useEffect, useState } from 'react';
import * as bookServices from '../../../apiServices/bookServices';

const cx = classNames.bind(styles);
function Main() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        bookServices
            .getBook()
            .then((data) => setBooks(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <Rank />
                    <Recommend datas={books} />
                </div>
            </div>
        </div>
    );
}

export default Main;
