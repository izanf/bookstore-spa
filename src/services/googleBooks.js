class GoogleBooks {
  constructor() {
    this.apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
    this.url = 'https://www.googleapis.com/books/v1/volumes';
  }

  async getBooks(query) {
    const response = await fetch(`${this.url}?q=${query}`);
    const data = await response.json();

    return data?.items;
  }
}

export default new GoogleBooks();
