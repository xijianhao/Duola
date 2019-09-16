+function(){
    window.Game = function(){
        this.canvas = document.querySelector("canvas");
        this.can = this.canvas.getContext("2d")
        this.w = document.documentElement.clientWidth > 414? 414:document.documentElement.clientWidth
        this.h = document.documentElement.clientHeight> 823? 823:document.documentElement.clientHeight
        this.me = new Me
        this.di = new Di
        this.beijing = new Beijing
        this.background()
        this.image()
        this.keydown()
        this.direnx = 0;
        this.zidannum = 5;
        this.defen = 0;
        this.zongshijian = 60;
        this.au = document.querySelector("audio")
    }
    Game.prototype.background = function(){
        this.canvas.width = this.w;
        this.canvas.height = this.h
    }
    Game.prototype.image = function(){
        var self = this
        this.alltu = {
            "bubing":"./image/bubing.png",
            "di":"./image/di.png",
            "background1":"./image/beijing1.jpg",
            "zidan":"./image/zidan.png",
            "xiangzi":"./image/xiangzi.png",
            "daxiong":"./image/daxiong.png",
            "zidanjishu":"./image/zidanjishu.png",
            "defen":"./image/defen.png",
        }
        var idx = 0;
        this.tu = Object.keys(this.alltu).length
        for(k in this.alltu){
            var push = this.alltu[k]
            this.alltu[k] = new Image();
            this.alltu[k].src = push
            this.alltu[k].onload = function(){
                idx++
                if(idx == self.tu){
                    self.start()
                    self.au.play()
                }
            }
        }
    }
    Game.prototype.keydown = function(){
        var self = this
        this.fang = "right"
        var bu1 = 0;
        this.xiangzidong = 0

        document.onkeydown = function(event){
            //65 87 68 83
            if(event.keyCode ==  68){
                self.fang = "right"
                if(self.me.x<180){
                    self.di.x-=0
                    self.me.x+=3
                    self.xiangzidong -=0
                }else if(self.me.x>=180){
                    self.me.x+=0
                    if(self.di.x > -700){
                        self.di.x-=3
                        self.xiangzidong -=3
                        self.beijing.x-=1
                        
                    }else if(self.di.x < -400){
                        if(self.me.x < self.w-25){
                            self.me.x+=3
                        }else{
                            self.me.x = self.w-25
                        }
                    }
                }
                
                bu1++
                if(bu1 %3 == 0){
                    self.me.bu++
                }
                self.me.bu = self.me.bu>3? 0:self.me.bu


            }else if(event.keyCode ==  65){
                self.fang = "left"
                if(self.me.x <= 180){
                    self.me.x -= 0
                    self.di.x +=3
                    self.xiangzidong +=3
                    self.beijing.x+=1
                    if(self.di.x > 0){
                        self.me.x -= 3  
                        self.di.x =0
                        self.xiangzidong =0
                        self.beijing.x = 0
                        if(self.me.x <= 0){
                            self.me.x = 0
                        }
                    }
                }else if (self.me.x > 180){
                    self.di.x +=0
                    self.me.x -=3;
                }
                bu1--
                if(bu1 %3 == 0){
                    self.me.bu--
                }
                self.me.bu = self.me.bu<0? 3:self.me.bu


            }else if(event.keyCode ==  87){
                self.fang = "top"
                if(self.me.y <self.h-self.di.h){
                    self.me.y-=0
                }else{
                    self.me.y-=3
                }
                bu1--
                if(bu1 %3 == 0){
                    self.me.bu--
                }
                self.me.bu = self.me.bu<0? 3:self.me.bu

            }else if(event.keyCode ==  83){
                self.fang = "down"
                if(self.me.y > self.h-self.me.h){
                    self.me.y+=0
                }else{
                    self.me.y+=3
                }
                bu1--
                if(bu1 %3 == 0){
                    self.me.bu--
                }
                self.me.bu = self.me.bu<0? 3:self.me.bu
            }
            
        }
    }
    Game.prototype.start = function(){
        // this.au.play()
        // $("audio").play()
        console.log(this.au)
        var self = this
        this.chushih = this.h-130
        this.me.y = this.chushih
        this.zidanarr = []
        this.xiangziarr = []
        this.daxiongarr = []
        this.daxiongnum = 0
        this.daxiong = new Daxiong
        var xiangzinum = 0
        var shijian = 0
        this.la = -this.daxiong.h;
        var time = setInterval(function(){
            self.beijing.tu()
            self.di.tu()
             //箱子
             xiangzinum++
             if(xiangzinum % _.random(400,900) ==0){
                 self.xiangzi = new Xiangzi;
             }
             for(var i = 0 ; i<self.xiangziarr.length;i++){
                 self.xiangziarr[i].tu();
                 self.xiangzi.xiangx1 = self.xiangzi.dongx+self.xiangzidong;
                 self.xiangzi.xiangx1 = self.xiangzi.dongx+self.xiangzidong+20;
             }
            if(self.fang == "right"){
                self.me.you()
            }else if(self.fang == "left"){
                self.me.zuo() 
            }else if(self.fang == "top"){
                self.me.shang() 
            }else if(self.fang == "down"){
                self.me.xia() 
            }

            self.canvas.onclick = function(event){
                self.zidannum--
                if(self.zidannum <0){
                    self.zidannum = 0
                    return;
                }
                self.danx = event.clientX
                self.dany = event.clientY
                self.zidan = new Zidan
                self.zidan.fangx = event.clientX
                self.zidan.fangy = event.clientY
            }
            for(var i = 0;i<self.zidanarr.length;i++){
                self.zidanarr[i].dan()
            }

            //大雄
            self.daxiongnum++
            if(self.daxiongarr.length <1){
                self.daxiong = new Daxiong;
            }
            // if(self.daxiongnum % 950 == 0){
            //     self.daxiong = new Daxiong;
            // }
            self.la += self.daxiong.lasudu
            self.daxiong.tu()
            shijian++
            if(shijian % 200 == 0){
                self.zongshijian--
            }
            //12200
            if(shijian % 12200 == 0){
                if(self.defen < 15){
                    self.di.fen15()
                    clearInterval(time)
                }else if(self.defen < 30){
                    self.di.fen30()
                    clearInterval(time)
                }else if(self.defen < 50){
                    self.di.fen50()
                    clearInterval(time)
                }else if(self.defen < 70){
                    self.di.fen70()
                    clearInterval(time)
                }else{
                    self.di.fenda70()
                    clearInterval(time)
                }

            }
        },5)
    }
}()
