import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CountryPage from './components/Country/CountryPage';
import NotFoundPage from './components/NotFoundPage.tsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContextProvider'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Country/:name",
    element:<CountryPage/>
  },
  {
    path:"*",
    element:<NotFoundPage/>
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
     <RouterProvider router={router}/>
    </ThemeContextProvider>
  </StrictMode>,
)
