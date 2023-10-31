let url  = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=wqVJEAafzlxA22zO78ga2nid2it8hIbD"


let heatlines = document.getElementById("headlines");


fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data);


    data.results.map(article => {
        console.log(article.title);




        let  a = document.createElement("a");
        a.setAttribute('href', article.url)
        a.innerHTML = article.title


        let p = document.createElement("p");
        p.innerHTML = article.abstract


        let img = document.createElement("img");
        img.setAttribute('src', article.multimedia[0].url);



        headlines.append(img);
        headlines.appendChild(a);
        headlines.appendChild(p);
    })

})