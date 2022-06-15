class BookstoreService {
  constructor() {
    this.apiKey = process.env.REACT_APP_API_KEY;
    this.url = process.env.REACT_APP_API_URL;
    this.apiVersion = process.env.REACT_APP_API_VERSION;
  }

  API_URL = `${this.url}/api/${this.apiVersion}`;

  async getBooks(search) {
    const response = await fetch(`${this.API_URL}/books` + search ? `?search=${search}` : '');

    return await response.json();
  }

  async createBook(data) {
    const response = await fetch(`${this.API_URL}/books`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  }
}

export default new BookstoreService();
