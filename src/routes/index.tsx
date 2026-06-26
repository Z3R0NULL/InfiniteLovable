import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, MessageCircle, Infinity as InfinityIcon, Zap, ShieldCheck, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Z3R0NULL — Créditos Infinitos en Lovable" },
      { name: "description", content: "Extensión que te da créditos infinitos en Lovable. Descárgala por $15/mes y únete al Discord." },
      { property: "og:title", content: "Z3R0NULL — Créditos Infinitos en Lovable" },
      { property: "og:description", content: "Extensión que te da créditos infinitos en Lovable. Descárgala por $15/mes y únete al Discord." },
    ],
  }),
  component: Landing,
});

const DOWNLOAD_URL = "/Z3R0NULL_Lovable_Latest_Version.rar";
const DISCORD_URL = "https://discord.com/invite/yHYMRqWe7Q";

type Lang = "es" | "en";

const T = {
  es: {
    nav_pricing: "Precios",
    nav_tutorial: "Tutorial",
    nav_features: "Características",
    hero_badge: "Extensión para Lovable",
    hero_title: "Créditos Infinitos en Lovable",
    hero_desc: "Construye sin límites. Una extensión simple que desbloquea créditos infinitos en Lovable para que sigas creando sin parar.",
    btn_download: "Descargar extensión",
    btn_discord: "Unirme al Discord",
    features_title: "Todo lo que necesitas",
    features_desc: "Pensada para creadores que no quieren detenerse por un contador.",
    feat_a_t: "Créditos infinitos",
    feat_a_d: "Genera, itera y prueba sin preocuparte por el límite mensual.",
    feat_b_t: "Instalación en 1 minuto",
    feat_b_d: "Descarga, descomprime y listo. Sin configuraciones complicadas.",
    feat_c_t: "Segura y discreta",
    feat_c_d: "Funciona localmente en tu navegador, sin tocar tu cuenta.",
    feat_d_t: "Actualizaciones constantes",
    feat_d_d: "Mejoras frecuentes para mantenerse al día con Lovable.",
    install_title: "Tutorial de instalación",
    install_desc: "Aprende a instalar la extensión en 1 minuto.",
    usage_title: "Tutorial de uso",
    usage_desc: "Descubre cómo sacarle el máximo provecho a la extensión.",
    tutorial_section_title: "Cómo funciona",
    tutorial_section_desc: "Mira los videos y empieza en minutos.",
    pricing_title: "Precio simple",
    pricing_desc: "Un solo plan. Todo incluido.",
    plan_label: "Plan único",
    per_month: "/mes",
    feat_1: "Créditos infinitos en Lovable",
    feat_2: "Actualizaciones incluidas",
    feat_3: "Soporte directo en Discord",
    feat_4: "Cancela cuando quieras",
    cta: "Empezar ahora",
    footer: "Todos los derechos reservados.",
    switch_to: "EN",
  },
  en: {
    nav_pricing: "Pricing",
    nav_tutorial: "Tutorial",
    nav_features: "Features",
    hero_badge: "Extension for Lovable",
    hero_title: "Unlimited Credits on Lovable",
    hero_desc: "Build without limits. A simple extension that unlocks unlimited credits on Lovable so you can keep creating non-stop.",
    btn_download: "Download extension",
    btn_discord: "Join the Discord",
    features_title: "Everything you need",
    features_desc: "Made for builders who don't want to stop because of a counter.",
    feat_a_t: "Unlimited credits",
    feat_a_d: "Generate, iterate and test without worrying about the monthly cap.",
    feat_b_t: "1-minute install",
    feat_b_d: "Download, unzip and you're done. No complex setup.",
    feat_c_t: "Safe & discreet",
    feat_c_d: "Runs locally in your browser, without touching your account.",
    feat_d_t: "Frequent updates",
    feat_d_d: "Regular improvements to stay up to date with Lovable.",
    install_title: "Installation tutorial",
    install_desc: "Learn how to install the extension in 1 minute.",
    usage_title: "Usage tutorial",
    usage_desc: "Discover how to get the most out of the extension.",
    tutorial_section_title: "How it works",
    tutorial_section_desc: "Watch the videos and get started in minutes.",
    pricing_title: "Simple pricing",
    pricing_desc: "One plan. Everything included.",
    plan_label: "Single plan",
    per_month: "/mo",
    feat_1: "Unlimited credits on Lovable",
    feat_2: "Updates included",
    feat_3: "Direct support on Discord",
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
    <div className="min-h-screen text-foreground">
      <header className="border-b border-border/60 backdrop-blur-md bg-background/70 sticky top-0 z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-md">
              <InfinityIcon className="h-6 w-6" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-semibold">Lovable</span>
          </div>
          <nav className="flex items-center gap-5">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav_features}
            </a>
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
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-primary mb-6 shadow-sm">
            <InfinityIcon className="h-5 w-5" strokeWidth={2.5} />
            {t.hero_badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] pb-2 text-gradient-brand">
            {t.hero_title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.hero_desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={DOWNLOAD_URL}
              download="Z3R0NULL_Lovable_Latest_Version.rar"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-5 w-5" />
              {t.btn_download}
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-white/80 backdrop-blur px-6 py-3 text-base font-medium text-secondary-foreground hover:bg-white transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              {t.btn_discord}
            </a>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.features_title}</h2>
            <p className="mt-3 text-muted-foreground">{t.features_desc}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { Icon: InfinityIcon, t: t.feat_a_t, d: t.feat_a_d },
              { Icon: Zap, t: t.feat_b_t, d: t.feat_b_d },
              { Icon: ShieldCheck, t: t.feat_c_t, d: t.feat_c_d },
              { Icon: Rocket, t: t.feat_d_t, d: t.feat_d_d },
            ].map(({ Icon, t: ft, d }) => (
              <div key={ft} className="group rounded-2xl border border-border bg-card/80 backdrop-blur p-6 text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/30 transition-all">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{ft}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="tutorial" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.tutorial_section_title}</h2>
            <p className="mt-3 text-muted-foreground">{t.tutorial_section_desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{t.install_title}</h3>
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
                <h3 className="text-2xl font-bold tracking-tight">{t.usage_title}</h3>
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

          <div className="relative mx-auto max-w-sm">
            <div aria-hidden className="absolute -inset-0.5 rounded-2xl bg-gradient-brand opacity-60 blur-md" />
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-xl text-card-foreground">
              <div className="text-sm font-medium text-primary uppercase tracking-wide">
                {t.plan_label}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-gradient-brand">$15</span>
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
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-gradient-brand px-6 py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Z3R0NULL. {t.footer}
        </div>
      </footer>
    </div>
  );
}
