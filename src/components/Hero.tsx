"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrap = styled.section`
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
  color: #fff;
`;

const BgImage = styled(Image)`
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.48));
  z-index: 1;
`;

/* NAV vasempaan yläkulmaan */
const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 88px;
  display: flex;
  align-items: center;
  padding: 0 6vw;
  z-index: 2;

  a {
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: clamp(14px, 1.2vw, 18px);
    text-decoration: none;
    margin-right: 32px;
    transition: opacity 0.2s ease;
  }

  a:hover {
    opacity: 0.85;
  }
`;

/* HERO-otsikko keskelle */
const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 6vw;

  h1 {
    font-family: "Satoshi", sans-serif;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 1;
    margin: 0;
    font-size: clamp(62px, 9vw, 140px);
  }

  .first {
    display: block;
    margin-right: 2em;
  }
  .last {
    display: block;
    margin-top: 0.1em;
    margin-left: 2em;
  }
`;

export default function Hero() {
  return (
    <Wrap>
      <BgImage
        src="/header-lucas.jpeg"
        alt="Lucas Kyllönen"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <Overlay />

      {/* NAV ylös vasemmalle */}
      <Nav>
        <Link href="/career">Ura</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Yhteys</Link>
      </Nav>

      {/* HERO CONTENT keskellä */}
      <Content>
        <h1>
          <span className="first">Lucas</span>
          <span className="last">Kyllönen</span>
        </h1>
      </Content>
    </Wrap>
  );
}
