import axios, { AxiosResponse } from 'axios';

const httpService = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export async function httpGet<T>(
  url: string,
  params?: string[]
): Promise<AxiosResponse<T>> {
  const response = await httpService.get<T>(url, { params: params?.join('&') });

  return response;
}

export async function httpPost<T, B>(
  url: string,
  body?: B
): Promise<T | { error: string }> {
  try {
    const response = await httpService.post<T>(url, body);

    return response.data;
  } catch {
    //todo handle axios errors

    return { error: 'idk' };
  }
}
