// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image'

const DivIndex = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  max-width: 500px;
`;

// Step 2: Define your component
const IndexPage = () => {
  return (
    <DivIndex>
      <Layout pageTitle={'Home Page'} />
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </DivIndex>
  );
};

// You'll learn about this in the next task, just copy it for now

// Gatsby 의 Head API 를 이용해서 페이지 타이틀을 설정.
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
