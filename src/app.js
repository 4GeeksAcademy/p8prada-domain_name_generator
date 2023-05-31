/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "last"];
  let noun = ["jogger", "racoon", "fish"];
  let ext = [".com", ".net", ".co", ".us", ".io"];

  let cont = 0;

  for (let x in pronoun) {
    for (let y in adj) {
      for (let z in noun) {
        for (let i in ext) {
          console.log(pronoun[x] + adj[y] + noun[z] + ext[i]);
          cont++;
        }
      }
    }
  }
  console.log("--------------------\n" + cont + " domains generated.");
};
