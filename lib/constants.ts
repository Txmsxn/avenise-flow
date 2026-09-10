import {
  Code2,
  Layout,
  Palette,
  Cpu,
  Rocket,
  Search,
  LayoutGrid,
  Gauge,
  ShieldCheck,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Dlaczego My", href: "#dlaczego-my" },
  { label: "FAQ", href: "#faq" },
];

export const STATS = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Dedykowany Kod & UI/UX",
  },
  {
    icon: Gauge,
    value: "95+",
    label: "Optymalizacja Szybkości (PageSpeed)",
  },
  {
    icon: Rocket,
    value: "Szybka",
    label: "Realizacja i wdrożenie projektu",
  },
];

export const SERVICES = [
  {
    icon: Code2,
    title: "Dedykowane Strony WWW",
    description:
      "Szybkie, responsywne i bezpieczne strony tworzone w najnowszych technologiach.",
  },
  {
    icon: Layout,
    title: "Projektowanie UI/UX",
    description:
      "Przemyślane interfejsy i makiety, które ułatwiają ścieżkę zakupową klienta.",
  },
  {
    icon: Palette,
    title: "Identyfikacja Wizualna",
    description:
      "Logo, palety barw i materiały graficzne budujące rozpoznawalność.",
  },
  {
    icon: Cpu,
    title: "Narzędzia & Web Apps",
    description:
      "Dedykowane aplikacje internetowe, konwertery i integracje.",
  },
];

export const PROCESS = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "Warsztat, analiza celów biznesowych, grupy docelowej i konkurencji.",
  },
  {
    icon: LayoutGrid,
    step: "02",
    title: "Projekt UI/UX",
    description:
      "Architektura informacji, makiety, prototyp i finalny design system.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "Kodowanie w Next.js, integracje, testy na urządzeniach i przeglądarkach.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Wdrożenie",
    description:
      "Publikacja, konfiguracja analityki, szkolenie i przekazanie dokumentacji.",
  },
];

export const PORTFOLIO = [
  { title: "Nordic Studio", tag: "Strona firmowa", accent: "od cyan" },
  { title: "Vela Commerce", tag: "Sklep internetowy", accent: "od violet" },
  { title: "Pulse SaaS", tag: "Aplikacja / UI", accent: "od cyan" },
  { title: "Atlas Estate", tag: "Landing page", accent: "od violet" },
  { title: "Mono Brand", tag: "Identyfikacja wizualna", accent: "od cyan" },
  { title: "Kite Fintech", tag: "Design system", accent: "od violet" },
];

export const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Figma",
  "Framer Motion",
  "Sanity CMS",
  "Cloudflare",
];

export const TESTIMONIALS = [
  {
    quote:
      "AveniseFlow dostarczyło stronę szybciej niż zakładaliśmy, a konwersja wzrosła o 40% w pierwszym miesiącu.",
    name: "Anna Kowalczyk",
    role: "CEO, Nordic Studio",
  },
  {
    quote:
      "Profesjonalne podejście do UX. Każda decyzja projektowa była poparta argumentem i danymi.",
    name: "Marek Zieliński",
    role: "Head of Product, Pulse SaaS",
  },
  {
    quote:
      "Nowa identyfikacja i sklep to zupełnie inny poziom. Zespół dowozi to, co obieca.",
    name: "Julia Nowak",
    role: "Founder, Vela Commerce",
  },
];

export const PRICING_PLANS = [
  {
    name: "Strona Firmowa",
    price: "800 - 1 500 PLN",
    description: "Dedykowana, szybka strona dla biznesu w czystym kodzie.",
    features: [
      "Nowoczesny stack (Next.js / Tailwind CSS)",
      "100% Responsywność (RWD)",
      "Optymalizacja szybkości (PageSpeed 90+)",
      "Podstawowe SEO & Analityka",
      "Formularz kontaktowy",
    ],
    highlighted: true,
  },
  {
    name: "Serwis & Aplikacja Web",
    price: "od 1 600 PLN",
    description: "Rozbudowane systemy, bazy danych i dedykowane narzędzia.",
    features: [
      "Wszystko co w Stronie Firmowej",
      "Dedykowane moduły i kalkulatory",
      "Dynamiczne bazy danych / API",
      "Zaawansowana analityka i filtrowanie",
      "Pełne skalowanie i wsparcie",
    ],
    highlighted: false,
  },
  {
    name: "Optymalizacja & Kod",
    price: "Wycena indywidualna",
    description: "Przepisanie wolnej strony na Next.js lub dedykowane skrypty.",
    features: [
      "Audyt i przyspieszenie istniejącej strony",
      "Usuwanie powolnych wtyczek WordPress",
      "Dedykowane skrypty i konwertery",
      "Bezpieczeństwo i czyszczenie kodu",
    ],
    highlighted: false,
  },
];

export const FAQ = [
  {
    q: "Ile trwa realizacja projektu?",
    a: "Landing page powstaje zwykle w 2 tygodnie, strona firmowa w 4–6 tygodni, a rozbudowane platformy od 8 tygodni wzwyż. Dokładny harmonogram ustalamy po etapie Discovery.",
  },
  {
    q: "Czy będę mógł samodzielnie edytować treści?",
    a: "Tak. W pakietach Pro i Premium wdrażamy CMS (np. Sanity), dzięki któremu edytujesz teksty, zdjęcia i sekcje bez znajomości kodu.",
  },
  {
    q: "Czy zajmujecie się tylko projektowaniem, czy też kodowaniem?",
    a: "Realizujemy pełen proces: badania, UX, UI, development w Next.js oraz wdrożenie. Możemy też pracować wyłącznie nad warstwą projektową.",
  },
  {
    q: "Co z hostingiem i utrzymaniem?",
    a: "Wdrażamy na wydajnym hostingu klasy premium — globalny CDN, certyfikat SSL i automatyczne kopie zapasowe w cenie. Oferujemy też pakiety opieki: aktualizacje, monitoring i rozwój strony.",
  },
  {
    q: "Jak wygląda płatność?",
    a: "Standardowo 40% zaliczki na start, 30% po akceptacji projektu graficznego i 30% przy wdrożeniu. Przy większych projektach ustalamy kamienie milowe.",
  },
];

export const CONTACT = {
  email: "kontakt@avenise-flow.pl",
  phone: "+48 500 000 000",
  city: "Poznań, Polska",
};

export const SOCIALS = [
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export const HERO_STATS = [
  { value: "60+", label: "zrealizowanych projektów" },
  { value: "40%", label: "średni wzrost konwersji" },
  { value: "98", label: "wynik PageSpeed (mediana)" },
  { value: "6 lat", label: "na rynku" },
];

export const BRAND = {
  name: "AveniseFlow",
};
