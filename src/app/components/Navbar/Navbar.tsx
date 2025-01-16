import { Search, MessageCircleMore, FileVolume, CircleUser } from "lucide-react";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4'>
            {/* Search bar */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Search color="black" size={14}/>
                <input type="text" placeholder="Search.." 
                    className="w-[200px] p-2 bg-transparent outline-none text-black"/>
            </div>

            {/* Right icons */}
            <div className="flex items-center justify-end w-full gap-6">
                <div className="w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <MessageCircleMore color="black" size={25} />
                    <div className="absolute flex items-center justify-center 
                        -top-3 -right-3 w-5 h-5 bg-red-500 text-white text-[9px] rounded-full">20</div>
                </div>

                <div className="w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <FileVolume color="black" size={25} />
                    <div className="absolute flex items-center justify-center 
                        -top-3 -right-3 w-5 h-5 bg-red-500 text-white text-[9px] rounded-full">99+</div>
                </div>

                <div className="flex flex-col">
                    <span className="text-black text-sm">John Doe</span>
                    <span className="text-gray-500 text-xs text-right">Admin</span>
                </div>
                
                <div className="flex items-center justify-center cursor-pointer">
                    <CircleUser color="skyblue" size={35} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;