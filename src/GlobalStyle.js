import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #212121;
    --lightBlack: #373737;
    --lightGrey: #5f5d5d;
    --red: #ff4646;
    --lightRed: #ff8585;
    --maxWidth: 1340px;
    --transition: all 0.3s linear;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  html {
    box-sizing: border-box;
    line-height: 1.4;
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
    font-family: "Montserrat", Roboto Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    transition: var(--transition);
  }

  button:hover {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button, 
  a, 
  p, 
  span {
    font-family: "Roboto Mono";
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.25rem;

  }

  h4 {
    font-size: 0.875rem;
  }

  p {
    margin-bottom: 1.25rem;
  }
  
  @media screen and (min-width: 800px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 1rem;
    }
    body {
      font-size: 1rem;
    }
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }

  .left-margin {
    margin-left: 10px !important;
  }

  article.top {
    @media screen and (min-width: 1200px) {
      height: fit-content;
      position: sticky;
      top: 0;
    }
  }
`;
