import { FC  } from 'react';
import Head from 'next/head';

import {Navbar,SideMenu} from '../ui';



interface Props {
    titulo: string;
    paginaDescripcion: string;
    urlFulImagen?: string;
    children: React.ReactNode | React.ReactNode[];
    
}

 export const MlineLayout:FC<Props> = ({ children, titulo, paginaDescripcion,urlFulImagen}) => {
  return (
    <>
        <Head>
        <title>{titulo}</title>
        <meta name="description" content={paginaDescripcion}/>
        
        </Head>

        <nav>
            <Navbar />
        </nav>

       <SideMenu></SideMenu>

        <main style={{
            margin:'80px auto',
            maxWidth:'1440px',
            padding:'0px 30px',
           

        }}>
            { children }

        </main>

        { /* TODO footer*/}
        <footer>
        { /* TODO coustomfooter*/ }
        </footer>
    </>
  )
}
