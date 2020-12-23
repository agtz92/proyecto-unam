import React from "react"
import Heading from "../components/heading"
import Layout from "../layouts/layout"

export default function Home() {
    return (
        <React.Fragment>
            <Layout>
                

                <div style={{paddingLeft: "10%", paddingRight: "10%", paddingBottom: "2%"}}>
                    <Heading color="dark" alignment="left">Acerca de este sitio web</Heading>
               <h2>¿Quiénes somos?</h2>
               <p>Somos un grupo de estudiantes preparándonos para el examen de la UNAM. Para repasar nuestros temas, hacemos resúmenes de los temas en la guía de estudios para la UNAM
                   y los transformamos en posts para este sitio web.
               </p>
               <h2>¿Por qué lo hacemos?</h2>
               <p>Creemos que es muy importante compartir el conocimiento con quien esté dispuesto a utilizarlo para crecer o simplemente para recordar temas que tal vez ya no 
                   tienen tan frescos como al momento de cursar la preparatoria
               </p>
               <h2>¿Cómo puedo participar?</h2>
               <p>¡Gran pregunta! Nosotros estamos desarrollando todo el contenido para este sitio de momento pero nos encantaría crecer la base de conocimiento.
                   Si tienes un resumen o tarea que te gustaría publicar en este sitio web, mándanos un email a <span style={{fontWeight: 'bold'}}>contacto@antesdelexamen.com</span> y nosotros lo subiremos a esta página, al mismo tiempo
                   te daremos crédito por la creación del artículo si así lo deseas. Puede ser de una materia ya existente o una nueva.
                   <br></br>Si encuentras un error en nuestros posts, por favor también ayúdanos en alzar la mano! Queremos que la información en este sitio sea lo más útil posible.
               </p>
               <h2>Tengo una pregunta que no está mencionada en esta lista</h2>
               <p>Escríbenos a <span style={{fontWeight: 'bold'}}>contacto@antesdelexamen.com</span> y con gusto responderemos tu pregunta lo más rápido que podamos.</p>
                </div>

            </Layout>
        </React.Fragment>
            )

}