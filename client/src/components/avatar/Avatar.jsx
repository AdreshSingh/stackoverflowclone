

export const Avatar = ({
    children,
    backgroundColor,
    px, py,
    color,
    borderRadius, fontSize, cursor
}) => {
    const Style = {
        backgroundColor,
        padding: `${py}px ${px}px`,
        color: color || "black",
        borderRadius,
        fontSize,
        textAlign: 'center',
        cursor: cursor || null,
        textDecoration: "none",
        width: "100%"

    }
    return (
        <div style={Style}> {children == null ? "devank".charAt(0).toUpperCase() : children} </div>
    )
}
