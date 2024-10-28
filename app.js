const container = document.querySelector(".container")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
  {
    id: 1,
    title: "Bustier Corset Top",
    price: "$50",
    colors: [
      {
        code: "black",
        img: "/images/Corset 1.jpeg",
      },
      {
        code: "brown",
        img: "/images/Summer 1.jpeg",
      },
      {
        code: "light blue",
        img: "/images/Summer 1.jpeg", 
      },
    ],
  },
  {
    id: 2,
    title: "Bustier Summer Dress",
    price: "$180",
    colors: [
      {
        code: "floral",
        img: "/images/Summer 1.jpeg",
      },
      {
        code: "white",
        img: "/images/Summer 1.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "Bodycon Dress",
    price: "$150",
    colors: [
      {
        code: "green",
        img: "/images/Bodycon 1.jpeg",
      },
      {
        code: "red",
        img: "/images/Bodycon 1.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "Bikini Set",
    price: "$200",
    colors: [
      {
        code: "brown",
        img: "/images/Bikini 1.jpeg",
      },
      {
        code: "black",
        img: "/images/Bikini 1.jpeg",
      },
      {
        code: "white",
        img: "/images/Bikini 1.jpeg",
      },
    ],
  },
];

let chosenProduct = products[0]

const currentItemImg = document.querySelector(".itemImg")
const currentItemTitle = document.querySelector(".itemTitle")
const currentItemPrice = document.querySelector(".itemPrice")
const currentItemColor = document.querySelector(".color1")
const currentItemSize = document.querySelectorAll(".size")

menuItems.forEach((item, index) => {
  item.addEventListner("click", () => {
   container.style.transform = `translateY(${-100 * index}vw)`; 

  chosenProduct = products[index]

  currentItemTitle.textContent = chosenItem.title
  currentItemPrice.textContent = chosenItem.price
  currentItemImg.textContent = chosenItem.colors[0].img

  currentItemColors.forEach ((color, index) => {
    color.style.backgroundColor = chosenItem.colors[index].code;
  });
 });
});

currentItemColors.forEach((color,index)=>{
  color,addEventListener("click", ()=> {
    currentItemImg.src = chosenItemcolors[index].img
  })
})