const theme = require('tailwindcss/defaultTheme')
const formPlugin = require('@tailwindcss/forms')
const animatePlugin = require('tailwindcss-animate')

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                font: ['Raleway', 'sans'],
            },
            boxShadow: {
                base: '0 2px 2px 2px rgba(0, 0, 0, 0.3)',
            },
            keyframes: {
                scale: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                scale: 'scale 0.3s ease-in',
            },
            spacing: {
                [6.5]: '1.625rem',
            },
            fontSize: {
                ['1.5xl']: '1.375rem',
            },
            colors: {
                mint: {
                    green: '#44AEC3',
                    dark: '#44AEC3',
                },
                primary: {
                    50: '#EBF5FF',
                    100: '#E1EFFE',
                    200: '#C3DDFD',
                    300: '#A4CAFE',
                    400: '#76A9FA',
                    500: '#3F83F8',
                    600: '#1C64F2',
                    700: '#1A56DB',
                    800: '#1E429F',
                    900: '#233876',
                },
                gray: {
                    50: '#F9FAFB',
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2A37',
                    900: '#111928',
                    text: '#6A6A6A',
                },
                blue: {
                    50: '#EBF5FF',
                    100: '#E1EFFE',
                    200: '#C3DDFD',
                    300: '#A4CAFE',
                    400: '#76A9FA',
                    500: '#3F83F8',
                    600: '#1C64F2',
                    700: '#1A56DB',
                    800: '#1E429F',
                    900: '#233876',
                },
                red: {
                    50: '#FDF2F2',
                    100: '#FDE8E8',
                    200: '#FBD5D5',
                    300: '#F8B4B4',
                    400: '#F98080',
                    500: '#F05252',
                    600: '#E02424',
                    700: '#C81E1E',
                    800: '#9B1C1C',
                    900: '#771D1D',
                },
            },

            boxShadow: {
                ['3xl']:
                    '0 1.8px 2.2px 0 rgba(0,0,0,0.02), 0 8px 10px 0 rgba(0,0,0,0.03)',
            },
        },
    },
    plugins: [animatePlugin],
}
