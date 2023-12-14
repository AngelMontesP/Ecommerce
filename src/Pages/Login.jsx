import '@/styles/form.css'
import {useForm} from 'react-hook-form'
import { loginUserService } from '@/Service/userServices'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        navigate('/Home') // le indicamos la ruta
        console.log('Usuario creado satisfactoriamente')

        localStorage.setItem('token', response.data.token)
      }
    } catch (error) {
      console.log('Ocurrio un error en Sigunp', error)
    }
  }



  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img
          className='mb-4'
         /// src={logo} alt='React'
          width={72}
          height={57}
        />
        <h1 className='h3 mb-3 fw-normal'>Please Sign in</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            name='email'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor='floatingInput'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            name='password'
            id='floatingPassword'
            placeholder='Password'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
      </form>
    </main>
  )
}

export default Login
