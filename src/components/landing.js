import React from "react"

const Landing = (props) => {
    return (
        <div className="storepage sections wf-section">
            <div className="w-row">
                <div className="column left_column w-col w-col-6">
                    <div className="homepage_header">
                        ANTES<br></br>DEL<br></br>EXAMEN
                    </div>
                    <div className="text-block-17">PREGUNTAS DE EXAMEN Y TEMAS RESUMIDOS PARA ENTRAR A LA UNAM, IPN, UAM Y MÁS UNIVERSIDADES<br></br><br></br><br></br>¡TAMBIÉN TE FUNCIONAN PARA ESTUDIAR PARA TUS EXAMENES EN PREPARATORIA!
                    </div>
                </div>
                <div className="column frontpage_backgroundimage w-col w-col-6"><img src="images/logo_small.png" loading="lazy" alt="" /></div>
            </div>
        </div>
    );
}

export default Landing;
