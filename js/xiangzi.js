+function(){
    window.Xiangzi = function(){
        this.w = 20
        this.h = 23
        this.suix = _.random(0,700+game.w/2-23)
        // this.suix = _.random(0,game.w-23)
        this.suiy= _.random(game.h-game.di.h+23,game.h-23)
        this.dongx = this.suix;
        // this.dong = 0
        game.xiangziarr.push(this)
        this.xiangx1 = this.dongx+game.xiangzidong-3;
        this.xiangx2 = this.dongx+game.xiangzidong+20;
        this.xiangy1 = this.suiy-5;
        this.xiangy2 = this.suiy+24;
        this.tu()
    }
    Xiangzi.prototype.tu = function(){
        this.renx1 = game.me.x
        this.renx2 = game.me.x+25
        this.reny1 = game.me.y
        this.reny2 = game.me.y+38
        game.can.drawImage(game.alltu.xiangzi,this.dongx+game.xiangzidong,this.suiy,20,23)

        if(this.renx2 > this.dongx+game.xiangzidong-3 &&this.renx1<this.dongx+game.xiangzidong+20 &&this.renx2 < this.suiy+24 && this.reny1 < this.suiy+18 && this.reny1 > this.suiy-5){
            game.xiangziarr.splice(game.xiangziarr.indexOf(this),1)
            game.zidannum+=3
        }else if(this.reny2 > this.suiy+5 && this.reny1 <this.suiy+5 && this.renx2 > this.dongx+game.xiangzidong-3&& this.renx1+5 < this.dongx+game.xiangzidong+20){
            game.xiangziarr.splice(game.xiangziarr.indexOf(this),1)
            game.zidannum+=3
        }
    }
}()
