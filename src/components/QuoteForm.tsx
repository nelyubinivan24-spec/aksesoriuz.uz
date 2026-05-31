import { Send } from "lucide-react";
import React, { useState } from "react";

type QuoteFormProps = {
  locale: "ru" | "en";
  source: string;
};

const copy = {
  ru: {
    title: "Обсудить проект",
    name: "Ваше имя",
    contact: "Телефон или Telegram",
    interest: "Какое изделие или задачу нужно обсудить?",
    quantity: "Примерный тираж",
    deadline: "Сроки или дата запуска",
    details: "Материалы, логотип, брендирование, референсы",
    submit: "Отправить бриф",
    eyebrow: "Проектный бриф",
    note: "Опишите задачу: изделие, тираж, материал, логотип, сроки и желаемый результат.",
    success: "Спасибо. Для оперативного ответа менеджер может уточнить детали по телефону или в Telegram."
  },
  en: {
    title: "Discuss a project",
    name: "Your name",
    contact: "Phone or Telegram",
    interest: "What item or task should we discuss?",
    quantity: "Approximate quantity",
    deadline: "Deadline or launch date",
    details: "Materials, logo, branding, references",
    submit: "Send brief",
    eyebrow: "Project brief",
    note: "Describe the task: item, quantity, material, logo, timing, and desired result.",
    success: "Thank you. For a faster response, a manager may clarify details by phone or Telegram."
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
          <input className="min-h-11 rounded-md border border-line-200 bg-mist-100/45 px-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="interest" type="text" />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-graphite-800">
            {t.quantity}
            <input className="min-h-11 rounded-md border border-line-200 bg-mist-100/45 px-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="quantity" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-graphite-800">
            {t.deadline}
            <input className="min-h-11 rounded-md border border-line-200 bg-mist-100/45 px-3 text-ink-950 outline-none transition focus:border-emerald-700 focus:bg-white" name="deadline" type="text" />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium text-graphite-800">
          {t.details}
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
