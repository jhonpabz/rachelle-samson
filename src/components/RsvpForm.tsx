import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import type { RsvpFormData, RsvpFormErrors, AttendanceStatus } from '../types';
import { SectionCard } from './SectionCard';
import { rsvpCopy } from '../data/weddingData';

const initialForm: RsvpFormData = {
  fullName: '',
  email: '',
  attendance: '',
  noPlusOne: false,
  message: '',
};

export function RsvpForm() {
  const [form, setForm] = useState<RsvpFormData>(initialForm);
  const [errors, setErrors] = useState<RsvpFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const next: RsvpFormErrors = {};

    if (!form.fullName.trim()) {
      next.fullName = 'Kinakailangan ang iyong pangalan.';
    }

    if (!form.email.trim()) {
      next.email = 'Kinakailangan ang email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Maglagay ng wastong email address.';
    }

    if (!form.attendance) {
      next.attendance = 'Piliin kung makakadalo ka.';
    }

    if (!form.noPlusOne) {
      next.noPlusOne = 'Kinakailangan ang pagsang-ayon sa patakaran.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof RsvpFormErrors]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name as keyof RsvpFormErrors];
        return copy;
      });
    }
  };

  const handleAttendance = (value: AttendanceStatus) => {
    setForm((prev) => ({ ...prev, attendance: value }));
    if (errors.attendance) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.attendance;
        return copy;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network request – replace with real API / Formspree endpoint
    await new Promise((r) => setTimeout(r, 1200));

    console.log('RSVP submitted:', form);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div id="rsvp" className="relative py-16 sm:py-24 paper-texture overflow-hidden">
      {/* Soft decorative 囍 */}
      <div
        className="pointer-events-none absolute top-8 right-6 opacity-[0.04] select-none hidden sm:block"
        aria-hidden="true"
      >
        <span className="font-display text-8xl text-imperial-red">囍</span>
      </div>

      <SectionCard large variant="parchment">
        <header className="text-center mb-8">
          <p className="font-display text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2">
            Your Response
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-imperial-red">
            {rsvpCopy.sectionTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-muted">{rsvpCopy.sectionSubtitle}</p>
          <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </header>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="text-center py-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle2
                className="w-14 h-14 text-imperial-red mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl text-imperial-red mb-2">
                Salamat!
              </h3>
              <p className="text-ink-muted leading-relaxed max-w-sm mx-auto">
                Natanggap na namin ang iyong RSVP. Inaasahan namin ang
                pagdiriwang kasama ka.
              </p>
              <p
                className="mt-5 text-gold font-display text-4xl"
                aria-hidden="true"
              >
                囍
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {/* Full Name */}
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Ang Iyong Pangalan{' '}
                  <span className="text-imperial-red">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={
                    errors.fullName ? 'fullName-error' : undefined
                  }
                  className={`w-full rounded-lg border px-4 py-2.5 text-ink bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold/60 transition ${
                    errors.fullName
                      ? 'border-imperial-red'
                      : 'border-gold/40'
                  }`}
                  placeholder="Juan Dela Cruz"
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-1 text-xs text-imperial-red"
                    role="alert"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Email <span className="text-imperial-red">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full rounded-lg border px-4 py-2.5 text-ink bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold/60 transition ${
                    errors.email ? 'border-imperial-red' : 'border-gold/40'
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-xs text-imperial-red"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Attendance */}
              <fieldset className="mb-5">
                <legend className="block text-sm font-medium text-ink mb-2">
                  Makakadalo ka ba?{' '}
                  <span className="text-imperial-red">*</span>
                </legend>
                <div
                  className="flex flex-col gap-2.5"
                  role="radiogroup"
                  aria-required="true"
                >
                  {[
                    {
                      value: 'yes' as const,
                      label: 'Oo, makikiisa ako sa pagdiriwang',
                    },
                    {
                      value: 'no' as const,
                      label: 'Hindi ako makakadalo',
                    },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={form.attendance === opt.value}
                      onClick={() => handleAttendance(opt.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${
                        form.attendance === opt.value
                          ? 'border-imperial-red bg-imperial-red/10 text-imperial-red font-medium ring-1 ring-imperial-red/30'
                          : 'border-gold/40 bg-white/60 text-ink-muted hover:border-gold/70'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {errors.attendance && (
                  <p className="mt-1 text-xs text-imperial-red" role="alert">
                    {errors.attendance}
                  </p>
                )}
              </fieldset>

              {/* No Plus One */}
              <div className="mb-5">
                <div
                  className="rounded-lg bg-imperial-red/5 border border-imperial-red/20 px-4 py-3 text-sm text-ink-muted leading-relaxed mb-3"
                  role="note"
                >
                  <p>
                    Upang mapanatiling payapa at mas makabuluhan ang aming
                    pagdiriwang, ang paanyayang ito ay para lamang sa
                    nakapangalan na panauhin. Magalang naming hinihiling na
                    walang karagdagang kasama (plus one).
                  </p>
                </div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="noPlusOne"
                    checked={form.noPlusOne}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={!!errors.noPlusOne}
                    className="mt-1 w-4 h-4 rounded border-gold/60 text-imperial-red focus:ring-gold/60 accent-imperial-red"
                  />
                  <span className="text-sm text-ink group-hover:text-imperial-red transition-colors">
                    Sumasangayon ako{' '}
                    <span className="text-imperial-red">*</span>
                  </span>
                </label>
                {errors.noPlusOne && (
                  <p className="mt-1 text-xs text-imperial-red" role="alert">
                    {errors.noPlusOne}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-ink mb-1.5"
                >
                  Mensahe para sa ikakasal
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-gold/40 px-4 py-2.5 text-ink bg-white/80 focus:outline-none focus:ring-2 focus:ring-gold/60 transition resize-y min-h-[80px]"
                  placeholder="Optional well wishes…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 rounded-full bg-imperial-red text-[#FFFDF7] font-medium py-3.5 tracking-wide hover:bg-[#A00D24] disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-lg shadow-imperial-red/25"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Ipinapadala…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Ipadala ang RSVP
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </SectionCard>
    </div>
  );
}
