import queryString from 'query-string';
import { AsyncStorage } from 'react-native';

export const getRequest = (url, params) => {
  const queryParams = params ? queryString.stringify(params) : '';
  return request(`${url}?${queryParams}`, { method: 'GET' })
};

const request = (url, options) => {
  const { contentType, ...restOptions } = options;
  const CONTENT_TYPE = contentType ? contentType : 'application/json';

  const HEADERS = new Headers({
    'Content-type': CONTENT_TYPE,
    'Authentication': 'as',
  });

  return fetch(url,{ headers: HEADERS, ...restOptions })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw new Error(error);
    });

};