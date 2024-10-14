import React from "react";
import MyLogo from "../brand/MyLogo";
import { Facebook, Github, Instagram, Youtube } from "lucide-react";
import { buttonVariants } from "../ui/button";

const socials = [
  {
    name: "Github",
    link: "/",
    icon: <Github size={25} />,
  },
  {
    name: "Instagram",
    link: "/",
    icon: <Instagram size={25} />,
  },
  {
    name: "Youtube",
    link: "/",
    icon: <Youtube size={25} />,
  },
  {
    name: "Facebook",
    link: "/",
    icon: <Facebook size={25} />,
  },
];

const Footer = () => {
  return (
    <footer className="font-NOTO mx-auto max-w-screen-xl py-10 pt-44 tracking-wide bg-background p-5 md:p-0 md:py-10 md:pt-44 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-uvibeReb  font-PLAYFAIRE text-lg mb-6">
            Quick Links
          </h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Newsroom
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-uvibeReb  font-PLAYFAIRE text-lg mb-6">
            Services
          </h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Web Development
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Testing Automation
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                AWS Development Services
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Mobile App Development
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-uvibeReb  font-PLAYFAIRE text-lg mb-6">
            Platforms
          </h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Hubspot
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Marketo Integration Services
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Marketing Glossary
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                UIPath
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-uvibeReb  font-PLAYFAIRE text-lg mb-6">
            Company
          </h4>
          <ul className="space-y-5">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-uvibeReb text-sm opacity-75 transition-all"
              >
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" my-7 mt-24 flex items-center w-full justify-between">
        <div>
          <MyLogo big={true} />
        </div>
        <div>
          <div className="flex items-center gap-3">
            {socials.map((item, i) => (
              <div key={i}>
                <a href={item.link}>
                  <div
                    className={buttonVariants({
                      variant: "link",
                      size: "icon",
                    })}
                  >
                    {item.icon}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
