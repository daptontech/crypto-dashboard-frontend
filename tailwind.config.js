module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                "2xl": "128px",
            },
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/hero.jpg')"
            }
        },
    },
    daisyui: {
        themes: false,
    },
    plugins: [require("daisyui")],
}
