/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#0d89ec",
                    secondary: "#f6d860",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",
                },
            },
        ],
    },
    theme: {
        fontFamily:{
            sans: ['Roboto', 'sans-serif']
        },
        extend: {
            colors:{
                statsHeadingTextColor : '#575757',
                statsHoverbgColor : '#f1f1f1',
                statsNumericTextColor : '#303030' ,
                statsNumericPercentColor:'#616161',
                editIconbgColor: '#787878',
                dashedLineColor: '#d5d5d5',
                dashboardDatePicker : '#f6f6f7'
            }
        },
    },
    plugins: [require("daisyui")],
};
