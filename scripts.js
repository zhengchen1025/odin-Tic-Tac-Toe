const tableCells = document.querySelectorAll("td[data-row][data-col]");
const info = document.querySelector(".info");
let isWin = false;

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
  },
};

tableCells.forEach((cell) => {
  const row = parseInt(cell.dataset.row);
  const col = parseInt(cell.dataset.col);

  cell.addEventListener("click", () => {
    console.log(`Clicked cell at row ${row}, column ${col}`);

    if (checkTurns.takeTurns() === -1) {
      cell.textContent = "x";
      info.textContent = "Player 2's turn";
      isWin = checkWin(tableCells);
      console.log(isWin);

    } else {
      cell.textContent = "o";
      info.textContent = "Player 1's turn";
      isWin = checkWin(tableCells);
      console.log(isWin);

    }
  });
});

function checkWin(cells) {
  function allEqual(array) {
    return array.every((textContent) => textContent === array[0] && textContent !== "");
  }

  for (let i = 0; i < 3; i++) {
    if (
      allEqual([
        cells[i * 3].textContent,
        cells[i * 3 + 1].textContent,
        cells[i * 3 + 2].textContent,
      ])
    ) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (allEqual([
      cells[i].textContent,
      cells[i + 3].textContent,
      cells[i + 6].textContent
    ])) {
      return true;
    }
  }
  if (allEqual([cells[0].textContent, cells[4].textContent, cells[8].textContent]) || allEqual([cells[2].textContent, cells[4].textContent, cells[6].textContent])) {
    return true;
  }
  return false;
}










