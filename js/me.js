+function(){
    window.Me = function(){
        this.h = 38
        this.w = 25
        this.bu = 0;
        this.x = 0;
        this.y = 0
    }
    Me.prototype.you = function(){
        game.can.drawImage(game.alltu.bubing,this.bu*this.w,this.h*2,this.w,this.h,this.x,this.y,this.w,this.h)
    }
    Me.prototype.zuo = function(){
        game.can.drawImage(game.alltu.bubing,this.bu*this.w ,this.h,this.w,this.h,this.x,this.y,this.w,this.h)
    }
    Me.prototype.shang = function(){
        game.can.drawImage(game.alltu.bubing,this.bu*this.w ,this.h*3,this.w,this.h,this.x,this.y,this.w,this.h)
    }
    Me.prototype.xia = function(){
        game.can.drawImage(game.alltu.bubing,this.bu*this.w ,0,this.w,this.h,this.x,this.y,this.w,this.h)
    }

}()