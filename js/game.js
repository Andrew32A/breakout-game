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
let score = 0;
let lives = 3;

// ball properties
const ballRadius = 10;

// paddle properties
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

// brick properties
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;