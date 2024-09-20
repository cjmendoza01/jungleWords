// Imports Advance Stage 1 items
import Apple from "../assets/advs1/Apple.png";
import Ball from "../assets/advs1/Ball.png";
import Banana from "../assets/advs1/Banana.png";
import Bear from "../assets/advs1/Bear.png";
import Bird from "../assets/advs1/Bird.png";
import Blanket from "../assets/advs1/Blanket.png";
import BlueBall from "../assets/advs1/BlueBall.png";
import Cake from "../assets/advs1/Cake.png";
import Car from "../assets/advs1/Car.png";
import Cat from "../assets/advs1/Cat.png";
import Chair from "../assets/advs1/Chair.png";
import Clown from "../assets/advs1/Clown.png";
import Dog from "../assets/advs1/Dog.png";
import Duck from "../assets/advs1/Duck.png";
import Fish from "../assets/advs1/Fish.png";
import Flower from "../assets/advs1/Flower.png";
import Frog from "../assets/advs1/Frog.png";
import Grapes from "../assets/advs1/Kite.png";
import Mice from "../assets/advs1/Mice.png";
import Monkey from "../assets/advs1/Monkey.png";
import Orange from "../assets/advs1/Orange.png";
import Pillow from "../assets/advs1/Pillow.png";
import Rabbit from "../assets/advs1/Rabbit.png";
import Salad from "../assets/advs1/Salad.png";
import Shoes from "../assets/advs1/Shoes.png";
import Sky from "../assets/advs1/Sky.png";
import Sock from "../assets/advs1/Sock.png";
import Star from "../assets/advs1/Star.png";
import Sun from "../assets/advs1/Sun.png";
import Sweater from "../assets/advs1/Sweater.png";
import Tree from "../assets/advs1/Tree.png";
import Truck from "../assets/advs1/Truck.png";

// Imports Advance Stage 2 items
import bikeWheels from "../assets/advs2/bikeWheels.png";
import birdTrees from "../assets/advs2/birdTrees.png";
import bookShelf from "../assets/advs2/bookShelf.png";
import bowlMilk from "../assets/advs2/bowlMilk.png";
import carGreen from "../assets/advs2/carGreen.png";
import catHouse from "../assets/advs2/catHouse.png";
import chairSit from "../assets/advs2/chairSit.png";
import cleansRoom from "../assets/advs2/cleansRoom.png";
import clockWall from "../assets/advs2/clockWall.png";
import cookiesFriends from "../assets/advs2/cookiesFriends.png";
import cupChocolate from "../assets/advs2/cupChocolate.png";
import dogBall from "../assets/advs2/dogBall.png";
import dogDoor from "../assets/advs2/dogDoor.png";
import dogWalk from "../assets/advs2/dogWalk.png";
import drawsPencil from "../assets/advs2/drawsPencil.png";
import hatSun from "../assets/advs2/hatSun.png";
import icecreamSun from "../assets/advs2/icecreamSun.png";
import kicksBall from "../assets/advs2/kicksBall.png";
import momTable from "../assets/advs2/momTable.png";
import moonBlue from "../assets/advs2/moonBlue.png";
import picnicPark from "../assets/advs2/picnicPark.png";
import readBed from "../assets/advs2/readBed.png";
import runsBus from "../assets/advs2/runsBus.png";
import singsFamily from "../assets/advs2/singsFamily.png";
import starsSky from "../assets/advs2/starsSky.png";
import swingsSlides from "../assets/advs2/swingsSlides.png";

export const itemsListAdvs1 = [
	{ image: Apple, id: "apple" },
	{ image: Ball, id: "ball" },
	{ image: Banana, id: "banana" },
	{ image: Bear, id: "bear" },
	{ image: Bird, id: "bird" },
	{ image: Blanket, id: "blanket" },
	{ image: BlueBall, id: "blue_ball" },
	{ image: Cake, id: "cake" },
	{ image: Car, id: "car" },
	{ image: Cat, id: "cat" },
	{ image: Chair, id: "chair" },
	{ image: Clown, id: "clown" },
	{ image: Dog, id: "dog" },
	{ image: Duck, id: "duck" },
	{ image: Fish, id: "fish" },
	{ image: Flower, id: "flower" },
	{ image: Frog, id: "frog" },
	{ image: Grapes, id: "grapes" },
	{ image: Mice, id: "mice" },
	{ image: Monkey, id: "monkey" },
	{ image: Orange, id: "orange" },
	{ image: Pillow, id: "pillow" },
	{ image: Rabbit, id: "rabbit" },
	{ image: Salad, id: "salad" },
	{ image: Shoes, id: "shoes" },
	{ image: Sky, id: "sky" },
	{ image: Sock, id: "sock" },
	{ image: Star, id: "star" },
	{ image: Sun, id: "sun" },
	{ image: Sweater, id: "sweater" },
	{ image: Tree, id: "tree" },
	{ image: Truck, id: "truck" },
];

export const itemsListAdvs2 = [
	{ image: bikeWheels, id: "bikeWheels" },
	{ image: birdTrees, id: "birdTrees" },
	{ image: bookShelf, id: "bookShelf" },
	{ image: bowlMilk, id: "bowlMilk" },
	{ image: carGreen, id: "carGreen" },
	{ image: catHouse, id: "catHouse" },
	{ image: chairSit, id: "chairSit" },
	{ image: cleansRoom, id: "cleansRoom" },
	{ image: clockWall, id: "clockWall" },
	{ image: cookiesFriends, id: "cookiesFriends" },
	{ image: cupChocolate, id: "cupChocolate" },
	{ image: dogBall, id: "dogBall" },
	{ image: dogDoor, id: "dogDoor" },
	{ image: dogWalk, id: "dogWalk" },
	{ image: drawsPencil, id: "drawsPencil" },
	{ image: hatSun, id: "hatSun" },
	{ image: icecreamSun, id: "icecreamSun" },
	{ image: kicksBall, id: "kicksBall" },
	{ image: momTable, id: "momTable" },
	{ image: moonBlue, id: "moonBlue" },
	{ image: picnicPark, id: "picnicPark" },
	{ image: readBed, id: "readBed" },
	{ image: runsBus, id: "runsBus" },
	{ image: singsFamily, id: "singsFamily" },
	{ image: starsSky, id: "starsSky" },
	{ image: swingsSlides, id: "swingsSlides" },
];

export const qrGameQsGetter = (numElements, level, notIncluddedValues) => {
	let items = itemsListAdvs1;

	if (level === 2) {
		items = itemsListAdvs2;
	}

	if (notIncluddedValues?.length) {
		console.log("notIncVals");
		console.log(notIncluddedValues);
		items = items.filter(
			(item) =>
				!notIncluddedValues.some((notIncluded) => notIncluded.id === item.id)
		);
	}

	const shuffled = items.slice();
	const selected = [];

	for (let i = 0; i < numElements; i++) {
		const randomIndex = Math.floor(Math.random() * (shuffled.length - i));
		selected.push(shuffled.splice(randomIndex, 1)[0]);
	}

	return selected;
};
