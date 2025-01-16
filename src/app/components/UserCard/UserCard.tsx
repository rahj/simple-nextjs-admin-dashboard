import { Ellipsis } from "lucide-react";

const UserCard = ({ type, countItem }: { type : string, countItem : string }) => {
    return (
        <div className="rounded-2xl odd:bg-purple-100 even:bg-yellow-200 p-4 flex-1 min-w-[130px]">
            <div className="flex items-center justify-between">
                <span className="text-[10px] text-gray-500 bg-white px-2 py-1 rounded-lg">12/31/2024</span>
                <Ellipsis className="text-gray-500 cursor-pointer" size={20} />
            </div>
            <h1 className="text-black text-2xl font-semibold my-4">{countItem}</h1>
            <h2 className="text-gray-500 capitalize text-sm">{type}{'s'}</h2>
        </div>
    );
}

export default UserCard;