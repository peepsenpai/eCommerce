
import React, { useContext, useEffect } from 'react'
import DemoContext from '../context/DemoContext';

const ProtectedRoute = (Component) => {
    return (props)=>{
        const {isAuth, routingCheck} = useContext(DemoContext);

        useEffect(()=>{
            routingCheck();
        },[]);

        if(isAuth){
            return <Component {...props}/>
        }else{
            return null
        }
    }
}

export default ProtectedRoute;