import useTheme from "../context/UseTheme";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
function ThemeToggleBtn(){
    const {theme,setTheme}=useTheme();
    const handleClick=()=>{
        if(theme==="dark"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }
    return(
        <>
        <button onClick={handleClick} className="flex items-center gap-1 ">
        {theme==="dark"
        ? <>
            <IoSunnyOutline />
            <span className="font-medium">Light Mode</span>
          </>
        :
        <>
         <MdOutlineDarkMode />
         <span className="font-semibold">Dark Mode</span>
        </>
        }
        </button>
        </>
    )
}
export default ThemeToggleBtn;