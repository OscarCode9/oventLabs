import React, {Component} from "react";
import carModel from "./T-Rex/T-Rex Model.obj";
import carMaterial from "./T-Rex/T-Rex Model.mtl";
import {OBJModel} from 'react-3d-viewer'
import Typography from '@material-ui/core/Typography';

class View_3D extends Component {
    render() {
        return (
            <div style={{
                display: 'table',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '100px', 
                textAlign: 'center'
            }
            }  >

            <Typography variant="h3" gutterBottom>
                Tecnología para modelos 3D
            </Typography>
            <Typography style={{fontSize: '18px'}} >
                Contamos la mejor tecnología para visualizar modelos en 3D, creando una mejor experiencias para los usuarios permitiendo una vista de tus producto de 360 grados. 
            </Typography>

                <OBJModel 
                texPath="./T-Rex/tex"
                position={{x:30,y:-200,z:0}}
                width={1000}
                
                src={carModel} 
                mtl={carMaterial} 
                 />
            
            

          </div>
        );
    }
}
export default View_3D;