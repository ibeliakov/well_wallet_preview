"use client";
import { FC } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Partners.module.css";

const Partners: FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 992, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 2,
    },

    /* desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    } */
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
