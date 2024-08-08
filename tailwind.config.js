/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            width: {
                'mil': '1000px',
            },
            screens: {
                'mil': '1000px',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["black"]
    }
}
