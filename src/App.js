import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import AuthorCard from "./components/AuthorCard";
import WorkCard from "./components/WorkCard";
import EducationCard from "./components/EducationCard";
import HobbiesCard from "./components/HobbiesCard";

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: "education",
  });
  return (
    <>
      <Navbar />

      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

            <AuthorCard  {...{ isActive, setIsActive }} />

            {
              isActive.name === "work" ?
                <WorkCard /> : isActive.name === "education" ? <EducationCard /> : <HobbiesCard />
            }

          </div>

          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
