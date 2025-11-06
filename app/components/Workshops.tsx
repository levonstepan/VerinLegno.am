"use client";
import React from "react";

type WorkshopsProps = {
  content?: {
    title?: string;
    subtitle?: string;
    description?: string;
    cta?: string;
    ctaLink?: string;
  };
};

export function Workshops({ content }: WorkshopsProps) {
  return (
    <section
      id="workshops"
      className="bg-red-50 border border-red-100 py-16 mt-8 relative z-10"
      style={{ position: 'relative', zIndex: 10 }}
    >
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        <div className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
          TEST – Workshops section
        </div>
        <h2 className="text-3xl font-semibold">
          {content?.title ?? "Workshops for professionals"}
        </h2>
        <p className="text-gray-700">
          {content?.subtitle ??
            "If you can see this block, the Workshops section is rendering correctly."}
        </p>
      </div>
    </section>
  );
}
