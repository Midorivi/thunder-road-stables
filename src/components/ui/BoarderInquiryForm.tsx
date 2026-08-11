import { useState } from 'react';
import { asset } from '../../lib/utils';

const fieldClassName = 'min-h-12 w-full rounded-2xl border border-white/12 bg-white/6 px-4 text-white outline-none transition focus:border-[#DCAC74] focus:bg-white/10';

export function BoarderInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <section className="mt-14 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex items-center p-8 md:p-10">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Interested in boarding?</p>
              <h2 className="mt-5 text-3xl leading-tight text-white md:text-[2.4rem]">Thanks for reaching out.</h2>
              <p className="mt-5 max-w-lg leading-8 text-white/74">
                We have your note and will follow up to learn more about your horse and what kind of setup you need.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-8 inline-flex min-h-12 items-center rounded-full border border-[#DCAC74]/40 px-6 text-sm tracking-[0.2em] text-[#DCAC74] transition hover:border-[#DCAC74] hover:text-white"
              >
                Send another inquiry
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px] border-t border-white/8 lg:border-l lg:border-t-0">
            <img
              src={asset('/gallery/photo-9.jpg')}
              alt="Boarding horses at Thunder Road Stables"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-6 text-sm leading-7 text-white/85 md:p-8">
              Tell us about your horse and we&apos;ll talk through the best fit. Every horse here gets individual attention.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-14 overflow-hidden rounded-[2rem] bg-[#242323] text-white shadow-[0_28px_60px_rgba(17,21,23,0.18)]">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.36em] text-[#DCAC74]">Interested in boarding?</p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-white md:text-[2.4rem]">Tell us about your horse.</h2>
          <p className="mt-5 max-w-2xl leading-8 text-white/74">
            Share a few details and we&apos;ll help you sort out the boarding setup that makes the most sense.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setIsSubmitting(true);
              window.setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
              }, 1500);
            }}
            className="mt-8 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="boarder-name" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Your Name
                </label>
                <input id="boarder-name" name="name" required className={fieldClassName} />
              </div>
              <div className="space-y-2">
                <label htmlFor="boarder-email" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Email
                </label>
                <input id="boarder-email" name="email" type="email" required className={fieldClassName} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="boarder-phone" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Phone
                </label>
                <input id="boarder-phone" name="phone" type="tel" className={fieldClassName} />
              </div>
              <div className="space-y-2">
                <label htmlFor="horse-name" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Horse&apos;s Name
                </label>
                <input id="horse-name" name="horseName" required className={fieldClassName} />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="horse-breed" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Breed
                </label>
                <input id="horse-breed" name="breed" className={fieldClassName} />
              </div>
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="horse-age" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Age
                </label>
                <input id="horse-age" name="age" type="number" min="0" inputMode="numeric" className={fieldClassName} />
              </div>
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="current-barn" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                  Current Barn
                </label>
                <input id="current-barn" name="currentBarn" className={fieldClassName} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="boarding-type" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                Boarding Type Interested In
              </label>
              <select id="boarding-type" name="boardingType" defaultValue="" className={fieldClassName}>
                <option value="" disabled className="text-[#242323]">
                  Select one
                </option>
                <option className="text-[#242323]">Full Board</option>
                <option className="text-[#242323]">Rough Board</option>
                <option className="text-[#242323]">24/7 Turnout No Stall</option>
                <option className="text-[#242323]">24/7 Turnout With Stall</option>
                <option className="text-[#242323]">Not Sure Yet</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="special-notes" className="block text-sm uppercase tracking-[0.2em] text-white/78">
                Special Needs or Notes
              </label>
              <textarea id="special-notes" name="notes" rows={6} className="w-full rounded-[1.5rem] border border-white/12 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-[#DCAC74] focus:bg-white/10" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#DCAC74] px-6 text-sm tracking-[0.24em] text-[#242323] transition hover:scale-[1.02] hover:bg-[#e7b982] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>

        <div className="relative min-h-[320px] border-t border-white/8 lg:border-l lg:border-t-0">
          <img
            src={asset('/gallery/photo-8.jpg')}
            alt="Horse standing quietly at Thunder Road Stables"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-6 md:p-8">
            <p className="max-w-sm text-base leading-8 text-white/88">
              Tell us about your horse and we&apos;ll talk through the best fit. Every horse here gets individual attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
