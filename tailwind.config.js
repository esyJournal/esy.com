module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    {
      pattern: /bg-(red|green|blue|indigo|yellow|purple)-(100|900|800|100)/,
    },
    {
      pattern: /text-(red|green|blue|indigo|yellow|purple)-(100|900|800|100)/,
    },
  ],
  theme: {
    extend: {
      fontSize: {
        '51': '3.1875rem',
        '72': '4.5rem',   
      },
      maxWidth: {
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',
      },
      colors: {
        primary: 'rgb(12, 10, 29)',
        secondary: 'rgb(139,61,255)',
        'shadow-purple': 'rgb(136 134 168)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
