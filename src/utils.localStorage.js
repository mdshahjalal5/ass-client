const storage = {
  addToArray(key, newValue) {
    try {
      const existing = localStorage.getItem(key);
      const parsed = existing ? JSON.parse(existing) : [];

      const isDuplicate = parsed.some((item) => item === newValue);

      if (isDuplicate) {
        return;
      }

      const updated = Array.isArray(parsed)
        ? [...parsed, newValue]
        : [parsed, newValue];

      localStorage.setItem(key, JSON.stringify(updated));
    } catch (err) {
      console.error("Error adding to localStorage array:", err);
    }
  },

  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error("Error getting item from localStorage", err);
      return null;
    }
  },

  removeFromArray(key, valueToRemove) {
    try {
      const existing = localStorage.getItem(key);
      const parsed = existing ? JSON.parse(existing) : [];

      // Filter out the value you want to remove
      const updated = parsed.filter((item) => item !== valueToRemove);

      localStorage.setItem(key, JSON.stringify(updated));
    } catch (err) {
      console.error("Error removing item from localStorage array:", err);
    }
  },
  clear() {
    try {
      localStorage.clear();
    } catch (err) {
      console.error("Error clearing localStorage", err);
    }
  },
};

export default storage;
