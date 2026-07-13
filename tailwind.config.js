/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1F1E',
        paper: '#F7F5F0',
        teal: {
          50: '#EAF1EF',
          100: '#CFE0DC',
          200: '#9FC0B8',
          300: '#6FA095',
          400: '#3F7A6D',
          500: '#1F4A45',
          600: '#1A3E3A',
          700: '#15322E',
          800: '#102622',
          900: '#0B1A17',
        },
        sage: '#E8ECE6',
        bronze: {
          400: '#CBA75F',
          500: '#B8924A',
          600: '#96763A',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'stamp': '0 0 0 1px rgba(31,74,69,0.15), 0 8px 24px -8px rgba(16,38,34,0.25)',
      },
    },
  },
  plugins: [],
}
