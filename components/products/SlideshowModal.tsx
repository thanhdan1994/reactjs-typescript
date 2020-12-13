import React, {useState} from 'react'
import { ProductImages } from '../../interfaces';
import styles from '../../assets/products/SlideshowModal.module.css'


type Props = {
    productImages: ProductImages
    slideIndex: number
}

const SlideshowModal = ({ handleCloseSlideshow, productImages }: Props) => {
    var [slideIndex, setSlideIndex] = useState(1);
    var [disablePrevButton, setDisablePrevButton] = useState(true);
    var [disableNextButton, setDisableNextButton] = useState(false);

    function handleSetSlideIndex(action: string | number) {
        if (action === 'prev') {slideIndex -= 1};
        if (action === 'next') {slideIndex += 1};
        if (typeof action === "number") {slideIndex = action};
        console.log(slideIndex);
        console.log(productImages.length);
        if (slideIndex === productImages.length) {setDisableNextButton(true)} else {setDisableNextButton(false)}
        if (slideIndex === 1) {setDisablePrevButton(true)} else {setDisablePrevButton(false)}
        setSlideIndex(slideIndex);
    }
    return (
        <div className={styles.slideshowModal}>
            <div className={styles.container}>
                <div className={styles.toolModal}>
                    <span className={styles.close} onClick={handleCloseSlideshow}>&times;</span>
                    <span className={styles.numbertext}>{slideIndex} / {productImages.length}</span>
                </div>
                <div className={styles.mySlides}>
                    {disablePrevButton && <span className={styles.prev + ' ' + styles.disable}>❮</span>}
                    {!disablePrevButton && <span className={styles.prev} onClick={() => handleSetSlideIndex('prev')}>❮</span>}
                    <div className={styles.previewImage}>
                        {productImages.map((image, index) => {
                            if (index === (slideIndex - 1))
                                return <img key={index} src={image.normal} style={{
                                    maxWidth: '700px', 
                                    height: 'auto', 
                                    margin: 'auto',
                                    transform: 'translate3d(0px, 0px, 0px)',
                                    transitionDuration: '500ms'
                                }} />
                            else if (index < (slideIndex - 1)) {
                                return <img key={index} src={image.normal} style={{
                                    width: '0',
                                    height: 'auto', 
                                    transform: 'translate3d(-1850px, 0px, 0px)',
                                    transitionDuration: '0ms'
                                }} />
                            } 
                            else
                                return <img key={index} src={image.normal} style={{
                                    width: '0',
                                    height: 'auto', 
                                    transform: 'translate3d(1850px, 0px, 0px)',
                                    transitionDuration: '0ms'
                                }} />
                        })}
                    </div>
                    {disableNextButton && <span className={styles.next + ' ' + styles.disable}>❯</span>}
                    {!disableNextButton && <span className={styles.next} onClick={() => handleSetSlideIndex('next')}>❯</span>}
                </div>
                <div className={styles.row}>
                    {productImages.map((image, index) => {
                        if (index === (slideIndex - 1))
                            return <div onClick={() => handleSetSlideIndex(index + 1)} className={styles.column + ' ' + styles.active} key={index} style={{backgroundImage: 'url(' + image.small+ ')'}} />
                        else
                            return <div onClick={() => handleSetSlideIndex(index + 1)} className={styles.column} key={index} style={{backgroundImage: 'url(' + image.small+ ')'}} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default SlideshowModal