import axios from 'axios';

export const api = {
  getBooks(book: string) {
    return axios
      .get<AxiosResponse>(
        `${process.env.REACT_APP_URL}volumes?q=${book}&key=${process.env.REACT_APP_MY_API_KEY}`,
      )
      .then(res => res.data);
  },
};

/// TYPE
type AxiosResponse = {
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
