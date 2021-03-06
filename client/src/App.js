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
import WorkoutPage from './Pages/WorkoutPage/WorkoutPage';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/summary' element={<SummaryPage />} />
          <Route path='/profile' element={<ProfilePage />} />

          <Route path='/workout' element={<WorkoutPage />} />
          <Route path='/mealplan' element={<MealPlanPage />} />

          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/error' element={<ErrorPage />} />
          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;