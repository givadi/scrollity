import {useDispatch} from 'react-redux';
import {changeName} from '../../store/actionCreators/name';
import store from '../../store/store';
import {DEFAULT_PRESENTATION_NAME} from '../../types/presentation';

function updateNameInput(changedPresentationName: string) {
    const nameInput = document.querySelector('#presentationName') as HTMLInputElement;
    if (nameInput && changedPresentationName === '') {
        nameInput.value = DEFAULT_PRESENTATION_NAME;
    }
    nameInput.blur();
}

function PresentationName() {
    const dispatch = useDispatch();

    return (
        <div>
            PresentationName
            <input
                id={'presentationName'}
                defaultValue={store.getState().name}
                onBlur={event => {
                    updateNameInput(event.target.value);
                    dispatch(changeName(event.target.value));
                }}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        updateNameInput(event.currentTarget.value);
                        dispatch(changeName(event.currentTarget.value));
                    }
                }}
            />
        </div>
    );
}

export default PresentationName;