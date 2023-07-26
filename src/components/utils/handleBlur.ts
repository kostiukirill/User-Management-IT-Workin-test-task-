export const handlerBlur = (e: React.FocusEvent<HTMLInputElement>, setDirty: React.Dispatch<React.SetStateAction<boolean>>) => {
    switch (e.currentTarget.name) {
        case 'name':
            setDirty(true)
            break;
        case 'surname':
            setDirty(true)
            break;  
        case 'email':
            setDirty(true)
            break;
        default:
            break;
    }
} 