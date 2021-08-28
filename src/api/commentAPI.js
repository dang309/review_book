import { API_ROOT } from '../utils/constants';

class CommentService {
  constructor(api) {
    this.url = new URL(api, API_ROOT);
  }

  createComment(dataToSend) {
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

  getCommentByBookId(bookId) {
    return new Promise((resolve, reject) => {
      window
        .fetch(`${this.url.href}?book_id=${bookId}`, {
          method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

export default new CommentService('/v1/comments');
