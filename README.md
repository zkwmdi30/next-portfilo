# 이명필 포트폴리오

Next.js 16 App Router 기반 개인 포트폴리오입니다. 홈, 대표 사례 3개, 개인 프로젝트 2개, 웹 이력서와 PDF 다운로드를 제공합니다.

## 개발

Node.js 24와 npm을 사용합니다.

```sh
npm ci
npm run dev
```

## 콘텐츠 수정

- `src/content/case-studies.ts`: 홈 프로젝트 카드와 상세 페이지가 공유하는 사례 데이터
- `src/content/personal-projects.ts`: LART 마케팅 자동화와 단어한끼의 홈 카드·개인 프로젝트 상세 원고
- `src/content/profile.ts`: 소개, 전체 경력, 기술 목록
- `src/app/resume/page.tsx`: 3쪽 이력서 원고. 웹과 PDF의 공통 원본
- `이력서/이명필-4.pdf`: 변경하지 않은 기존 이력서 원본
- `public/resume.pdf`: 공개용 개정 이력서
- `public/images/enterprise-ax-supervisor-flow.png`: 제공받은 슈퍼바이저 실행 흐름도 원본. 상세 사례에서 확대 보기·원본 열기 제공
- `public/images/enterprise-ax-organization-integration.png`: 삼성제약 조직·사용자 연동 구조도 원본. ERP·그룹웨어·클라우디움의 연동 범위 설명
- `public/images/multi-llm-official.webp`: 포니링크 공식 홈페이지 `Works → AIoT → Multi LLM` 공개 소개 자료(2026.10.16 확인). 원본은 보존하고 화면에서는 아키텍처·제품 UI 영역을 표시하며 출처 링크를 제공합니다. 공식 자료의 전체 플랫폼 기능을 개인 구현 범위로 간주하지 않습니다.
- `public/images/personal/`: 사용자 제공 Instagram 화면과 PPT에서 추출한 단어한끼 앱 화면. Telegram 화면은 개인 대화 목록이 함께 있어 공개 파일로 복사하지 않았습니다. Instagram의 전체 게시물 수를 자동화 실적으로 환산하지 않았습니다.

개인 프로젝트 원고는 제공된 PPT의 2~4쪽과 추가 스크린샷을 근거로 작성했습니다. Telegram BotFather는 봇 관리 도구이므로 실제 검수 채널은 Telegram 봇으로 표기했습니다. 웹 버전의 React·Web Speech API와 뉴스 읽기 확장 구상은 Flutter 앱의 구현 범위에 포함하지 않았습니다. 단어한끼의 App Store 출시 및 연결 주소는 2026.10.16 직접 확인했습니다.

`PORTFOLIO_PLAN.md`와 `PORTFOLIO_COPY_DRAFT.md`는 기획 기록입니다. 문서의 추가 확인 질문은 실제 미구현 여부를 의미하지 않습니다. 현재 공개 내용은 위 데이터와 페이지를 기준으로 합니다.

## PDF 및 공유 이미지 다시 생성하기

로컬 서버가 실행 중일 때 다음을 실행합니다. PDF는 `output/pdf/lee-myungpil-resume.pdf`와 `public/resume.pdf`에 저장되고, 홈 및 사례별 공유 이미지도 함께 생성합니다.

```sh
npx playwright install chromium
npm run assets:generate
```

다른 서버를 사용하면 `PREVIEW_URL`을 지정합니다. 출력 PDF는 3쪽이어야 하며 페이지 분할과 한글을 확인한 후 배포합니다. `output/pdf`는 산출물 보관용이고 실제 다운로드는 `public/resume.pdf`를 사용합니다.

PDF를 변경하지 않고 공유 이미지 6개만 갱신할 때는 `npm run assets:generate -- --social-only`를 사용합니다.

## 사이트 주소와 검색 설정

Vercel에서는 `VERCEL_PROJECT_PRODUCTION_URL`을 자동으로 사용합니다. 다른 호스팅 환경에서는 실제 공개 주소를 `SITE_URL`로 지정한 뒤 빌드합니다. 기존 `NEXT_PUBLIC_SITE_URL`도 지원합니다.

```sh
SITE_URL=https://your-actual-domain.example npm run build
npm run start
```

공개 주소를 설정하지 않은 환경에서는 실제 요청의 호스트로 canonical·공유 이미지·sitemap 주소를 만듭니다. 주소를 설정하면 정적 생성이 가능하므로 운영 환경에서는 공식 도메인 지정이 권장됩니다. 별도의 미리보기 도메인보다 공식 도메인을 우선합니다.

## 검증

```sh
npm run lint
npm run build
npm run typecheck
npm run test:e2e
```

Playwright는 포트 3100에서 프로덕션 서버를 실행하고 데스크톱·모바일의 사례 이동, 다운로드, 메뉴, 키보드 탐색, 가로 넘침, axe 접근성, 공유 이미지와 404를 검사합니다. GitHub Actions에서도 같은 검증을 수행합니다. CI의 `portfolio.example`은 테스트용 주소이며 배포 주소로 사용하지 않습니다.

## 폰트

Pretendard v1.3.9를 자체 호스팅합니다. 원본은 [orioncactus/pretendard](https://github.com/orioncactus/pretendard)이며 OFL 라이선스를 `src/app/fonts/OFL.txt`에 포함했습니다. 현재 글자에 맞춘 서브셋으로 초기 다운로드를 줄였고, 파생 폰트의 이름은 OFL에 따라 PortfolioSans로 변경했습니다. 콘텐츠를 크게 바꾸면 폰트 서브셋에 새 글자가 포함되는지 확인하세요.
