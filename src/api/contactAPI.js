import { API_ROOT } from '../utils/constants';

class ContactService {
  constructor(api) {
    this.url = new URL(api, API_ROOT);
  }

  createContact(dataToSend) {
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
}

export default new ContactService('/v1/contact');
