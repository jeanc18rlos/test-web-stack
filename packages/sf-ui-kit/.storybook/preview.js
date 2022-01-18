import React from 'react';
import { ThemeProvider } from '../src/theme';

export const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: 'rgb(248 248 248)',
        default: true,
        layout: 'fullscreen'
      },
      { name: 'fucsia', value: '#b24c89' },
      { name: 'magenta', value: '#32e3cf' },
      { name: 'emerald', value: '#37fd9c' }
    ]
  }
};
