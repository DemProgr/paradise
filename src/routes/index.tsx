import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MenuBlock } from "@/components/MenuBlock";
import {
  coffee,
  cocoaTea,
  coldClassic,
  coldSignature,
  contacts,
  extras,
  hotSignature,
  pancakes,
} from "@/lib/menu-data";

import heroImg from "@/assets/4.jpg";
import dishCheese from "@/assets/dish-cheese.jpg";
import dishSweet from "@/assets/dish-sweet.jpg";
import drinksImg from "@/assets/drinks.jpg";
import dish1Img from "@/assets/1.jpg";
import dish2Img from "@/assets/2.jpg";
import dish3Img from "@/assets/3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Paradise — кофейня на Октябрьской, Минск" },
      {
        name: "description",
        content:
          "Paradise — специальти-кофейня в Минске на Октябрьской, 16/4. Блины-фетучини, авторские напитки, терраса и спуск к воде. Ежедневно 11:00–21:00.",
      },
      { property: "og:title", content: "Paradise — кофейня на Октябрьской, Минск" },
      {
        property: "og:description",
        content:
          "Блины-фетучини и авторские напитки в Минске. Меню, часы работы и бронирование столика.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Paradise",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Октябрьская улица, 16/4",
            addressLocality: "Минск",
            addressCountry: "BY",
          },
          telephone: "+375296966842",
          openingHours: "Mo-Su 11:00-21:00",
          servesCuisine: "Кофе, блины-фетучини",
          sameAs: contacts.instagram,
        }),
      },
    ],
  }),
});

const navLinks = [
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#place", label: "Место" },
  { href: "#visit", label: "Как найти" },
];

type Tab = "pancakes" | "signature" | "coffee";

