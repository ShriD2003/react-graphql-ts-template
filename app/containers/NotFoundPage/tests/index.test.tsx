import React from 'react';
import { fireEvent } from '@testing-library/react';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

import NotFoundPage from '../index';
import history from '@app/utils/history';
import { renderWithIntl } from '@app/utils/testUtils';

describe('<NotFoundPage /> tests', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = renderWithIntl(
      <I18nProvider i18n={i18n}>
        <NotFoundPage />
      </I18nProvider>
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should take the user back to the homePage if the go back button is clicked', () => {
    const { getByTestId } = renderWithIntl(
      <I18nProvider i18n={i18n}>
        <NotFoundPage />
      </I18nProvider>
    );
    const spy = jest.spyOn(history, 'push');
    fireEvent.click(getByTestId('back-button'));
    expect(spy).toBeCalled();
  });
});
