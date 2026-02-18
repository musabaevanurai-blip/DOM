//  DOM 1
 document.getElementById("change-text").addEventListener("click",()=> {
    document.getElementById("dom1-text").innerText = "текст озгортулду"
})

// DOM 2
const Input = document.getElementById("search-input");
const list = document.getElementById("search-list").getElementsByTagName("li");
Input.addEventListener("input",() => {
    const filter = Input.value.toLowerCase();
    Array.from(list).forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(filter)? '': 'none';
    })
})

function sum() {
    const n1 = parseFloat(document.getElementById("num1").value) || 0;
    const n2 = parseFloat(document.getElementById("num2").value) || 0;

    const result = n1 + n2;

    document.getElementById("sum-result").innerText = "Сумма: " + result;
}
 
// DOM 3
const editor = document.getElementById("editor");
const saveBtn = document.getElementById("saveBtn");
const savedText = document.getElementById("savedText");

saveBtn.addEventListener("click", () => {
  savedText.textContent = "Сакталган текст: " + editor.value;
});

// DOM 4
const image = document.getElementById("image");
const changeImg = document.getElementById("changeImg");

changeImg.addEventListener("click", () => {
  const oldSrc = image.getAttribute("src");

  if (oldSrc.includes("placeholder")) {
    image.setAttribute("src", "лес с цветами.jpg");
  } else {
    image.setAttribute("src", "74d5aade36db22de0f695cf292ffe45e.jpg");
  }
});

// DOM 5
const input = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const lis = document.getElementById("lis");

addBtn.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") return;

  const li = document.createElement("li");

  li.textContent = value; // просто слово

  lis.append(li);

  input.value = "";
});