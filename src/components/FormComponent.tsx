import {useForm} from "react-hook-form";

interface IFormProps {
    username: string,
    password: string,
    age: number
}
const FormComponent = () => {
    
    const {handleSubmit, register, formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: 'all'
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label><input type="text" {...register('username', {
                    required: true,
                    minLength: {value: 2, message: 'min 2 letters'}
                })} placeholder={'username'}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: {value: 2, message: 'min 2 letters'},
                        maxLength: {value: 32, message: 'password to long'}
                    })} placeholder={'password'}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input type="number" {...register('age', {
                        required: true,
                        min: {value: 1, message: 'age to young'},
                        max: {value: 140, message: 'age to old'}
                    })} placeholder={'age'}/>

                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;