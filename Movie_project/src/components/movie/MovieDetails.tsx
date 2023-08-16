import {useEffect} from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MovieDetails = () => {
    const {state} = useLocation();
    const navigate = useNavigate()
    useEffect(() => {
    if(!state) navigate('/')
    }, [state])

    
  return (
    <div className='px-4 py-2 grid grid-cols-12 gap-4 h-auto'>
        <div className='col-span-12 sm:col-span-2'>
            <img src = {`https://www.themoviedb.org/t/p/w440_and_h660_face${state?.poster_path}`} alt='' className='h-auto w-full object-cover'/>
        </div>
        <div className='col-span-12 sm:col-span-10 flex flex-col gap-4'>
            <h1 className='font-bold text-2xl '>{state?.title} <span className='opacity-50'>({Math.round(state?.vote_average)})</span></h1>
            <p className='text-xl'>{state?.release_date}</p>
            <p  className='text-xl'>Description : <span >{state?.overview}</span></p>
            <Link className='flex items-center gap-2' to={'/'}>
                <BiArrowBack className="text-[1.5rem]" />
                <span>Back</span>
            </Link>
        </div>
    </div>
  )
}

export default MovieDetails
