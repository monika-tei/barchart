"use strict";

// VISUAL PART
// 1. Create the bars as they look in final form
// 2. how to modify the height of a single bar (pass the index of that specific data array)
// 3. Create an array with 40 values, any number 0-32
// 4. Create function that reads that array, and modify height of each bar

// DATA PART
// Make sure that you have an array of 40 values - either created manually, or by the program.
// Make a function to add a new value to that array, and scroll the remaining values, so that there is still only 40 values in total.
// Test as much as possible in the console - call the function manually, and check if the array still looks correct.

// array of data is moving, think unshift() and pop();

window.addEventListener("DOMContentLoaded", init);
const dataArray = [];

function init() {
  buildDataArray();
  console.log(dataArray);

  loop();
}

function loop() {
  console.log("loop");

  scrollDataArray();

  displayDataArray();

  console.log(dataArray);
  // loop the loop
  setTimeout(loop, 800);
}

// I need the array to move
function scrollDataArray() {
  // remove first data bar ( think shift)
  dataArray.shift();
  // add new data bar at the end (push)
  dataArray.push(getNumberOfCustomers());
}

// I need random numbers between 0 and 32
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function buildDataArray() {
  // fill data array with 40 values
  // push values to my data array

  for (let i = 0; i < 40; i++) {
    dataArray.push(getNumberOfCustomers());
  }
  // but actually I want the numbers coming from get New data
}

// to be able to view what is happening
function displayDataArray() {
  console.log("is working");
  document.querySelectorAll("#bars .bar").forEach(displayDataBar);
}

function displayDataBar(element, index) {
  element.style.height = dataArray[index] + "px";
}
