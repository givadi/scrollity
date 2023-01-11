import {changeName} from '../../store/actionCreators/name';
import store from '../../store/store';
import {DEFAULT_PRESENTATION_NAME, Presentation} from '../../types/presentation';
import styles from './PresentationName.module.css';
import {useSelector} from 'react-redux';
import {MutableRefObject, useRef} from 'react';

function updateNameInput(changedPresentationName: string) {
    if (changedPresentationName === '')
    {
        changedPresentationName = DEFAULT_PRESENTATION_NAME;

        const nameInput = document.querySelector('#presentationName') as HTMLInputElement;
        if (nameInput) {
            nameInput.value = changedPresentationName;
            nameInput.blur();
        }
    }

    store.dispatch(changeName(changedPresentationName));
}

function PresentationName() {
    const nameInputRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
    useSelector((state: Presentation) => {
        if (nameInputRef.current && nameInputRef.current?.value) {
            nameInputRef.current.value = state.name;
            document.title = state.name;

            return state.name;
        }
    });

    return (
        <div className={styles.nameBar}>
            <input className={styles.nameInput}
                id={'presentationName'}
                   ref={nameInputRef}
                defaultValue={store.getState().name}
                onBlur={event => {
                    updateNameInput(event.target.value);
                }}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        updateNameInput(event.currentTarget.value);
                    }
                }}
            />
        </div>
    );
}

export default PresentationName;