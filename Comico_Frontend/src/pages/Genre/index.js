import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Genre.module.scss';
import datas from '../../components/Datas';
import Book from '../../components/Book';
import Button from '../../components/Button';

const cx = classNames.bind(styles);

function Genre() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h3 className={cx('header-title')}>Văn học</h3>
            </div>
            <div className={cx('container')}>
                <div className="grid wide">
                    <div className="row">
                        {datas.map((data, index) => (
                            <Book key={index} data={data} className="col l-3 m-6 c-12" />
                        ))}
                    </div>
                </div>
            </div>
            <nav className={cx('nav-pagination')}>
                <ul className={cx('pagination')}>
                    <li className={cx('page-item')}>
                        <Button className={cx('page-btn')} text ssmall disabled>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </Button>
                        <Button className={cx('page-btn', { active: true })} text ssmall>
                            1
                        </Button>
                        <Button className={cx('page-btn')} text ssmall>
                            2
                        </Button>
                        <Button className={cx('page-btn')} text ssmall>
                            3
                        </Button>
                        <Button className={cx('page-btn')} text ssmall>
                            4
                        </Button>
                        <Button className={cx('page-btn')} text ssmall>
                            5
                        </Button>
                        <Button className={cx('page-btn')} text ssmall>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Genre;
