module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'start': "url('/assets/bg.svg')",
                'divider': 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0wIDE0MGgxMjgwQzU3My4wOCAxNDAgMCAwIDAgMHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAxNDBoMTI4MEM1NzMuMDggMTQwIDAgMzAgMCAzMHoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNMCAxNDBoMTI4MEM1NzMuMDggMTQwIDAgNjAgMCA2MHoiLz48L2c+PC9zdmc+)',
            })
        },
        screens: {
            'sm': {
                'max': '639px'
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}