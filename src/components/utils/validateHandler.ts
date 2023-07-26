export const validateHandler =(e: React.ChangeEvent<HTMLInputElement>, 
                                setVar: React.Dispatch<React.SetStateAction<string>>, 
                                setVarError: React.Dispatch<React.SetStateAction<string>>) => {

    const regexpNameOrSurname = /^[a-zA-Zа-яА-я]+$/;
    const regexpEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
    switch (e.target.name) {
        case 'name':
            setVar(e.target.value)
            if(!regexpNameOrSurname.test(String(e.currentTarget.value).toLowerCase())) {
                setVarError("Name isn't valid")
            } else {
                setVarError("")
            }
            break;
        case 'surname':
            setVar(e.target.value)
            if(!regexpNameOrSurname.test(String(e.currentTarget.value).toLowerCase())) {
                setVarError("Surname isn't valid")
            } else {
                setVarError("")
            }
            break;
        case 'email':
            setVar(e.target.value)
            if(!regexpEmail.test(String(e.currentTarget.value).toLowerCase())) {
                setVarError("Email isn't valid")
            } else {
                setVarError("")
            }
            break;
    }
}