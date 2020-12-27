const loadFavorites = (storage: any): any => {
  const favorites = storage.getItem('favorite-events');

  if (!favorites) {
    storage.setItem('favorite-events', '{}');
    return [];
  }

  return JSON.parse(favorites);
};

export default loadFavorites;
