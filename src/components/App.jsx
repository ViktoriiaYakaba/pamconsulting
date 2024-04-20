import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loyout } from './loyout/Loyout';

const HomePage = lazy(() => import('../pages/Home'));
const AboutUsPage = lazy(() => import('../pages/AboutUs'));
const ServisesPage = lazy(() => import('../pages/Servises'));
const InvestingPage = lazy(() => import('../pages/Investing'));
const ContactUsPage = lazy(() => import('../pages/ContactUs'));


export const App = () => {
    return (
        <Loyout>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path='/servises' element={<ServisesPage />} />
                    <Route path='/investing' element={<InvestingPage />} />
                    <Route path='/contact' element={<ContactUsPage />} />
                </Routes>
            </Suspense>
        </Loyout>
    )
}


