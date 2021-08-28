import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --gutterSm: 0.4rem;
  --gutterMd: 0.8rem;
  --gutterLg: 1.6rem;
  --gutterXl: 2.4rem;
  --gutterXx: 7.2rem;
  --colorPrimary400: #7e57c2;
  --colorPrimary600: #5e35b1;
  --colorPrimary800: #4527a0;
  --fontFamily: "Dosis", sans-serif;
  --fontSizeSm: 1.2rem;
  --fontSizeMd: 1.6rem;
  --fontSizeLg: 2.1rem;
  --fontSizeXl: 2.8rem;
  --fontSizeXx: 3.6rem;
  --lineHeightSm: 1.1;
  --lineHeightMd: 1.8;
  --transitionDuration: 300ms;
  --transitionTF: cubic-bezier(0.645, 0.045, 0.355, 1);

  /* floated labels */
  --inputPaddingV: var(--gutterMd);
  --inputPaddingH: var(--gutterLg);
  --inputFontSize: var(--fontSizeLg);
  --inputLineHeight: var(--lineHeightMd);
  --labelScaleFactor: 0.8;
  --labelDefaultPosY: 50%;
  --labelTransformedPosY: calc(
    (var(--labelDefaultPosY)) -
    (var(--inputPaddingV) * var(--labelScaleFactor)) -
    (var(--inputFontSize) * var(--inputLineHeight))
  );
  --inputTransitionDuration: var(--transitionDuration);
  --inputTransitionTF: var(--transitionTF);
  }
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}



  body {
    font-family: 'Roboto', sans-serif;
  }


#app {
  background-color: #fafafa;
  min-height: 100%;
  min-width: 100%;

  overflow: auto;
}

#app::-webkit-scrollbar {
    display: none;
  }

 .ql-container {
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  background: #fefcfc;
}

/* Snow Theme */
 .ql-snow.ql-toolbar {
  display: block;
  background: #eaecec;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}

/* Bubble Theme */
 .ql-bubble .ql-editor {
  border: 1px solid #ccc;
  border-radius: 0.5em;
}

 .ql-editor {
  min-height: 16em;
  max-height: 32em;
  overflow: auto;
  background-color: #fff;
}

.themeSwitcher {
  margin-top: 0.5em;
  font-size: small;
}

.Overlay {
  z-index: 999;
}



  p,
  label {
    line-height: 1.5em;

    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
    padding: 0;

  }
`;

export default GlobalStyle;
