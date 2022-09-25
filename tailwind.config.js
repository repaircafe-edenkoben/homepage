module.exports = {
    content: ['./src/**/*.{html,js,ts,tsx}', './content/**/*.{html,js,ts,tsx,md,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#cce6f6",
                    200: "#99ceed",
                    300: "#66b5e5",
                    400: "#339ddc",
                    500: "#0084d3",
                    600: "#006aa9",
                    700: "#004f7f",
                    800: "#003554",
                    900: "#001a2a"
                }
            },
            fontFamily: {
                clean: ["Montserrat"]
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tw-elements/dist/plugin')
    ]
}