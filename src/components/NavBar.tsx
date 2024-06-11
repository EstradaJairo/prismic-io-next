"use client";

import { Content } from "@prismicio/client";
import WordMark from "./WordMark";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";
import Link from "next/link";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default function NavBar({ settings }: NavBarProps) {
  return (
    <nav aria-label="Main" className="px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium md:flex-row md:items-center">
        <Link href={"/"}>
          <WordMark />
          <span className="sr-only">Glisten.ai Home Page</span>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map((item, index) => {
            if (item.cta_button) {
              <li key={index}>
                <ButtonLink field={item.link}>{item.label}</ButtonLink>;
              </li>;
            }
            return (
              <li key={index}>
                <PrismicNextLink
                  className="inline-flex min-h-11 items-center"
                  field={item.link}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
