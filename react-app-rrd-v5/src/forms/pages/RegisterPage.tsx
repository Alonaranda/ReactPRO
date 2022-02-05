import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const {isValidEmail, resetForm ,formData, onChange, name, email, password1, password2} = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    });

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
    }


    return (
        <div>
            <h1>RegisterPage</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name='name'
                    className={`${(name.trim().length <= 0) && 'has-error'}`}
                />
                { (name.trim().length <= 0) && <span>Este campo es necesario</span>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    name='email'
                    autoComplete='none'
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Este campo no es válido</span>}

                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                    name='password1'
                />
                { (password1.trim().length <= 0) && <span>Este campo es necesario</span>}
                { (password1.trim().length < 6 && password1.trim().length > 0) && <span>Mayor a 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                    name='password2'
                />
                { (password2.trim().length <= 0) && <span>Este campo es necesario</span>}
                { (password2.trim().length > 0 && password2 !== password1) && <span>Las contraseñas no son iguales</span>}
                

                <button
                    type="submit"
                >Create</button>
                <button
                    type='button'
                    onClick={resetForm}
                >ResetForm</button>
            </form>
        </div>
    );
};
