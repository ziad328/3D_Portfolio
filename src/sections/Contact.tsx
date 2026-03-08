import { useRef } from 'react';
import { useState, type ChangeEvent, type SyntheticEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

gsap.registerPlugin(ScrollTrigger);

interface FormState {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
    const sectionRef = useRef<HTMLElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('access_key', 'aa256292-6b05-4a1b-b2cb-91cb581e4465');
            formData.append('name', form.name);
            formData.append('email', form.email);
            formData.append('message', form.message);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setLoading(false);
                showAlert({ text: 'Thank you for your message 😃', type: 'success' });
                setTimeout(() => {
                    hideAlert();
                    setForm({ name: '', email: '', message: '' });
                }, 3000);
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
            showAlert({ text: "I didn't receive your message 😢", type: 'danger' });
        }
    };

    // Scroll entrance – terminal window slides up
    useGSAP(() => {
        gsap.fromTo(
            '.contact-terminal',
            { y: 80, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                },
            },
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col w-full max-w-3xl mx-auto">

                {/* Terminal Window */}
                <div className="contact-terminal w-full bg-black-200 rounded-xl border border-black-300 shadow-2xl overflow-hidden relative z-10">

                    {/* Terminal Header */}
                    <div className="flex items-center px-4 py-3 bg-black-600 border-b border-black-300">
                        <div className="flex space-x-2 group">
                            <div className="w-3 h-3 bg-[#FF5F56] rounded-full flex items-center justify-center cursor-pointer">
                                <svg className="w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" viewBox="0 0 10 10" fill="#7a0000">
                                    <path d="M1 1l8 8M9 1L1 9" stroke="#7a0000" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="w-3 h-3 bg-[#FFBD2E] rounded-full flex items-center justify-center cursor-pointer">
                                <svg className="w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" viewBox="0 0 10 10" fill="none">
                                    <path d="M1 5h8" stroke="#7a4500" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="w-3 h-3 bg-[#27C93F] rounded-full flex items-center justify-center cursor-pointer">
                                <svg className="w-1.5 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150" viewBox="0 0 10 10" fill="none">
                                    <path d="M1 5.5L4.5 9M9 1L1 9" stroke="#006400" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-6 sm:p-10 max-w-xl mx-auto">
                        <h3 className="head-text">Let's talk</h3>
                        <p className="text-lg text-white-600 mt-3">
                            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
                            life, I'm here to help.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">Full Name</span>
                                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="ex., John Doe" />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Email address</span>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="ex., johndoe@gmail.com" />
                            </label>

                            <label className="space-y-3">
                                <span className="field-label">Your message</span>
                                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Share your thoughts or inquiries..." />
                            </label>

                            <button className="field-btn" type="submit" disabled={loading}>
                                {loading ? (
                                    <>
                                        Sending...
                                        <svg style={{ animation: 'btn-spin 0.8s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <path d="M12 2a10 10 0 0 1 10 10" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
