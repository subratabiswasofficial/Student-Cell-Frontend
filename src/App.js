import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import PrivateRoute from './components/routing/PrivateRoute';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar/Navbar';
import { ThemeProvider } from '@material-ui/styles';
import theme from './components/theme';

// Components""
import LandingPage from './components/landingpage/LandingPage';
import NotificationButton from './components/landingpage/NotificationButton';
import AuthModal from './components/landingpage/AuthModal';
import Profile from './components/profile/Profile';
function App() {
    const [isInProfilePage, setIsInProfilePage] = useState(false);
    useEffect(() => {
        if (window.location.pathname === '/profile/me') {
            setIsInProfilePage(true);
        } else {
            setIsInProfilePage(false);
        }
        store.dispatch(loadUser());
    }, []);
    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        {!isInProfilePage && <NotificationButton />}
                        <Navbar
                            isInProfilePage={isInProfilePage}
                            setIsInProfilePage={setIsInProfilePage}
                            setActiveTab={setActiveTab}
                            setOpenAuthModal={setOpenAuthModal}
                            openAuthModal={openAuthModal}
                        />
                        <Switch>
                            <Route path="/" exact render={(props) => <LandingPage {...props} openAuthModal={openAuthModal} setOpenAuthModal={setOpenAuthModal} />} />
                            <Route path="/signin" exact render={(props) => <div>Sign In</div>} />
                            <Route path="/signup" exact render={(props) => <div>Sign Up</div>} />
                            <PrivateRoute path="/profile/me" exact component={Profile} />
                            <PrivateRoute path="/dashboard" exact component={Dashboard} />
                            <Route render={(props) => <div>404 Not Found</div>} />
                        </Switch>
                    </Router>
                </Provider>
                <AuthModal activeTab={activeTab} setActiveTab={setActiveTab} setOpenAuthModal={setOpenAuthModal} openAuthModal={openAuthModal} />
            </ThemeProvider>
        </>
    );
}

export default App;
