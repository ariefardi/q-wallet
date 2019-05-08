export const theme = {
  color: {
    mainProductBlue: '#2797FB',
  },

  // Box Shadows
  shadow: {
    dark: '0 0.25rem 1rem 0 rgba(9, 30, 66, 0.15)',
    base: '0 0.0675rem 0.5rem 0 rgba(9, 30, 66, 0.15)',
  },

  borderRadius: '0.25rem',

  // Elevations (z-index)
  elevation: {
    modal: '1000',
    overhead: '100',
  },

  // Sizings
  boundary: '75rem',
  halfBoundary: '37.5rem',
  breakpoint: {
    smallMobile: '20rem',
    mobile: '48rem',
    tablet: '64rem',
    smallDesktop: '80rem',
  },
};
export const flex = (type = {}) => {
  const { direction = 'row', wrap = 'wrap', justify = 'center', align = 'center' } = type;
  return `
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
    align-content: ${align};
  `;

};

export default {theme, flex}