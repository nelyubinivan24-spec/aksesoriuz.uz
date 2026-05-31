import { Send } from "lucide-react";
import React from "react";

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
    note: "Форма пока работает как UX-заготовка. Подключение отправки будет на этапе интеграций."
  },
  en: {
    title: "Request calculation",
    name: "Your name",
    contact: "Phone or Telegram",
    interest: "What do you need?",
    submit: "Send request",
    note: "This form is a UX placeholder. Submission will be connected during integrations."
  }
};

export default function QuoteForm({ locale, source }: QuoteFormProps) {
  const t = copy[locale];

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
  }

  return (
    <form className="rounded-md border border-line-200 bg-white p-5 shadow-sm" data-source={source} onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold text-ink-950">{t.title}</h2>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.name}
          <input className="min-h-11 rounded-md border border-line-200 px-3 text-ink-950 outline-none focus:border-emerald-700" name="name" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.contact}
          <input className="min-h-11 rounded-md border border-line-200 px-3 text-ink-950 outline-none focus:border-emerald-700" name="contact" type="text" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.interest}
          <textarea className="min-h-28 rounded-md border border-line-200 px-3 py-3 text-ink-950 outline-none focus:border-emerald-700" name="message" />
        </label>
      </div>
      <button className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-600" type="submit">
        <Send size={16} aria-hidden="true" />
        {t.submit}
      </button>
      <p className="mt-3 text-xs leading-5 text-steel-600">{t.note}</p>
    </form>
  );
}
