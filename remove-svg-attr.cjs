// remove-svg-attr.js
module.exports = function ({ types: t }) {
    return {
        visitor: {
            JSXElement(path) {
                const { node } = path
                if (
                    t.isJSXIdentifier(node.openingElement.name, { name: 'svg' })
                ) {
                    // Traverse the children of the `svg` element
                    node.children.forEach((child) => {
                        // Check if the child is a JSXElement
                        if (t.isJSXElement(child)) {
                            // Iterate through the attributes of the JSXElement
                            child.openingElement.attributes =
                                child.openingElement.attributes.filter(
                                    (attribute) =>
                                        !(
                                            t.isJSXAttribute(attribute) &&
                                            t.isJSXIdentifier(attribute.name, {
                                                name: 'fill',
                                            })
                                        ),
                                )
                        }
                    })
                }
            },
        },
    }
}
