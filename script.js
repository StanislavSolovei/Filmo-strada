//<!DOCTYPE html>
//<html lang="pl">
//  <head>
//    <meta charset="UTF-8" />
//    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//    <title>Filmo-strada</title>
//    <link rel="stylesheet" href="style.css" />
//  </head>
//  <body>
//    <main>
//      <div class="card">
//
//        <input type="radio" name="status1" id="watched1">
//        <input type="radio" name="status1" id="abandoned1">
//        <input type="radio" name="status1" id="unrated1" checked>
//
//        <div class="content">
//          <img
//            src="https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp"
//            alt="Zielona mila"
//          />
//          <div class="desc">
//            <div class="title">
//              <h2>Zielona mila</h2>
//              <br>
//              <h3>The Green Mile</h3>
//            </div>
//            <div class="user-data">
//              <div>
//                <label for="watched1" class="watched">✅ Obejrzane</label>
//                <label for="abandoned1" class="abandoned">❌ Porzucone</label>
//                <label for="unrated1" class="unrated">🔳 Nie oceniono</label>
//                <span>⭐ 6</span>
//              </div>
//            </div>
//            <div class="footer-desc">
//              <span>Dramat</span>
//              <span>1999</span>
//              <span>⭐ 8,6</span>
//            </div>
//          </div>
//        </div>
//      </div>
//
//
//
//
//      <div class="card">
//
//        <input type="radio" name="status2" id="watched2">
//        <input type="radio" name="status2" id="abandoned2">
//        <input type="radio" name="status2" id="unrated2" checked>
//
//        <div class="content">
//          <img
//            src="https://fwcdn.pl/fpo/10/48/1048/6925401_1.3.jpg"
//            alt="Skazani na Shawshank"
//          />
//          <div class="desc">
//            <div class="title">
//              <h2>Skazani na Shawshank</h2>
//              <br>
//              <h3>The Shawshank Redemption</h3>
//            </div>
//            <div class="user-data">
//              <div>
//                <label for="watched2" class="watched">✅ Obejrzane</label>
//                <label for="abandoned2" class="abandoned">❌ Porzucone</label>
//                <label for="unrated2" class="unrated">🔳 Nie oceniono</label>
//                <span>⭐ 6</span>
//              </div>
//            </div>
//            <div class="footer-desc">
//              <span>Dramat</span>
//              <span>1994</span>
//              <span>⭐ 8,8</span>
//            </div>
//          </div>
//        </div>
//      </div>
//
//
//
//      <div class="card">
//
//        <input type="radio" name="status3" id="watched3">
//        <input type="radio" name="status3" id="abandoned3">
//        <input type="radio" name="status3" id="unrated3" checked>
//
//        <div class="content">
//          <img
//            src="https://fwcdn.pl/fpo/09/98/998/8021615_1.8.webp"
//            alt="Forrest Gump"
//          />
//          <div class="desc">
//            <div class="title">
//              <h2>Tom Hank jako Forrest Gump</h2>
//              <br>
//              <h3>Tom Hank is Forrest Gump</h3>
//            </div>
//            <div class="user-data">
//              <div>
//                <label for="watched3" class="watched">✅ Obejrzane</label>
//                <label for="abandoned3" class="abandoned">❌ Porzucone</label>
//                <label for="unrated3" class="unrated">🔳 Nie oceniono</label>
//                <span>⭐ 6</span>
//              </div>
//            </div>
//            <div class="footer-desc">
//              <span>Dramat, Komedia</span>
//              <span>1994</span>
//              <span>⭐ 8,5</span>
//            </div>
//          </div>
//        </div>
//      </div>
//    </main>
//    <script src="script.js"></script>
//  </body>
//</html>


const film = {
    title: "Zielona Mila",
    translate: "The green Mile",
    year: 1999,
    genre: "Dramat",
    rewiew: 8.6,
    Image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp"
}

function createCard() {
    let ref = document.querySelector("main");
    let div_card = document.createElement('div');
    let input = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let div_content = document.createElement('div');
    let img = document.createElement('img');
    let div_desc = document.createElement('div');
    let div_title = document.createElement('div');
    let div_user_data = document.createElement('div');
    let div = document.createElement('div');
    let label = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let span = document.createElement('span');
    let div_footer_desc = document.createElement('div');

    div_card.classList.add('card');

    input.type = "radio";
    input.name = "status4";
    input.id = "watched4";
    div_card.appendChild(input);

    input2.type = "radio";
    input2.name = "status4";
    input2.id = "abandoned4";
    div_card.appendChild(input2);

    input3.type = "radio";
    input3.name = "status4";
    input3.id = "unrated4";
    input3.checked = true;
    div_card.appendChild(input3);

    div_content.classList.add('content');

    img.src= ("https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp");
    img.alt= ("Zielona mila");
    div_content.appendChild(img);

    div_desc.classList.add('desc');

    div_title.classList.add('title');
    div_title.innerHTML = `<h2>${film.title}</h2><br><h3>${film.translate}</h3>`;
    div_desc.appendChild(div_title);

    div_user_data.classList.add('user-data');
    div_desc.appendChild(div_user_data);
    
    label.htmlFor = "watched4";
    label.classList.add('watched');
    label.textContent = "✅ Obejrzane";
    div.appendChild(label);

    label2.htmlFor = "abandoned4";
    label2.classList.add('abandoned');
    label2.textContent = "❌ Porzucone";
    div.appendChild(label2);

    label3.htmlFor = "unrated4";
    label3.classList.add('unrated');
    label3.textContent = "🔳 Nie oceniono";
    div.appendChild(label3);
    
    span.textContent = `⭐ 6`;
    div.appendChild(span);

    div_user_data.appendChild(div);
    
    div_footer_desc.classList.add('footer-desc');
    div_footer_desc.innerHTML = `<span>${film.genre}</span> <span>${film.year}</span><span>⭐ ${film.rewiew}</span>`;
    div_desc.appendChild(div_footer_desc);

    div_content.appendChild(div_desc);
    div_card.appendChild(div_content);
    ref.appendChild(div_card);

}


