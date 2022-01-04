import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import MealPlanPage from './Pages/MealPlanPage/MealPlanPage';
import SummaryPage from './Pages/SummaryPage/SummaryPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import NutritionPage from './Pages/NutritionPage/NutritionPage';
import SearchItemPage from './Pages/SearchItemPage/SearchItemPage';
import UserDetailsPage from './Pages/UserDetailsPage/UserDetailsPage';
import ExercisePage from './Pages/ExercisePage/ExercisePage';
import ScrollToTop from './Components/ScrollToTop';

function App() {


  return (
      <div className="App">
        <Router>
            {/* Tweek the scroll behaviour in the index.css file to get a smooth scrolling animation */}
            <ScrollToTop />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/search/:id' element={<SearchItemPage />} />
            <Route path='/exercise' element={<ExercisePage />} />

            <Route path='/summary' element={<SummaryPage />} />
            <Route path='/profile' element={<ProfilePage />} />

            <Route path='/nutrition' element={<NutritionPage />} />
            <Route path='/mealplan' element={<MealPlanPage />} />

            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route path='/userdetails' element={<UserDetailsPage />} />

            <Route path='/error' element={<ErrorPage />} />
            <Route path='*' element={<NotFoundPage />} />

          </Routes>

          {/* <Footer /> */}
        </Router>

      </div>
  );
}

export default App;