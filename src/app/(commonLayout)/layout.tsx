import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/Navbar";

export default function commonLayout ({children}: {children:React.ReactNode}) {

    return (
        <div className="">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}