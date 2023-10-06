function drawTriangle(n) {
    for (let i = 0; i < n; i++) {
        stars = "";
        for (let j = 0; j <= i; j++) {
            stars += "*";
        }
        document.write(stars + "<br>");
        console.log(stars);
    }
}

drawTriangle(5);