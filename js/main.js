//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.fetch("houses.json")
        data.forEach(house => {
            let family = house.members.join(", ");

            // generate the html snippet for one array item
            //to be added to the "html" temp holder.
            let objInfo =
            `<dl>
                <dt class="house">${house.name}</dt>
                <dd class="people">${family}</dd>
            </dl>`;
            html += objInfo;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch(err => console.log("GoT error!", err));
    //this only runs if there is an error during the above process

fetch("https://x-colors.herokuapp.com/api/random?number=2")
    .then((response) => response.json())
    .then(data => {
        const containerCss = document.getElementById("container").style;
        const docCss = document.getElementById("main").style;
        
        let color1 = data[0].rgb;
        let color2 = data[1].rgb;
        docCss.backgroundColor = color1;
        containerCss.backgroundColor = color2;
        containerCss.filter = "brightness(125%)";
    })
    .catch(err => console.log("Color error!", err));