import React, { useContext, useEffect } from 'react';
import {NavigateOptions, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
import { Context } from 'vm';
// import { arrProductsContext } from '../context/ArrProducts.context';
function WithRouter(Component: React.ComponentType<IWithRouter & Object>) {
  function ComponentWithRouterProp(propsUse: any) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    // const context= useContext(arrProductsContext);
    const myprops ={
        location,
        navigate,
        params,
        // context
    }
    return <Component {...propsUse} {...myprops}/>;
}
  return ComponentWithRouterProp;
}
export default WithRouter;
export interface IWithRouter  {
  location: Location,
  navigate: NavigateOptions,
  params: Params,
  context:Context
}



///my
// import React from 'react';
// import {NavigateOptions, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
// function WithRouter(Component: React.ComponentType<IWithRouter & Object>) {
//   function ComponentWithRouterProp(props: any) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...{location, navigate, params}} />;
//   }
//   return ComponentWithRouterProp;
// }
// export default WithRouter;
// export interface IWithRouter  {
//   location: Location,
//   navigate: NavigateOptions,
//   params: Params<string>,
// }
