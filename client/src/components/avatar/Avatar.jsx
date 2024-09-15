export const Avatar = ({
    children,
    backgroundcolor,
    px, py,
    color,
    borderRadius, fontSize, cursor
}) => {
    const Style = {
        backgroundcolor,
        padding: `${py}px ${px}`,
        color: color || "black",
        borderRadius,
        fontSize,
        textAlign: center,
        cursor: cursor || null,
        textDecoration: "none"

    }
    return (<div style={Style}> {"devank".charAt(0).toUpperCase} </div>)
}