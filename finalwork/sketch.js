// 最終課題を制作しよう

let giftBox;
let star;
let score = 0;
let gameover = false;
let leftPressed = false;
let rightPressed = false;

function setup() {
  createCanvas(400, 400);
  giftBox = new GiftBox();
  star = new Star();
}

function draw() {
  background(0);

  if (!gameover) {
    // プレゼントボックスの表示と移動
    giftBox.display();
    giftBox.move();

    // 星の表示と移動
    star.display();
    star.move();

    // プレゼントボックスと星の当たり判定
    if (giftBox.hits(star)) {
      score++;
      star.reset();
    }

    // 地面と星の当たり判定
    if (star.hitsGround()) {
      gameover = true;
    }

    // スコアの表示
    textSize(20);
    fill(255);
    text("Score: " + score, width - 100, 30);
  } else {
    // ゲームオーバーの表示
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    textSize(20);
    fill(255);
    text("Press SPACE to restart", width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && !gameover) {
    leftPressed = true;
  } else if (keyCode === RIGHT_ARROW && !gameover) {
    rightPressed = true;
  } else if (keyCode === 32 && gameover) {
    // スペースキーでゲームをリセット
    gameover = false;
    score = 0;
    giftBox = new GiftBox();
    star.reset();
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    leftPressed = false;
  } else if (keyCode === RIGHT_ARROW) {
    rightPressed = false;
  }
}

// プレゼントボックスのクラス
class GiftBox {
  constructor() {
    this.x = width / 2;
    this.y = height - 30;
    this.speed = 2; // 一定速度で左右に移動
    this.size = 30;
  }

  display() {
    fill(255);
    rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }

  move() {
    // 自動で左右に移動
    this.x += this.speed;
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.speed *= -1; // 壁に当たったら反転
    }
  }

  hits(star) {
    return (
      this.x - this.size / 2 < star.x &&
      this.x + this.size / 2 > star.x &&
      this.y - this.size / 2 < star.y &&
      this.y + this.size / 2 > star.y
    );
  }
}

// 星のクラス
class Star {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = width / 2;
    this.y = 0;
    this.speed = 2;
    this.size = 20;
    this.xSpeed = 5;
  }

  display() {
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move() {
    // 星は自動で下に移動
    this.y += this.speed;
    // 左右のキーに応じて横に移動
    if (leftPressed) {
      this.x -= this.xSpeed;
    } else if (rightPressed) {
      this.x += this.xSpeed;
    }
    // 画面端に達したら反転
    if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > width) {
      this.xSpeed *= -1;
    }
  }

  hitsGround() {
    return this.y > height;
  }
}