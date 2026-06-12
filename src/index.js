function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bf9ao451t50522b2ac20521746033a31";
  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
  let context =
    "You are a romatic Poem expert.Your mission is to write a 4 line poem in basic HTML and separate each line with a <br/>. Please make sure to follow the user instructions and please do not write headings or titles and write without writing html on the poem and no quotation marks. Sign the poem with 'She Codes AI'at the end or bottom of the poem inside a <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
