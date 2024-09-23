import React from 'react'
import { Link } from 'react-router-dom'

const route = () => {
    return (
        <div>
            <nav>
                <Link to="/"><li>HOME</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/user"><li>User</li></Link>

            </nav>
        </div>

    )
}

export default route
//Also, we can assign our custom classes instead of using the default active class. The NavLink component gives us access to properties like isActive
//How to fix No Routes Found ErrorWhen routing, a situation may cause a user to access an unconfigured route or a route that does not exist; when this occurs, React does not display anything on the screen except a warning with the message "No routes matched location."This can be fixed by configuring a new route to return a specific component when a user navigates to an unconfigured route as follows:

//Lazy loading is a technique in which components that are not required on the home page are not loaded until a user navigates to that page, allowing our application to load faster than having to wait for the entire app to load at once. This contributes to improved performance, which leads to a positive user experience.

//To implement lazy loading, simply go to App.js and wrap our routes with the Suspense component, along with a fallback props that are rendered on the screen until the component loads: