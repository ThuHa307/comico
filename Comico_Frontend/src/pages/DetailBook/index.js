import classNames from 'classnames/bind';
import styles from './DetailBook.module.scss';
import Main from './Main';
import GenresBook from './GenresBook';
import AuthorsBook from './AuthorsBook';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as bookServices from '../../apiServices/bookServices';
import * as authorServices from '../../apiServices/authorService';
import * as genreServices from '../../apiServices/genreService';

const cx = classNames.bind(styles);

function DetailBook() {
    let { id } = useParams();
    const [book, setBooks] = useState(null);
    const [author, setAuthors] = useState(null);
    const [genreBooks, setGenreBooks] = useState(null);
    useEffect(() => {
        bookServices
            .getDetailBook(id)
            .then((data) => {
                console.log(data);
                setBooks(data);
            })
            .catch((err) => console.log(err));
        window.scrollTo(0, 0);
    }, [id]);
    useEffect(() => {
        if (book && book.author) {
            authorServices
                .getAnAuthor(book.author._id)
                .then((data) => setAuthors(data))
                .catch((err) => console.log(err));
            genreServices
                .getBooks(book.genres[0])
                .then((data) => {
                    console.log(data);
                    setGenreBooks(data);
                })
                .catch((err) => console.log(err));
            window.scrollTo(0, 0);
        }
    }, [book]);
    return (
        <div className={cx('wrapper')}>
            <Main book={book} />
            {genreBooks !== null && <GenresBook datas={genreBooks[0].books} />}
            {author !== null && <AuthorsBook datas={author.books} />}
        </div>
    );
}

export default DetailBook;
