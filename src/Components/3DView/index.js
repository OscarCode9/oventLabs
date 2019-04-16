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
                marginRight: 'auto'}
            }  >

            <Typography variant="h3" gutterBottom>
                Visualizador de modelos 3D
            </Typography>

                <OBJModel 
                texPath="./T-Rex/tex"
                position={{x:30,y:-200,z:0}}
                width={800}
                src={carModel} 
                mtl={carMaterial} 
                 />
          </div>
        );
    }
}
export default View_3D;