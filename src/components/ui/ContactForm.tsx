import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="rounded-[1.5rem] bg-[#FAF7F2] p-8 text-center ring-1 ring-black/5">
        <h3 className="text-2xl text-[#111517]">Thank you.</h3>
        <p className="mt-4 leading-7 text-[#595959]">Your note is in. We’ll be in touch soon.</p>
        <button onClick={() => setIsSubmitted(false)} className="mt-6 text-sm uppercase tracking-[0.28em] text-[#9a7a56] hover:text-[#111517]">
          Send another note
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitting(true);
        window.setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1500);
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
            First Name
          </label>
          <input id="firstName" required className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-[#DCAC74]" />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
            Last Name
          </label>
          <input id="lastName" required className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-[#DCAC74]" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
          Email Address
        </label>
        <input id="email" type="email" required className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-[#DCAC74]" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
            Phone Number
          </label>
          <input id="phone" type="tel" className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-[#DCAC74]" />
        </div>
        <div className="space-y-2">
          <label htmlFor="interest" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
            Interest
          </label>
          <select id="interest" defaultValue="" className="min-h-12 w-full rounded-2xl border border-black/10 bg-white px-4 outline-none focus:border-[#DCAC74]">
            <option value="" disabled>
              Select one
            </option>
            <option>Boarding</option>
            <option>Training and Lessons</option>
            <option>Schedule a Visit</option>
            <option>Harness Racing</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm uppercase tracking-[0.2em] text-[#111517]">
          Message
        </label>
        <textarea id="message" required rows={6} className="w-full rounded-[1.5rem] border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#DCAC74]" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#111517] px-6 text-sm tracking-[0.24em] text-[#FAF7F2] hover:scale-[1.02] hover:bg-[#242323] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Sending…' : 'Get in Touch'}
      </button>
    </form>
  );
}
