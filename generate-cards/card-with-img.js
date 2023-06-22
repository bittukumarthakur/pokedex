const fs = require("fs")


const format = function (detail) {

  const [number, name, type, speed, hp, xp, attack, defence, weight] = detail;


  let lineBreak = "";

  if (number % 4 === 0) {
    lineBreak = "<div/>\n<div>";

  }

  const threeDigitNum = number.padStart(3, 0)


  return `
  <section class="card">

  <!-- photo -->
  <div class="photo">
  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${threeDigitNum}.png" alt="img" width="210px" >
  </div>

  <!-- name -->
  <div class="Pokemon-name">${name}</div>

  <!-- details -->
  <section>

    <!-- Type -->
    <div class="line">
      <span class="title">Type</span>
      <span class="value">${type}</span>
    </div>

    <!-- Weight -->
    <div class="line">
      <span class="title">Weight</span>
      <span class="value">${weight}</span>
    </div>

    <!-- Hp -->
    <div class="line">
      <span class="title">Hp</span>
      <span class="value">${hp}</span>
    </div>

    <!-- Xp -->
    <div class="line">
      <span class="title">Xp</span>
      <span class="value">${xp}</span>
    </div>

    <!-- Attack -->
    <div class="line">
      <span class="title">Attack</span>
      <span class="value">${attack}</span>
    </div>

    <!-- Defence -->
    <div class="line">
      <span class="title">Defence</span>
      <span class="value">${defence}</span>
    </div>

  </section>
</section>
  `

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

        <!-- name-${name} -->
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

  const data = fs.readFileSync("generate-cards/raw-data.txt", "utf-8");

  const rawData = data.split("\n")
  const lines = rawData.slice(1)

  const finalData = lines.map((line) => {
    return format(line.split("|"));
  });

  process.stdout.write(finalData.join(""));

}

main();