import axios from 'axios';

export const api = {
  getBooks(
    book: string,
    category: string,
    sorting: string,
    index: number,
    maxResults: number,
  ) {
    return axios
      .get<AxiosBooksResponse>(
        `${process.env.REACT_APP_URL}volumes?q=${book}+subject:${category}&orderBy=${sorting}&startIndex=${index}&maxResults=${maxResults}&key=${process.env.REACT_APP_MY_API_KEY}`,
      )
      .then(res => res.data);
  },
  getBook(book: string) {
    return axios
      .get<AxiosBookResponse>(`${process.env.REACT_APP_URL}volumes/${book}`)
      .then(res => res.data.volumeInfo);
  },
};

/// TYPE
type AxiosBooksResponse = {
  totalItems: number;
  items?: {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      categories: string[];
      authors: string[];
      imageLinks: {
        thumbnail: string;
      };
    };
  }[];
};

type AxiosBookResponse = {
  volumeInfo: {
    title: string;
    subtitle: string;
    categories: string[];
    authors: string[];
    imageLinks: {
      medium: string;
    };
    description: string;
  };
};