function Index() {
  const [tab, setTab] = useState<Tab>("pancakes");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDish2Enlarged, setIsDish2Enlarged] = useState(false);
  const [isDish3Enlarged, setIsDish3Enlarged] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    comments: "",
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  return (
    <div className="overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/80 text-cream backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
          <a href="#top" className="font-display min-w-0 truncate text-2xl tracking-[0.12em]">
            Paradise
          </a>
          <nav className="hidden items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase sm:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="opacity-70 transition hover:opacity-100">
                {l.label}
              </a>
            ))}
            <a href="#book" className="btn-primary !px-6 !py-2.5">
              Забронировать
            </a>
          </nav>
          <button
            type="button"
            aria-label="Меню навигации"
            onClick={() => setMenuOpen((v) => !v)}
            className="shrink-0 text-[0.7rem] tracking-[0.2em] uppercase sm:hidden"
          >
            {menuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>
        {menuOpen ? (
          <nav className="flex flex-col gap-4 border-t border-cream/10 px-5 py-5 text-sm tracking-[0.14em] uppercase sm:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#book" onClick={() => setMenuOpen(false)} className="btn-primary">
              Забронировать столик
            </a>
          </nav>
        ) : null}
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Зал кофейни Paradise с большими окнами на закате"
          width={1600}
          height={1200}
          className="animate-slow-pan absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-16 text-cream sm:pb-24">
          <Reveal>
            <p className="eyebrow !text-cream/60">Специальти-кофейня · Минск</p>
            <h1 className="font-display mt-5 text-[3.25rem] leading-[0.92] tracking-tight sm:text-8xl">
              У каждого свой
              <span className="block italic">Paradise</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
              Блины-фетучини и авторские напитки на Октябрьской. Терраса, вид на воду и спуск к
              самой кромке реки.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#book" className="btn-primary">
                Забронировать столик
              </a>
              <a href="#menu" className="btn-ghost">
                Смотреть меню
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-4 border-t border-cream/15 pt-6 text-xs sm:grid-cols-3">
              <div>
                <dt className="eyebrow !text-cream/50">Адрес</dt>
                <dd className="mt-1.5">Октябрьская, 16/4</dd>
              </div>
              <div>
                <dt className="eyebrow !text-cream/50">Часы</dt>
                <dd className="mt-1.5">11:00 — 21:00</dd>
              </div>
              <div>
                <dt className="eyebrow !text-cream/50">Телефон</dt>
                <dd className="mt-1.5">
                  <a href={contacts.phoneHref}>{contacts.phone}</a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Что мы делаем</p>
            <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">
              Два ремесла: тонкий блин и напиток с характером
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Блин-фетучини — наш формат: тонкий блин, нарезанный лентами, как паста, и собранный
              горячим с сырами, грудинкой, чимичурри или печёными яблоками. Рядом — барная карта
              авторских напитков: матча, ходжича, кунжут, тайские чаи и кофе в холодных и горячих
              версиях.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { n: "7", t: "видов блинов-фетучини" },
                { n: "35+", t: "авторских напитков" },
                { n: "11–21", t: "открыты каждый день" },
              ].map((s) => (
                <div key={s.t} className="border-t border-border pt-4">
                  <p className="font-display text-4xl">{s.n}</p>
                  <p className="mt-1 text-[0.72rem] tracking-[0.14em] text-muted-foreground uppercase">
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="hover-zoom col-span-2 rounded-lg" delay={80}>
              <img
                src={dishCheese}
                alt="Блин-фетучини сырный с рукколой на тёмной тарелке"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-64 w-full rounded-lg object-cover sm:h-80"
              />
            </Reveal>
            <Reveal className="hover-zoom rounded-lg" delay={160}>
              <img
                src={dishSweet}
                alt="Блин-фетучини с печёными яблоками и вишней"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-44 w-full rounded-lg object-cover sm:h-56"
              />
            </Reveal>
            <Reveal className="hover-zoom rounded-lg" delay={240}>
              <img
                src={drinksImg}
                alt="Авторские холодные напитки с матчей и кофе"
                loading="lazy"
                width={1200}
                height={1200}
                className="h-44 w-full rounded-lg object-cover sm:h-56"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="surface-dark py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-cream/50">Меню · цены в BYN</p>
            <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">Карта Paradise</h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/60">
              Актуальные позиции и цены из меню кофейни. Состав напитков и блюд указан так, как в
              карте заведения.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {(
              [
                ["pancakes", "Блины-фетучини"],
                ["signature", "Авторские напитки"],
                ["coffee", "Кофе, чай, какао"],
              ] as [Tab, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
                className={`rounded-full border px-5 py-2.5 text-[0.7rem] tracking-[0.16em] uppercase transition ${
                  tab === key
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-cream/25 text-cream/70 hover:text-cream"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div key={tab} className="animate-in fade-in slide-in-from-bottom-4 mt-8 duration-700">
            {tab === "pancakes" ? (
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <MenuBlock section={pancakes} dark />
                <Reveal className="hover-zoom rounded-lg" delay={100}>
                  <img
                    src={dishCheese}
                    alt="Блин-фетучини крупным планом"
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="h-72 w-full rounded-lg object-cover lg:h-[34rem]"
                  />
                </Reveal>
              </div>
            ) : null}
            {tab === "signature" ? (
              <div className="grid gap-6 lg:grid-cols-2">
                <MenuBlock section={coldSignature} dark />
                <div className="grid gap-6">
                  <MenuBlock section={hotSignature} dark />
                  <MenuBlock section={coldClassic} dark />
                </div>
              </div>
            ) : null}
            {tab === "coffee" ? (
              <div className="grid gap-6 lg:grid-cols-2">
                <MenuBlock section={coffee} dark />
                <div className="grid gap-6">
                  <MenuBlock section={cocoaTea} dark />
                  <MenuBlock section={extras} dark />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Place */}
      <section id="place" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Место</p>
          <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">
            Терраса, вечерний свет и спуск к воде
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Мы на Октябрьской — в кирпичном квартале рядом с рекой. Внутри тепло и тихо, снаружи
            терраса, а от нас можно спуститься к самой воде и пить кофе, сидя на деревянных
            ступенях.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-5">
          <Reveal className="hover-zoom rounded-lg sm:col-span-3" delay={60}>
            <img
              src={dish1Img}
              alt="Блюдо 1"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-64 w-full rounded-lg object-cover sm:h-[26rem]"
            />
          </Reveal>
          <Reveal className="hover-zoom rounded-lg sm:col-span-1" delay={140}>
            <img
              src={dish2Img}
              alt="Блюдо 2"
              loading="lazy"
              width={1600}
              height={1000}
              style={{ transform: isDish2Enlarged ? "scale(1.05)" : "none" }}
              onClick={() => setIsDish2Enlarged((v) => !v)}
            />
          </Reveal>
          <Reveal className="hover-zoom rounded-lg sm:col-span-1" delay={220}>
            <img
              src={dish3Img}
              alt="Блюдо 3"
              loading="lazy"
              width={1600}
              height={1000}
              style={{ transform: isDish3Enlarged ? "scale(1.05)" : "none" }}
              onClick={() => setIsDish3Enlarged((v) => !v)}
            />
          </Reveal>
        </div>
      </section>

      {/* Booking + visit */}
      <section id="book" className="surface-dark py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow !text-cream/50">Бронирование</p>
            <h2 className="mt-5 text-4xl leading-[1.05] sm:text-5xl">Забронировать столик</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/60">
              Заполните форму — мы подготовим сообщение с деталями брони, и вы отправите его нам в
              Instagram или позвоните напрямую.
            </p>

            <form
              className="mt-9 grid gap-4 sm:grid-cols-2"
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                setSubmitError(false);
                try {
                  const res = await fetch("/api/telegram", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  const data = await res.json();
                  if (data.success) {
                    setSent(true);
                  } else {
                    setSubmitError(true);
                  }
                } catch {
                  setSubmitError(true);
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase sm:col-span-2">
                Имя
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-accent"
                  placeholder="Как вас зовут"
                />
              </label>
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
                Телефон
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-accent"
                  placeholder="+375"
                />
              </label>
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
                Гостей
                <input
                  required
                  type="number"
                  min={1}
                  max={20}
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal outline-none focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase">
                Дата
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal outline-none focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase sm:col-span-2">
                Время
                <input
                  required
                  type="time"
                  min="11:00"
                  max="21:00"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal outline-none focus:border-accent"
                />
              </label>
              <label className="grid gap-2 text-[0.7rem] tracking-[0.16em] uppercase sm:col-span-2">
                Пожелания и комментарии
                <textarea
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  className="rounded-md border border-cream/20 bg-cream/5 px-4 py-3 text-sm tracking-normal normal-case outline-none focus:border-accent min-h-[80px] resize-y"
                  placeholder="Любые пожелания к бронированию..."
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary mt-2 sm:col-span-2"
              >
                {isSubmitting ? "Отправка..." : "Оформить бронь"}
              </button>
            </form>

            {sent ? (
              <div className="mt-6 rounded-lg border border-accent/40 bg-accent/10 p-5 text-sm">
                <p className="font-semibold">Бронь отправлена!</p>
              </div>
            ) : null}
            {submitError ? (
              <div className="mt-6 rounded-lg border border-red-400/40 bg-red-100/10 p-5 text-sm">
                <p className="font-semibold text-red-400">Ошибка отправки</p>
                <p className="mt-2 text-cream/70">
                  Произошла ошибка при отправке брони. Попробуйте снова или позвоните нам.
                </p>
              </div>
            ) : null}
          </Reveal>

          <Reveal id="visit" delay={120} className="scroll-mt-24">
            <div className="rounded-lg border border-cream/15 bg-cream/[0.04] p-7 sm:p-9">
              <h3 className="text-3xl">Как найти</h3>
              <dl className="mt-7 space-y-6 text-sm">
                <div>
                  <dt className="eyebrow !text-cream/50">Адрес</dt>
                  <dd className="mt-2">{contacts.address}</dd>
                  <dd className="mt-1 text-cream/50">
                    Ленинский район, рядом с метро «Первомайская»
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Часы работы</dt>
                  <dd className="mt-2">{contacts.hours}</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Контакты</dt>
                  <dd className="mt-2">
                    <a href={contacts.phoneHref}>{contacts.phone}</a>
                  </dd>
                  <dd className="mt-1">
                    <a href={contacts.instagram} target="_blank" rel="noreferrer">
                      {contacts.instagramHandle}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={contacts.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-8 w-full"
              >
                Открыть на карте
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
          <p className="font-display text-2xl tracking-[0.12em] text-foreground">Paradise</p>
          <p>
            {contacts.address} · {contacts.hours}
          </p>
          <a href={contacts.instagram} target="_blank" rel="noreferrer">
            {contacts.instagramHandle}
          </a>
        </div>
      </footer>
    </div>
  );
}
