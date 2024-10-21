"use client";
import { FC, useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Partners.module.css";
import { useWindowOnEvent } from "@/app/hooks";

const Partners: FC = () => {
  const [isMobile, setIsMobile] = useState(true);
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 400 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 2,
    },
  };
  const partners = [
    {
      img: "/images/partners/1.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/1.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/2.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/3.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/4.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/1.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/2.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/1.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/4.png",
      link: "https://www.google.com",
    },
    {
      img: "/images/partners/3.png",
      link: "https://www.google.com",
    },
  ];

  useWindowOnEvent(
    "resize",
    () => {
      setIsMobile(typeof window !== "undefined" && window?.innerWidth <= 768);
    },
    [setIsMobile],
    true
  );

  return (
    <Carousel
      infinite
      responsive={responsive}
      arrows={!isMobile}
      showDots={isMobile}
      /* autoPlay */
      className={styles.wrap}
    >
      {partners.map((partner, index) => (
        <div className={styles.box} key={index}>
          <div
            className={styles.partner}
            style={{
              backgroundImage: `url(${partner.img})`,
            }}
            key={index}
          ></div>
          <a className={styles.link} href={partner.link} target="_blank" />
        </div>
      ))}
    </Carousel>
  );
};

export default Partners;
