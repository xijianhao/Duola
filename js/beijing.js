+function(){
    window.Beijing = function(){
        this.h = 400
        this.w = 720
        this.x = 0;
    }
    Beijing.prototype.tu = function(){
        game.can.fillStyle = "#1c4e59"
        game.can.fillRect(0,0,game.w,game.h-this.h-game.di.h+30)
        game.can.drawImage(game.alltu.background1,0,0,this.w,this.h,this.x,game.h-this.h-game.di.h+30,this.w,this.h)
    }
}();