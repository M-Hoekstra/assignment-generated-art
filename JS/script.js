// Opdracht B
// Creëer middels vanilla javascript een SVG element in je body. Geef deze een width en height van 500 pixels en een viewbox van 0 0 500 500.
// Voeg vervolgens een <circle>  toe op positie 100,100 met radius 50 en geef deze een kleur. Als je hovert over deze cirkel verdwijnt deze.
// Maak een array arrKleur van 5 kleuren en gebruik daarbij een kleurenpallet dat je kiest op https://coolors.co. 
// Creëer vervolgens 1200 cirkels door gebruik te maken van een for loop. 
// De cx en cy zijn random waardes tussen 1 en 500
// De r is een random waarde tussen 3 en 15
// De kleur is een willekeurige kleur uit jouw gemaakte kleuren array

let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("height", "500");
svg.setAttribute("width", "500");
svg.setAttribute("style", "background-color: grey");

// Cirkelcode
let circle1 = document.createElementNS(xmlns, "circle");
circle1.setAttribute("cx", 100);
circle1.setAttribute("cy", 100);
circle1.setAttribute("r", 50);
circle1.setAttribute("fill", "pink");
circle1.setAttribute("class", "circle1")

svg.appendChild(circle1)



// Kleurenarray, 
let kleurarr = ["#55CCED","#2263BF","#FAA51C", "#D37000", "#434951"  ]

// for loop
// CirkelCode naar functie
function createCircle(x,y,r,c){
    let circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", c);
    
    svg.appendChild(circle)

}

// createCircle(100,100,50)
// createCircle(200,100,10)


for (let i = 0; i < 1000; i++) {
    let r1 = Math.random()*499 + 1 ;
    let r2 = Math.random()*499 + 1 ;
    let r3 = Math.random()*12 + 3;
    let c = kleurarr[Math.floor(Math.random()*4)]
    // console.log(kleurarr[3])
    // console.log(Math.floor(Math.random()*4))
       
    createCircle(r1,r2,r3, c)
}
document.body.appendChild(svg);