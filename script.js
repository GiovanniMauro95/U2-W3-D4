const API_KEY = "frwAamVFHkW1nLALqJ2DKAVj4CKZJcdwzqJV0BHozjbNCpca6HJsvMWS"

const imgChange = document.querySelectorAll("img")
const loadBtn = document.getElementById("loadBtn")
const loadBtn2 = document.getElementById("loadBtn2")
const id = document.querySelectorAll(".text-hidden")

fetch("https://api.pexels.com/v1/search?query=nature&per_page=9", {
  method: "GET",
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Non è stato possibile trovare i dati")
    }
  })
  .then((data) => {
    console.log(data)
    const object_data = data
    console.log(object_data.photos[0].src.landscape)
    return object_data.photos[0].src.landscape
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < imgChange.length; i++) {
        const element = imgChange[i]
        imgChange[i].setAttribute("src", `${new_img}`)
      }
    }
    loadBtn.addEventListener("click", imgLoop)
  })
  .catch((error) => {
    console.error("Errore:", error)
  })

fetch("https://api.pexels.com/v1/search?query=anime&per_page=9", {
  method: "GET",
  headers: {
    Authorization: API_KEY,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Non è stato possibile trovare i dati")
    }
  })
  .then((data) => {
    console.log(data)
    const object_data = data
    console.log(object_data.photos[0].src.landscape)
    return object_data.photos[0].src.landscape
  })
  .then((new_img) => {
    const imgLoop = function () {
      for (let i = 0; i < imgChange.length; i++) {
        const element = imgChange[i]
        imgChange[i].setAttribute("src", `${new_img}`)
      }
    }
    loadBtn2.addEventListener("click", imgLoop)
  })
  .catch((error) => {
    console.error("Errore:", error)
  })

const buttons = document.querySelectorAll("button").forEach((e) => {
  if (e.textContent.trim() === "Edit") {
    e.textContent = "Hide"
    e.classList.add("btnHide")
  }
})
const btnHide = document.querySelectorAll(".btnHide")
btnHide.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card")
    if (card) {
      card.classList.add("d-none")
    }
  })
})
