import React from "react";
import Download from "../components/download/Download";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card/Card";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.png";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

const Home = () => {
  return (
    <>
      <Wrapper>
        <h1>Essentials delivered to your doorstep</h1>
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
      </Wrapper>

      <Wrapper>
        <h1>Top picks for you</h1>
        <Card img={p1} />
        <Card img={p2} />
        <Card img={p3} />
        <Card img={p4} />
      </Wrapper>

      <Download />
    </>
  );
};

export default Home;
