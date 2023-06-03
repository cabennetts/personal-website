type Props = {
    id: string
}

export default function Video({ id }: Props) {
    return (
        <div>
            {/* Aspect ratio 16:9 */}
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="Youtube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    )
}