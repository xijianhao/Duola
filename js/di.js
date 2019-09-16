+function(){
    window.Di = function(){
        this.w = 2500
        this.h = 200
        this.x = 0
    }
    Di.prototype.tu = function(){
        game.can.drawImage(game.alltu.di,this.x,game.h-this.h)
        game.can.drawImage(game.alltu.zidanjishu,game.w-70,10)
        game.can.font = "18px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText(game.zidannum,game.w-25,20);
        game.can.drawImage(game.alltu.defen,game.w-100,40)
        game.can.font = "18px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText(game.defen,game.w-25,52);
        game.can.font = "18px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("时间："+game.zongshijian,50,10);
        
    }
    Di.prototype.fen15 = function(){
        game.can.font = "20px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("游戏结束！",200,100);
        game.can.fillText("你的得分为"+game.defen,200,140);
        game.can.fillText("称号：菜鸡A梦",200,180);
    }
    Di.prototype.fen30 = function(){
        game.can.font = "20px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("游戏结束！",200,100);
        game.can.fillText("你的得分为"+game.defen,200,140);
        game.can.fillText("称号：迟钝A梦",200,180);
    }
    Di.prototype.fen50 = function(){
        game.can.font = "20px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("游戏结束！",200,100);
        game.can.fillText("你的得分为"+game.defen,200,140);
        game.can.fillText("称号：哆啦A梦打的还行",200,180);
    }
    Di.prototype.fen70 = function(){
        game.can.font = "20px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("游戏结束！",200,100);
        game.can.fillText("你的得分为"+game.defen,200,140);
        game.can.fillText("称号：真·多啦A梦",200,180);
    }
    Di.prototype.fenda70= function(){
        game.can.font = "20px bold 黑体";
        game.can.fillStyle = "#fff";
        game.can.textAlign = "center";
        game.can.textBaseline = "middle";
        game.can.fillText("游戏结束！",200,100);
        game.can.fillText("你的得分为"+game.defen,200,140);
        game.can.fillText("称号：超神A梦！！",200,180);
    }
}()