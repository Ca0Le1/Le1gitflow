import React,{Fragment} from 'react'
import{HashRouter,Link,Switch,Route,withRouter,Redirect} from  'react-router-dom' 
import Login from './page/login/login'
import Admin from  './page/admin/admin'
import Home from  './page/home/home'
import User from './page/user/user'
class RootRoute extends React.Component{
    render(){
        return(
            <HashRouter>
                <hr/>
                <Switch>
                    <Redirect exact from='/'  to='/login'></Redirect>
                    <Route  path='/login' component={Login}></Route>
                    <Route  path='/admin' component={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user' component={User}></Route>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute