import { mkdir, readFile, rm, writeFile, copyFile, cp } from "node:fs/promises";
import { resolve } from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Home from "../app/page";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "netlify-dist");
const siteUrl = process.env.URL || "https://adam-harris-speaks.netlify.app";

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const page = renderToStaticMarkup(React.createElement(Home));
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dr. Adam A. Harris | Motivational Speaker</title>
    <meta name="description" content="Motivation that meets you right where you are. Keynotes, workshops, and faith-informed encouragement from Dr. Adam A. Harris." />
    <meta property="og:title" content="Dr. Adam A. Harris | Motivation That Meets You Where You Are" />
    <meta property="og:description" content="Honest words. Lasting hope. A clear next step. Bring Dr. Adam A. Harris to your audience." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${siteUrl}" />
    <meta property="og:image" content="${siteUrl}/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Dr. Adam A. Harris | Motivational Speaker" />
    <meta name="twitter:description" content="Motivation that meets you right where you are." />
    <meta name="twitter:image" content="${siteUrl}/og.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>${page}</body>
</html>`;

const sourceCss = await readFile(resolve(root, "app", "globals.css"), "utf8");
const staticCss = sourceCss
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "")
  .replace(
    ":root {",
    ':root {\n  --font-manrope: "Manrope";\n  --font-cormorant: "Cormorant Garamond";',
  );

await Promise.all([
  writeFile(resolve(output, "index.html"), html, "utf8"),
  writeFile(resolve(output, "styles.css"), staticCss, "utf8"),
  writeFile(resolve(output, "robots.txt"), "User-agent: *\nAllow: /\n", "utf8"),
  copyFile(resolve(root, "public", "og.png"), resolve(output, "og.png")),
  cp(resolve(root, "public", "portraits"), resolve(output, "portraits"), { recursive: true }),
]);

console.log(`Netlify site built at ${output}`);
