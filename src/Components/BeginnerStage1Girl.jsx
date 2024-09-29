import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useRef, useState } from "react";
import "./BeginnerStage1Girl.css";

// Import all images/assets of food items
import Adobo from "../assets/foods/Adobo.png";
import Apple from "../assets/foods/Apple.png";
import Atis from "../assets/foods/Atis.png";
import Banana from "../assets/foods/Banana.png";
import Beans from "../assets/foods/Beans.png";
import Biscuit from "../assets/foods/Biscuit.png";
import Bread from "../assets/foods/Bread.png";
import Butter from "../assets/foods/Butter.png";
import Carrots from "../assets/foods/Carrots.png";
import Cola from "../assets/foods/Cola.png";
import Cookie from "../assets/foods/Cookie.png";
import Corn from "../assets/foods/Corn.png";
import Donut from "../assets/foods/Donut.png";
import Dumpling from "../assets/foods/Dumpling.png";
import Durian from "../assets/foods/Durian.png";
import Egg from "../assets/foods/Egg.png";
import Eggplant from "../assets/foods/Eggplant.png";
import Fish from "../assets/foods/Fish.png";
import Flan from "../assets/foods/Flan.png";
import Garlic from "../assets/foods/Garlic.png";
import Grapes from "../assets/foods/Grapes.png";
import Guava from "../assets/foods/Guava.png";
import Ham from "../assets/foods/Ham.png";
import Honey from "../assets/foods/Honey.png";
import Itlog from "../assets/foods/Itlog.png";
import Jackfruit from "../assets/foods/Jackfruit.png";
import Jam from "../assets/foods/Jam.png";
import Jelly from "../assets/foods/Jelly.png";
import Juice from "../assets/foods/Juice.png";
import Ketchup from "../assets/foods/Ketchup.png";
import Kiwi from "../assets/foods/Kiwi.png";
import Lechon from "../assets/foods/Lechon.png";
import Lemon from "../assets/foods/Lemon.png";
import Lettuce from "../assets/foods/Lettuce.png";
import Lumpia from "../assets/foods/Lumpia.png";
import Mango from "../assets/foods/Mango.png";
import Melon from "../assets/foods/Melon.png";
import Milk from "../assets/foods/Milk.png";
import Muffin from "../assets/foods/Muffin.png";
import Mushroom from "../assets/foods/Mushroom.png";
import Nachos from "../assets/foods/Nachos.png";
import Noodles from "../assets/foods/Noodles.png";
import Nuts from "../assets/foods/Nuts.png";
import Oatmeal from "../assets/foods/Oatmeal.png";
import Olive from "../assets/foods/Olive.png";
import Omelette from "../assets/foods/Omelette.png";
import Onion from "../assets/foods/Onion.png";
import Orange from "../assets/foods/Orange.png";
import Papaya from "../assets/foods/Papaya.png";
import Pasta from "../assets/foods/Pasta.png";
import Pea from "../assets/foods/Pea.png";
import Peach from "../assets/foods/Peach.png";
import Pear from "../assets/foods/Pear.png";
import Pineapple from "../assets/foods/Pineapple.png";
import Pumpkin from "../assets/foods/Pumpkin.png";
import Quail from "../assets/foods/Quail.png";
import Radish from "../assets/foods/Radish.png";
import Raisin from "../assets/foods/Raisin.png";
import Rambutan from "../assets/foods/Rambutan.png";
import Rice from "../assets/foods/Rice.png";
import Salmon from "../assets/foods/Salmon.png";
import Salt from "../assets/foods/Salt.png";
import Spinach from "../assets/foods/Spinach.png";
import Squash from "../assets/foods/Squash.png";
import Strawberry from "../assets/foods/Strawberry.png";
import Tamarind from "../assets/foods/Tamarind.png";
import Tangerine from "../assets/foods/Tangerine.png";
import Tofu from "../assets/foods/Tofu.png";
import Tomato from "../assets/foods/Tomato.png";
import Tuna from "../assets/foods/Tuna.png";
import Vanilla from "../assets/foods/Vanilla.png";
import Vegetable from "../assets/foods/Vegetable.png";
import Vinegar from "../assets/foods/Vinegar.png";
import Wafer from "../assets/foods/Wafer.png";
import Waffle from "../assets/foods/Waffle.png";
import Water from "../assets/foods/Water.png";
import Watermelon from "../assets/foods/Watermelon.png";
import Yakult from "../assets/foods/Yakult.png";
import Yam from "../assets/foods/Yam.png";
import Yema from "../assets/foods/Yema.png";
import Yogurt from "../assets/foods/Yogurt.png";
import Yolk from "../assets/foods/Yolk.png";
import ZestO from "../assets/foods/ZestO.png";

