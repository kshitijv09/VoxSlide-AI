import Landing from './pages/LandingPage/Landing';
import Audio from './pages/AudioInput/Audio';
import File from './pages/File/File';
import 'bulma/css/bulma.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
function App() {
  const router=createBrowserRouter(
    [
      {path:"/",element:<Landing/>},
      {path:"/audio",element:<Audio/>},
      {path:"/file",element:<File/>},
    ]
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
