import SideBar from './SideBar'

export default function Layout({ children }) {
    return(
        <>
        
         <SideBar/>
        
        <main className='container mx-auto mt-20'>

        {children}

        </main>

        </>
    )
}