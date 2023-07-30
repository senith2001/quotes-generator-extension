fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
    method: 'GET',
    headers: {
        "content-type": "application/json",
        "X-Api-Key": "yFV1G6DXJ86NIGd6N5Sw2Q==sj1ysligWsPIVfV9"
    }
})
    .then((response) => {
        return response.json();
    }).then((data) => {

        const p = document.createElement('p');
        p.style.fontSize = '30px';
        p.style.width = '400px';
        p.style.height = 'fit-content';
        p.style.textAlign = 'center';
        p.style.position = "sticky";
        p.style.top = '100px';
        p.style.fontFamily = 'Stoic Script';

        const text = document.createTextNode(data[0].quote + " - " + data[0].author);
        p.appendChild(text);
        const div = document.getElementById('rcnt');
        const color =  window.getComputedStyle(document.body, null).getPropertyValue('background-color');
        p.style.backgroundColor = color;
        if (color =='rgb(255, 255, 255)') {
            p.style.border = "1px solid black";
        } else {
            p.style.border = "1px solid white"
        }


        const children = div.children;
        if (children.item(1) == null) {
            
            div.appendChild(p);
        }
        else {
            p.style.width = '100%';

            children.item(1).insertBefore(p, children.item(1).children.item(0));

        }


    }).catch((error) => {
        console.log(error);
    })

