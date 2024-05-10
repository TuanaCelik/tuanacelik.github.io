const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Raleway"', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
