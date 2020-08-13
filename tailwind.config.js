module.exports = {
    purge: [ './public/*.html' ],
    theme: {
        screens: {
            xs: '400px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            center: true,
            padding: '2rem',
        },
        height:{
            '50-screen': '50vh',
            '70-screen': '70vh',
            '60-screen': '60vh',
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '1.5rem',
            '2xl': '2.5rem',
            full: '9999px',
        },
    },
    variants: {},
    plugins: [],
}
