import { ExternalLink, Globe, Mail } from "lucide-react";
import { tx, type Text } from "../core/i18n";
import type { PreferencesProps } from "./Preferences";
import { PublicHeader, publicPageUrl } from "./PublicHeader";

function GithubIcon({ size = 21 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const profile: { label: Text; body: Text }[] = [
  {
    label: ["現職與教學", "Current Roles & Teaching"],
    body: [
      "高雄市立高雄高級中學物理教師（任教 25 年）、國立高雄師範大學物理學系兼任助理教授；開放教室做示範教學，帶領多元選修「科學實作專題與國際科學交流」，並培訓 TYPT／IYPT 物理辯論與科展團隊。",
      "Physics teacher at Kaohsiung Municipal Kaohsiung Senior High School (25 years) and Adjunct Assistant Professor at the Department of Physics, National Kaohsiung Normal University. Mentors TYPT/IYPT physics tournaments and international science research projects.",
    ],
  },
  {
    label: ["學歷背景", "Education"],
    body: [
      "國立臺灣大學物理學博士（研究領域：原子物理、相對論性量子力學）、臺大物理所碩士；國立高雄師範大學物理系畢業、國立中央大學資訊工程第二專長。",
      "Ph.D. and M.S. in Physics from National Taiwan University (atomic physics & relativistic quantum mechanics); B.S. in Physics from National Kaohsiung Normal University; second specialty in Computer Science at National Central University.",
    ],
  },
  {
    label: ["學會與社群推動", "Academic & Community Service"],
    body: [
      "《物理教育學刊》副主編、中華民國探究與實作學會理事、中華民國物理教育學會常務理事；國教署南區探究與實作推動中心研究教師、高雄市跨校自然共備基地班召集人、BBC 知識專欄作家。",
      "Associate Editor of Physics Education Journal, Board Member of the Taiwan Association for Inquiry and Practice, Executive Board Member of the Physics Education Society of R.O.C., and convener of Kaohsiung cross-school science teacher communities.",
    ],
  },
];

const principles: { title: Text; body: Text }[] = [
  {
    title: ["從課堂真實需求出發", "Rooted in real classroom needs"],
    body: [
      "用瀏覽器結合手機感測與電腦運算，免安裝 App、免註冊登入。把日常手機變成隨手可用的精密物理實驗儀器，讓每組學生都能獨立動手量測。",
      "Combine phone sensors with browser analysis without app installation or sign-in, turning everyday smartphones into accessible physics instruments for independent student groups.",
    ],
  },
  {
    title: ["診斷與詮釋比標準答案重要", "Diagnosis & interpretation over rote answers"],
    body: [
      "清楚標示物理量的 SI 單位、取樣頻率與量測限制，並以圖表即時呈現。幫助學生看懂數據背後的物理意義、辨識實驗誤差，而不只是套公式。",
      "Clearly display SI units, sampling cadences, and measurement limits alongside live plots—helping students interpret real evidence and experimental uncertainty rather than memorizing formulas.",
    ],
  },
  {
    title: ["把時間還給老師與探究", "Give classroom time back to inquiry"],
    body: [
      "支援多輪重覆量測統計、T² 線性擬合、暫停與繼續，並可手動匯出完整 Excel 實驗紀錄簿，讓課堂時間更專注於提問、討論與科學實證。",
      "Support multi-trial statistics, linear regression, pause/resume, and comprehensive Excel lab workbook exports—freeing classroom time for questions, discussion, and scientific inquiry.",
    ],
  },
];

const works: { title: Text; description: Text; href: string }[] = [
  {
    title: ["PhAI 資源館｜AI × 物理教學共備平台", "PhAI Platform · AI × Physics Community"],
    description: [
      "社群老師的 AI 教學案例、互動模擬、探究命題與教師工作流，可搜尋、篩選與投稿分享。",
      "Community platform for AI-assisted physics teaching cases, interactive simulations, inquiry problems, and teacher workflows.",
    ],
    href: "https://addielu-phy.github.io/phai-platform/",
  },
  {
    title: ["高雄市探究與實作社群網站", "Kaohsiung Inquiry & Practice Community"],
    description: [
      "跨校自然科教師共備社群：活動訊息、共備成果與探究課程資源入口。",
      "Cross-school science teacher community hub featuring workshops, collaborative curriculum designs, and inquiry resources.",
    ],
    href: "https://addielu-phy.github.io/kh-inquiry-community-site/",
  },
  {
    title: ["互動物理模擬與自學評量總庫", "Interactive Physics Simulations & Assessments"],
    description: [
      "盧政良個人網站與 40+ 個上線教學工具：涵蓋幾何光學、力學平衡、電磁學互動模擬、自學評量與錯題診斷。",
      "Portfolio of 40+ live educational web tools covering optics, mechanics, electromagnetism simulations, and diagnostic self-assessments.",
    ],
    href: "https://addielu-phy.github.io/",
  },
  {
    title: ["探究與實作期末報告即時評分平台", "Inquiry Report Live Assessment Platform"],
    description: [
      "支援課堂同儕互評、教師即時收分與回饋的探究與實作數位評量系統。",
      "Real-time classroom rubric scoring and peer-review platform for inquiry and practice final presentations.",
    ],
    href: "https://github.com/addielu-phy/inquiry-report-platform-firebase",
  },
];

export function Developer(prefs: PreferencesProps) {
  const { lang } = prefs;
  return (
    <div className="landing developer-page">
      <a className="skip-link" href="#developer-content">
        {lang === "zh" ? "跳至關於與設計理念" : "Skip to developer profile"}
      </a>
      <PublicHeader {...prefs} page="developer" />
      <main id="developer-content">
        <section
          className="developer-hero page-width"
          aria-labelledby="developer-title"
        >
          <div className="developer-copy">
            <p className="section-eyebrow">
              <span className="section-num">§01</span>
              {lang === "zh" ? "高雄中學・物理科" : "Kaohsiung Senior High School · Physics"}
            </p>
            <h1 id="developer-title">
              {lang === "zh" ? "關於與設計理念" : "About & Philosophy"}
            </h1>
            <h2>{lang === "zh" ? "盧政良" : "Addie Lu"}</h2>
            <p
              className="developer-name"
              lang={lang === "zh" ? "en" : "zh-Hant"}
            >
              {lang === "zh" ? "ADDIE LU" : "盧政良"}
            </p>
            <p className="developer-role">
              {lang === "zh"
                ? "高雄中學物理教師・臺大物理博士・高師大兼任助理教授"
                : "KSHS Physics Teacher · Ph.D. in Physics (NTU) · Adjunct Assistant Professor (NKNU)"}
            </p>
            <p className="developer-intro">
              {lang === "zh"
                ? "在高中講台上教了 25 年物理，也長年培訓 IYPT 國際青年物理學家辯論賽與帶領探究實作。把課堂上的真實需求，做成上線就能用的網站——為學生打造直觀的實驗量測、自學評量與錯題診斷工具，為老師經營共備社群，讓數位工具與 AI 真正走進物理教學現場。"
                : "Teaching high-school physics for 25 years and mentoring IYPT teams and student inquiry projects. Turning real classroom needs into ready-to-use web tools—building sensor laboratories, diagnostic assessments, and collaborative teacher communities."}
            </p>
            <div
              className="developer-contact"
              aria-label={lang === "zh" ? "聯絡方式" : "Contact"}
            >
              <a href="mailto:addielu@mail.kshs.kh.edu.tw">
                <Mail size={20} aria-hidden="true" />
                addielu@mail.kshs.kh.edu.tw
              </a>
              <a
                href="https://addielu-phy.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                title={
                  lang === "zh"
                    ? "個人網站（另開分頁）"
                    : "Personal website (opens a new tab)"
                }
              >
                <Globe size={20} aria-hidden="true" />
                addielu-phy.github.io
              </a>
              <a
                href="https://github.com/addielu-phy"
                target="_blank"
                rel="noopener noreferrer"
                title={
                  lang === "zh"
                    ? "GitHub（另開分頁）"
                    : "GitHub (opens a new tab)"
                }
              >
                <GithubIcon size={20} />
                github.com/addielu-phy
              </a>
            </div>
          </div>
          <figure className="developer-portrait">
            <div className="developer-portrait-frame">
              <img
                src={`${import.meta.env.BASE_URL}assets/addie-lu.webp`}
                width="800"
                height="1000"
                alt={
                  lang === "zh"
                    ? "盧政良（Addie Lu）課堂與研習照片"
                    : "Portrait of Addie Lu"
                }
                fetchPriority="high"
              />
            </div>
            <figcaption>
              {lang === "zh"
                ? "盧政良（Addie Lu）｜高雄中學物理科"
                : "Addie Lu · Kaohsiung Senior High School Physics"}
            </figcaption>
          </figure>
        </section>
        <section
          className="developer-background page-width"
          aria-labelledby="background-title"
        >
          <div>
            <p className="section-eyebrow">
              <span className="section-num">§02</span>
              {lang === "zh" ? "Background" : "Background"}
            </p>
            <h2 id="background-title">
              {lang === "zh" ? "從講台與實驗室出發" : "Rooted in the classroom"}
            </h2>
          </div>
          <dl>
            {profile.map((row) => (
              <div key={row.label[1]}>
                <dt>{tx(row.label, lang)}</dt>
                <dd>{tx(row.body, lang)}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section
          className="developer-principles"
          aria-labelledby="principles-title"
        >
          <div className="page-width">
            <p className="section-eyebrow">
              <span className="section-num">§03</span>
              {lang === "zh" ? "Philosophy" : "Philosophy"}
            </p>
            <h2 id="principles-title">
              {lang === "zh" ? (
                <>
                  <span className="brand-wordmark">Phylab</span> 的教學與設計理念
                </>
              ) : (
                <>
                  The educational philosophy behind{" "}
                  <span className="brand-wordmark">Phylab</span>
                </>
              )}
            </h2>
            <blockquote className="developer-quote">
              {lang === "zh"
                ? "「數位工具進教室，不是取代實驗與老師，而是讓師生把時間拿回來——專注在現象觀察、數據診斷與科學討論。」"
                : "“Digital tools in the classroom do not replace experiments or teachers—they give time back to observation, data diagnosis, and scientific discussion.”"}
            </blockquote>
            <div className="developer-principle-list">
              {principles.map((row, i) => (
                <div key={row.title[1]}>
                  <span className="how-number">0{i + 1}</span>
                  <h3>{tx(row.title, lang)}</h3>
                  <p>{tx(row.body, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="developer-works page-width"
          aria-labelledby="works-title"
        >
          <p className="section-eyebrow">
            <span className="section-num">§04</span>
            {lang === "zh" ? "Selected Works" : "Selected Works"}
          </p>
          <h2 id="works-title">
            {lang === "zh" ? "更多物理教學與共備平台" : "More physics teaching platforms"}
          </h2>
          <div>
            {works.map((work) => (
              <a
                key={work.href}
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                title={lang === "zh" ? "另開分頁" : "Opens a new tab"}
              >
                <strong>{tx(work.title, lang)}</strong>
                <span>{tx(work.description, lang)}</span>
                <ExternalLink size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="developer-footer page-width">
        <a
          className="landing-brand"
          href={publicPageUrl("home", prefs)}
          aria-label={lang === "zh" ? "Phylab 返回入口" : "Phylab home"}
        >
          <span className="brand-row">
            <span className="brand-seal" aria-hidden="true">
              Φ
            </span>
            <span className="brand-wordmark">Phylab</span>
          </span>
          <span>
            {lang === "zh"
              ? "手機感測・電腦實驗｜盧政良 Addie Lu"
              : "Phone sensing · Desktop experiments · Addie Lu"}
          </span>
        </a>
        <div>
          <p>
            {lang === "zh" ? "作品與社群：" : "Portfolio & Communities: "}
            <a
              href="https://addielu-phy.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "zh" ? "盧政良個人網站" : "Addie Lu Portfolio"}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href="https://addielu-phy.github.io/phai-platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "zh" ? "PhAI 資源館" : "PhAI Platform"}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href="https://addielu-phy.github.io/kh-inquiry-community-site/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {lang === "zh" ? "高雄探究社群" : "KH Inquiry Community"}
            </a>
          </p>
          <p className="footer-equation">
            © 2026 盧政良 Addie Lu · 高雄 · ∮ E·dA = Q/ε₀
          </p>
        </div>
      </footer>
    </div>
  );
}
