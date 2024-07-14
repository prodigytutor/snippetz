import Image from "next/image";

export default function Logo() {
    return(
        <div className="flex gap-2 items-center">
            <div className={'bg-[${mainColor}] p-[6px] rounded-md'}>
                <Image src='/snippetz.png' width={200} height={150} alt="Snippetz Logo" />              
            </div>
            <div className="flex gap-1 text-[19px]">
                <span className={'font-bold text-[${mainColor}]'}>
                    
                </span>
            </div>
        </div>
    )
}