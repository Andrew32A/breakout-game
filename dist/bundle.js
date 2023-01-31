(()=>{"use strict";const t=class{constructor(t=0,i=0,s=100,h=100,e="#f00"){this.x=t,this.y=i,this.width=s,this.height=h,this.color=e}moveTo(t,i){this.x=t,this.y=i}moveBy(t,i){this.x+=t,this.y+=i}render(t){t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.fillStyle=this.color,t.fill(),t.closePath()}},i=class extends t{constructor(t=0,i=0,s=2,h=-2,e=10,l="#0095DD"){super(t,i,0,0,l),this.radius=e,this.dx=s,this.dy=h}move(){this.x+=this.dx,this.y+=this.dy}render(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI),t.fillStyle=this.color,t.fill(),t.closePath()}},s=class extends t{constructor(t,i,s=75,h=20,e="#FF009E"){super(t,i,s,h,e),this.status=1}},h=class extends t{constructor(t,i,s=75,h=20,e="#0095DD",l=7){super(t,i,s,h,e),this.speed=l,this.color=e}},e=document.getElementById("myCanvas"),l=e.getContext("2d"),d=new class{constructor(t,e){this.canvas=t,this.ctx=e,this.x=t.width/2,this.y=t.height-30,this.dx=2,this.dy=-2,this.score=new class{constructor(t,i){this.x=t,this.y=i,this.score=0}render(t){t.font="16px Arial",t.fillStyle="#0095DD",t.fillText(`Score: ${this.score}`,this.x,this.y)}update(t){this.score+=t}reset(){this.score=0}}(8,20),this.lives=new class{constructor(t,i,s=3){this.x=t,this.y=i,this.startingLives=s,this.lives=s}render(t){t.font="16px Ariel",t.fillStyle="#0095DD",t.fillText(`Lives: ${this.lives}`,this.x,this.y)}loseLife(){this.lives-=1}reset(){this.lives=this.startingLives}}(t.width-65,20,3),this.background=new class{constructor(t,i){this.width=t,this.height=i}render(t){const i=t.createLinearGradient(0,0,0,this.height);i.addColorStop(0,"#171e26"),i.addColorStop(1,"#3f586b"),t.fillStyle=i,t.fillRect(0,0,this.width,this.height)}}(t.width,t.height),this.paddleHeight=10,this.paddleWidth=75,this.paddleSpeed=7,this.paddleColor="#0095DD",this.paddleX=(t.width-75)/2,this.paddleY=t.height-10,this.paddle=new h(this.paddleX,this.paddleY,this.paddleWidth,this.paddleHeight,this.paddleSpeed,this.paddleColor),this.ballRadius=10,this.ballColor="cyan",this.ball=new i(this.x/2,this.y-55,this.dx,this.dy,this.ballRadius,this.ballColor),this.brickRowCount=3,this.brickColumnCount=5,this.brickWidth=75,this.brickHeight=20,this.brickPadding=10,this.brickOffsetTop=30,this.brickOffsetLeft=30,this.brickColor="cyan",this.bricks=new class{constructor(t,i,s,h,e,l,d,r){this.rows=t,this.columns=i,this.width=s,this.height=h,this.padding=e,this.offsetTop=l,this.offsetLeft=d,this.color=r,this.bricks=[],this.init_bricks()}init_bricks(){for(let t=0;t<this.columns;t+=1){this.bricks[t]=[];for(let i=0;i<this.rows;i+=1){const h=t*(this.width+this.padding)+this.offsetLeft,e=i*(this.height+this.padding)+this.offsetTop;this.bricks[t][i]=new s(h,e,this.width,this.height,this.color)}}}render(t){for(let i=0;i<this.columns;i+=1)for(let s=0;s<this.rows;s+=1){const h=this.bricks[i][s];1===h.status&&h.render(t)}}}(this.brickRowCount,this.brickColumnCount,this.brickWidth,this.brickHeight,this.brickPadding,this.brickOffsetTop,this.brickOffsetLeft,this.brickColor),this.rightPressed=!1,this.leftPressed=!1,this.render()}init(){this.bricks.init_bricks(),document.addEventListener("keydown",(t=>{this.keyDownHandler(t)})),document.addEventListener("keyup",(t=>{this.keyUpHandler(t)})),document.addEventListener("mousemove",(t=>{this.mouseMoveHandler(t)}))}keyDownHandler(t){"Right"===t.key||"ArrowRight"===t.key?this.rightPressed=!0:"Left"!==t.key&&"ArrowLeft"!==t.key||(this.leftPressed=!0)}keyUpHandler(t){"Right"===t.key||"ArrowRight"===t.key?this.rightPressed=!1:"Left"!==t.key&&"ArrowLeft"!==t.key||(this.leftPressed=!1)}mouseMoveHandler(t){const i=t.clientX-this.canvas.offsetLeft;i>0&&i<e.width&&this.paddle.moveTo(i-this.paddle.width/2,this.paddleY)}ballLogic(){(this.ball.x+this.ball.dx>this.canvas.width-this.ballRadius||this.ball.x+this.ball.dx<this.ballRadius)&&(this.ball.dx=-this.ball.dx),this.ball.y+this.ball.dy<this.ballRadius?this.ball.dy=-this.ball.dy:this.ball.y+this.ball.dy>this.canvas.height-this.ballRadius&&(this.ball.x>this.paddle.x&&this.ball.x<this.paddle.x+this.paddleWidth?this.ball.dy=-this.ball.dy:(this.lives.lives-=1,this.lives.lives?(this.ball.x=this.canvas.width/2,this.ball.y=this.canvas.height-30,this.ball.dx=2,this.ball.dy=-2):(alert("GAME OVER"),document.location.reload())))}paddleLogic(){this.rightPressed&&this.paddle.x<this.canvas.width-this.paddle.width?this.paddle.moveBy(7,0):this.leftPressed&&this.paddle.x>0&&this.paddle.moveBy(-7,0)}collisionDetection(){for(let t=0;t<this.brickColumnCount;t+=1)for(let i=0;i<this.brickRowCount;i+=1){const s=this.bricks.bricks[t][i];1===s.status&&this.ball.x>s.x&&this.ball.x<s.x+this.brickWidth&&this.ball.y>s.y&&this.ball.y<s.y+this.brickHeight&&(this.ball.dy=-this.ball.dy,s.status=0,this.score.score+=1,this.score.score===this.brickRowCount*this.brickColumnCount&&(alert("YOU WIN, CONGRATULATIONS!"),document.location.reload()))}}render(){this.background.render(this.ctx),this.ball.render(this.ctx),this.paddle.render(this.ctx),this.bricks.render(this.ctx),this.score.render(this.ctx),this.lives.render(this.ctx),this.ball.move(),this.paddleLogic(),this.ballLogic(),this.collisionDetection(),requestAnimationFrame((()=>{this.render()}))}}(e,l);d.init()})();