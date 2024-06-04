/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        titlecolor: "rgba(var(--titlecolor))",
        subtitlecolor: "rgba(var(--subtitlecolor))",
        hoverbordercolor: "rgba(var(--hoverbordercolor))",
        bordercolor: "rgba(var(--bordercolor))",
        inputbackground: "rgba(var(--inputbackground))",
        loginbutton: "rgba(var(--loginbutton))",
        loginbuttonhover: "rgba(var(--loginbuttonhover))",
        textsidebar: "rgba(var(--textsidebar))",
        backgroundsidebar: "rgba(var(--backgroundsidebar))",
        sidebarlinecolor: "rgba(var(--sidebarlinecolor))",
        divisorsidebar: "rgba(var(--divisorsidebar))",
        backgroundheader: "rgba(var(--backgroundheader))",
        bgheaderlabel: "rgba(var(--bgheaderlabel))",
        headertext: "rgba(var(--headertext))",
        headerline: "rgba(var(--headerline))",
        bgtitle: "rgba(var(--bgtitle))",
        bgtexttitle: "rgba(var(--bgtexttitle))",
        bgcard: "rgba(var(--bgcard))",
        textcard: "rgba(var(--textcard))",
        bgcardlabel: "rgba(var(--bgcardlabel))",
        bgbuttoncard: "rgba(var(--bgbuttoncard))",
        borderbuttoncard: "rgba(var(--borderbuttoncard))",
        bgcardprice: "rgba(var(--bgcardprice))",
        coloricons: "rgba(var(--coloricons))",
        bordercupon: "rgba(var(--bordercupon))",
        bgcuponbutton: "rgba(var(--bgcuponbutton))",
        textcuponbutton: "rgba(var(--textcuponbutton))",
        bginputcupon: "rgba(var(--bginputcupon))",
        bghovercupon: "rgba(var(--bghovercupon))",
        bgprocesar: "rgba(var(--bgprocesar))",
        bglogout: "rgba(var(--bglogout))",
        bghoverlogout: "rgba(var(--bghoverlogout))",
        bgedit: "rgba(var(--bgedit))",
        bgmodal: "rgba(var(--bgmodal))",
        bgsubtitlemodal: "rgba(var(--bgsubtitlemodal))",
      },
    },
  },
  plugins: [],
};
