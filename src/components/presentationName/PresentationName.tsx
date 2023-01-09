import {changeName} from '../../store/actionCreators/name';
import store from '../../store/store';
import {DEFAULT_PRESENTATION_NAME} from '../../types/presentation';
import styles from './PresentationName.module.css';

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
    return (
        <div className={styles.nameBar}>
            <input className={styles.nameInput}
                id={'presentationName'}
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