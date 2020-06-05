"use strict";
let tuit = document.querySelector("#new form textarea");
let printDate = new Date();
let tuitear = document.querySelector("form a.action");
let textToTweet = document.querySelector(
  "main > section.historic article p.text"
);
let creationDate = document.querySelector(
  "main > section.historic article p.date"
);
console.log(tuit.value, creationDate, tuitear);
/*
tuitear.onclick = function () {
  const text = document.createElement("p");
  text.textContent = text;
};
*/
/*
const printTweet = function (event) {
  const previousTweet = event.target;
  const updatedCount = li.getAttribute("data-count") + 1;

  li.textContent = `${updatedCount} clicks`;

  li.setAttribute("data-count", updatedCount);
};
*/
/*
<section>
  <article>
    <p text></p>
    <p date></p>
  </article>
  <a delete></a>
</section>;
*/
