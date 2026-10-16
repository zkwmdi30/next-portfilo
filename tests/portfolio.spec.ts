import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const slugs = ["enterprise-ax", "multi-llm", "skt-ai-agent"];
const personalSlugs = ["lart-marketing", "chinese-vocabulary"];
const paths = [
  "/",
  ...slugs.map((slug) => `/work/${slug}`),
  ...personalSlugs.map((slug) => `/personal/${slug}`),
  "/resume",
];

test("personal projects have working navigation, screenshots and a store link", async ({
  page,
}) => {
  await page.goto("/#personal");
  for (const slug of personalSlugs) {
    await page.locator(`.personal-art-link[href='/personal/${slug}']`).click();
    await expect(page).toHaveURL(new RegExp(`/personal/${slug}$`));
    await expect(
      page.getByRole("heading", { name: "구현과 결과" }),
    ).toBeVisible();
    const images = page.locator(".personal-showcase img");
    expect(await images.count()).toBeGreaterThan(0);
    for (const image of await images.all()) {
      await image.evaluate((element) => (element as HTMLImageElement).decode());
      expect(
        await image.evaluate(
          (element) => (element as HTMLImageElement).naturalWidth,
        ),
      ).toBeGreaterThan(0);
    }
    if (slug === "chinese-vocabulary") {
      await expect(
        page.getByRole("link", { name: "App Store에서 보기" }),
      ).toHaveAttribute("href", /apps\.apple\.com\/kr\/app\/.*\/id6742045086$/);
    }
    await page
      .getByRole("link", { name: "← 개인 프로젝트", exact: true })
      .click();
    await expect(page).toHaveURL(/\/#personal$/);
  }
});

test("visitors can read every case and return to the project list", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "작동하는 제품으로",
  );
  for (const slug of slugs) {
    await page.locator(`.project-art-link[href='/work/${slug}']`).click();
    await expect(page).toHaveURL(new RegExp(`/work/${slug}$`));
    await expect(
      page.getByRole("heading", { name: "제가 맡은 일과 남긴 결과입니다." }),
    ).toBeVisible();
    await page.getByRole("link", { name: "모든 프로젝트" }).click();
    await expect(page).toHaveURL(/\/#work$/);
  }
  expect(errors).toEqual([]);
});

test("resume is downloadable and contains a real PDF", async ({
  page,
  request,
}) => {
  await page.goto("/resume");
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: "PDF 다운로드" }).click();
  expect((await downloadPromise).suggestedFilename()).toBe("이명필-이력서.pdf");
  const response = await request.get("/resume.pdf");
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

test("architecture evidence opens, zooms and restores keyboard focus", async ({
  page,
}) => {
  for (const evidence of [
    {
      slug: "enterprise-ax",
      label: "슈퍼바이저 흐름도",
      title: "실제 슈퍼바이저 실행 흐름",
      file: "enterprise-ax-supervisor-flow.png",
    },
    {
      slug: "enterprise-ax",
      label: "조직·사용자 연동 구조도",
      title: "AI 플랫폼을 기존 업무 시스템에 연결했습니다.",
      file: "enterprise-ax-organization-integration.png",
    },
    {
      slug: "multi-llm",
      label: "Multi LLM 공개 아키텍처",
      title: "공식 소개 자료에 담긴 아키텍처",
      file: "multi-llm-official.webp",
    },
    {
      slug: "multi-llm",
      label: "Multi LLM 제품 화면",
      title: "모델 선택부터 답변 확인까지, 실제 제품 화면",
      file: "multi-llm-official.webp",
    },
  ]) {
    await page.goto(`/work/${evidence.slug}`);
    const trigger = page.getByRole("button", {
      name: `${evidence.label} 확대`,
    });
    await trigger.focus();
    await page.keyboard.press("Enter");
    const dialog = page.getByRole("dialog", {
      name: evidence.title,
    });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("img")).toBeVisible();
    await expect(dialog.getByRole("img")).toHaveAttribute(
      "src",
      `/images/${evidence.file}`,
    );
    await dialog
      .getByRole("img")
      .evaluate((img) => (img as HTMLImageElement).decode());
    await dialog.getByRole("button", { name: "확대 보기" }).click();
    await expect(
      dialog.getByRole("button", { name: "화면에 맞추기" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      await dialog
        .locator(".flowchart-viewport")
        .evaluate((el) => el.scrollWidth > el.clientWidth),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    await page.keyboard.press("Escape");
    await expect(dialog).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await trigger.click();
    await expect(
      dialog.getByRole("button", { name: "확대 보기" }),
    ).toHaveAttribute("aria-pressed", "false");
    await dialog
      .getByRole("button", { name: `${evidence.label} 닫기` })
      .click();
    await expect(dialog).not.toBeVisible();
  }
});

test("official product references point to the company source", async ({
  page,
}) => {
  const url = "https://www.ponylink.co.kr/it/core#page4";
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "회사 공식 솔루션 소개" }),
  ).toHaveAttribute("href", url);
  await page.goto("/work/multi-llm");
  await expect(
    page.getByRole("link", { name: "공식 소개 확인" }),
  ).toHaveAttribute("href", url);
  await expect(
    page.getByRole("link", { name: "출처: 포니링크 공식 홈페이지" }),
  ).toHaveCount(2);
  await page.goto("/resume");
  await expect(
    page.getByRole("link", { name: "포니링크 공식 제품 소개" }),
  ).toHaveAttribute("href", url);
});

test("mobile menu closes on Escape and navigation", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile);
  await page.goto("/");
  const menu = page.getByRole("button", { name: "메뉴 열기" });
  await menu.click();
  await expect(
    page.getByRole("navigation", { name: "주요 메뉴" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation", { name: "주요 메뉴" })
    .getByRole("link", { name: "이력서", exact: true })
    .click();
  await expect(page).toHaveURL(/\/resume$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

for (const path of paths) {
  test(`${path} has accessible structure, visible content and no horizontal overflow`, async ({
    page,
  }) => {
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("link", { name: "본문으로 건너뛰기" }),
    ).toBeFocused();
    await page.keyboard.press("Enter");
    expect(await page.evaluate(() => document.activeElement?.id)).toBe(
      "main-content",
    );
  });
}

test("production metadata and all share images resolve", async ({
  request,
}) => {
  for (const path of paths) {
    const html = await (await request.get(path)).text();
    expect(html).toMatch(/property="og:image"/);
    expect(html).not.toMatch(/(?:og:image|canonical)[^>]*localhost/);
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
    expect(canonical).not.toBeNull();
    if (process.env.SITE_URL && canonical) {
      // Next normalizes a root canonical without a trailing slash.
      expect(new URL(canonical[1]).href).toBe(
        new URL(path, process.env.SITE_URL).href,
      );
    }
  }
  for (const image of [
    "/og.png",
    ...[...slugs, ...personalSlugs].map((slug) => `/og/${slug}.png`),
  ]) {
    const response = await request.get(image);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("image/png");
  }
  const sitemap = await (await request.get("/sitemap.xml")).text();
  if (process.env.SITE_URL)
    for (const path of paths) expect(sitemap).toContain(path);
  expect((await request.get("/robots.txt")).ok()).toBeTruthy();
  expect((await request.get("/work/not-a-project")).status()).toBe(404);
  expect((await request.get("/personal/not-a-project")).status()).toBe(404);
});
