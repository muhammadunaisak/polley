import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { logoutHandler } from "../../services/operations/AuthAPI";
import { FiLogOut } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
// import { ImHome } from "react-icons/im";
import { PiFanFill } from "react-icons/pi";

const Navbar = () => {

  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-richblack-900 h-[5.5rem]">
      <div className="w-11/12 max-w-maxContent mx-auto h-full">
        <div className="grid grid-cols-3 items-center text-lg h-full">
          <NavLink to="/">
            <div className="flex gap-x-4 items-center">
              <TfiBarChart className="text-5xl" />
              <p className="hidden md:block">Polleyy</p>
            </div>
          </NavLink>
          {
            token ?
              (
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    className="px-2 py-1 bg-caribbeangreen-200 text-white rounded-md w-fit flex items-center gap-x-3 group"
                    onClick={() => navigate('/createPoll')}
                  >
                    <p>Create Poll</p>
                    <p className="hidden md:block transition-all duration-500 group-hover:rotate-180">
                      <PiFanFill />
                    </p>
                  </button>
                </div>
              ) :
              (<div></div>)
          }
          <div className="flex items-center justify-end">
            {
              token
                ?
                <button
                  type="button"
                  onClick={() => dispatch(logoutHandler(navigate))}
                  className="bg-yellow-50 text-richblack-900  px-3 py-2 rounded-md flex gap-x-[2px]"
                >
                  <FiLogOut />
                  <p className="text-xs">Logout</p>
                </button>
                :
                <div className="flex gap-x-3">
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="bg-transparent border-[1px] border-richblack-400 text-base text-white hover:bg-richblack-400 transition-all duration-200 px-2 py-1 rounded-md"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/signup')}
                    className="bg-transparent border-[0.5px] border-richblack-400 text-base text-white hover:bg-richblack-400 transition-all duration-200 px-2 py-1 rounded-md"
                  >
                    SignUp
                  </button>
                </div>
            }
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar