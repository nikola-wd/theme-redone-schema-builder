import { writable } from 'svelte/store';

export const block_meta = writable({
  BLOCK_REGISTER_NAME: 'folder-name-here',
  BLOCK_TITLE: '',
  keywords: '',
  hasSidebar: false,
  hasExample: true,
  hasGlobalSettings: false,
  grid: null,
});

export const attributes = writable({
  id_1: {
    field_name: 'title',
    main_data: {
      type: 'object',
      field_meta: {
        type: 'text',
        text_type: 'short',
        label: 'Title',
        help: 'This is a title',
        max_chars: 30,
        col: '1',
      },
      default: {
        text: '',
      },
    },
  },
  id_2: {
    field_name: 'text',
    main_data: {
      type: 'object',
      field_meta: {
        type: 'text',
        text_type: 'long',
        label: 'Content',
        col: '2',
      },
      default: {
        text: '',
      },
    },
  },

  // cta: {
  //   type: 'object',
  //   field_meta: {
  //     type: 'cta',
  //     label: 'Button',
  //     help: 'cta help text',
  //     col: 'after',
  //   },
  //   default: {
  //     title: '',
  //     url: '',
  //     target: false,
  //   },
  // },
});

export const is_adding_field = writable(false);
