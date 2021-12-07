// ANIMATION FROM LOTTIES

var animation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById('icon-container'), // required
    path: './assets/animations/animation.json', // required
    renderer: 'svg', // required
    loop: true, // optional
    autoplay: true, // optional
    name: 'Demo Animation', // optional
});

fetch('./assets/data/skills.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        let all_cards = document.getElementById('all_cards');
        let arr_len = data.skills.length;

        for (let i = 0; i < arr_len; i++) {
            let one_card = document.createElement('div');
            one_card.setAttribute('class', 'one_card');

            let image = document.createElement('img');
            image.setAttribute('src', data.skills[i].image_path);

            let title = document.createElement('h3');
            title.textContent = data.skills[i].title;

            let para = document.createElement('p');
            para.textContent = data.skills[i].text;

            let confidence = document.createElement('h4');
            confidence.textContent = `Confidence : ${data.skills[i].confidence}/10`;

            one_card.appendChild(image);
            one_card.appendChild(title);
            one_card.appendChild(para);
            one_card.appendChild(confidence);

            all_cards.appendChild(one_card);
        }
    });

    
fetch('./assets/data/portfolio.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        let all_cards = document.getElementById('all_cards_portfolio');
        let arr_len = data.portfolio.length;

        for (let i = 0; i < arr_len; i++) {
            let one_card = document.createElement('div');
            one_card.setAttribute('class', 'one_card_portfolio');

            let image = document.createElement('img');
            image.setAttribute('src', data.portfolio[i].image_path);

            let title = document.createElement('h3');
            title.textContent = data.portfolio[i].title;

            let inner_card = document.createElement('div');
            inner_card.setAttribute('class', 'inner_card');

            let link1 = document.createElement('a');
            link1.setAttribute('href', data.portfolio[i].web_link);
            link1.setAttribute('target', '_blank');
            link1.textContent = 'Website';

            let link2 = document.createElement('a');
            link2.setAttribute('href', data.portfolio[i].github_link);
            link2.setAttribute('target', '_blank');
            link2.textContent = 'Github';

            one_card.appendChild(image);
            one_card.appendChild(title);
            one_card.appendChild(inner_card);
            inner_card.appendChild(link1);
            inner_card.appendChild(link2);

            all_cards.appendChild(one_card);
        }
    });
