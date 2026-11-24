import { Preferences, type PreferencesProps } from "./Preferences";

export function publicPageUrl(
  view: "home" | "developer",
  prefs: Pick<PreferencesProps, "lang" | "theme">,
  hash = "",
) {
  const query = new URLSearchParams({ lang: prefs.lang, theme: prefs.theme });
  if (view === "developer") query.set("view", "developer");
  return `${import.meta.env.BASE_URL}?${query}${hash}`;
}

export function PublicHeader({
  page = "home",
  ...prefs
}: PreferencesProps & { page?: "home" | "developer" }) {
  const { lang } = prefs;
  const home = publicPageUrl("home", prefs);
  return (
    <header className="landing-header page-width public-header">
      <a className="landing-brand" href={home} aria-label="Phylab">
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
      <nav aria-label={lang === "zh" ? "入口導覽" : "Home navigation"}>
        {page === "developer" ? (
          <a href={home}>{lang === "zh" ? "返回入口" : "Home"}</a>
        ) : null}
        <a href={page === "home" ? "#catalog" : `${home}#catalog`}>
          {lang === "zh" ? "實驗目錄" : "Experiments"}
        </a>
        {page === "home" ? (
          <a href="#how-it-works">
            {lang === "zh" ? "使用方式" : "How it works"}
          </a>
        ) : null}
        <a
          href={publicPageUrl("developer", prefs)}
          aria-current={page === "developer" ? "page" : undefined}
        >
          {lang === "zh" ? "關於與理念" : "About & Philosophy"}
        </a>
      </nav>
      <Preferences {...prefs} />
    </header>
  );
}
