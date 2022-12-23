import classNames from 'classnames/bind';
import styles from './DefaultLayoutSlider.module.scss';
import Header from '../components/Header';
import Slider from './Slider';
import Quote from '../../components/Quote';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayoutSlider({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Slider />
            <div className={cx('content')}>{children}</div>
            <Quote />
            <Footer />
        </div>
    );
}

export default DefaultLayoutSlider;
