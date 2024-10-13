export const WidgetTag = () => {
    const tags = [
        "c", "css", "js", "html", "express", "firebase", "java", "MERN", "mongodb", "mysql", "nextjs", "nestjs", "php", "python", "reactjs"
    ]
    return (
        <div className="widget-tags">
            <h4>
                Watched tags
            </h4>
            <div className="widget-tags-div">
                {
                    tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}