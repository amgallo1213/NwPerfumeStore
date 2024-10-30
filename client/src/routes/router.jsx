import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/home/Home'

import MainProducts from '../pages/products/MainProducts'
import About from '../pages/about/About'
import Learn from '../pages/learn/Learn'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/", element: <Home />
            },
            {
                path: "/products", element: <MainProducts />
            },
            {
                path: "/about", element: <About />
            },
            {
                path: "/learn", element: <Learn />
            }
        ]
    }
])


export default router

