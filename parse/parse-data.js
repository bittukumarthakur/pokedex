const fs = require("fs")


const format = function (detail) {

  const [number, name, type, speed, hp, xp, attack, defence, weight] = detail;


  let lineBreak = "";

  if (number % 4 === 0) {
    // lineBreak = "<br>";
    lineBreak = "<div/>\n<div>";

  }

  const threeDigitNum = number.padStart(3, 0)

  return `<!-- first card -->
      <div class="card">

        <!-- photo -->
        <div class="fake-table photo">
          <div>
            <div>
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${threeDigitNum}.png" alt="img" width="210px" >
            </div>
          </div>
        </div>

        <!-- name -->
        <div class="fake-table"></div>
        <div class="Pokemon-name">
          <div>${name}</div>
        </div>

        <!-- details -->
        <div class="fake-table">

          <!-- type -->
          <div>
            <div>Type</div>
            <div>${type}</div>
          </div>

          <!-- Weight -->
          <div>
            <div>Weight</div>
            <div>${weight}</div>
          </div>

          <!-- hp -->
          <div>
            <div>Hp</div>
            <div>${hp}</div>
          </div>

          <!-- Xp -->
          <div>
            <div>Xp</div>
            <div>${xp}</div>
          </div>

          <!-- Attack -->
          <div>
            <div>Attack</div>
            <div>${attack}</div>
          </div>

          <!-- Defence -->
          <div>
            <div>Defence</div>
            <div>${defence}</div>
          </div>

        </div>
      </div>
      ${lineBreak}

`}

const main = function () {

  const data = fs.readFileSync("./data.txt", "utf-8");

  const rawData = data.split("\n")
  const lines = rawData.slice(1)

  const finalData = lines.map((line) => {
    return format(line.split("|"));
  });

  // console.log(finalData)
  process.stdout.write(finalData.join(""));



}

main();
// console.log(format(["4", "bulbasaur", "grass,poison", "45", "45", "64", "49", "49", "69"]))