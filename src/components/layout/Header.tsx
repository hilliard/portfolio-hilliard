"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="flex justify-between p-4 relative z-50">
      <div className="logo max-w-[100px]">
        <Link href="/">
          <Image
            src="/img/hilliard-logo4.png"
            alt="logo"
            width={100}
            height={50}
            className="w-full h-auto"
          />
        </Link>
      </div>
      <button
        className={`nav-toggle p-2 bg-transparent border-0 cursor-pointer absolute right-4 top-4 z-[1000] ${isNavOpen ? "fixed" : "absolute"
          }`}
        aria-label="toggle navigation"
        onClick={toggleNav}
      >
        <span
          className={`hamburger block relative bg-accent w-8 h-[3px] rounded-full transition-transform duration-250 ease-in-out ${isNavOpen ? "rotate-[225deg]" : ""
            } before:content-[''] before:absolute before:left-0 before:right-0 before:bg-accent before:w-8 before:h-[3px] before:rounded-full before:transition-transform before:duration-250 before:ease-in-out before:top-[6px] after:content-[''] after:absolute after:left-0 after:right-0 after:bg-accent after:w-8 after:h-[3px] after:rounded-full after:transition-transform after:duration-250 after:ease-in-out after:bottom-[6px] ${isNavOpen
              ? "before:rotate-90 before:-translate-x-[6px] after:opacity-0"
              : ""
            }`}
        ></span>
      </button>
      <nav
        className={`nav fixed bg-dark text-light top-0 bottom-0 left-0 right-0 z-100 transform transition-transform duration-250 cubic-bezier(0.5, 0, 0.5, 1) ${isNavOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="nav__list list-none flex h-full flex-col justify-evenly items-center m-0 p-0">
          <li className="nav__item">
            <Link
              href="/#home"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/#services"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              What I Do
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/#about"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              Who I Am
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/#work"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              My Work
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/#play"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              My Play
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/contact"
              className="nav__link text-inherit font-bold text-4xl no-underline hover:text-accent"
              onClick={closeNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
