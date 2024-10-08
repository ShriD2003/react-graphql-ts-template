/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';
import notFoundImage from '@images/undraw_page_not_found_re_e9o6.svg';
import { T } from '@components';
import { colors } from '@app/themes';
import history from '@utils/history';

const NotFoundImage = styled(Image)`
  && {
    height: 60%;
    width: 60%;
    margin: 25%;
  }
`;

const NotFoundContainer = styled.div`
  && {
    display: flex;
    flex-direction: column;
    max-width: 30%;
    justify-content: center;
    align-items: center;
    margin: 5% auto;
  }
`;

const CustomButton = styled.button`
  && {
    background-color: ${colors.primary};
    border-radius: 8px;
    padding: 4px;
    color: ${colors.secondaryText};
    cursor: pointer;
  }
`;
export default function NotFound() {
  return (
    <NotFoundContainer>
      <T marginBottom={0.5} data-testid="details" type="heading" id="not_found_page_container" />
      <CustomButton data-testid="back-button" onClick={() => history.push('/')}>
        Go Back
      </CustomButton>
      <NotFoundImage src={notFoundImage} preview={false} />
    </NotFoundContainer>
  );
}
