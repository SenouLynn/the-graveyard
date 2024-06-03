type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

type GenericApi<T> = {
  create: (user: T) => void;
  //   createSome: (users: T[]) => void;
  getForId: () => T | null;
  getAll: () => T[] | null;
  getSome: () => T[] | null;
  updateForId: (id: string, user: Partial<T>) => void;
  //   updateAll: (user: Partial<T>) => void;
  //   updateSome: (filter: string, user: Partial<T>) => void;
  deleteForId: (id: string) => void;
  //   deleteAll: () => void;
  //   deleteSome: (filter: string) => void;
};
