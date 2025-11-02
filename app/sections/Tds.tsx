"use client";
import { useMemo, useState } from "react";

export function Tds({
  content,
}: {
  content: Readonly<{
    title: string;
    subtitle: string;
    items: ReadonlyArray<{ title: string; href: string }>;
    note: string;
  }>;
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return content.items;
    return content.items.filter((i) => i.title.toLowerCase().includes(s));
  }, [q, content.items]);

  return (
    <section id="tds" className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-semibold">{content.title}</h3>
        <p className="mt-2 text-neutral-700">{content.subtitle}</p>
        <div className="mt-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search TDS..."
            className="w-full sm:max-w-md rounded-lg border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-verinRed"
          />
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((i) => (
            <li key={i.title} className="rounded-lg border border-neutral-200 p-4 flex items-center justify-between">
              <span className="text-sm text-neutral-800">{i.title}</span>
              <a href={i.href} className="rounded-full border border-verinRed text-verinRed px-3 py-1.5 text-sm hover:bg-verinRed hover:text-white">Download</a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-neutral-600 text-sm">{content.note}</p>
      </div>
    </section>
  );
}

"use client";
import { useMemo, useState } from "react";

export function Tds({
  content,
}: {
  content: {
    title: string;
    subtitle: string;
    items: ReadonlyArray<{ title: string; href: string }>;
    note: string;
  };
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return content.items;
    return content.items.filter((i) => i.title.toLowerCase().includes(s));
  }, [q, content.items]);
  return (
    <section id="tds" className="border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-semibold">{content.title}</h3>
        <p className="text-neutral-700 mt-1 mb-4">{content.subtitle}</p>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search…"
          className="w-full md:w-1/2 border border-neutral-300 rounded-lg px-3 py-2"
        />
        <ul className="mt-4 space-y-2">
          {filtered.map((i) => (
            <li key={i.title} className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 bg-white">
              <span className="text-neutral-800">{i.title}</span>
              <a href={i.href} className="text-white bg-verinRed px-3 py-1.5 rounded-full">Download</a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-neutral-500 mt-4">{content.note}</p>
      </div>
    </section>
  );
}


