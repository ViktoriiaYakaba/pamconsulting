import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loyout } from './loyout/Loyout';

const HomePage = lazy(() => import('../pages/Home'));
const AboutUsPage = lazy(() => import('../pages/AboutUs'));

export const App = () => {
    return (
        <Loyout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                </Routes>
            </Suspense>
        </Loyout>
    )
}


