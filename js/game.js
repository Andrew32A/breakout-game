/* eslint-disable no-alert */
/* eslint-disable import/extensions */

// import classes
import Background from './background.js';
import Ball from './ball.js';
import Brick from './brick.js';
import Lives from './lives.js';
import Paddle from './paddle.js';
import Score from './score.js';

// grabs elements inside of DOM
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// canvas coordinates
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// scoreboard and stats
const score = new Score(8, 20);
const lives = new Lives(x - 65, 20, 3);

// background, ball, and paddle object instantiation
const background = new Background(x, y);
const ball = new Ball(x / 2, y - 55, dx, dy);
const paddle = new Paddle((x - 75) / 2, y - 10, 75, 10, 7, 'cyan');

// brick properties
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// player input variables
let rightPressed = false;
let leftPressed = false;
