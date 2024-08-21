import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Trans } from '@lingui/react';
import configureStore, { RootState } from '@app/configureStore';
import { translationMessages, DEFAULT_LOCALE } from '@app/i18n';
import { Store } from 'redux';
import ConnectedLanguageProvider, { LanguageProvider } from '../index';

describe('<LanguageProvider /> tests', () => {
  it('should render its children', () => {
    const children = <h1>Test</h1>;
    const { container } = render(
      <LanguageProvider messages={translationMessages} locale={DEFAULT_LOCALE}>
        {children}
      </LanguageProvider>
    );
    expect(container.firstChild).not.toBeNull();
  });
});

describe('<ConnectedLanguageProvider /> tests', () => {
  let store: Store<RootState>;

  beforeAll(() => {
    store = configureStore({}).store;
  });

  it('should render the default language messages', () => {
    const message = 'Ships';
    const { queryByText } = render(
      <Provider store={store}>
        <ConnectedLanguageProvider locale={DEFAULT_LOCALE} messages={translationMessages}>
          <Trans id="ships" values={{ ships: message }} />
        </ConnectedLanguageProvider>
      </Provider>
    );
    expect(queryByText(message)).not.toBeNull();
  });
});
