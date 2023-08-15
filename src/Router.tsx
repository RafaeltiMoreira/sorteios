import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Mega } from './pages/Mega';
import { Loto } from './pages/Loto';
import { Quina } from './pages/Quina';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CartelaLoto } from './pages/CartelaLoto';
import { CartelaMega } from './pages/CartelaMega';
import { CartelaQuina } from './pages/CartelaQuina';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/mega' element={<Mega />} />
                <Route path='/loto' element={<Loto />} />
                <Route path='/quina' element={<Quina />} />
                <Route path='/cartela-loto' element={<CartelaLoto />} />
                <Route path='/cartela-mega' element={<CartelaMega />} />
                <Route path='/cartela-quina' element={<CartelaQuina />} />
            </Route>
        </Routes>
    );
}