import axios from 'axios';

export const requestAxios = async (options = {}) => {
  return await axios({
    baseURL: import.meta.env.VITE_KingShoesAPI,
    ...options
  })
}

export const getAxios = async (url, options = {}) => {
  return await requestAxios({
    url,
    ...options,
    method: 'GET',
  });
}

export const postAxios = async (url, options = {}) => {
  return await requestAxios({
    url,
    ...options,
    method: 'POST',
  });
};

export const putAxios = async (url, options = {}) => {
  return await requestAxios({
    url,
    ...options,
    method: 'PUT',
  });
};

export const deleteAxios = async (url, options = {}) => {
  return await requestAxios({
    url,
    ...options,
    method: 'DELETE',
  })
}