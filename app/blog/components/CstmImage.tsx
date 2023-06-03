import Image from "next/image";

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority}: Props) {
    const priort = priority ? true : false

    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={650}
                height={650}
                priority={priort}
            />
        </div>
    )
}