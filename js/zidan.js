+function(){
    window.Zidan = function(){
        this.w = 16
        this.h = 16
        this.zhuan = 0;
        game.zidanarr.push(this)
        this.zidany = game.me.y
        this.zidanx = game.me.x
        this.fangx = 0
        this.fangy = 0
        this.shu = Math.round(game.danx-game.me.x-5)/(((game.me.y-game.dany)/2*5)/5)
    }
    Zidan.prototype.dan = function(){
        if(this.fangy <= game.me.y){
            this.zidany-=2
            this.zidanx+=this.shu
        }else if (this.fangy > game.me.y){
            this.zidany+=2
            this.zidanx-=this.shu
        }


        game.can.drawImage(game.alltu.zidan,0,0,16,16,this.zidanx+5,this.zidany,16,16)
        if(this.zidany <0){
            game.zidanarr.splice(this,1)
        }else if(this.zidany >game.h){
            game.zidanarr.splice(this,1)
        }
        this.y2 = game.la+game.daxiong.h
        this.y1 = game.la+game.daxiong.h-30
        this.x1 = game.daxiong.x
        this.x2 = game.daxiong.x+29
        this.zx1 = this.zidanx
        this.zx2 = this.zidanx+16
        this.zy1 = this.zidany
        this.zy2 = this.zidany-16
        // console.log(this.zy2,this.y2)
        if(this.zy1 < this.y2 && this.zx2 > this.x1 && this.zy2 > this.y1 && this.zx1 < this.x1){
            game.zidanarr.splice(this,1)
            game.defen++
        }else if(this.zy1 < this.y2 && this.zx1 < this.x2-2 && this.zy2 > this.y1 && this.zx2 > this.x2){
            game.zidanarr.splice(this,1)
            game.defen++
        }else if (this.zy1 < this.y2 && this.zx1 > this.x1 && this.zx2 < this.x2){
            game.zidanarr.splice(this,1)
            game.defen++
        }
    }
}()