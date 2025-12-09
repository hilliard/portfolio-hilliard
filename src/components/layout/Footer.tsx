"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaCodepen, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-[#111] text-accent text-center py-10 text-xl">
      <a
        href="mailto:hilliards@gmail.com"
        className="footer__link font-bold text-inherit no-underline hover:opacity-70 hover:underline"
      >
        hilliards@gmail.com
      </a>
      <ul className="social-list list-none flex justify-center mt-8 mb-0 p-0">
        <li className="social-list__item mx-2">
          <a
            className="social-list__link p-2 text-inherit hover:opacity-70"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="social-list__item mx-2">
          <a
            className="social-list__link p-2 text-inherit hover:opacity-70"
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="social-list__item mx-2">
          <a
            className="social-list__link p-2 text-inherit hover:opacity-70"
            href="https://codepen.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen />
          </a>
        </li>
        <li className="social-list__item mx-2">
          <a
            className="social-list__link p-2 text-inherit hover:opacity-70"
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="social-list__item mx-2">
          <a
            className="social-list__link p-2 text-inherit hover:opacity-70"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </li>
      </ul>
      {pathname !== "/contact" && (
        <div className="mt-8">
          <Link
            href="/contact"
            className="footer__link font-bold text-inherit no-underline hover:opacity-70 hover:underline"
          >
            Contact
          </Link>
        </div>
      )}
    </footer>
  );
}
