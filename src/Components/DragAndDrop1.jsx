import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";

// Import all images/assets of food items
import Banana from "../assets/foods/Banana.png";
import Apple from "../assets/foods/Apple.png";
import Carrots from "../assets/foods/Carrots.png";
import Dumpling from "../assets/foods/Dumpling.png";
import Eggplant from "../assets/foods/Eggplant.png";
import Fish from "../assets/foods/Fish.png";
import IceCream from "../assets/foods/IceCream.png";
import Mango from "../assets/foods/Mango.png";
import Orange from "../assets/foods/Orange.png";
import Grapes from "../assets/foods/Grapes.png";
import Yogurt from "../assets/foods/Yogurt.png";
import Noodles from "../assets/foods/Noodles.png";
import Lemon from "../assets/foods/Lemon.png";
import Kale from "../assets/foods/Kale.png";
import Jam from "../assets/foods/Jam.png";
import Hamburger from "../assets/foods/Hamburger.png";
import Pineapple from "../assets/foods/Pineapple.png";
import Rice from "../assets/foods/Rice.png";
import Tomato from "../assets/foods/Tomato.png";
import Strawberry from "../assets/foods/Strawberry.png";
import Watermelon from "../assets/foods/Watermelon.png";
import Vinegar from "../assets/foods/Vinegar.png";
import Ube from "../assets/foods/Ube.png";
import Zucchini from "../assets/foods/Zucchini.png";
import Quesidilla from "../assets/foods/Quesidilla.png";

// Import all images/assets of food items
import PizzaAudio from "../assets/foods/audio/pizza.mp3";
import AppleAudio from "../assets/foods/audio/apple.mp3";
import BreadAudio from "../assets/foods/audio/bread.mp3";
import CherryAudio from "../assets/foods/audio/cherry.mp3";
import ChickenAudio from "../assets/foods/audio/chicken.mp3";
import CookieAudio from "../assets/foods/audio/cookie.mp3";
import EggAudio from "../assets/foods/audio/egg.mp3";
import FriesAudio from "../assets/foods/audio/fries.mp3";
import MilkAudio from "../assets/foods/audio/milk.mp3";
import WaterAudio from "../assets/foods/audio/water.mp3";

// Import all image letters 
import LetterA from "../assets/letters/A.png"; 
import LetterB from "../assets/letters/B.png";
import LetterC from "../assets/letters/C.png";
import LetterD from "../assets/letters/D.png";
import LetterE from "../assets/letters/E.png";
import LetterF from "../assets/letters/F.png";
import LetterG from "../assets/letters/G.png";
import LetterH from "../assets/letters/H.png";
import LetterI from "../assets/letters/I.png";
import LetterJ from "../assets/letters/J.png";
import LetterK from "../assets/letters/K.png";
import LetterL from "../assets/letters/L.png";
import LetterM from "../assets/letters/M.png";
import LetterN from "../assets/letters/N.png";
import LetterO from "../assets/letters/O.png";
import LetterP from "../assets/letters/P.png";
import LetterQ from "../assets/letters/Q.png";
import LetterR from "../assets/letters/R.png";
import LetterS from "../assets/letters/S.png";
import LetterT from "../assets/letters/T.png";
import LetterU from "../assets/letters/U.png";
import LetterV from "../assets/letters/V.png";
import LetterW from "../assets/letters/W.png";
import LetterX from "../assets/letters/X.png";
import LetterY from "../assets/letters/Y.png";
import LetterZ from "../assets/letters/Z.png";

// Import all image of sound icon
import soundicon from '../assets/Volume.png'; 


