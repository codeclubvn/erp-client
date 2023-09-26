module.exports = {
    icon: false,
    typescript: true,
    ignoreExisting: true,
    jsxRuntime: 'automatic',
    indexTemplate: require('./indexTemplate.cjs'),
    svgo: true,
    jsx: {
        babelConfig: {
            plugins: [
                [
                    '@svgr/babel-plugin-replace-jsx-attribute-value',
                    {
                        values: [{ value: 'none', newValue: 'currentColor' }],
                    },
                ],
                // ['./remove-svg-attr.cjs'],
            ],
        },
    },
}
