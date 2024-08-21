import { translationMessages, appLocales, DEFAULT_LOCALE } from '../app/i18n';

import type { Preview } from '@storybook/react';

type TranslationMessages = {
  [key: string]: { [key: string]: string };
};

const getMessages = (locale: string) => (translationMessages as TranslationMessages)[locale];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    intl: {
      locales: appLocales,
      defaultLocale: DEFAULT_LOCALE,
      getMessages
    }
  }
};

export default preview;
