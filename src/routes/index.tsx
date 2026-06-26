import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, MessageCircle } from "lucide-react";
import extensionDownload from "@/assets/extension-download.rar.asset.json";
import zLogo from "@/assets/z-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiExtensión — Potencia tu navegador" },
      { name: "description", content: "Descarga MiExtensión por $15/mes y únete a nuestra comunidad de Discord." },
      { property: "og:title", content: "MiExtensión — Potencia tu navegador" },
      { property: "og:description", content: "Descarga MiExtensión por $15/mes y únete a nuestra comunidad de Discord." },
    ],
  }),
  component: Landing,
});

const DOWNLOAD_URL = extensionDownload.url;
const DISCORD_URL = "https://discord.com/invite/yHYMRqWe7Q";

type Lang = "es" | "en";

const T = {
  es: {
    nav_pricing: "Precios",
    nav_tutorial: "Tutorial",
    hero_title: "Potencia tu navegador",
    hero_desc: "Una extensión simple y poderosa para llevar tu productividad al siguiente nivel.",
    btn_download: "Descargar extensión",
    btn_discord: "Unirme al Discord",
    install_title: "Tutorial de instalación",
    install_desc: "Aprende a instalar la extensión en 1 minuto.",
    usage_title: "Tutorial de uso",
    usage_desc: "Descubre cómo sacarle el máximo provecho a la extensión.",
    pricing_title: "Precio simple",
    pricing_desc: "Un solo plan. Todo incluido.",
    plan_label: "Plan único",
    per_month: "/mes",
    feat_1: "Acceso completo a la extensión",
    feat_2: "Actualizaciones incluidas",
    feat_3: "Soporte en Discord",
    feat_4: "Cancela cuando quieras",
    cta: "Empezar ahora",
    footer: "Todos los derechos reservados.",
    switch_to: "EN",
  },
  en: {
    nav_pricing: "Pricing",
    nav_tutorial: "Tutorial",
    hero_title: "Supercharge your browser",
    hero_desc: "A simple and powerful extension to take your productivity to the next level.",
    btn_download: "Download extension",
    btn_discord: "Join the Discord",
    install_title: "Installation tutorial",
    install_desc: "Learn how to install the extension in 1 minute.",
    usage_title: "Usage tutorial",
    usage_desc: "Discover how to get the most out of the extension.",
    pricing_title: "Simple pricing",
    pricing_desc: "One plan. Everything included.",
    plan_label: "Single plan",
    per_month: "/mo",
    feat_1: "Full access to the extension",
    feat_2: "Updates included",
    feat_3: "Discord support",
    feat_4: "Cancel anytime",
    cta: "Get started",
    footer: "All rights reserved.",
    switch_to: "ES",
  },
} as const;

function Landing() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }
    const nav = (navigator.languages?.[0] ?? navigator.language ?? "es").toLowerCase();
    setLang(nav.startsWith("es") ? "es" : "en");
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = T[lang];
  const toggle = () =>
    setLang((l) => {
      const next = l === "es" ? "en" : "es";
      try {
        localStorage.setItem("lang", next);
      } catch {}
      return next;
    });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <img src={zLogo.url} alt="Z3R0NULL" className="h-9 w-9 rounded-full" />
            <span className="text-lg font-semibold">Z3R0NULL</span>
          </div>
          <nav className="flex items-center gap-5">
            <a href="#tutorial" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav_tutorial}
            </a>
            <a href="#precios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav_pricing}
            </a>
            <button
              onClick={toggle}
              className="rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Toggle language"
            >
              {t.switch_to}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] pb-2 text-foreground">
            {t.hero_title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.hero_desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DOWNLOAD_URL}
              download={extensionDownload.original_filename}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Download className="h-5 w-5" />
              {t.btn_download}
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-base font-medium text-secondary-foreground hover:bg-accent transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              {t.btn_discord}
            </a>
          </div>
        </section>

        <section id="tutorial" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.install_title}</h2>
                <p className="mt-2 text-muted-foreground">{t.install_desc}</p>
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/xBhgOJZIN6M"
                  title="Installation tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div>
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t.usage_title}</h2>
                <p className="mt-2 text-muted-foreground">{t.usage_desc}</p>
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/FwNI409U3Ig"
                  title="Usage tutorial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section id="precios" className="mx-auto max-w-5xl px-6 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.pricing_title}</h2>
            <p className="mt-3 text-muted-foreground">{t.pricing_desc}</p>
          </div>

          <div className="mx-auto max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm text-card-foreground">
            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              {t.plan_label}
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-5xl font-bold">$15</span>
              <span className="text-muted-foreground">{t.per_month}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-primary">✓</span> {t.feat_1}</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> {t.feat_2}</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> {t.feat_3}</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> {t.feat_4}</li>
            </ul>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              {t.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MiExtensión. {t.footer}
        </div>
      </footer>
    </div>
  );
}
