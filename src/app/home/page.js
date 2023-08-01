'use client';
import React from 'react';
import Link from "next/link"
import Image from "next/image";
import Register from "../register/page";
import { useRouter } from 'next/router';
export default function Log() {
  const handleScrollToRegister = (e) => {
    e.preventDefault();
    document.getElementById('register-section').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <div>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        style={{ marginTop: "20px" }}
        src="/images/plagprevent.png"
        alt="image"
        width={150}
        height={37}
        priority
      />
      <button className="bt1">Sign IN</button>
    {/* Use Next.js Link to scroll to the Register component */}
     <button className="bt2" onClick={handleScrollToRegister}>
        Sign UP
      </button>

      <div className="container1">
        <div style={{ marginBottom: "100px", marginRight: "-40px" }}>
          <Image
            src="/images/arrow.png"
            className="dark:invert"
            alt=""
            width={150}
            height={50}
            priority
          />
        </div>
        <div className="slogan">
          <h2
            style={{ fontWeight: "bold", color: "#0F75DB", fontSize: "40px" }}
          >
            Light Up The World
            <br /> With New Ideas
          </h2>
        </div>

        <div className="grp" style={{ marginBottom: "2px" }}>
          <Image
            src="/images/grp.png"
            className="dark:invert"
            alt=""
            width={700}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
