import { API_ROOT } from '../utils/constants';

class ReviewService {
  constructor(api) {
    this.url = new URL(api, API_ROOT);
  }

  createReview(dataToSend) {
    return new Promise((resolve, reject) => {
      window
        .fetch(this.url.href, {
          method: 'POST',
          body: JSON.stringify(dataToSend),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getReviewForPerPage(page) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}?page=${page}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getReviewById(id) {
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

  getReviewByBookId(bookId, page) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}?book_id=${bookId}&page=${page}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

export default new ReviewService('/v1/reviews');
