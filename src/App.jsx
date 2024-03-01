import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(people.length);
  console.log(people);

  // const checkNumber = (number) => {
  //   if (number > people.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return people.length - 1;
  //   }
  //   return number;
  // };

  const prevPerson = () => {
    setIndex((prevState) => {
      const newIndex = (prevState - 1 + people.length) % people.length;
      // if (newIndex < 0) {
      //   return people.length - 1;
      // }
      return newIndex;
    });
  };
  const nextPerson = () => {
    setIndex((prevState) => {
      let newIndex = (prevState + 1) % people.length;
      // if (newIndex > people.length - 1) {
      //   return 0;
      // }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }
    let newIndex = randomNum % people.length;
    return setIndex(newIndex);
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
