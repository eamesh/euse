import { Global, css } from '@emotion/react';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';

export default function () {
  return (
    <Global
      styles={css`
        body {
          font-family: 'Roboto';
        }
      `}
    />
  );
}
