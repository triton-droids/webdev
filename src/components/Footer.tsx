import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ucsdLogo from '../assets/UCSanDiegoLogo-White 1.png';

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-stone-950 grid grid-cols-[1fr_auto_1fr] items-start gap-36 p-20">
      <div className="inline-flex flex-col justify-start items-start gap-6 justify-self-end">
        <img className="w-52 h-auto" src={logo} alt="Triton Droids" />
        <div className="w-96 justify-start text-neutral-100 text-base font-normal font-sans">
          Triton Droids is a non profit and is classified as a
          &apos;Unincorporated association&apos; organization (EIN 33- 1874028)
          by the Internal Revenue Service (IRS).
        </div>
      </div>
      <div className="inline-flex justify-start items-start gap-6">
        <div className="w-24 inline-flex flex-col justify-start items-start gap-16">
          <h4 className="text-main-text font-semibold text-base mb-1">
            Explore
          </h4>
          <div className="w-20 flex flex-col justify-start items-start gap-6">
            <Link
              to="/join"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Join
            </Link>
            <Link
              to="/team"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Our Team
            </Link>
            <Link
              to="/alumni"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Alumni
            </Link>
            <Link
              to="/advisor"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Advisors
            </Link>
            <Link
              to="/projects"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Projects
            </Link>
            <Link
              to="/sponsorship"
              className="no-underline hover:text-accent transition-colors justify-start text-neutral-100 text-base font-normal font-sans"
            >
              Sponsors
            </Link>
          </div>
        </div>

        <div className="w-24 inline-flex flex-col justify-start items-start gap-16">
          <div className="justify-start text-neutral-100 text-base font-bold font-sans">
            Socials
          </div>
          <div className="w-16 flex flex-col justify-start items-start gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://linktr.ee"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
            >
              Linktree
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-start text-neutral-100 text-base font-normal font-sans hover:text-accent transition-colors cursor-pointer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col justify-start items-start gap-6">
        <img className="w-80 h-16" src={ucsdLogo} alt="UC San Diego" />
        <div className="self-stretch justify-start text-neutral-100 text-base font-normal font-sans">
          9500 Gilman Dr, La Jolla, CA 92093
        </div>
      </div>
    </footer>
  );
}
