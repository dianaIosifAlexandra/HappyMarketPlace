export enum StorageKey {
  Token = 'token',
  IsAdmin = 'isAdmin',
}

//in fisierul de storage service -- doar metoda asta
export const updateLocalStorage = (key: StorageKey, value: string) => {
  localStorage.setItem(key, value);
};

export function getFromLocalStorage(key: StorageKey): string | null {
  const value = localStorage.getItem(key);

  if (value && key === StorageKey.IsAdmin) {
    return JSON.parse(value);
  }

  return value;
}

export function getIsAdminFromStorage(): boolean {
  const isAdminString = getFromLocalStorage(StorageKey.IsAdmin);

  if (isAdminString) {
    return JSON.parse(isAdminString);
  }

  return false;
}
