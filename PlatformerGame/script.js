const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // accessing child property

const ctx = canvas.getContext("2d"); // 2d graphics using canvas API
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

const proportionalSize = (size) => {
    return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
}

class Player {
    constructor() {
        this.position = {
            x: proportionalSize(10),
            y: proportionalSize(400),
        };
        this.velocity = {
            x: 0,
            y: 0,
        };
        this.width = proportionalSize(40);
        this.height = proportionalSize(40);
    }
    draw() {
        ctx.fillStyle = "#99c9ff"; // player color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // player body to be filled with color
    }


    update() {
        this.draw(); // to make sure player is always drawing on the screen;
        this.position.x += this.velocity.x; // when player moves to adjust its position according to its velocity
        this.position.y += this.velocity.y; // when player jumps

        if (this.position.y + this.height + this.velocity.y <= canvas.height) { // to make sure player do not jump past canvas height
            if (this.position.y < 0) {
                this.position.y = 0;
                this.velocity.y = gravity;
            }
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }

        if (this.position.x < this.width) { // to make sure player do not move to far off to the left
            this.position.x = this.width;
        }
        if (this.position.x >= canvas.width - 2 * this.width) { // so the player does not go off screen to the right
            this.position.x = canvas.width - 2 * this.width;
        }
    }
}

const player = new Player();

const animate = () => {
    requestAnimationFrame(animate); // API for animation
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clearing the canvas before rendering next frame
    player.update();

    if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
        player.velocity.x = 5;
    } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;
    }
}

const keys = {
    rightKey: {
        pressed: false
    },
    leftKey: {
        pressed: false
    }
};

const movePlayer = (key, xVelocity, isPressed) => {
    if (!isCheckpointCollisionDetectionActive) {
        player.velocity.x = 0;
        player.velocity.y = 0;
        return;
    }

    switch (key) {
        case "ArrowLeft":
            keys.leftKey.pressed = isPressed;
            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }
            player.velocity.x -= xVelocity;
            break;
        case "ArrowUp":
        case " ":
        case "Spacebar":
            player.velocity.y -= 8;
            break;
        case "ArrowRight":
            keys.rightKey.pressed = isPressed;
            if (xVelocity === 0) {
                player.velocity.x = xVelocity;
            }
            player.velocity.x += xVelocity;
    }
}

const startGame = () => {
    canvas.style.display = "block";
    startScreen.style.display = "none";
    animate();
}

startBtn.addEventListener("click", startGame);

window.addEventListener("keydown", ({ key }) => {
    movePlayer(key, 8, true);
});

window.addEventListener("keyup", ({ key }) => {
    movePlayer(key, 0, false);
});
