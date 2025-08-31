/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#570df8",
                    "secondary": "#f000b8",
                    "accent": "#37cdbe",
                    "neutral": "#3d4451",
                    "base-100": "white",      // background
                    "base-content": "#000000" // text
                },
            },
        ],
    },
};
