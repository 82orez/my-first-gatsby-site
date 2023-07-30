// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "react-bootstrap";
import { useState } from "react";

// Step 2: Define your component
const AboutPage = () => {
  const [count, setCount] = useState(0);

  const onClickBttn = () => {
    setCount(count + 1);
  };

  const onClickReset = () => {
    setCount(0);
  };

  return (
    <Layout pageTitle={"About me"}>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <div>
        <StaticImage alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera" src="../images/icon.png" />
      </div>

      <Button variant={"danger"} onClick={onClickBttn}>
        Button
      </Button>
      <Button variant={"info"} onClick={onClickReset}>
        Reset
      </Button>

      <h1>Count: {count}</h1>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default AboutPage;
