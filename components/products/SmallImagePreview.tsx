import React from 'react'

type Props = {
    className: string
    image: string
    handleShowPreviewImage: any
}

const SmallImagePreview = ({className, image, handleShowPreviewImage} : Props) => (
    <li className={className} onClick={handleShowPreviewImage}>
        <img src={image} width={125} height={125} />
    </li>
)

export default SmallImagePreview