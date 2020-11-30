import React from "react"
import Blockcontainer from "../components/blocksContainer"
import PostBlock from "../components/postblock"
import Heading from "../components/heading"
import Layout from "../layouts/layout"
import bg1 from '../images/slider/asar.jpg'
import bg2 from '../images/slider/pesca.jpg'
import bg3 from '../images/slider/acampar.jpg'
import bg4 from '../images/slider/carpinteria.jpg'
import bg5 from '../images/slider/cocinar.jpg'
export default function Home() {
    return (

        <React.Fragment>
            <Layout>
            <Heading color="gold">About</Heading>
            <Blockcontainer>
                <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
                <PostBlock name="Pesca Carpa" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg2} />
                <PostBlock name="Pesca con Carnada" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg3} />
                <PostBlock name="Pesca Mosca" text="LOREM IPSUM MOTHERFUCKER" nivel="Intermedio" background={bg4} />
                <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
                <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
                <PostBlock name="Pesca Carpa" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg2} />
                <PostBlock name="Pesca con Carnada" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg3} />
                <PostBlock name="Pesca Mosca" text="LOREM IPSUM MOTHERFUCKER" nivel="Intermedio" background={bg4} />
                <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
                <PostBlock name="Pesca en Orilla" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg5} />
                <PostBlock name="Pesca Lobina" text="LOREM IPSUM MOTHERFUCKER" nivel="Básico" background={bg1} />
            </Blockcontainer>
            </Layout>
        </React.Fragment>
    )

}
