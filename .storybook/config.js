import React from 'react';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-router';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { translationMessages, appLocales, DEFAULT_LOCALE } from '../app/i18n.ts';

Object.values = (obj) => Object.keys(obj).map((key) => obj[key]);

addDecorator(withKnobs);
addDecorator(withSmartKnobs);
addDecorator(StoryRouter());

const getMessages = (locale) => translationMessages[locale];
setIntlConfig({
  locales: appLocales,
  defaultLocale: DEFAULT_LOCALE,
  getMessages
});

addDecorator(withIntl);

// automatically import all files ending in *.stories.js
function requireAll(requireContext) {
  return requireContext.keys().map((key) => {
    return requireContext;
  });
}

function loadStories() {
  const req = require.context('../app/components/', true, /^.*\.stories$/);
  return requireAll(req);
}
configure(loadStories(), module);