// Import all sounds of food items
import AdoboAudio from "../assets/foods/foodsAudio/Adobo.mp3";
import AppleAudio from "../assets/foods/foodsAudio/Apple.mp3";
import AtisAudio from "../assets/foods/foodsAudio/Atis.mp3";
import BananaAudio from "../assets/foods/foodsAudio/Banana.mp3";
import BeansAudio from "../assets/foods/foodsAudio/Beans.mp3";
import BiscuitAudio from "../assets/foods/foodsAudio/Biscuit.mp3";
import ButterAudio from "../assets/foods/foodsAudio/Butter.mp3";
import BreadAudio from "../assets/foods/foodsAudio/Bread.mp3";
import CarrotsAudio from "../assets/foods/foodsAudio/Carrot.mp3";
import ColaAudio from "../assets/foods/foodsAudio/Cola.mp3";
import CookieAudio from "../assets/foods/foodsAudio/Cookie.mp3";
import CornAudio from "../assets/foods/foodsAudio/Corn.mp3";
import DonutAudio from "../assets/foods/foodsAudio/Donut.mp3";
import DumplingAudio from "../assets/foods/foodsAudio/Dumpling.mp3";
import DurianAudio from "../assets/foods/foodsAudio/Durian.mp3";
import EggAudio from "../assets/foods/foodsAudio/Egg.mp3";
import EggplantAudio from "../assets/foods/foodsAudio/Eggplant.mp3";
import FishAudio from "../assets/foods/foodsAudio/Fish.mp3";
import FlanAudio from "../assets/foods/foodsAudio/Flan.mp3";
import GarlicAudio from "../assets/foods/foodsAudio/Garlic.mp3";
import GrapesAudio from "../assets/foods/foodsAudio/Grape.mp3";
import GuavaAudio from "../assets/foods/foodsAudio/Guava.mp3";
import HamAudio from "../assets/foods/foodsAudio/Ham.mp3";
import HoneyAudio from "../assets/foods/foodsAudio/Honey.mp3";
import JackfruitAudio from "../assets/foods/foodsAudio/Jackfruit.mp3";
import JamAudio from "../assets/foods/foodsAudio/Jam.mp3";
import JellyAudio from "../assets/foods/foodsAudio/Jelly.mp3";
import JuiceAudio from "../assets/foods/foodsAudio/Juice.mp3";
import KetchupAudio from "../assets/foods/foodsAudio/Ketchup.mp3";
import KiwiAudio from "../assets/foods/foodsAudio/Kiwi.mp3";
import LechonAudio from "../assets/foods/foodsAudio/Lechon.mp3";
import LemonAudio from "../assets/foods/foodsAudio/Lemon.mp3";
import LettuceAudio from "../assets/foods/foodsAudio/Lettuce.mp3";
import LollipopAudio from "../assets/foods/foodsAudio/Lollipop.mp3";
import LumpiaAudio from "../assets/foods/foodsAudio/Lumpia.mp3";
import MangoAudio from "../assets/foods/foodsAudio/Mango.mp3";
import MelonAudio from "../assets/foods/foodsAudio/Melon.mp3";
import MilkAudio from "../assets/foods/foodsAudio/Milk.mp3";
import MuffinAudio from "../assets/foods/foodsAudio/Muffin.mp3";
import MushroomAudio from "../assets/foods/foodsAudio/Mushroom.mp3";
import NachosAudio from "../assets/foods/foodsAudio/Nachos.mp3";
import NoodlesAudio from "../assets/foods/foodsAudio/Noodles.mp3";
import NutsAudio from "../assets/foods/foodsAudio/Nuts.mp3";
import OatmealAudio from "../assets/foods/foodsAudio/Oatmeal.mp3";
import OliveAudio from "../assets/foods/foodsAudio/Olive.mp3";
import OmeletteAudio from "../assets/foods/foodsAudio/Omelette.mp3";
import OnionAudio from "../assets/foods/foodsAudio/Onion.mp3";
import OrangeAudio from "../assets/foods/foodsAudio/Orange.mp3";
import PapayaAudio from "../assets/foods/foodsAudio/Papaya.mp3";
import PastaAudio from "../assets/foods/foodsAudio/Pasta.mp3";
import PeaAudio from "../assets/foods/foodsAudio/Pea.mp3";
import PeachAudio from "../assets/foods/foodsAudio/Peach.mp3";
import PearAudio from "../assets/foods/foodsAudio/Pear.mp3";
import PineappleAudio from "../assets/foods/foodsAudio/Pineapple.mp3";
import PumpkinAudio from "../assets/foods/foodsAudio/Pumpkin.mp3";
import QuailAudio from "../assets/foods/foodsAudio/Quail.mp3";
import RadishAudio from "../assets/foods/foodsAudio/Raddish.mp3";
import RaisinAudio from "../assets/foods/foodsAudio/Raisin.mp3";
import RambutanAudio from "../assets/foods/foodsAudio/Rambutan.mp3";
import RiceAudio from "../assets/foods/foodsAudio/Rice.mp3";
import SalmonAudio from "../assets/foods/foodsAudio/Salmon.mp3";
import SaltAudio from "../assets/foods/foodsAudio/Salt.mp3";
import SoupAudio from "../assets/foods/foodsAudio/Soup.mp3";
import SpinachAudio from "../assets/foods/foodsAudio/Spinach.mp3";
import SquashAudio from "../assets/foods/foodsAudio/Squash.mp3";
import StrawberryAudio from "../assets/foods/foodsAudio/Strawberry.mp3";
import TamarindAudio from "../assets/foods/foodsAudio/Tamarind.mp3";
import TangerineAudio from "../assets/foods/foodsAudio/Tangerine.mp3";
import TofuAudio from "../assets/foods/foodsAudio/Tofu.mp3";
import TomatoAudio from "../assets/foods/foodsAudio/Cookie.mp3";
import TunaAudio from "../assets/foods/foodsAudio/Tuna.mp3";
import VanillaAudio from "../assets/foods/foodsAudio/Vanilla.mp3";
import VegetableAudio from "../assets/foods/foodsAudio/Vegetable.mp3";
import VinegarAudio from "../assets/foods/foodsAudio/Vinegar.mp3";
import WaferAudio from "../assets/foods/foodsAudio/Wafer.mp3";
import WaffleAudio from "../assets/foods/foodsAudio/Waffle.mp3";
import WaterAudio from "../assets/foods/foodsAudio/Water.mp3";
import WatermelonAudio from "../assets/foods/foodsAudio/Watermelon.mp3";
import YakultAudio from "../assets/foods/foodsAudio/Yakult.mp3";
import YamAudio from "../assets/foods/foodsAudio/Yam.mp3";
import YemaAudio from "../assets/foods/foodsAudio/Yema.mp3";
import YogurtAudio from "../assets/foods/foodsAudio/Yogurt.mp3";
import YolkAudio from "../assets/foods/foodsAudio/Yolk.mp3";
import ZestoAudio from "../assets/foods/foodsAudio/ZestO.mp3";

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
import soundicon from "../assets/Volume.png";

