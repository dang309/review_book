import { API_ROOT } from '../utils/constants';

class BookService {
  constructor(api) {
    this.url = new URL(api, API_ROOT);
  }

  getBookForPerPage(page, sortBy) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}?page=${page}&sortBy=${sortBy}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getBookById(id) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}/${id}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getBookByKeyword(keyword) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}/keyword?keyword=${keyword}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

export default new BookService('/v1/books');
