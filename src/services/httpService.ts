import axios from 'axios';

const httpService = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-type': 'application/json',
  },
});

//todo add async - await
export function httpGet<T>(url: string, params?: string[]) {
  return httpService.get<T>(url, { params: params?.join('&') });
}

export async function httpPost<T, B>(url: string, body?: B) {
  try {
    const response = await httpService.post<T>(url, body);

    return response.data;
  } catch {
    //todo handle axios errors

    return { error: 'idk' };
  }
}
