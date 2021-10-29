export enum StorageKey {
  Token = 'token',
  IsAdmin = 'isAdmin',
}

//in fisierul de storage service -- doar metoda asta
export const updateLocalStorage = (key: StorageKey, value: string) => {
  localStorage.setItem(key, value);
};