const DragAndDrop = () => {
  // Food items to display in the side and to be dragged
  const [foodItemsList, setFoodItemsList] = useState([
    {
      image: Banana,
      audio: PizzaAudio,
      id: "banana",
      isDisplayed: true,
      modalChoices: [
        { image: LetterB, isCorrect: true },                    
        { image: LetterA, isCorrect: false },
        { image: LetterP, isCorrect: false },
      ],
    },
    {
      image: Apple,
      audio: AppleAudio,
      id: "apple",
      isDisplayed: true,
      modalChoices: [
        { image: LetterA, isCorrect: true },
        { image: LetterC, isCorrect: false },
        { image: LetterD, isCorrect: false },
      ],
    },
    {
      image: Yogurt,
      audio: AppleAudio,
      id: "yogurt",
      isDisplayed: true,
      modalChoices: [
        { image: LetterY, isCorrect: true },
        { image: LetterJ, isCorrect: false },
        { image: LetterH, isCorrect: false },
      ],
    },
    {
      image: Noodles,
      audio: AppleAudio,
      id: "noodles",
      isDisplayed: true,
      modalChoices: [
        { image: LetterN, isCorrect: true },
        { image: LetterM, isCorrect: false },
        { image: LetterK, isCorrect: false },
      ],
    },
    {
      image: Carrots,
      audio: BreadAudio,
      id: "carrots",
      isDisplayed: true,
      modalChoices: [
        { image: LetterC, isCorrect: true },
        { image: LetterE, isCorrect: false },
        { image: LetterF, isCorrect: false },
      ],
    },
    {
      image: Dumpling,
      audio: CherryAudio,
      id: "dumpling",
      isDisplayed: true,
      modalChoices: [
        { image: LetterD, isCorrect: true },
        { image: LetterQ, isCorrect: false },
        { image: LetterR, isCorrect: false },
      ],
    },
    {
      image: Eggplant,
      audio: ChickenAudio,
      id: "eggplant",
      isDisplayed: true,
      modalChoices: [
        { image: LetterY, isCorrect: false },
        { image: LetterM, isCorrect: false },
        { image: LetterE, isCorrect: true },
      ],
    },
    {
      image: Fish,
      audio: CookieAudio,
      id: "fish",
      isDisplayed: true,
      modalChoices: [
        { image: LetterK, isCorrect: false },
        { image: LetterF, isCorrect: true },
        { image: LetterG, isCorrect: false },
      ],
    },
    {
      image: IceCream,
      audio: EggAudio,
      id: "icecream",
      isDisplayed: true,
      modalChoices: [
        { image: LetterI, isCorrect: true },
        { image: LetterO, isCorrect: false },
        { image: LetterZ, isCorrect: false },
      ],
    },
    {
      image: Mango,
      audio: FriesAudio,
      id: "mango",
      isDisplayed: true,
      modalChoices: [
        { image: LetterA, isCorrect: false },
        { image: LetterD, isCorrect: false },
        { image: LetterM, isCorrect: true },
      ],
    },
    {
      image: Orange,
      audio: MilkAudio,
      id: "orange",
      isDisplayed: true,
      modalChoices: [
        { image: LetterP, isCorrect: false },
        { image: LetterR, isCorrect: false },
        { image: LetterO, isCorrect: true },
      ],
    },
    {
      image: Grapes,
      audio: WaterAudio,
      id: "grapes",
      isDisplayed: true,
      modalChoices: [
        { image: LetterK, isCorrect: false },
        { image: LetterG, isCorrect: true },
        { image: LetterB, isCorrect: false },
      ],
    },
  
      {
      image: Lemon,
      audio: AppleAudio,
      id: "lemon",
      isDisplayed: true,
      modalChoices: [
        { image: LetterL, isCorrect: true },
        { image: LetterI, isCorrect: false },
        { image: LetterH, isCorrect: false },
      ],
    },
     {
      image: Kale,
      audio: AppleAudio,
      id: "kale",
      isDisplayed: true,
      modalChoices: [
        { image: LetterK, isCorrect: true },
        { image: LetterC, isCorrect: false },
        { image: LetterQ, isCorrect: false },
      ],
    },
     {
      image: Jam,
      audio: AppleAudio,
      id: "jam",
      isDisplayed: true,
      modalChoices: [
        { image: LetterJ, isCorrect: true },
        { image: LetterG, isCorrect: false },
        { image: LetterD, isCorrect: false },
      ],
    },
     {
      image: Hamburger,
      audio: AppleAudio,
      id: "hamburger",
      isDisplayed: true,
      modalChoices: [
        { image: LetterH, isCorrect: true },
        { image: LetterJ, isCorrect: false },
        { image: LetterL, isCorrect: false },
      ],
    },
     {
      image: Pineapple,
      audio: AppleAudio,
      id: "pineapple",
      isDisplayed: true,
      modalChoices: [
        { image: LetterP, isCorrect: true },
        { image: LetterF, isCorrect: false },
        { image: LetterH, isCorrect: false },
      ],
    },
    {
      image: Rice,
      audio: AppleAudio,
      id: "rice",
      isDisplayed: true,
      modalChoices: [
        { image: LetterR, isCorrect: true },
        { image: LetterF, isCorrect: false },
        { image: LetterB, isCorrect: false },
      ],
    },
    {
      image: Tomato,
      audio: AppleAudio,
      id: "tomato",
      isDisplayed: true,
      modalChoices: [
        { image: LetterT, isCorrect: true },
        { image: LetterO, isCorrect: false },
        { image: LetterD, isCorrect: false },
      ],
    },
    {
      image: Strawberry,
      audio: AppleAudio,
      id: "strawberry",
      isDisplayed: true,
      modalChoices: [
        { image: LetterS, isCorrect: true },
        { image: LetterX, isCorrect: false },
        { image: LetterC, isCorrect: false },
      ],
    },
    {
      image: Watermelon,
      audio: AppleAudio,
      id: "watermelon",
      isDisplayed: true,
      modalChoices: [
        { image: LetterW, isCorrect: true },
        { image: LetterA, isCorrect: false },
        { image: LetterH, isCorrect: false },
      ],
    },
    {
      image: Vinegar,
      audio: AppleAudio,
      id: "vinegar",
      isDisplayed: true,
      modalChoices: [
        { image: LetterV, isCorrect: true },
        { image: LetterB, isCorrect: false },
        { image: LetterD, isCorrect: false },
      ],
    },
    {
      image: Ube,
      audio: AppleAudio,
      id: "ube",
      isDisplayed: true,
      modalChoices: [
        { image: LetterU, isCorrect: true },
        { image: LetterV, isCorrect: false },
        { image: LetterO, isCorrect: false },
      ],
    },
    {
      image: Zucchini,
      audio: AppleAudio,
      id: "zucchini",
      isDisplayed: true,
      modalChoices: [
        { image: LetterZ, isCorrect: true },
        { image: LetterS, isCorrect: false },
        { image: LetterD, isCorrect: false },
      ],
    },
    {
      image: Quesidilla,
      audio: AppleAudio,
      id: "quesidilla",
      isDisplayed: true,
      modalChoices: [
        { image: LetterQ, isCorrect: true },
        { image: LetterK, isCorrect: false },
        { image: LetterW, isCorrect: false },
      ],
    },
    
  ]);

  const [foodItems, setFoodItems] = useState([])

  useEffect(() => {
    // Function to select random elements without replacement
function getRandomElements(arr, numElements) {
  const shuffled = arr.slice(); // Create a copy to avoid modifying original array
  const selected = [];
  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * (shuffled.length - i)); // Adjust for shrinking array
    selected.push(shuffled.splice(randomIndex, 1)[0]);
  }
  return selected;
}

  const x = getRandomElements(foodItemsList, 12)

  setFoodItems(x)
  }, [])

  // Variable to store what food item is being dragged
  const [currentFoodItem, setCurrentFoodItem] = useState(null);

  // Flag to check if the food item being dragged has been dropped
  const [isFoodItemDropped, setIsFoodItemDropped] = useState(false);

  // Data to show in the modal/popup
  const [modalData, setModalData] = useState({
    item: "",
    choices: [],
    audio: null,
  });

  // Flag to check if modal/popup should be shown
  const [modalActive, setModalActive] = useState(false);

  // Flag to check if the answer in the modal is correct
  const [isModalAnswerCorrect, setIsModalAnswerCorrect] = useState(false);

  // Scale of the girl. To be increased when getting correct answers
  const [scale, setScale] = useState(1);

  // Reference for the audio to be played in the modal / popup
  const audioRef = useRef();

  function handleDragEnd(event) {
    // Check if dragged food item is dropped in the droppable
    if (event.over && event.over.id === "droppable-zone" && !currentFoodItem) {
      // Get the active draggable food item
      const active = event.active;

      // Find the dragged food item in the list of food items
      const item = foodItems.find((f) => "food-" + f.id == active.id);

      // The food item has been dropped
      setIsFoodItemDropped(true);

      // Display the dropped food item in the container (near the mouth of the girl)
      setCurrentFoodItem(item.image);

      // Remove the dropped food item from the draggable container of food items
      // setFoodItems((foodItems) => {
      //   return foodItems.filter((f) => "food-" + f.id != active.id);
      // });
      setFoodItems((foodItems) => {
        return foodItems.map((f) =>
          "food-" + f.id === active.id ? { ...f, isDisplayed: false } : f
        );
      });

      // Set the data for the modal / popup
      setModalData({
        id: item.id,
        choices: item.modalChoices,
        audio: item.audio,
      });

      // Show modal / popup
      setModalActive(true);

      // Reset the modal status
      setIsModalAnswerCorrect(false);
    }
  }

  useEffect(() => {
    // If the selected choice in the modal is correct, then
    if (isModalAnswerCorrect && !modalActive) {
      // Remove the dropped item from the droppable zone after 1 second
      setTimeout(() => {
        setCurrentFoodItem("");
        setIsFoodItemDropped(false);
      }, 0.5 * 1000);

      // Scale up the droppable zone (girl) after 1 second
      setTimeout(() => {
        setScale((scale) => scale + 0.05);
      }, 1 * 1000);
    }
  }, [isModalAnswerCorrect, modalActive]);

  return (
    <main className="main">
      <div className="drag-n-drop-container">
        <DndContext onDragEnd={handleDragEnd}>
          {/* Container for the droppable zone */}
          <div className="droppable-container">
            <DroppableZone scale={scale}>
              {isFoodItemDropped && (
                <div className="dropped-item">
                  <img src={currentFoodItem} alt="dropped-item" />
                </div>
              )}
            </DroppableZone>
          </div>

          {/* Container for the food items */}
          <div className="draggable-container">
            <div className="foods-container">
              {/* Iterating over the food items and displaying it */}
              {foodItems.map(({ id, image, modalChoices, isDisplayed }, i) => {
                return isDisplayed ? (
                  <FoodItem
                    key={i}
                    id={"food-" + id}
                    modalChoices={modalChoices}
                  >
                    <img src={image} alt={id} />
                  </FoodItem>
                ) : (
                  <div key={i}></div>
                );
              })}
            </div>
          </div>
        </DndContext>
      </div>

      {/* MODAL / POPUP */}
      {modalActive && (
        <div className="modal">
          <div className="modal-backdrop"></div>
          <div className="modal-container">
          {/* SOUND ICON */}
<div className="soundicon" onClick={() => audioRef.current.play()}>
  <img src={soundicon} alt="soundicon" />
</div>
<audio ref={audioRef} src={modalData.audio} />

            {/* CHOICES */}
            <div className="choices">
              {modalData.choices.map(({ image, isCorrect }, i) => {
                return (
                  <ModalChoice
                    key={i}
                    image = {image}
                    isCorrect={isCorrect}
                    setModalActive={setModalActive}
                    isModalAnswerCorrect={isModalAnswerCorrect}
                    setIsModalAnswerCorrect={setIsModalAnswerCorrect}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default DragAndDrop;


// Component for the food item
const FoodItem = ({ id, modalChoices, children }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: { choices: modalChoices },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        cursor: isDragging ? "grabbing" : "grab",
      }
    : undefined;

  return (
    <button
      ref={setNodeRef}
      className="food-item"
      style={style}
      {...listeners}
      {...attributes}
      id={id}
    >
      {children}
    </button>
  );
};

// Component for the droppable zone
const DroppableZone = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable-zone",
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
    transform: "scale(" + props.scale + ")",
  };

  return (
    <div style={style} className="droppable-zone" ref={setNodeRef}>
      {props.children}
    </div>
  );
};

// Component for the modal/popup choices
const ModalChoice = ({
  image,
  isCorrect,
  setModalActive,
  isModalAnswerCorrect,
  setIsModalAnswerCorrect,
}) => {
  // Status whether the choice selected is right or wrong
  const [status, setStatus] = useState("");

  return (
    <div
      className={`choice ${status}`}
      onClick={(e) => {
        // If the correct answer is already selected, prevent any further selection
        if (isModalAnswerCorrect) {
          e.preventDefault();
        } else {
          // If the correct answer is not yet selected, then...
          // If selected choice is not the correct answer, set status to wrong
          if (!isCorrect) {
            setStatus("wrong");
          } else {
            // If selected choice is the correct answer, then...
            setStatus("right");
            setIsModalAnswerCorrect(true);

            // Close modal after 2 seconds
            setTimeout(() => {
              setModalActive(false);
            }, 2 * 1000);
          }
        }
      }}
    >
      {image ? <img src={image} alt="letter" /> : label}
    </div>
  );
};