import { writable } from 'svelte/store';

export const block_meta = writable({
  BLOCK_REGISTER_NAME: 'folder-name-here',
  BLOCK_TITLE: '',
  keywords: [],
  hasSidebar: false,
  hasExample: true,
  hasGlobalSettings: false,
  grid: null,
});

export const attributes = writable({});
