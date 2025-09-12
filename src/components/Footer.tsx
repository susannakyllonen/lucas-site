"use client";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 4rem 2rem;
  font-family: "Satoshi", sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterNote = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.6;
  text-align: center;
`;

const Message = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
  max-width: 400px;
`;

export const Footer = () => (
  <FooterWrapper>
    <FooterContent>
      <Column>
        <FooterLink href="https://instagram.com/lucaskyllone" target="_blank">
          Instagram
        </FooterLink>
        <FooterLink href="/contact">Contact</FooterLink>
      </Column>

      <Column>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
      </Column>

      <Column>
        <Message>Tähän jotain kivaa</Message>
      </Column>
    </FooterContent>

    <FooterNote>&copy; 2025 Happy Twiggy – All rights reserved.</FooterNote>
  </FooterWrapper>
);
