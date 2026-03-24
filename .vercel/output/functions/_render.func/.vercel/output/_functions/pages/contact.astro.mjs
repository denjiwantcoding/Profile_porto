/* empty css                                   */
import { c as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_IxfV6gWh.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, s as siteConfig } from '../chunks/MainLayout_Co30vTzD.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

function ContactForm({ className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState({
    type: "idle",
    message: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Mengirim pesan..." });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log("API Response:", result, "Status:", response.status);
      if (result.success) {
        setStatus({
          type: "success",
          message: result.message
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setTimeout(() => {
          setStatus({ type: "idle", message: "" });
        }, 5e3);
      } else {
        setStatus({
          type: "error",
          message: result.error || "Terjadi kesalahan"
        });
        if (result.debug) {
          console.error("Debug info:", result.debug);
        }
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Gagal mengirim pesan. Silakan coba lagi."
      });
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "name",
          className: "block text-sm font-medium text-gray-700 mb-2",
          children: [
            "Nama Lengkap ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "name",
          name: "name",
          value: formData.name,
          onChange: handleChange,
          required: true,
          className: "input",
          placeholder: "Masukkan nama Anda",
          disabled: status.type === "loading"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700 mb-2",
          children: [
            "Email ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "email",
          id: "email",
          name: "email",
          value: formData.email,
          onChange: handleChange,
          required: true,
          className: "input",
          placeholder: "email@example.com",
          disabled: status.type === "loading"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "subject",
          className: "block text-sm font-medium text-gray-700 mb-2",
          children: "Subjek"
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "subject",
          name: "subject",
          value: formData.subject,
          onChange: handleChange,
          className: "input",
          placeholder: "Subjek pesan (opsional)",
          disabled: status.type === "loading"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "label",
        {
          htmlFor: "message",
          className: "block text-sm font-medium text-gray-700 mb-2",
          children: [
            "Pesan ",
            /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "message",
          name: "message",
          value: formData.message,
          onChange: handleChange,
          required: true,
          rows: 6,
          className: "input resize-none",
          placeholder: "Tulis pesan Anda di sini...",
          disabled: status.type === "loading"
        }
      )
    ] }),
    status.message && /* @__PURE__ */ jsx(
      "div",
      {
        className: `p-4 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : status.type === "error" ? "bg-red-50 text-red-800 border border-red-200" : "bg-blue-50 text-blue-800 border border-blue-200"}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          status.type === "success" && /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
              clipRule: "evenodd"
            }
          ) }),
          status.type === "error" && /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
              clipRule: "evenodd"
            }
          ) }),
          status.type === "loading" && /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin w-5 h-5",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: status.message })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: status.type === "loading",
        className: "btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed",
        children: status.type === "loading" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            "svg",
            {
              className: "animate-spin w-5 h-5",
              fill: "none",
              viewBox: "0 0 24 24",
              children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ]
            }
          ),
          "Mengirim..."
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Kirim Pesan",
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M14 5l7 7m0 0l-7 7m7-7H3"
            }
          ) })
        ] })
      }
    )
  ] });
}

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact", "description": "Hubungi saya untuk project, kolaborasi, atau pertanyaan lainnya", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section pt-32" data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> <!-- Header --> <div class="text-center mb-12" data-astro-cid-uw5kdbxl> <h1 class="mb-4" data-astro-cid-uw5kdbxl>Get In Touch</h1> <p class="text-gray-600 text-lg max-w-2xl mx-auto" data-astro-cid-uw5kdbxl>
Ada project atau pertanyaan? jangan ragu untuk menghubungi saya melalui
          informasi di bawah atau kirim pesan langsung menggunakan formulir kontak.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" data-astro-cid-uw5kdbxl> <!-- Contact Information --> <div class="space-y-6" data-astro-cid-uw5kdbxl> <!-- Contact Info Card --> <div class="card" data-astro-cid-uw5kdbxl> <h2 class="text-2xl font-bold mb-6" data-astro-cid-uw5kdbxl>Contact Information</h2> <div class="space-y-4" data-astro-cid-uw5kdbxl> <!-- Email --> <div class="flex items-start gap-4" data-astro-cid-uw5kdbxl> <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-uw5kdbxl></path> </svg> </div> <div data-astro-cid-uw5kdbxl> <h3 aria-setsize="10" class="font-medium text-gray-900" data-astro-cid-uw5kdbxl>Email</h3> <a${addAttribute(`mailto:${siteConfig.email}`, "href")} class="text-primary-600 hover:underline" data-astro-cid-uw5kdbxl> ${siteConfig.email} </a> </div> </div> <!-- Phone --> <div class="flex items-start gap-4" data-astro-cid-uw5kdbxl> <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-uw5kdbxl></path> </svg> </div> <div data-astro-cid-uw5kdbxl> <h3 class="font-medium text-gray-900" data-astro-cid-uw5kdbxl>Phone</h3> <a${addAttribute(`tel:${siteConfig.phone}`, "href")} class="text-primary-600 hover:underline" data-astro-cid-uw5kdbxl> ${siteConfig.phone} </a> </div> </div> <!-- Location --> <div class="flex items-start gap-4" data-astro-cid-uw5kdbxl> <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" data-astro-cid-uw5kdbxl></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-uw5kdbxl></path> </svg> </div> <div data-astro-cid-uw5kdbxl> <h3 class="font-medium text-gray-900" data-astro-cid-uw5kdbxl>Location</h3> <p class="text-gray-600" data-astro-cid-uw5kdbxl>${siteConfig.location}</p> </div> </div> </div> </div> <!-- Social Media --> <div class="card" data-astro-cid-uw5kdbxl> <h2 class="text-2xl font-bold mb-6" data-astro-cid-uw5kdbxl>Follow Me</h2> <div class="grid grid-cols-2 gap-4" data-astro-cid-uw5kdbxl> <a${addAttribute(siteConfig.social.github, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-gray-700 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-astro-cid-uw5kdbxl></path> </svg> <span class="font-medium text-gray-700 group-hover:text-primary-600" data-astro-cid-uw5kdbxl>GitHub</span> </a> <a${addAttribute(siteConfig.social.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-gray-700 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-astro-cid-uw5kdbxl></path> </svg> <span class="font-medium text-gray-700 group-hover:text-primary-600" data-astro-cid-uw5kdbxl>LinkedIn</span> </a> <a${addAttribute(siteConfig.social.twitter, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-gray-700 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-astro-cid-uw5kdbxl></path> </svg> <span class="font-medium text-gray-700 group-hover:text-primary-600" data-astro-cid-uw5kdbxl>Twitter</span> </a> <a${addAttribute(siteConfig.social.instagram, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group" data-astro-cid-uw5kdbxl> <svg class="w-6 h-6 text-gray-700 group-hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-uw5kdbxl> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" data-astro-cid-uw5kdbxl></path> </svg> <span class="font-medium text-gray-700 group-hover:text-primary-600" data-astro-cid-uw5kdbxl>Instagram</span> </a> </div> </div> <!-- Availability Status --> <div class="card bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200" data-astro-cid-uw5kdbxl> <div class="flex items-center gap-3 mb-2" data-astro-cid-uw5kdbxl> <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse" data-astro-cid-uw5kdbxl></div> <h3 class="font-bold text-lg" data-astro-cid-uw5kdbxl>Available for Work</h3> </div> <p class="text-gray-700" data-astro-cid-uw5kdbxl>
Saya sedang terbuka untuk project freelance dan kolaborasi.
              Mari wujudkan ide Anda bersama!
</p> </div> </div> <!-- Contact Form --> <div class="card" data-astro-cid-uw5kdbxl> <h2 class="text-2xl font-bold mb-6" data-astro-cid-uw5kdbxl>Send Me a Message</h2> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/xampp/htdocs/Profile_porto/src/components/ContactForm", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </div> </div> </div> </section> ` })} `;
}, "C:/xampp/htdocs/Profile_porto/src/pages/contact.astro", void 0);

const $$file = "C:/xampp/htdocs/Profile_porto/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
