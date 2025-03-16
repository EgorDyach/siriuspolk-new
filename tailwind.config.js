module.exports = {
  theme: {
    extend: {
      keyframes: {
        fillLine: {
          '0%': { height: '0%', opacity: '1' },
          '95%': { height: '100%', opacity: '1' },
          '100%': { height: '100%', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0.65' },
          '5%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { opacity: '0.65' },
        },
      },
      animation: {
        fillLine: 'fillLine 12s infinite linear',
        fadeIn: 'fadeIn 12s infinite linear',
      },
    },
  },
};