const film1 = {
    title: "Skazani na Shawshank",
    translate: "The Shawshank Redemption",
    year: 1994,
    genre: "Dramat",
    rewiew: 8.8,
    Image: "https://fwcdn.pl/fpo/10/48/1048/6925401_1.3.jpg"
}

function createCard1() {
    let ref = document.querySelector("main");
    let div_card = document.createElement('div');
    let input = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let div_content = document.createElement('div');
    let img = document.createElement('img');
    let div_desc = document.createElement('div');
    let div_title = document.createElement('div');
    let div_user_data = document.createElement('div');
    let div = document.createElement('div');
    let label = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let span = document.createElement('span');
    let div_footer_desc = document.createElement('div');

    div_card.classList.add('card');

    input.type = "radio";
    input.name = "status5";
    input.id = "watched5";
    div_card.appendChild(input);

    input2.type = "radio";
    input2.name = "status5";
    input2.id = "abandoned5";
    div_card.appendChild(input2);

    input3.type = "radio";
    input3.name = "status5";
    input3.id = "unrated5";
    input3.checked = true;
    div_card.appendChild(input3);

    div_content.classList.add('content');

    img.src= ("https://fwcdn.pl/fpo/10/48/1048/6925401_1.3.jpg");
    img.alt= ("Skazani na Shawshank");
    div_content.appendChild(img);

    div_desc.classList.add('desc');

    div_title.classList.add('title');
    div_title.innerHTML = `<h2>${film1.title}</h2><br><h3>${film1.translate}</h3>`;
    div_desc.appendChild(div_title);

    div_user_data.classList.add('user-data');
    div_desc.appendChild(div_user_data);
    
    label.htmlFor = "watched5";
    label.classList.add('watched');
    label.textContent = "✅ Obejrzane";
    div.appendChild(label);

    label2.htmlFor = "abandoned5";
    label2.classList.add('abandoned');
    label2.textContent = "❌ Porzucone";
    div.appendChild(label2);

    label3.htmlFor = "unrated5";
    label3.classList.add('unrated');
    label3.textContent = "🔳 Nie oceniono";
    div.appendChild(label3);
    
    span.textContent = `⭐ 6`;
    div.appendChild(span);

    div_user_data.appendChild(div);
    
    div_footer_desc.classList.add('footer-desc');
    div_footer_desc.innerHTML = `<span>${film1.genre}</span> <span>${film1.year}</span><span>⭐ ${film1.rewiew}</span>`;
    div_desc.appendChild(div_footer_desc);

    div_content.appendChild(div_desc);
    div_card.appendChild(div_content);
    ref.appendChild(div_card);
}


const film2 = {
    title: "Tom Hank jako Forrest Gump",
    translate: "Tom Hank is Forrest Gump",
    year: 1994,
    genre: "Dramat, Komedia",
    rewiew: 8.5,
    Image: "https://fwcdn.pl/fpo/09/98/998/8021615_1.8.webp"
}

function createCard2() {
    let ref = document.querySelector("main");
    let div_card = document.createElement('div');
    let input = document.createElement('input');
    let input2 = document.createElement('input');
    let input3 = document.createElement('input');
    let div_content = document.createElement('div');
    let img = document.createElement('img');
    let div_desc = document.createElement('div');
    let div_title = document.createElement('div');
    let div_user_data = document.createElement('div');
    let div = document.createElement('div');
    let label = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let span = document.createElement('span');
    let div_footer_desc = document.createElement('div');

    div_card.classList.add('card');

    input.type = "radio";
    input.name = "status6";
    input.id = "watched6";
    div_card.appendChild(input);

    input2.type = "radio";
    input2.name = "status6";
    input2.id = "abandoned6";
    div_card.appendChild(input2);

    input3.type = "radio";
    input3.name = "status6";
    input3.id = "unrated6";
    input3.checked = true;
    div_card.appendChild(input3);

    div_content.classList.add('content');

    img.src= ("https://fwcdn.pl/fpo/09/98/998/8021615_1.8.webp");
    img.alt= ("Forrest Gump");
    div_content.appendChild(img);

    div_desc.classList.add('desc');

    div_title.classList.add('title');
    div_title.innerHTML = `<h2>${film2.title}</h2><br><h3>${film2.translate}</h3>`;
    div_desc.appendChild(div_title);

    div_user_data.classList.add('user-data');
    div_desc.appendChild(div_user_data);
    
    label.htmlFor = "watched6";
    label.classList.add('watched');
    label.textContent = "✅ Obejrzane";
    div.appendChild(label);

    label2.htmlFor = "abandoned6";
    label2.classList.add('abandoned');
    label2.textContent = "❌ Porzucone";
    div.appendChild(label2);

    label3.htmlFor = "unrated6";
    label3.classList.add('unrated');
    label3.textContent = "🔳 Nie oceniono";
    div.appendChild(label3);
    
    span.textContent = `⭐ 6`;
    div.appendChild(span);

    div_user_data.appendChild(div);
    
    div_footer_desc.classList.add('footer-desc');
    div_footer_desc.innerHTML = `<span>${film2.genre}</span> <span>${film2.year}</span><span>⭐ ${film2.rewiew}</span>`;
    div_desc.appendChild(div_footer_desc);

    div_content.appendChild(div_desc);
    div_card.appendChild(div_content);
    ref.appendChild(div_card);
}

createCard();
createCard1();
createCard2();