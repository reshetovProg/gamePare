const cards = [
	"../img/1.jpg",
	"../img/2.webp",
	"../img/3.jpg",
	"../img/4.webp",
	"../img/5.jpg",
	"../img/6.webp",
	"../img/7.webp",
	"../img/8.webp",
	"../img/r.webp"
];

const back = [
	"../img/back.jpg",
	"../img/back2.jpg",
]

export class Card {
	img;
	back = cards[8];
	status = false;
	constructor(img) {
		this.img = img;
	}
}

export const createCards = (lvl) => {
	const array = [];
	for (let i = 0; i < lvl / 2; i++) {
		array.push(new Card(cards[i]));
		array.push(new Card(cards[i]));
	}

	for (let i = 0; i < lvl; i++) {
		let a = array[i];
		let r = Math.floor(Math.random() * (lvl - 1));
		array[i] = array[r];
		array[r] = a;
	}
	return array;
}

