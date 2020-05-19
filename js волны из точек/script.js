(() => {

    const properties = {
        spaceDiametr : 32,
        dotDiametr : 14,
        wavelength : 100,
        velocity : .03,
        direction : -1,
        displacement : -1
    }

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;

    let dotsList;

    canvas.style.background = 'rgba(17, 17, 23, 1)';
    document.querySelector('body').appendChild(canvas);

    window.onresize = function(){
         w = canvas.width = innerWidth;
         h = canvas.height = innerHeight;
         init();
    }

    class Dot{
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.radius = properties.dotDiametr / 2;
            this.scale = getDistance(x, y) / properties.wavelength;
        }

        update(){
            this.resize();
            this.draw();
        }

        resize(){
            this.scale = this.scale - properties.velocity * properties.direction;
        }

        draw(){
            let r = this.radius * (1 - Math.abs(Math.sin(this.scale)));
            ctx.beginPath();
            ctx.arc(this.x, this.y, r, 0, 2 * Math.PI, false);
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }

    init();
    function init(){
        dotsList = [];

        const dotsCountX = w / properties.spaceDiametr | 0;
        const dotsCountY = h / properties.spaceDiametr | 0;
        const startX = (properties.spaceDiametr + w - dotsCountX * properties.spaceDiametr) / 2;
        const startY = (properties.spaceDiametr + w - dotsCountX * properties.spaceDiametr) / 2;

        let displacement = properties.spaceDiametr / 4 * properties.displacement;

        
        
    for(let j = 0; j < dotsCountY; j++){
        displacement = - displacement;
        let y = startY + j *properties.spaceDiametr;
        for (let i = 0; i < dotsCountX; i++){
            let x = startX + i * properties.spaceDiametr + displacement;
            dotsList.push(new Dot(x, y));
        }
    }
    }
    
    loop();
    function loop(){
        ctx.clearRect(0, 0, w, h);

        for(let a in dotsList){
            dotsList[a].update();
        }
        requestAnimationFrame(loop);
    }
    function getDistance(x, y){
        let dx = w / 2 - x;
        let dy = h / 2 - y;
        return Math.sqrt((dx * dx) + (dy * dy));
    }
})();