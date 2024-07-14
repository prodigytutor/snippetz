import Buttons from "./buttons";
import Logo from "./logo,";

export default function Navbar() {
    return (
        <div  className="flex gap-2 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
            <Logo />
            <Buttons />            
        </div>
    )
}