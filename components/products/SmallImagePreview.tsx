import React from 'react'

type Props = {
    className: string
    image: string
}

const SmallImagePreview = ({className, image} : Props) => (
    <li className={className}>
        <img src={image} width={125} height={125} />
    </li>
)

export default SmallImagePreview