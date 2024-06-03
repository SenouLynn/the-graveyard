const userApi = {
  create: () => {},
  getForId: () => null,
  getAll: () => null,
  getSome: () => null,
  updateForId: (id: string, user: Partial<User>) => null,
  deleteForId: (id: string) => null,
} satisfies GenericApi<User>;

const api = {
  user: userApi,
};
