import { useRouter } from "next/router";
import { MdArrowBack } from "react-icons/md"

export const BackButton: React.FC = () => {
    const router = useRouter();

    return(
        <div className="flex items-center justify-start" style={{cursor:'pointer'}}>
            <span onClick={() => router.back()}>
                <MdArrowBack size={25}/>
            </span>
        </div>
    )
}