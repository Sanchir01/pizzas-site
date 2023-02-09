import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={480}
        viewBox="0 0 280 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="395" cy="243" r="27" />
        <circle cx="494" cy="290" r="17" />
        <circle cx="132" cy="134" r="132" />
        <rect x="0" y="285" rx="14" ry="14" width="260" height="27" />
        <rect x="0" y="330" rx="15" ry="15" width="260" height="77" />
        <rect x="0" y="417" rx="15" ry="15" width="80" height="33" />
        <rect x="108" y="417" rx="14" ry="14" width="153" height="40" />
    </ContentLoader>
)

export default Skeleton ;