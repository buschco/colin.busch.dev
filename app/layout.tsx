"use client";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./globals.css";

const charWidth = 9.633;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [command, setCommand] = useState<boolean>(false);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dim, setDim] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const bodyRef = useRef<HTMLBodyElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    const measure = bodyRef.current;
    if (measure == null) return;
    setDim({ x: measure.clientWidth, y: measure.clientHeight });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ":") {
        setCommand(true);
        inputRef.current?.focus();
        return;
      }
      if (event.key === "Escape") {
        setCommand(false);
        return;
      }

      if (event.key === "Enter") {
        inputRef.current?.blur();

        const cmd = inputRef.current?.value?.replaceAll(":", "");
        if (inputRef.current?.value != null) {
          inputRef.current.value = "";
        }
        setCommand(false);
        if (cmd === "about") {
          router.push("/about");
        }
        if (cmd === "help") {
          router.push("/help");
        }

        if (cmd === "back") {
          router.back();
        }

        if (cmd === "q") {
          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_self");
        }

        if (cmd === "fours") {
          window.open("https://www.connectfour.xyz/", "_self");
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <html lang="en">
      <head />
      <body
        className={[
          "bg-bg text-normal font-mono",
          "mx-auto",
          "flex flex-col h-screen",
        ].join(" ")}
        ref={bodyRef}
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      >
        {children}
        <Analytics />

        <input
          ref={inputRef}
          className="absolute bottom-0 left-0 right-0 bg-bg text-normal h-6"
          type="text"
        />

        {command === false && (
          <div
            className={[
              "bg-bg3",
              "absolute bottom-0 left-0 right-0",
              "h-6 flex flex-row justify-between",
            ].join(" ")}
          >
            <div className="flex flex-row">
              <Link
                href="/"
                className="uppercase bg-accent text-bg3 font-bold px-2"
              >
                normal
              </Link>
              <div className="bg-bg2 text-muted px-2 hidden sm:block">main</div>
              <div className="text-muted px-2 bg-bg2 sm:bg-transparent">
                {pathname === "/" ? "index" : pathname?.replace("/", "")}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-muted px-2 hidden sm:block">html</div>
              <div
                className="bg-bg2 text-muted px-2 hidden sm:block box-content text-right"
                style={{ width: 3 * charWidth }}
              >
                {Math.round((pos.y / dim.y) * 100)}%
              </div>
              <div
                className="uppercase bg-accent text-bg3 font-bold px-2 box-content text-right"
                style={{
                  width: Math.round(
                    `${Math.round(dim.x / charWidth)}:${Math.round(dim.y / 24)}`
                      .length * charWidth
                  ),
                }}
              >
                {1 + Math.round(((pos.y / dim.y) * pos.y) / 24)}:
                {1 + Math.round(((pos.x / dim.x) * pos.x) / charWidth)}
              </div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
