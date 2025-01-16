import Link from "next/link";
import { MenuItems } from "./MenuItems";
import Image from "next/image";

const Menu = () => {
    return (
        <div className='mt-10 text-sm'>
            {MenuItems.map(i => (
                <div className="flex flex-col gap-1">
                    <Link href={i.url} key={i.label} className="flex items-center justify-center lg:justify-start gap-4 py-2">
                        {/*<Image src={i.icon} alt="icon" width={32} height={32}/>*/}
                        {i.icon}

                        <span className="hidden lg:block text-black">{i.label}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Menu;