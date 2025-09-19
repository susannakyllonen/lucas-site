"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";

const Wrap = styled.section`
  padding: clamp(24px, 6vw, 80px) 6vw;
  background: #fff;
`;

const Grid = styled.div`
  column-count: 1;
  column-gap: 16px;

  @media (min-width: 640px) {
    column-count: 2;
  }
  @media (min-width: 1024px) {
    column-count: 3;
  }
`;

const Card = styled(motion.div)`
  break-inside: avoid;
  margin-bottom: 16px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const images = [
  "/field-lucas.jpeg",
  "/field-lucas.jpeg",
  "/field-lucas.jpeg",
  "/field-lucas.jpeg",
  "/field-lucas.jpeg",
  "/field-lucas.jpeg",
];

export default function GalleryMasonry() {
  return (
    <Wrap>
      <Grid>
        {images.map((src, i) => (
          <Card
            key={src}
            initial={{ opacity: 0, y: 24, rotate: i % 2 ? -0.2 : 0.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.04,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: i % 3 === 0 ? 420 : i % 3 === 1 ? 320 : 360,
              }}
            >
              <Image
                src={src}
                alt={`Pelikuvat ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}
