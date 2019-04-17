import React, { useEffect, useContext, useReducer } from 'react';

import NavBar from './Components/BarNav';
import CoverPhoto from './Components/CoverPhoto/';
import Footer from './Components/Footer';
import {  ContextOne } from './Redux/store'
import Body from './Components/Body';
import View_3D from './Components/3DView';
import Photo_360 from './Components/3DPhoto/App';
import Typography from '@material-ui/core/Typography';

function AppProvider() {
    let {state} = React.useContext(ContextOne)
    const lenguage = state.lenguage;
    return (
        <div>
            <NavBar lenguage={lenguage} />
            <CoverPhoto />
            <Body />
            <View_3D />
            
            <Photo_360 />
            <Footer />
        </div>
    )
}

export default AppProvider;