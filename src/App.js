import { Routes, Route } from 'react-router-dom';
import { SidebarLayout } from 'utils/Routers';
import { Dashboard, Maps, Settings, Tables, AddPage, NotFound } from 'pages';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';

function App() {
    
    return (
        <>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route element={<SidebarLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/addpage" element={<AddPage />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/maps" element={<Maps />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </>
    );
}

export default App;
