import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Compass, Send, CheckCircle2, AlertCircle, Clock, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { MagneticButton } from './MagneticButton';

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceInterest?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Professional Dry Cleaning',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your garments or inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceInterest: 'Professional Dry Cleaning',
        message: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-sm overflow-hidden border border-[#183C35]/15 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Panel: Dark Forest Green Info (5 cols) with Left Motion Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#183C35] text-[#F8F5EE] p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#C6A77A] block mb-3">
                DROP-OFF & CONSULTATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F5EE] leading-tight mb-4">
                Great Care Starts With a Conversation.
              </h2>
              <p className="text-sm text-[#F8F5EE]/80 leading-relaxed mb-8">
                Whether you have an inquiry regarding fine woolens, a delicate evening gown, or everyday shirts, our Acklen Avenue counter team is here to assist you.
              </p>

              {/* Direct NAP details */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C6A77A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F8F5EE]">Storefront Address</span>
                    <span className="text-[#F8F5EE]/75">{BUSINESS_CONFIG.address.fullFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C6A77A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F8F5EE]">Telephone Inquiries</span>
                    <a
                      href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                      data-cursor="expand"
                      className="text-[#C6A77A] hover:underline"
                    >
                      {BUSINESS_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C6A77A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-[#F8F5EE]">Hours of Operation</span>
                    <div className="text-[#F8F5EE]/75 text-xs mt-1 space-y-0.5">
                      <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
                      <p>Sat: 8:00 AM – 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Magnetic Buttons */}
            <div className="mt-10 pt-8 border-t border-[#C6A77A]/20 flex flex-col sm:flex-row gap-3">
              <MagneticButton
                href={`tel:${BUSINESS_CONFIG.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#183C35] bg-[#C6A77A] rounded-sm hover:bg-[#d4b991] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </MagneticButton>

              <MagneticButton
                href={BUSINESS_CONFIG.urls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] border border-[#F8F5EE]/30 rounded-sm hover:bg-[#F8F5EE]/10 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#C6A77A]" />
                <span>Get Directions</span>
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right Panel: Validated Inquiry Form with Right Motion Entrance (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#F8F5EE] p-8 sm:p-10 lg:p-12"
          >
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#183C35] block mb-1">
                ONLINE INQUIRY & SPECIALTY EVALUATION
              </span>
              <h3 className="font-serif text-2xl text-[#183C35]">
                Plan Your Garment Care
              </h3>
              <p className="text-xs text-[#202724]/70 mt-1">
                Send details about your wardrobe needs. Our team responds with care recommendations.
              </p>
            </div>

            {/* Success State with AnimatePresence */}
            <AnimatePresence mode="wait">
              {submittedData ? (
                <motion.div
                  key="success-receipt"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 bg-white border border-[#C6A77A]/40 rounded-sm shadow-xs"
                >
                  <div className="flex items-center gap-2.5 text-[#183C35] mb-3">
                    <CheckCircle2 className="w-5 h-5 text-[#183C35]" />
                    <h4 className="font-serif text-lg font-bold">Inquiry Simulated Successfully</h4>
                  </div>
                  <div className="p-3 bg-[#183C35]/5 border border-[#183C35]/10 rounded-sm text-xs text-[#202724]/80 mb-4">
                    <span className="font-semibold text-[#183C35] block mb-1">
                      Demonstration Mode Notice:
                    </span>
                    <p>
                      This client acquisition prototype demonstrates real-time client validation and receipt generation. No email was dispatched to external servers because an official business email has not yet been designated for public transmission.
                    </p>
                  </div>

                  <div className="text-xs space-y-1.5 text-[#202724]/75 mb-5 border-t border-[#183C35]/10 pt-3">
                    <p><strong className="text-[#183C35]">Name:</strong> {submittedData.fullName}</p>
                    <p><strong className="text-[#183C35]">Email:</strong> {submittedData.email}</p>
                    {submittedData.phone && <p><strong className="text-[#183C35]">Phone:</strong> {submittedData.phone}</p>}
                    <p><strong className="text-[#183C35]">Service:</strong> {submittedData.serviceInterest}</p>
                    <p><strong className="text-[#183C35]">Notes:</strong> {submittedData.message}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    data-cursor="expand"
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] active:scale-98 transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="inquiry-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-[#183C35] mb-1">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Katherine Vance"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm text-[#202724] focus:outline-none focus:ring-1 focus:ring-[#183C35] transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#183C35]/20'
                        }`}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'name-error' : undefined}
                      />
                      {errors.fullName && (
                        <p id="name-error" className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#183C35] mb-1">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. katherine@example.com"
                        className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm text-[#202724] focus:outline-none focus:ring-1 focus:ring-[#183C35] transition-colors ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#183C35]/20'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service Interest */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#183C35] mb-1">
                        Phone Number <span className="text-[#202724]/50 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (615) 555-0192"
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#183C35]/20 rounded-sm text-[#202724] focus:outline-none focus:ring-1 focus:ring-[#183C35]"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold text-[#183C35] mb-1">
                        Primary Service Interest
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#183C35]/20 rounded-sm text-[#202724] focus:outline-none focus:ring-1 focus:ring-[#183C35]"
                      >
                        <option value="Professional Dry Cleaning">Professional Dry Cleaning</option>
                        <option value="Shirt Laundering & Pressing">Shirt Laundering & Pressing</option>
                        <option value="Suits & Business Attire">Suits & Business Attire</option>
                        <option value="Formalwear & Special Occasion">Formalwear & Special Occasion</option>
                        <option value="Stain Treatment & Fabric Care">Stain Treatment & Fabric Care</option>
                        <option value="Alterations & Adjustments">Alterations & Adjustments</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#183C35] mb-1">
                      Garment Details or Specific Questions *
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your garments, fabric types, any specific stains, or desired timing..."
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm text-[#202724] focus:outline-none focus:ring-1 focus:ring-[#183C35] transition-colors ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-[#183C35]/20'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit CTA & Demo Disclaimer */}
                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] bg-[#183C35] rounded-sm hover:bg-[#235349] transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C6A77A]" />
                      <span>{isSubmitting ? 'Evaluating...' : 'Submit Inquiry'}</span>
                    </MagneticButton>

                    <div className="text-[11px] text-[#202724]/60">
                      <span>* Required fields. Demonstration preview mode.</span>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
