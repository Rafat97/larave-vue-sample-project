module.exports = {
    content: [],
    theme: {
        extend: {},
    },
    plugins: [],
    variants: {
        opacity: ({ after }) => after(["disabled"]),
    },
    purge: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
};
