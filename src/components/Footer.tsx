"use client";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #1a1a1a;
  color: #fff;
  padding: 4rem 2rem;
  font-family: "Satoshi", sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  text-align: left;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(
      2,
      minmax(140px, 1fr)
    ); /* Sivut + Seuraa vierekkäin */
    grid-row-gap: 1.5rem;
    justify-items: start;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 180px;

  @media (max-width: 768px) {
    &:nth-child(3) {
      /* Yhteistyö tulee alle täysleveydelle */
      grid-column: 1 / -1;
      margin-top: 1rem;
    }
  }
`;

const FooterHeading = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
  color: #fff;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 400;
  opacity: 0.85;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 420px;
  opacity: 0.9;
  font-weight: 500;
  margin: 0;

  a {
    color: #fff;
    border-bottom: 2px solid #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 600;

    &:hover {
      border-color: #aaa;
      transform: translateY(-3px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const FooterNote = styled.p`
  margin-top: 3rem;
  font-size: 0.85rem;
  opacity: 0.6;
  text-align: center;
  letter-spacing: 0.02em;
  line-height: 1.4;

  a {
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;

    &:hover {
      border-color: #fff;
    }
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <Column>
        <FooterHeading>Sivut</FooterHeading>
        <FooterLink href="/">Etusivu</FooterLink>
        <FooterLink href="/ura">Ura</FooterLink>
        <FooterLink href="/media">Media</FooterLink>
        <FooterLink href="/contact">Yhteys</FooterLink>
      </Column>

      <Column>
        <FooterHeading>Seuraa</FooterHeading>
        <FooterLink
          href="https://instagram.com/lucaskyllone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </FooterLink>
      </Column>

      <Column>
        <FooterHeading>Yhteistyö</FooterHeading>
        <Message>
          Haluatko olla mukana tukemassa Lucaksen matkaa huipulle?{" "}
          <a href="/contact">Ota yhteyttä →</a>
        </Message>
      </Column>
    </FooterContent>

    <FooterNote>
      © 2025 Happy Twiggy – All rights reserved. Crafted with care by{" "}
      <a href="https://happytwiggy.com">Happy Twiggy</a>.
    </FooterNote>
  </FooterWrapper>
);
