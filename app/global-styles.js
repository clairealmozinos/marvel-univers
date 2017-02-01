import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
  }

  .page {
    margin: auto;
    margin-top: 50px;
    max-width: 850px;
    min-height: 100%;
    text-align: center;
    width: 80%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