const BeginnerStage1Boy = () => {
	// Food items to display in the side and to be dragged
	const [foodItemsList, setFoodItemsList] = useState([
		{
			image: Adobo,
			audio: AdoboAudio,
			id: "adobo",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterB, isCorrect: false },
				{ image: LetterA, isCorrect: true },
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
			image: Atis,
			audio: AtisAudio,
			id: "atis",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterH, isCorrect: false },
				{ image: LetterJ, isCorrect: false },
				{ image: LetterA, isCorrect: true },
			],
		},
		{
			image: Banana,
			audio: BananaAudio,
			id: "banana",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterB, isCorrect: true },
				{ image: LetterM, isCorrect: false },
				{ image: LetterK, isCorrect: false },
			],
		},
		{
			image: Beans,
			audio: BeansAudio,
			id: "beans",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterB, isCorrect: true },
				{ image: LetterE, isCorrect: false },
				{ image: LetterF, isCorrect: false },
			],
		},
		{
			image: Biscuit,
			audio: BiscuitAudio,
			id: "biscuit",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterB, isCorrect: true },
				{ image: LetterQ, isCorrect: false },
				{ image: LetterR, isCorrect: false },
			],
		},
		{
			image: Bread,
			audio: BreadAudio,
			id: "bread",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: false },
				{ image: LetterM, isCorrect: false },
				{ image: LetterB, isCorrect: true },
			],
		},
		{
			image: Butter,
			audio: ButterAudio,
			id: "butter",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterK, isCorrect: false },
				{ image: LetterB, isCorrect: true },
				{ image: LetterG, isCorrect: false },
			],
		},
		{
			image: Carrots,
			audio: CarrotsAudio,
			id: "carrots",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterC, isCorrect: true },
				{ image: LetterO, isCorrect: false },
				{ image: LetterZ, isCorrect: false },
			],
		},
		{
			image: Cola,
			audio: ColaAudio,
			id: "cola",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterA, isCorrect: false },
				{ image: LetterD, isCorrect: false },
				{ image: LetterC, isCorrect: true },
			],
		},
		{
			image: Cookie,
			audio: CookieAudio,
			id: "cookie",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: false },
				{ image: LetterR, isCorrect: false },
				{ image: LetterC, isCorrect: true },
			],
		},
		{
			image: Corn,
			audio: CornAudio,
			id: "corn",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterK, isCorrect: false },
				{ image: LetterC, isCorrect: true },
				{ image: LetterB, isCorrect: false },
			],
		},

		{
			image: Donut,
			audio: DonutAudio,
			id: "donut",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterD, isCorrect: true },
				{ image: LetterI, isCorrect: false },
				{ image: LetterH, isCorrect: false },
			],
		},
		{
			image: Dumpling,
			audio: DumplingAudio,
			id: "dumpling",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterD, isCorrect: true },
				{ image: LetterC, isCorrect: false },
				{ image: LetterQ, isCorrect: false },
			],
		},
		{
			image: Durian,
			audio: DurianAudio,
			id: "durian",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterD, isCorrect: true },
				{ image: LetterG, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		{
			image: Egg,
			audio: EggAudio,
			id: "egg",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterE, isCorrect: true },
				{ image: LetterJ, isCorrect: false },
				{ image: LetterL, isCorrect: false },
			],
		},
		{
			image: Eggplant,
			audio: EggplantAudio,
			id: "eggplant",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterE, isCorrect: true },
				{ image: LetterF, isCorrect: false },
				{ image: LetterH, isCorrect: false },
			],
		},
		{
			image: Fish,
			audio: FishAudio,
			id: "fish",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterF, isCorrect: true },
				{ image: LetterR, isCorrect: false },
				{ image: LetterB, isCorrect: false },
			],
		},
		{
			image: Flan,
			audio: FlanAudio,
			id: "flan",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterF, isCorrect: true },
				{ image: LetterO, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		{
			image: Garlic,
			audio: GarlicAudio,
			id: "garlic",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterG, isCorrect: true },
				{ image: LetterX, isCorrect: false },
				{ image: LetterC, isCorrect: false },
			],
		},
		{
			image: Grapes,
			audio: GrapesAudio,
			id: "grapes",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterG, isCorrect: true },
				{ image: LetterA, isCorrect: false },
				{ image: LetterH, isCorrect: false },
			],
		},
		{
			image: Guava,
			audio: GuavaAudio,
			id: "guava",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterG, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		{
			image: Ham,
			audio: HamAudio,
			id: "ham",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterH, isCorrect: true },
				{ image: LetterV, isCorrect: false },
				{ image: LetterO, isCorrect: false },
			],
		},
		{
			image: Honey,
			audio: HoneyAudio,
			id: "honey",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterH, isCorrect: true },
				{ image: LetterS, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		// {
		// 	image: Itlog,
		// 	audio: ItlogAudio,
		// 	id: "itlog",
		// 	isDisplayed: true,
		// 	modalChoices: [
		// 		{ image: LetterI, isCorrect: true },
		// 		{ image: LetterK, isCorrect: false },
		// 		{ image: LetterW, isCorrect: false },
		// 	],
		// },
		{
			image: Jackfruit,
			audio: JackfruitAudio,
			id: "jackfruit",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterJ, isCorrect: true },
				{ image: LetterS, isCorrect: false },
				{ image: LetterX, isCorrect: false },
			],
		},
		{
			image: Jam,
			audio: JamAudio,
			id: "jam",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterJ, isCorrect: true },
				{ image: LetterQ, isCorrect: false },
				{ image: LetterA, isCorrect: false },
			],
		},
		{
			image: Jelly,
			audio: JellyAudio,
			id: "jelly",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterJ, isCorrect: true },
				{ image: LetterP, isCorrect: false },
				{ image: LetterR, isCorrect: false },
			],
		},
		{
			image: Juice,
			audio: JuiceAudio,
			id: "juice",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterJ, isCorrect: true },
				{ image: LetterT, isCorrect: false },
				{ image: LetterY, isCorrect: false },
			],
		},
		{
			image: Ketchup,
			audio: KetchupAudio,
			id: "ketchup",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterK, isCorrect: true },
				{ image: LetterC, isCorrect: false },
				{ image: LetterB, isCorrect: false },
			],
		},
		{
			image: Kiwi,
			audio: KiwiAudio,
			id: "kiwi",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterK, isCorrect: true },
				{ image: LetterZ, isCorrect: false },
				{ image: LetterM, isCorrect: false },
			],
		},
		{
			image: Lechon,
			audio: LechonAudio,
			id: "lechon",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterL, isCorrect: true },
				{ image: LetterE, isCorrect: false },
				{ image: LetterX, isCorrect: false },
			],
		},
		{
			image: Lemon,
			audio: LemonAudio,
			id: "lemon",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterL, isCorrect: true },
				{ image: LetterO, isCorrect: false },
				{ image: LetterT, isCorrect: false },
			],
		},
		{
			image: Lettuce,
			audio: LettuceAudio,
			id: "lettuce",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterL, isCorrect: true },
				{ image: LetterD, isCorrect: false },
				{ image: LetterU, isCorrect: false },
			],
		},
		// {
		// 	image: Lollipop,
		// 	audio: LollipopAudio,
		// 	id: "lollipop",
		// 	isDisplayed: true,
		// 	modalChoices: [
		// 		{ image: LetterL, isCorrect: true },
		// 		{ image: LetterD, isCorrect: false },
		// 		{ image: LetterU, isCorrect: false },
		// 	],
		// },
		{
			image: Lumpia,
			audio: LumpiaAudio,
			id: "lumpia",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterL, isCorrect: true },
				{ image: LetterP, isCorrect: false },
				{ image: LetterJ, isCorrect: false },
			],
		},
		{
			image: Mango,
			audio: MangoAudio,
			id: "mango",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterM, isCorrect: true },
				{ image: LetterE, isCorrect: false },
				{ image: LetterL, isCorrect: false },
			],
		},
		{
			image: Melon,
			audio: MelonAudio,
			id: "melon",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterM, isCorrect: true },
				{ image: LetterR, isCorrect: false },
				{ image: LetterS, isCorrect: false },
			],
		},
		{
			image: Milk,
			audio: MilkAudio,
			id: "milk",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterM, isCorrect: true },
				{ image: LetterL, isCorrect: false },
				{ image: LetterQ, isCorrect: false },
			],
		},
		{
			image: Muffin,
			audio: MuffinAudio,
			id: "muffin",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterM, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Mushroom,
			audio: MushroomAudio,
			id: "mushroom",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterM, isCorrect: true },
				{ image: LetterN, isCorrect: false },
				{ image: LetterB, isCorrect: false },
			],
		},
		{
			image: Nachos,
			audio: NachosAudio,
			id: "nachos",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterN, isCorrect: true },
				{ image: LetterL, isCorrect: false },
				{ image: LetterM, isCorrect: false },
			],
		},
		{
			image: Noodles,
			audio: NoodlesAudio,
			id: "noodles",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterN, isCorrect: true },
				{ image: LetterO, isCorrect: false },
				{ image: LetterM, isCorrect: false },
			],
		},
		{
			image: Nuts,
			audio: NutsAudio,
			id: "nuts",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterN, isCorrect: true },
				{ image: LetterU, isCorrect: false },
				{ image: LetterT, isCorrect: false },
			],
		},
		{
			image: Oatmeal,
			audio: OatmealAudio,
			id: "oatmeal",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterO, isCorrect: true },
				{ image: LetterQ, isCorrect: false },
				{ image: LetterU, isCorrect: false },
			],
		},
		{
			image: Olive,
			audio: OliveAudio,
			id: "olive",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterO, isCorrect: true },
				{ image: LetterU, isCorrect: false },
				{ image: LetterA, isCorrect: false },
			],
		},
		{
			image: Omelette,
			audio: OmeletteAudio,
			id: "omelet",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterO, isCorrect: true },
				{ image: LetterC, isCorrect: false },
				{ image: LetterA, isCorrect: false },
			],
		},
		{
			image: Onion,
			audio: OnionAudio,
			id: "onion",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterO, isCorrect: true },
				{ image: LetterN, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Orange,
			audio: OrangeAudio,
			id: "orange",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterO, isCorrect: true },
				{ image: LetterR, isCorrect: false },
				{ image: LetterG, isCorrect: false },
			],
		},
		{
			image: Papaya,
			audio: PapayaAudio,
			id: "papaya",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterE, isCorrect: false },
			],
		},
		{
			image: Pasta,
			audio: PastaAudio,
			id: "pasta",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterA, isCorrect: false },
			],
		},
		{
			image: Pea,
			audio: PeaAudio,
			id: "pea",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterQ, isCorrect: false },
				{ image: LetterM, isCorrect: false },
			],
		},
		{
			image: Peach,
			audio: PeachAudio,
			id: "peach",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterB, isCorrect: false },
			],
		},
		{
			image: Pear,
			audio: PearAudio,
			id: "pear",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterG, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		{
			image: Pineapple,
			audio: PineappleAudio,
			id: "pineapple",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterQ, isCorrect: false },
			],
		},
		{
			image: Pumpkin,
			audio: PumpkinAudio,
			id: "pumpkin",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterP, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Quail,
			audio: QuailAudio,
			id: "quail",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterQ, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Radish,
			audio: RadishAudio,
			id: "radish",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterR, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Raisin,
			audio: RaisinAudio,
			id: "raisin",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterR, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterC, isCorrect: false },
			],
		},
		{
			image: Rambutan,
			audio: RambutanAudio,
			id: "rambutan",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterR, isCorrect: true },
				{ image: LetterL, isCorrect: false },
				{ image: LetterF, isCorrect: false },
			],
		},
		{
			image: Rice,
			audio: RiceAudio,
			id: "rice",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterR, isCorrect: true },
				{ image: LetterZ, isCorrect: false },
				{ image: LetterK, isCorrect: false },
			],
		},
		{
			image: Salmon,
			audio: SalmonAudio,
			id: "salmon",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterS, isCorrect: true },
				{ image: LetterC, isCorrect: false },
				{ image: LetterK, isCorrect: false },
			],
		},
		{
			image: Salt,
			audio: SaltAudio,
			id: "salt",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterS, isCorrect: true },
				{ image: LetterD, isCorrect: false },
				{ image: LetterE, isCorrect: false },
			],
		},
		// {
		// 	image: Soup,
		// 	audio: SoupAudio,
		// 	id: "soup",
		// 	isDisplayed: true,
		// 	modalChoices: [
		// 		{ image: LetterS, isCorrect: true },
		// 		{ image: LetterD, isCorrect: false },
		// 		{ image: LetterE, isCorrect: false },
		// 	],
		// },
		{
			image: Spinach,
			audio: SpinachAudio,
			id: "spinach",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterS, isCorrect: true },
				{ image: LetterA, isCorrect: false },
				{ image: LetterP, isCorrect: false },
			],
		},
		{
			image: Squash,
			audio: SquashAudio,
			id: "squash",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterS, isCorrect: true },
				{ image: LetterH, isCorrect: false },
				{ image: LetterX, isCorrect: false },
			],
		},
		{
			image: Strawberry,
			audio: StrawberryAudio,
			id: "strawberry",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterS, isCorrect: true },
				{ image: LetterL, isCorrect: false },
				{ image: LetterR, isCorrect: false },
			],
		},
		{
			image: Tamarind,
			audio: TamarindAudio,
			id: "tamarind",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterT, isCorrect: true },
				{ image: LetterP, isCorrect: false },
				{ image: LetterD, isCorrect: false },
			],
		},
		{
			image: Tangerine,
			audio: TangerineAudio,
			id: "tangerine",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterT, isCorrect: true },
				{ image: LetterG, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Tofu,
			audio: TofuAudio,
			id: "tofu",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterT, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterS, isCorrect: false },
			],
		},
		{
			image: Tomato,
			audio: TomatoAudio,
			id: "tomato",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterT, isCorrect: true },
				{ image: LetterD, isCorrect: false },
				{ image: LetterW, isCorrect: false },
			],
		},
		{
			image: Tuna,
			audio: TunaAudio,
			id: "pineapple",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterT, isCorrect: true },
				{ image: LetterP, isCorrect: false },
				{ image: LetterR, isCorrect: false },
			],
		},
		{
			image: Vanilla,
			audio: VanillaAudio,
			id: "vanilla",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterV, isCorrect: true },
				{ image: LetterB, isCorrect: false },
				{ image: LetterP, isCorrect: false },
			],
		},
		{
			image: Vegetable,
			audio: VegetableAudio,
			id: "vegetable",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterV, isCorrect: true },
				{ image: LetterF, isCorrect: false },
				{ image: LetterQ, isCorrect: false },
			],
		},
		{
			image: Vinegar,
			audio: VinegarAudio,
			id: "vinegar",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterV, isCorrect: true },
				{ image: LetterJ, isCorrect: false },
				{ image: LetterL, isCorrect: false },
			],
		},
		{
			image: Wafer,
			audio: WaferAudio,
			id: "wafer",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterW, isCorrect: true },
				{ image: LetterS, isCorrect: false },
				{ image: LetterB, isCorrect: false },
			],
		},
		{
			image: Waffle,
			audio: WaffleAudio,
			id: "waffle",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterW, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterX, isCorrect: false },
			],
		},
		{
			image: Water,
			audio: WaterAudio,
			id: "water",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterW, isCorrect: true },
				{ image: LetterR, isCorrect: false },
				{ image: LetterP, isCorrect: false },
			],
		},
		{
			image: Watermelon,
			audio: WatermelonAudio,
			id: "watermelon",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterW, isCorrect: true },
				{ image: LetterR, isCorrect: false },
				{ image: LetterQ, isCorrect: false },
			],
		},
		{
			image: Yakult,
			audio: YakultAudio,
			id: "yakult",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: true },
				{ image: LetterJ, isCorrect: false },
				{ image: LetterR, isCorrect: false },
			],
		},
		{
			image: Yam,
			audio: YamAudio,
			id: "yam",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterH, isCorrect: false },
			],
		},
		{
			image: Yema,
			audio: YemaAudio,
			id: "yema",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: true },
				{ image: LetterM, isCorrect: false },
				{ image: LetterE, isCorrect: false },
			],
		},
		{
			image: Yogurt,
			audio: YogurtAudio,
			id: "yogurt",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: true },
				{ image: LetterL, isCorrect: false },
				{ image: LetterF, isCorrect: false },
			],
		},
		{
			image: Yolk,
			audio: YolkAudio,
			id: "yolk",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterY, isCorrect: true },
				{ image: LetterQ, isCorrect: false },
				{ image: LetterU, isCorrect: false },
			],
		},
		{
			image: ZestO,
			audio: ZestoAudio,
			id: "zesto",
			isDisplayed: true,
			modalChoices: [
				{ image: LetterZ, isCorrect: true },
				{ image: LetterK, isCorrect: false },
				{ image: LetterC, isCorrect: false },
			],
		},
	]);

	const [foodItems, setFoodItems] = useState([]);

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

		const x = getRandomElements(foodItemsList, 6); // Adjusted to select 10 items

		setFoodItems(x);
	}, [foodItemsList]);

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
			setTimeout(() => {
				setModalActive(true);
			}, 50);

			// Reset the modal status
			setIsModalAnswerCorrect(false);
		}
	}

	useEffect(() => {
		// If the selected choice in the modal is correct, then
		if (isModalAnswerCorrect && !modalActive) {
			// Remove the dropped item from the droppable zone after 1 second
			setTimeout(() => {
				setModalData({ item: "", choices: [], audio: null });
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
			<video
				autoPlay
				muted
				loop
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
				}}
			>
				<source src="/bgstage1.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
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
			{/* {modalActive && ( */}
			<div className="modal" style={modalActive ? {} : { display: "none" }}>
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
									image={image}
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
			{/* )} */}
		</main>
	);
};

export default BeginnerStage1Boy;

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
		// backgroundColor: isOver ? "green" : undefined,
		transform: "scale(" + props.scale + ")",
	};

	return (
		<div style={style} className="droppable-zone-girl" ref={setNodeRef}>
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
