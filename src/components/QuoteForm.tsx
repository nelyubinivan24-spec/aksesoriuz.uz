import { Send } from "lucide-react";
import React, { useState } from "react";

type QuoteFormProps = {
  locale: "ru" | "en";
  source: string;
};

const copy = {
  ru: {
    title: "Запросить расчет",
    name: "Ваше имя",
    contact: "Телефон или Telegram",
    interest: "Что нужно изготовить?",
    submit: "Отправить запрос",
    eyebrow: "B2B расчет",
    note: "Укажите изделие, тираж, материал и желаемые сроки.",
    success: "Запрос подготовлен. Подключение фактической отправки будет на этапе интеграций."
  },
  en: {
    title: "Request calculation",
    name: "Your name",
    contact: "Phone or Telegram",
    interest: "What do you need?",
    submit: "Send request",
    eyebrow: "B2B quote",
    note: "Share the product, quantity, material, and desired timing.",
    success: "Request prepared. Actual submission will be connected during integrations."
  }
};

export default function QuoteForm({ locale, source }: QuoteFormProps) {
  const t = copy[locale];
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="rounded-md border border-line-200 bg-white p-5 shadow-xl shadow-ink-950/5" data-source={source} onSubmit={handleSubmit}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">{t.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold text-ink-950">{t.title}</h2>
      <p className="mt-2 text-sm leading-6 text-steel-600">{t.note}</p>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.name}
          <input className="min-h-11 rounded-md border border-line-200 bg-mist-100/45 px-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="name" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.contact}
          <input className="min-h-11 rounded-md border border-line-200 bg-mist-100/45 px-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="contact" type="text" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.interest}
          <textarea className="min-h-28 rounded-md border border-line-200 bg-mist-100/45 px-3 py-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="message" />
        </label>
      </div>
      <button className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-600" type="submit">
        <Send size={16} aria-hidden="true" />
        {t.submit}
      </button>
      {submitted && <p className="mt-3 text-xs leading-5 text-emerald-700" aria-live="polite">{t.success}</p>}
    </form>
  );
}
