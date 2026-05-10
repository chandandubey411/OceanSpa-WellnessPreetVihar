import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import Loader from './components/animations/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setLoading(false)} />
      {!loading && <RouterProvider router={router} />}
    </>
  );
}
