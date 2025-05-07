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
                <input type="text" {...register('username', {
                    required: true,
                    minLength: {value: 2, message: 'min 2 letters'}
                })} placeholder={'username'}/>
                <input type="password" {...register('password', {
                    required: true,
                    minLength: {value: 2, message: 'min 2 letters'}
                })} placeholder={'password'}/>
                <input type="number" {...register('age', {
                    required: true,
                    minLength: {value: 2, message: 'min 2 letters'}
                })} placeholder={'age'}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;