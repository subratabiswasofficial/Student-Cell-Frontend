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
import StudentSection from './components/studentSection/StudentSection';
import Footer from './components/footer/Footer';
import Alert from './components/layout/Alert';

function App() {
    const [isInProfilePage, setIsInProfilePage] = useState(false);
    const [isInHomePage, setIsInHomePage] = useState(false);
    const [activeSection,setActiveSection] = useState(null);
    useEffect(() => {
        if (window.location.pathname === '/profile/me') {
            setIsInProfilePage(true);
            setIsInHomePage(false);
        }else if (window.location.pathname === '/') {
            setIsInProfilePage(false);
            setIsInHomePage(true);
        }else{
            if(window.location.pathname === '/student-section'){
                setActiveSection(1);
            }else if(window.location.pathname === '/club-section'){
                setActiveSection(2);
            }else if(window.location.pathname === '/placement-section'){
                setActiveSection(3);
            }else if(window.location.pathname === '/hostel-section'){
                setActiveSection(4);
            }else if(window.location.pathname === '/skills-section'){
                setActiveSection(5);
            }
            setIsInProfilePage(false);
            setIsInHomePage(false);
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
                            isInHomePage={isInHomePage}
                            setIsInHomePage={setIsInHomePage}
                            activeSection={activeSection}
                            setActiveSection={setActiveSection}
                        />
                        <Switch>
                            <Route path="/" exact render={(props) => <LandingPage {...props} openAuthModal={openAuthModal} setOpenAuthModal={setOpenAuthModal} />} />
                            <Route path="/signin" exact render={(props) => <div>Sign In</div>} />
                            <Route path="/signup" exact render={(props) => <div>Sign Up</div>} />
                            <PrivateRoute path="/profile/me" exact component={Profile} />
                            <PrivateRoute path="/dashboard" exact component={Dashboard} />
                            <Route path="/student-section" exact render={(props) => <StudentSection activeSection={activeSection} setActiveSection={setActiveSection} {...props} />} />
                            <Route render={(props) => <div>404 Not Found</div>} />
                        </Switch>
                        <Footer setIsInHomePage={setIsInHomePage} setIsInProfilePage={setIsInProfilePage} setActiveSection={setActiveSection} />
                    </Router>
                    <Alert />
                </Provider>
                <AuthModal activeTab={activeTab} setActiveTab={setActiveTab} setOpenAuthModal={setOpenAuthModal} openAuthModal={openAuthModal} />
                
            </ThemeProvider>
        </>
    );
}

export default App;
