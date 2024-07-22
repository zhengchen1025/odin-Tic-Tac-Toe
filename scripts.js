const cells = document.querySelectorAll("td[data-row][data-col]");
const info = document.querySelector('.info');

const Gameboard = {
  "0,0": null,
  "0,1": null,
  "0,2": null,
  "1,0": null,
  "1,1": null,
  "1,2": null,
  "2,0": null,
  "2,1": null,
  "2,2": null,
};

const checkTurns = {
    turn: 1,
    takeTurns() {
        this.turn *= -1;
        return this.turn;
    }
}



cells.forEach((cell) => {
  const row = parseInt(cell.dataset.row);
  const col = parseInt(cell.dataset.col);
  
  cell.addEventListener("click", () => {
    
    console.log(`Clicked cell at row ${row}, column ${col}`);

    if (checkTurns.takeTurns() === -1) {
         cell.textContent = 'x'
        checkTurns.takeTurns();
        console.log(checkTurns.takeTurns())
    }
    else {
         cell.textContent = 'o'
        checkTurns.takeTurns();
        console.log(checkTurns.takeTurns())
    }
  });
});

console.log(checkTurns.takeTurns());
console.log(checkTurns.takeTurns());
console.log(checkTurns.takeTurns());
console.log(checkTurns.takeTurns());
console.log(checkTurns.takeTurns() === -1)
