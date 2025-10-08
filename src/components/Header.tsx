"use client";

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = styled.header<{ $transparent?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  z-index: 100;

  background: ${({ $transparent }) =>
    $transparent ? "transparent" : "rgba(255,255,255,0.8)"};
  backdrop-filter: ${({ $transparent }) =>
    $transparent ? "none" : "blur(8px)"};
  border-bottom: ${({ $transparent }) =>
    $transparent ? "none" : "1px solid rgba(0,0,0,0.1)"};
`;

const Side = styled.div<{ $transparent?: boolean }>`
  display: flex;
  align-items: center;
  gap: 28px;

  a {
    font-family: "Satoshi", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: clamp(14px, 1.2vw, 16px);
    text-decoration: none;
    transition: opacity 0.2s ease;
    color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: none; /* piilotetaan linkit mobiilissa */
  }
`;

const Center = styled.div<{ $transparent?: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  font-size: clamp(16px, 1.6vw, 20px);
  text-transform: uppercase;
  letter-spacing: 0.12em;

  a {
    color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};
    text-decoration: none;
  }
`;

const RightSide = styled.div<{ $transparent?: boolean }>`
  display: flex;
  align-items: center;
  gap: 36px; /* aiemmin 16px – nyt reilusti enemmän tilaa */

  @media (max-width: 768px) {
    gap: 12px;
    position: absolute;
    right: 16px;
    top: 22px;
  }
`;

const LanguageSwitch = styled(Link)<{ $transparent?: boolean }>`
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(13px, 1vw, 15px);
  letter-spacing: 0.08em;
  text-decoration: none;
  color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const ContactBtn = styled(Link)<{ $transparent?: boolean }>`
  font-family: "Satoshi", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: clamp(13px, 1vw, 15px);
  letter-spacing: 0.08em;
  padding: 8px 16px;
  border: 2px solid ${({ $transparent }) => ($transparent ? "#fff" : "#000")};
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s ease;

  background: ${({ $transparent }) => ($transparent ? "transparent" : "#fff")};
  color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};

  &:hover {
    background: #1139ec;
    color: #fff;
    border-color: #1139ec;
  }

  /* Piilotetaan vain yhteysnappi mobiilissa */
  @media (max-width: 768px) {
    display: none;
  }
`;

const Burger = styled.button<{ $transparent?: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ open: boolean; $transparent?: boolean }>`
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background: ${({ $transparent }) =>
    $transparent ? "rgba(0,0,0,0.9)" : "#fff"};
  color: ${({ $transparent }) => ($transparent ? "#fff" : "#000")};
  padding: 24px;
  display: ${({ open }) => (open ? "block" : "none")};

  a {
    display: block;
    margin-bottom: 16px;
    font-size: 18px;
    text-decoration: none;
    color: inherit;
  }
`;

export default function Header({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // Luodaan vastaava polku toiselle kielelle
  const targetLangPath = isEnglish
    ? pathname.replace("/en", "") || "/"
    : `/en${pathname}`;

  return (
    <Nav $transparent={transparent}>
      {/* vasen: desktop-linkit */}
      <Side $transparent={transparent}>
        <Link href={isEnglish ? "/en/career" : "/career"}>
          {isEnglish ? "Career" : "Ura"}
        </Link>
        <Link href={isEnglish ? "/en/media" : "/media"}>Media</Link>
      </Side>

      {/* mobiilissa hampurilainen */}
      <Burger $transparent={transparent} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </Burger>

      {/* keskellä nimi */}
      <Center $transparent={transparent}>
        <Link href={isEnglish ? "/en" : "/"}>Lucas Kyllönen</Link>
      </Center>

      {/* oikea puoli: kielivalinta + yhteys */}
      <RightSide $transparent={transparent}>
        <LanguageSwitch href={targetLangPath} $transparent={transparent}>
          {isEnglish ? "FI" : "EN"}
        </LanguageSwitch>
        <ContactBtn
          href={isEnglish ? "/en/contact" : "/contact"}
          $transparent={transparent}
        >
          {isEnglish ? "Contact" : "Yhteys"}
        </ContactBtn>
      </RightSide>

      {/* mobiilivalikko */}
      <MobileMenu open={menuOpen} $transparent={transparent}>
        <Link
          href={isEnglish ? "/en/career" : "/career"}
          onClick={() => setMenuOpen(false)}
        >
          {isEnglish ? "Career" : "Ura"}
        </Link>
        <Link
          href={isEnglish ? "/en/media" : "/media"}
          onClick={() => setMenuOpen(false)}
        >
          Media
        </Link>
        <Link
          href={isEnglish ? "/en/contact" : "/contact"}
          onClick={() => setMenuOpen(false)}
        >
          {isEnglish ? "Contact" : "Yhteys"}
        </Link>
        <Link href={targetLangPath} onClick={() => setMenuOpen(false)}>
          {isEnglish ? "FI" : "EN"}
        </Link>
      </MobileMenu>
    </Nav>
  );
}
