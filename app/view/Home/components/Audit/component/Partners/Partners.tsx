"use client";
import { FC } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Partners.module.css";

const Partners: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 992, min: 0 },
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

  return (
    <Carousel infinite responsive={responsive} className={styles.wrap}>
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
