import Image from "next/image";
import Header from "./Header";

export default function About(){
return(
    <section className="container mx-auto py-10 px-4">
        <Header title='Sobre mi'/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <Image src="/perfil.jpg" width={400} height={400} alt="perfil"/>
            </div>
        </div>
    </section>
)

}