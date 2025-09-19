"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrap = styled.section`
  position: relative;
  height: 100vh;
  min-height: 560px;
  overflow: clip;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.55)
  );
  z-index: 1;
`;

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

  @media (max-width: 600px) {
    justify-content: center;
    width: 100%;
    padding: 0;
    a {
      margin-right: 20px;
      font-size: 14px;
    }
  }
`;

export default function HeroMotion() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Kun heroa skrollataan hiukan (0 → 0.3), nostetaan nimi keskelle
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // y: 120px → 0px (nousee keskelle)
  const titleY = useTransform(scrollYProgress, [0, 0.3], [120, 0]);
  // scale: kevyt kasvu
  const titleScale = useTransform(scrollYProgress, [0, 0.3], [0.98, 1]);
  // opacity: feidaa sisään nopeasti
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Taustakuva: kevyt zoom-fade sisääntulossa
  const entry = { opacity: 0, scale: 1.08 };
  const entered = {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <Wrap ref={heroRef}>
      {/* Tausta */}
      <motion.div
        initial={entry}
        animate={entered}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      >
        <Image
          src="/header-lucas.jpeg"
          alt="Lucas Kyllönen"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <Overlay />

      {/* Nimi (nousee hieman skrollatessa keskelle) */}
      <motion.div
        style={{
          height: "100%",
          display: "grid",
          placeItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.h1
          style={{
            y: titleY,
            scale: titleScale,
            opacity: titleOpacity,
            margin: 0,
            color: "#fff",
            textAlign: "center",
            padding: "0 6vw",
            fontFamily: "Satoshi, sans-serif",
            fontWeight: 500,
            letterSpacing: "0.02em",
            lineHeight: 0.92,
            fontSize: "clamp(34px, 8.5vw, 120px)", // mobiilissa vähän pienempi min
          }}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
        >
          <span style={{ display: "block" }}>Lucas</span>
          <span style={{ display: "block", marginTop: "0.06em" }}>
            Kyllönen
          </span>
        </motion.h1>
      </motion.div>

      {/* Navigaatio */}
      <Nav>
        <Link href="/career">Ura</Link>
        <Link href="/media">Media</Link>
        <Link href="/contact">Yhteys</Link>
      </Nav>
    </Wrap>
  );
}
