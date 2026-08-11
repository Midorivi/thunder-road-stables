import { useEffect } from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
import { ContactForm } from '../components/ui/ContactForm';
import { PageHero } from '../components/ui/PageHero';
import { asset } from '../lib/utils';
import { contactDetails } from '../content/site';

export function Contact() {
  useEffect(() => {
    document.title = 'Contact | Thunder Road Stables';
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <PageHero title="Contact" subtitle="For boarding questions, current availability, or a visit to the farm." image={asset("/gallery/photo-6.jpg")} />
      <div className="page-shell py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection delay={0.1}>
            <div className="rounded-[2rem] bg-white/92 p-8 shadow-[0_28px_60px_rgba(17,21,23,0.08)] ring-1 ring-black/5 md:p-10">
              <h2 className="text-4xl text-[#111517]">Send a note.</h2>
              <p className="mt-4 max-w-xl leading-8 text-[#595959]">
                Use the form below and we will follow up about boarding, availability, or a time to visit.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-8">
            <div className="rounded-[2rem] bg-[#111517] p-8 text-white shadow-[0_28px_70px_rgba(17,21,23,0.22)] md:p-10">
              <h2 className="text-4xl text-[#FAF7F2]">Get in touch.</h2>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <User className="mt-1 shrink-0 text-[#DCAC74]" size={24} />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.24em] text-white/58">Owner</h3>
                    <p className="mt-2 text-lg text-white/82">{contactDetails.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0 text-[#DCAC74]" size={24} />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.24em] text-white/58">Phone</h3>
                    <a href={contactDetails.phoneHref} className="mt-2 block text-lg text-white/82 hover:text-white">
                      {contactDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 shrink-0 text-[#DCAC74]" size={24} />
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.24em] text-white/58">Location</h3>
                    <p className="mt-2 text-lg text-white/82">
                      {contactDetails.address[0]}
                      <br />
                      {contactDetails.address[1]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_50px_rgba(17,21,23,0.08)] ring-1 ring-black/5">
              <iframe
                src="https://www.google.com/maps?q=1394+Main+Rd+Jamesport+NY+11947&output=embed"
                className="h-[300px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thunder Road Stables Location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
