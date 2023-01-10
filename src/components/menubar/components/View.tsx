import styles from '../../common/barIcon/BarIcon.module.css';
import viewStyles from './View.module.css';
import view from '../../../assets/images/barIcons/view.svg';
import {WorkspaceCanvas} from '../../workPanel/components/canvas/WorkspaceCanvas';
import store from '../../../store/store';
import {useEffect, useState} from 'react';

const View = () => {
    const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

    const viewSize = {
        width: 1920,
        height: 1080
    }

    useEffect(() => {
        if (currentSlideNumber === store.getState().slides.length) {
            document.exitFullscreen()
                    .then(() => {
                        document.getElementById('slideshowTest')!.classList.add(viewStyles.wrapper)
                    })
                    .catch((err) => console.error(err))
        }
    }, [currentSlideNumber])

    return (
        <div className={styles.container}>
            <img className={styles.icon} src={view} alt="View" onClick={() => {
                if (document.getElementById('slideshowTest')) {
                    document.getElementById('slideshowTest')!.classList.remove(viewStyles.wrapper)
                    document.getElementById('slideshowTest')!.requestFullscreen().catch((e) => {
                        console.log(e)
                    })
                }
            }
            }/>

            <div id={'slideshowTest'} className={viewStyles.wrapper} onClick={() => {
                setCurrentSlideNumber(currentSlideNumber + 1);
            }
            }>
                <div>
                    <WorkspaceCanvas slide={store.getState().slides[currentSlideNumber]} isFilmstrip={false} size={viewSize} />
                </div>
            </div>
        </div>
    );
}

export default View;
