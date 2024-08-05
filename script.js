document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");


    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        productCards.forEach(card => {
            const productName = card.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(filter)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});
const btnBack = document.querySelector("#btn-backward-view");
const btnNext = document.querySelector("#btn-forward-view");
const actualIndex = 0

var arrayCarrousselItens = [
  {
    title: "Placa de vídeo",
    urlImg: "url",
    linkProduct: "https://www.youtube.com",
  },
    {
    title: "Memória Ram",
    urlImg: "url",
    linkProduct: "https://www.youtube.com",
  },
    {
    title: "Monitor",
    urlImg: "url",
    linkProduct: "https://www.youtube.com",
  },
    {
    title: "Teclado",
    urlImg: "url",
    linkProduct: "https://www.youtube.com",
  },
    {
    title: "Headset",
    urlImg: "url",
    linkProduct: "https://www.youtube.com",
  }
]

const carrousselDiv = document.querySelector(".carroussel")
createItensCarroussel()
function createItensCarroussel() {
  arrayCarrousselItens.forEach((item) => {
    var itemCarroussel = document.createElement("div");
    itemCarroussel.classList.add("item-carroussel");
    itemCarroussel.style.backgroundImage = item.urlImg
    var itemControls = document.createElement("div");
    itemControls.classList.add("item-controls");
    var title = document.createElement("h1");
    title.classList.add("title-item");
    title.innerText = item.title
    var btnView = document.createElement("button");
    btnView.classList.add("btn-view")
    btnView.innerText = "Ver agora"
    var btnBackward = document.createElement("button")
    btnBackward.classList.add("btn-control")
    btnBackward.innerHTML = `
      <i class="fa-solid fa-backward-step"></i>
    `
    var btnForward = document.createElement("button")
    btnForward.classList.add("btn-control")
    btnForward.innerHTML = `
      <i class="fa-solid fa-forward-step"></i>
    `
    var itemInfos = document.createElement("div");
    itemInfos.classList.add("item-infos");




    itemInfos.appendChild(title, bntView);
    itemControls.appendChild(btnBackward, itemInfos, btnForward);
    itemCarroussel.appendChild(title, itemControls);
    carrousselDiv.append(itemCarroussel);
  })
}
