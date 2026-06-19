import { writable } from 'svelte/store';

// Create a writable store for dark mode state
export const isDarkMode = writable(false);

// Initialize from localStorage if available
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme !== null) {
    isDarkMode.set(savedTheme === 'true');
  }
}

// Subscribe to changes and save to localStorage
isDarkMode.subscribe(value => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('darkMode', value.toString());
  }
}); 