const imageList = ["weAreArsenal.png", "emileSmithRowe.jpg", "emiratesStadium.jpg", "arseneWenger.png", "arseneQuote.jpg", "messi.jpeg"];

const chosenImage = imageList[Math.floor(Math.random() * imageList.length)];

const BgImage = document.createElement("img");  // js에서 html에 이미지 심기

BgImage.src = `Images/${chosenImage}`;

document.body.appendChild(BgImage); // adapted in the body