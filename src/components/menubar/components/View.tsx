import styles from '../../common/barIcon/BarIcon.module.css';
import viewStyles from './View.module.css';
import view from '../../../assets/images/barIcons/view.svg';
import {WorkspaceCanvas} from '../../workPanel/components/canvas/WorkspaceCanvas';
import store from '../../../store/store';
import {MutableRefObject, useEffect, useRef, useState} from 'react';

const View = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(-1);
    const wrapRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const viewSize = {
        width: 1920,
        height: 1080
    }

    useEffect(() => {
        if (currentSlideNumber === Object.values(store.getState().slides).length) {
            document.exitFullscreen()
                    .then(() => {
                        if(wrapRef.current)
                        {
                            wrapRef.current.classList.add(viewStyles.wrapper);
                        }
                        setCurrentSlideNumber(-1);
                    })
                    .catch((err) => console.error(err))
        }
    }, [currentSlideNumber])

    return (
        <div className={styles.container}>
            <img className={styles.icon} src={view} alt="View" onClick={() => {
                setCurrentSlideNumber(currentSlideNumber + 1);
                console.log(store.getState().slides[currentSlideNumber]);
                if (wrapRef.current) {
                    wrapRef.current.classList.remove(viewStyles.wrapper)
                    wrapRef.current.requestFullscreen().catch((e) => {
                        console.log(e)
                    })
                }
            }
            }/>

            <div id={'slideshowTest'}  ref={wrapRef} className={`${viewStyles.wrapper} ${viewStyles.test}`} onClick={() => {
                console.log(store.getState().slides);
                setCurrentSlideNumber(currentSlideNumber + 1);
            }
            }>
                <WorkspaceCanvas slide={store.getState().slides[currentSlideNumber]} isEditArea={true} size={viewSize} />
            </div>
        </div>
    );
}

export default View;
