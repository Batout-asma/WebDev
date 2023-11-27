const content = document.querySelector("#content");

const note = document.createElement("ul");
const title = document.createElement("li");
const titleText = document.createElement("b");
const description = document.createElement("lu");

content.appendChild(note);
note.appendChild(title);
note.appendChild(description);
title.appendChild(titleText);

titleText.textContent = "Note 1";
description.textContent = "Description 1";