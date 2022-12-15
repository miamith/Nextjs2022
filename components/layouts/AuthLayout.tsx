import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';


interface Props {
    titulo: string;
    children: React.ReactNode | React.ReactNode[];
}


export const AuthLayout: FC<Props> = ({children,titulo}) => {
  return (
    <>
        <Head>
            <title>{titulo}</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
                {children}
            </Box>
        </main>
    
    
    </>
  )
}
