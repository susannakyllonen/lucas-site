"use client";

import { useRef, useEffect, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Section = styled.section`
  position: relative;
  --sticky-h: 20vh;
  min-height: 120vh;
  background: #fff;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  height: var(--sticky-h);
  display: grid;
  place-items: center;
`;

const ButtonWrap = styled(motion.div)`
  transform: translateY(40%);
  a.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 20px 36px;
    background: #000;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 700;
    font-size: 18px;
    text-decoration: none;
    transition:
      transform 0.15s ease,
      opacity 0.15s ease;
  }
  a.btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const Stage = styled.div`
  position: relative;
  height: 120vh;
  margin-top: 6vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const Pic = styled(motion.div)`
  position: absolute;
  overflow: hidden;
`;

type ImgSpec = {
  src: string;
  w: number;
  h: number;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  yMove: number;
  xMove: number;
};

// 🖥 Desktop
const IMAGES_DESKTOP: ImgSpec[] = [
  {
    src: "/lucas.jpeg",
    w: 320,
    h: 420,
    top: 40,
    left: 120,
    yMove: -20,
    xMove: -80,
  },
  {
    src: "/kentta.jpeg",
    w: 320,
    h: 420,
    top: 40,
    left: "calc(100% - 440px)",
    yMove: -20,
    xMove: 80,
  },
  {
    src: "/field-lucas.jpeg",
    w: 400,
    h: 500,
    top: "30%",
    left: "40%",
    yMove: 15,
    xMove: 0,
  },
  {
    src: "/kentta-lucas.jpeg",
    w: 360,
    h: 360,
    bottom: 40,
    left: 120,
    yMove: 20,
    xMove: -80,
  },
  {
    src: "/header-lucas.jpeg",
    w: 360,
    h: 420,
    bottom: 40,
    left: "calc(100% - 460px)",
    yMove: 20,
    xMove: 80,
  },
];

// 📱 Mobile
const IMAGES_MOBILE: ImgSpec[] = [
  {
    src: "/field-lucas.jpeg",
    w: 220,
    h: 200,
    top: "33%",
    left: "20%",
    yMove: 0,
    xMove: 0,
  },
  {
    src: "/lucas.jpeg",
    w: 120,
    h: 140,
    top: "0%",
    left: "5%",
    yMove: -10,
    xMove: 0,
  },
  {
    src: "/kentta-lucas.jpeg",
    w: 120,
    h: 140,
    top: "75%",
    left: "65%",
    yMove: 10,
    xMove: 0,
  },
  {
    src: "/kentta.jpeg",
    w: 120,
    h: 140,
    top: "75%",
    left: "5%",
    yMove: 0,
    xMove: -10,
  },
  {
    src: "/header-lucas.jpeg",
    w: 120,
    h: 140,
    top: "0%",
    left: "65%",
    yMove: 0,
    xMove: 10,
  },
];

// 💻 Tablet (uusi lisäys)
const IMAGES_TABLET: ImgSpec[] = [
  {
    src: "/field-lucas.jpeg",
    w: 300,
    h: 280,
    top: "25%",
    left: "25%",
    yMove: 10,
    xMove: 0,
  },
  {
    src: "/lucas.jpeg",
    w: 180,
    h: 200,
    top: "5%",
    left: "5%",
    yMove: -10,
    xMove: 0,
  },
  {
    src: "/kentta-lucas.jpeg",
    w: 180,
    h: 200,
    bottom: "10%",
    right: "5%",
    yMove: 10,
    xMove: 0,
  },
  {
    src: "/kentta.jpeg",
    w: 180,
    h: 200,
    bottom: "10%",
    left: "5%",
    yMove: 0,
    xMove: -10,
  },
  {
    src: "/header-lucas.jpeg",
    w: 220,
    h: 260,
    top: "10%",
    right: "5%",
    yMove: 0,
    xMove: 10,
  },
];

function GalleryItem({ img, p }: { img: ImgSpec; p: MotionValue<number> }) {
  const x = useTransform(p, [0, 1], [0, img.xMove]);
  const y = useTransform(p, [0, 1], [0, img.yMove]);

  return (
    <Pic
      style={{
        x,
        y,
        width: img.w,
        height: img.h,
        top: img.top,
        left: img.left,
        right: img.right,
        bottom: img.bottom,
      }}
    >
      <Image src={img.src} alt="" fill style={{ objectFit: "cover" }} />
    </Pic>
  );
}

export default function NameAndGallery() {
  const [layoutMode, setLayoutMode] = useState<"mobile" | "tablet" | "desktop">(
    "desktop"
  );
  const stageRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const buttonText = isEnglish ? "About me" : "Minusta";
  const buttonLink = isEnglish ? "/en/career" : "/career";

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 768) setLayoutMode("mobile");
      else if (w < 1100)
        setLayoutMode("tablet"); // iPad ja pienet läppärit
      else setLayoutMode("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress: galleryP } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });

  const imagesToUse =
    layoutMode === "mobile"
      ? IMAGES_MOBILE
      : layoutMode === "tablet"
        ? IMAGES_TABLET
        : IMAGES_DESKTOP;

  return (
    <Section>
      <Sticky>
        <ButtonWrap
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Link href={buttonLink} className="btn">
            {buttonText}
          </Link>
        </ButtonWrap>
      </Sticky>

      <Stage ref={stageRef} aria-hidden>
        {imagesToUse.map((img, i) => (
          <GalleryItem key={`${img.src}-${i}`} img={img} p={galleryP} />
        ))}
      </Stage>
    </Section>
  );
}
