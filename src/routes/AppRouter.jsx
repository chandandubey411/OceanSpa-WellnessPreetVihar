import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Lazy-loaded pages
const Home     = lazy(() => import('../pages/Home'));
const About    = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Gallery  = lazy(() => import('../pages/Gallery'));
const Booking  = lazy(() => import('../pages/Booking'));
const Contact  = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-gold-700/30 border-t-gold-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-cream/40 font-sans text-xs tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<PageLoader />}><Home /></Suspense>,
      },
      {
        path: 'about',
        element: <Suspense fallback={<PageLoader />}><About /></Suspense>,
      },
      {
        path: 'services',
        element: <Suspense fallback={<PageLoader />}><Services /></Suspense>,
      },
      {
        path: 'gallery',
        element: <Suspense fallback={<PageLoader />}><Gallery /></Suspense>,
      },
      {
        path: 'booking',
        element: <Suspense fallback={<PageLoader />}><Booking /></Suspense>,
      },
      {
        path: 'contact',
        element: <Suspense fallback={<PageLoader />}><Contact /></Suspense>,
      },
      {
        path: '*',
        element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense>,
      },
    ],
  },
]);
