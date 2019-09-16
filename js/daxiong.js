+function(){
    window.Daxiong = function(){
        this.c = _.random(5,60)
        this.h = 150-this.c
        this.x = _.random(0,290)
        this.lasudu = 0.4;
        game.daxiongarr.push(this)

    }
    Daxiong.prototype.tu = function(){
        if(game.la > 0){
            this.lasudu = -this.lasudu
        }
        if(game.la <= -this.h){
            game.daxiongarr.splice(game.daxiongarr.indexOf(this),1)
        }
        // this.y2 = game.la+this.h
        // this.y1 = game.la+this.h-30
        // this.x1 = this.x
        // this.x2 = this.x+29
        game.can.drawImage(game.alltu.daxiong,0,this.c,29,this.h,this.x,game.la,29,this.h)
    }
}()