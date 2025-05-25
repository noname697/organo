import { Fragment } from 'react/jsx-runtime';
import './Banner.css'

function Banner() {
    // JSX
    return(
        // <> </> é um Fragment => Serve pra encapsular código sem ter um encapsulador
        <> 

            <header className='banner'>
                <img src="/imagens/banner.png" alt='O banner principal da página do Organo'/>
            </header>
            <h1>Teste</h1>
        </>
    )
}

export default Banner;
