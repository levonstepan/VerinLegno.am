"use client";

import Link from "next/link";
import type { MouseEvent } from "react";

type WorkshopIcon = "application" | "product" | "color" | "quality" | string;

export function Workshops({
  content,
}: {
  content: Readonly<{
    label: string;
    title: string;
    subtitle: string;
    description?: string;
    items: ReadonlyArray<{
      title: string;
      description: string;
      icon: WorkshopIcon;
    }>;
    cta: string;
    ctaLink: string;
  }>;
}) {
  const renderIcon = (icon: WorkshopIcon) => {
    switch (icon) {
      case "product":
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7l9-4 9 4" />
            <path d="M21 10v6a2 2 0 0 1-1.11 1.79l-7 3.5a2 2 0 0 1-1.78 0l-7-3.5A2 2 0 0 1 3 16v-6" />
            <path d="M3 10l9 4 9-4" />
          </svg>
        );
      case "color":
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3.5c-1.2 2.1-5 5.9-5 9a5 5 0 0 0 10 0c0-3.1-3.8-6.9-5-9Z" />
            <path d="M12 17a2 2 0 0 1-2-2" />
          </svg>
        );
      case "quality":
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2 2 7l10 5 10-5-10-5Z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case "application":
      default:
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            <path d="m15 5 3 3" />
          </svg>
        );
    }
  };

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="workshops"
      className="py-12 md:py-16 relative scroll-mt-20 md:scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-neutral-200 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 shadow-xl">
          <div className="relative z-10 px-6 py-10 md:px-16 md:py-16">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D70000]/20 bg-[#D70000]/10 px-4 py-1.5 text-sm font-medium text-[#D70000]">
                {content.label}
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-neutral-900">
                {content.title}
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                {content.subtitle}
              </p>
              {content.description && (
                <p className="mt-3 text-base text-neutral-500">
                  {content.description}
                </p>
              )}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {content.items.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group h-full rounded-2xl border-2 border-neutral-200 bg-white p-6 text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#D70000]/50 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#D70000]/12 text-[#D70000]">
                      {renderIcon(item.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href={content.ctaLink}
                onClick={(event) => handleLinkClick(event, content.ctaLink)}
                className="inline-flex items-center gap-2 rounded-full bg-[#D70000] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#D70000]/20 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>{content.cta}</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m13 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
