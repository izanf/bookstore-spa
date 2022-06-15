class BookstoreService {
  constructor() {
    this.apiKey = process.env.REACT_APP_API_KEY;
    this.apiUrl = `${process.env.REACT_APP_API_URL}/api/${process.env.REACT_APP_API_VERSION}`;
  }

  async getBooks(search) {
    const response = await fetch(`${this.apiUrl}/books${!!search ? `?search=${search}` : ''}` );

    return await response.json();
  }

  async createBook(data) {
    const response = await fetch(`${this.apiUrl}/books`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    return await response.json();
  }
}

export default new BookstoreService();
