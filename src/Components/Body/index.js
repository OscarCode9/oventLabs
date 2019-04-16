import React from 'react';
import Typography from '@material-ui/core/Typography';
import img from './imgs/order.png';
import Grid from '@material-ui/core/Grid';
import './style.css';
import Diagram from './imgs/diagram.svg';
import Data from './imgs/data.svg';
import Smartphone from './imgs/smartphone.svg';
function Body(params) {
    return (
        <div style={{ paddingLeft: '7%', paddingRight: '7%', paddingTop: '5%' }} >
            <Grid container spacing={16}>
                <Grid style={{paddingBottom: '70px' }} item xs={12}>
                    <Typography  style={{ color: 'black', fontSize: '2em' }} >
                        En ovent labs trabajamos con nuestros clientes  ofreciendo los mejores servicios digitales para potencializar y hacer crecer sus productos, servicios y negocios, creando soluciones digitales y de software personalizadas.
                    </Typography>
                </Grid>
                <Grid  data-aos="zoom-in" item xs={12} lg={4}>
                
                    <img className='imgBodyPhone' src={Diagram} alt="img-3" />
                    <Typography  style={{paddingLeft: '20px', paddingTop: '10px' }} variant="title" gutterBottom>
                    Análisis de datos. 
                    </Typography>
                    <Typography style={{padding: '20px'}} variant="subheading" gutterBottom>
                        Contamos con los mejores algoritmos para el análisis de datos, aplicando técnicas avanzadas de inteligencia artificial, toma de decisiones inteligentes para el crecimiento de tu negocio. Sistemas ERP, CRM integrados y de código abierto. 
                    </Typography>
                </Grid>
                <Grid   data-aos="zoom-in" itemxs={12} lg={4}>
                    <img className='imgBodyPhone' src={Smartphone} alt="img-1" />
                    <Typography  style={{paddingLeft: '25px', paddingTop: '10px'}} variant="title" gutterBottom>
                        Desarrollo de móvil apps
                    </Typography>
                    <Typography style={{padding: '25px'}} variant="subheading" gutterBottom>
                        Desarrollo de soluciones Android y iOS a tu medida, con la mejor experiencia de usuario, los últimos estándares en diseño de interfaces y llega a más clientes con una aplicación móvil. 
                    </Typography>
                </Grid>
                <Grid   data-aos="zoom-in" item xs={12} lg={4}>
                    <img className='imgBodyPhone' src={Data} alt="img-2" />
                    <Typography  style={{paddingLeft: '15px', paddingTop: '10px'}} variant="title" gutterBottom>
                        Desarrollo de web apps
                    </Typography>
                    <Typography style={{padding: '15px'}} variant="subheading" gutterBottom>
                        Desarrollo de soluciones web, aplicaciones web híbridas capaz de convertirse en una app android o ios con tan solo un click, diseño moderno y adaptado a cualquier resolución de cualquier dispositivo, con la última tecnología del mercado para competir con los grandes corporativos. 
                    </Typography> 
                    </Grid>
            </Grid>
        </div>
    )
}

export default Body;
