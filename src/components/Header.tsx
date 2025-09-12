"use client";

import styled from "styled-components";
import Link from "next/link";

const Bar = styled.header`
  position: sticky; /* pysyy yläreunassa scrollissa */
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  backdrop-filter: saturate(180%) blur(8px);
`;

const Wrap = styled.div`
  width: min(1100px, 92vw);
  margin: 0 auto;
  height: 64px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
`;

const Brand = styled(Link)`
  font-weight: 800;
  letter-spacing: 0.2px;
  text-transform: none;
  font-size: 18px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    padding: 8px 10px;
    border-radius: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  a[aria-current="page"] {
    background: ${({ theme }) => theme.colors.card};
    border: 1px solid ${({ theme }) => theme.colors.line};
  }

  @media (max-width: 720px) {
    gap: 8px;
    a {
      padding: 8px 8px;
    }
  }
`;

const Cta = styled(Link)`
  padding: 8px 14px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  font-weight: 700;
  margin-left: 8px;
`;

export default function Header() {
  return (
    <Bar>
      <Wrap>
        <Brand href="/">Lucas Kyllönen</Brand>
        <Nav aria-label="Päänavigaatio">
          <Link href="/career">Ura</Link>
          <Link href="/media">Media</Link>
          <Link href="/contact">Yhteys</Link>
          <Cta href="/media">Highlights</Cta>
        </Nav>
      </Wrap>
    </Bar>
  );
}
