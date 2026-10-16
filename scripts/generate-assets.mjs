import { chromium } from "playwright";
import { readFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { caseStudies } from "../src/content/case-studies.ts";
import { personalProjects } from "../src/content/personal-projects.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseURL = process.env.PREVIEW_URL || "http://127.0.0.1:3000";
const socialOnly = process.argv.includes("--social-only");
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 900 },
    deviceScaleFactor: 1,
  });
  if (!socialOnly) {
    const response = await page.goto(`${baseURL}/resume`, {
      waitUntil: "networkidle",
    });
    if (!response?.ok())
      throw new Error(
        "Resume preview is unavailable. Start npm run dev first.",
      );
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => {
      const documentBody = document.querySelector(".resume-document");
      if (!documentBody) throw new Error("Resume document is missing.");
      const walker = document.createTreeWalker(
        documentBody,
        NodeFilter.SHOW_TEXT,
      );
      while (walker.nextNode()) {
        walker.currentNode.textContent =
          walker.currentNode.textContent?.replace(/[\u2010-\u2015]/g, "-") ??
          "";
      }
    });
    await mkdir(resolve(root, "output/pdf"), { recursive: true });
    const pdf = resolve(root, "output/pdf/lee-myungpil-resume.pdf");
    await page.pdf({
      path: pdf,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    });
  }

  const font = (
    await readFile(resolve(root, "src/app/fonts/PortfolioSans.woff2"))
  ).toString("base64");
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.emulateMedia({ media: "screen" });
  await mkdir(resolve(root, "public/og"), { recursive: true });
  const cards = [
    {
      title: "복잡한 요구를,<br>작동하는 제품으로.",
      label: "ENGINEERING × OWNERSHIP",
      detail: "풀스택 엔지니어 · 기술 PM",
      index: "m.",
      file: "public/og.png",
    },
    ...caseStudies.map((study) => ({
      title: study.title,
      label: `CASE STUDY ${study.index} / ${study.shortRole}`,
      detail: study.cardSummary,
      index: study.index,
      file: `public/og/${study.slug}.png`,
    })),
    ...personalProjects.map((project) => ({
      title: project.title,
      label: `PERSONAL PROJECT / ${project.category}`,
      detail: project.summary,
      index: project.index,
      file: `public/og/${project.slug}.png`,
    })),
  ];
  for (const card of cards) {
    await page.setContent(
      `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>@font-face{font-family:P;src:url(data:font/woff2;base64,${font});font-weight:100 900}*{box-sizing:border-box}body{margin:0;font-family:P,sans-serif;background:#f8f9f6;color:#19221f}.card{width:1200px;height:630px;padding:50px 64px;position:relative;overflow:hidden}.top{display:flex;justify-content:space-between;border-bottom:1px solid #dce1dc;padding-bottom:24px;font-size:16px;letter-spacing:2px}.label{color:#2859d5;font-size:16px;letter-spacing:1px;margin-top:42px}.title{font-size:68px;line-height:1.25;letter-spacing:-3px;font-weight:600;max-width:900px;margin-top:24px;word-break:keep-all;position:relative;z-index:1}.detail{position:absolute;left:64px;bottom:48px;max-width:890px;font-size:21px;line-height:1.5;color:#526158;word-break:keep-all;z-index:1}.index{position:absolute;right:35px;bottom:10px;font-size:220px;color:#dfe7f7;font-weight:500;letter-spacing:-12px;z-index:0}</style></head><body><div class="card"><div class="top"><strong>이명필</strong><span>PORTFOLIO · SELECTED WORK</span></div><div class="label">${card.label}</div><div class="index">${card.index}</div><div class="title">${card.title}</div><div class="detail">${card.detail}</div></div></body></html>`,
    );
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: resolve(root, card.file), type: "png" });
  }
  console.log(
    socialOnly
      ? `Generated ${cards.length} social images.`
      : `Generated resume preview and ${cards.length} social images. The public resume PDF was preserved. Verify the preview page count after generation.`,
  );
} finally {
  await browser.close();
}
