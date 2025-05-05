import React, {FormEvent, useState} from 'react';

interface IFormProps {
    username: string,
    password: string
}
const FormComponent = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'Vpadlo',
        password: '21421'
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password
        };
        console.log(user)
    }
    // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
    //     const usernameInput = e.target as HTMLInputElement;
    //     console.log(usernameInput.value)
    //     setFormState({...formState, username: usernameInput.value})
    // }
    // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
    //     const passwordInput = e.target as HTMLInputElement;
    //     console.log(passwordInput.value)
    //     setFormState({...formState, password: passwordInput.value})
    // };

    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        setFormState({...formState, [input.name]: input.value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} placeholder={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="password" name={'password'} placeholder={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;