

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps) {
    return (
        <div className={`
            flex flex-column mt-7 dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}