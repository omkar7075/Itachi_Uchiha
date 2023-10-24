import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll@4.1.3";

// first and third columns
const oddColumns = [...document.querySelectorAll(".column")].filter(
  (_, index) => index != 1
);
// grid items (figure.column__item)
const gridItems = [...document.querySelectorAll(".column__item")];

// Assign a ContentItem to each GridItem
// gridItems.forEach((gridItem) => {
//   const newItem = new GridItem(gridItem);
//   this.gridItemArr.push(newItem);
//   // The ContentItem instance
//   newItem.contentItem = new ContentItem(
//     this.DOM.contentItems[newItem.position]
//   );
// });

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.13,
  smartphone: { smooth: true },
  tablet: { smooth: true }
});

scroll.on("scroll", (obj) => {
  const lastscroll = obj.scroll.y;
  oddColumns.forEach(
    (column) => (column.style.transform = `translateY(${obj.scroll.y}px)`)
  );
});
