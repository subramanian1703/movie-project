import {BiSolidHome,BiSearch} from "react-icons/bi"
import { Link } from "react-router-dom"
interface INavbarProps{
  isMoviePage:boolean,
  searchText?:string,
  setSearchText?: any
}
const Navbar = (props:INavbarProps) => {
  const {isMoviePage,searchText,setSearchText} = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchText(e.target.value )
  }
  return (
    <header className='px-4 py-3 bg-white shadow-lg sticky top-0 z-10  w-full'>
     <nav className='w-full flex justify-between gap-4  items-center'>
        {isMoviePage ? <h2 className="text-2xl font-semibold p-4" data-testid="title">Movie Details</h2> : <div className='flex-[9]  sm:flex-[6] p-4 bg-gray-200 rounded-xl flex items-center gap-2'>
            <BiSearch className="text-[1.8rem]" />
            <input className='w-full bg-transparent outline-none border-none text-2xl  font-semibold' placeholder='Search' value={searchText} onChange={handleChange}/>
        </div>}
        <Link className='flex-[3] sm:flex-[6] flex justify-end' to={'/'}>
        <BiSolidHome className="text-[1.8rem]" />
        </Link>
     </nav>
    </header>
  )
}

export default Navbar
