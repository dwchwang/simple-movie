import { Fragment } from "react";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Main from "./components/layouts/Main";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
