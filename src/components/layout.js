import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import { Button, ButtonGroup } from 'react-bootstrap';

const DivLayout = styled.div`
  //margin: 0 auto;
  //max-width: 500px;
  font-family: sans-serif;

  & .heading {
    color: rebeccapurple;
  }

  & .nav-links {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  & .nav-link-item {
    padding-right: 2rem;
  }

  & .nav-link-text {
    color: gray;
  }
`;

const Layout = ({ pageTitle, children }) => {
  return (
    <DivLayout>
      <nav>
        <ul className={'nav-links'}>
          <li className={'nav-link-item'}>
            <Link to="/" className={'nav-link-text'}>
              Home
            </Link>
          </li>
          <li className={'nav-link-item'}>
            <Link to="/about" className={'nav-link-text'}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={'heading'}>{pageTitle}</h1>
        {children}
        {/*<Button variant={'danger'}>click A</Button>*/}
        {/*<Button variant={'success'}>click B</Button>*/}
        {/*<ButtonGroup aria-label="Basic example">*/}
        {/*  <Button variant="info">Left</Button>*/}
        {/*  <Button variant="warning">Middle</Button>*/}
        {/*  <Button variant="secondary">Right</Button>*/}
        {/*</ButtonGroup>*/}
      </main>
    </DivLayout>
  );
};

export default Layout;
