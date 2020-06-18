
/*** my create demo 我创建的方法*
 *   @param Library Library只是暂时的名字，不知道未来是什么，而且他还什么都没有(只有一些方法但是还不在他里面)，希望以后他会有
 */

class Library{
    constructor(){
        this.Library = null;
    }
}

/**
 * @param MyPromise  只是简单的promise没有成功和失败情况和微任务宏任务的区分
 * @param Instructions 使用方法
 * new MyPromise.put(
 *      ()=>{},
 *      new MyPromise.execept(data)
 * ).put(
 *      ()=>{},
 *      new MyPromise.execept(data)
 * )
 */
 
class MyPromise{
    constructor(){
        this.pro=[];
    }
    put(sequence){
        this.pro.push(sequence)
        return this;
    }
    except(data){
        if(this.pro.length>0){
            return this.pro.shift()(data)
        }
    }
}

/**
 * @param MyGPromise 用Generator实现的简单版promise
 * @param query 一个将你要执行的函数储存在一个数组中
 * @param Instructions 使用方法
 * queue=[fun1，fun2,fun3...]将function放进数组
 * _generator=MyGPromise(queue);
 * 除最后一个fun，其他function 里加上_generator.next(参数).value();
 *  ！！！generator   不会保存使用过的 yield   
 */  
function* MyGPromise(queue){
    while(queue.length>0){
        yield queue.shift()
    }
}


/**
 * @param MyAjax Ajax请求 
 * @param config {} 所有的参数以对象的形式传入
 * @param config.api api, 文件位置
 * @param config.send send,url地址栏参数
 * @param config.async 是否同步async,同步false/异步true;
 * @param config.success success,回掉函数,处理数据
 * @param Instructions 使用方法 
 * new MyAjax.request({
 * 	    api:"query.php",
 *      send:null,
 *      async:true,
 *      success:female
 * })
 */
class MyAjax{
    create(){
        try{    
            return new XMLHttpRequest();
        }catch(e){
            try{
                new ActiveXObject("Microsoft.XMLHTTP");
            }catch(e){
                if(confirm("浏览器版本过低")){
                    window.location.href="https://www.google.cn/intl/zh-CN/chrome/";
                }
            }
        }
    }
    format(send){
        let parameteters="";
        for(let p in send){
            parameteters+=p+"="+send[p]+"&";
        }
        return parameters.substring(0,parameters.lastIndexOf("&"));
    }
    requset(config){
        let xhr =this.create();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status === 200){
                config.success(xhr.responseText)
            }
        }
        if(config.send && typeof(config.send).toLowerCase()=="object"){
            config.send = this.format(config.send)
        }
        if((!config.method || (config.method && config.method.toUpperCase()=="GET") &&config.send) ){
            config.api = config.api+"?"+config.send
        }
        xhr.open(config.method?"GET":config.method,config.api,(config.async==true||config.async==false)?config.async:true)
        xhr.setRequestHeader("Content-typy","Application/x-www-form-urlencoded;charset=utf-8")
        xhr.send(!config.send?null:config.send)
    }
}

/****
 * @param getNowTime 获取时间并且自动补全
 *  ES6字符串的扩展当中
 *  var str ="5";
 *  console.log(str.padStart(2,"0"));// 左侧补全
 *  console.log(str.padEnd(2,"0"));// 右侧补全  
 * 
 */
function getNowTime() {
    var nowTime = new Date();
    var timeStr = nowTime.getFullYear()+"-"+
        (nowTime.getMonth()+1).toString().padStart(2,"0")+"-"+
        nowTime.getDate().toString().padStart(2,"0")+ " "+
        nowTime.getHours().toString().padStart(2,"0")+":"+
        nowTime.getMinutes().toString().padStart(2,"0")+":"+
        nowTime.getSeconds().toString().padStart(2,"0");
    return timeStr;
}

/***
 * @param CarouselOP opacity轮播图
 * @param Instructions 使用方法 
 * new CarouselOP(document.querySelector(box))
 * 将父盒子ID：#id 传入
 * HTML结构{
 *  div#id>div 图片
 *         div 下标
 *         div 左右
 * }
 */

function CarouselOP(box){
    this.box = box;
    this.show = this.box.children[0].children;
    this.index = this.box.children[1].children;
    this.direction = this.box.children[2].children;
    this.toplimit = this.show.length;
    this.now = 0;
    this.init();
}
CarouselOP.prototype = {
    init: function (){
        this.beginTimer(10);
        this.indexEvents();
        this.directionEvent();
    },
    beginTimer: function (process){
        this.timer = window.setInterval(this.diaphaneity.bind(this,),process);
    },   
    diaphaneity: function (){
        this.show[this.now].style["opacity"] = +this.show[this.now].style["opacity"] + 0.01;
        this.discoloration();
        if(+this.show[this.now].style["opacity"]>=1){
           
            window.clearInterval(this.timer);
            this.waitTimer();
        }
    },
    discoloration: function (){
        for(let i =0;i<this.index.length ;i++){
            this.index[i].style.backgroundColor = "#7e7777"
        }
        this.index[this.now].style.backgroundColor = "rgba(202, 74, 74, 0.3)"
    },
    waitTimer: function (){
        this.timer = window.setInterval(this.changeImg.bind(this),2000)
    },
    changeImg: function (){
        this.show[this.now].style["opacity"] = 0;
        this.now==this.toplimit-1?this.now = 0:this.now++;
        this.show[this.now-1>=0?this.now-1:this.show.length-1].style["z-index"] = 0;
        this.show[this.now].style["z-index"] = 10;
        window.clearInterval(this.timer);
        this.beginTimer(10);
    },
    indexEvents: function (){
        for(let i = 0;i<this.index.length; i++){
            this.index[i].addEventListener("mouseover",this.manualEvent.bind(this,i))
        }
    },
    manualEvent: function (i){
        this.show[this.now].style["opacity"] = 0;
        this.now = i;
        window.clearInterval(this.timer);
        this.beginTimer();
        this.discoloration();
    },
    directionEvent: function (){
        this.direction[0].addEventListener("click",this.directionEventLeft.bind(this));
        this.direction[1].addEventListener("click",this.directionEventRight.bind(this))
    },
    directionEventLeft: function (){
        this.show[this.now].style["opacity"] = 0;
        this.now===0?this.now=this.toplimit-1:this.now--;
        window.clearInterval(this.timer);
        this.beginTimer();
        this.discoloration();
    },
    directionEventRight: function (){
        this.show[this.now].style["opacity"] = 0;
        this.now===this.toplimit-1?this.now=0:this.now++;
        window.clearInterval(this.timer);
        this.beginTimer();
        this.discoloration();    
    }
}

/***
 * @param Carousel 无缝轮播图
 * @param Instructions 使用方法
 * new Carousel(document.querySelector(box))
 * 将父盒子ID：#id 传入
 * HTML结构{
 *  div#id>div 图片
 *         div 下标
 *         div 左右
 * }
 */

function Carousel(box){
    this.box = box;
    this.show = this.box.children[0].children;
    this.index = this.box.children[1].children;
    this.direction = this.box.children[2].children;
    this.toplimit = this.show.length;
    this.differ = null;//差值
    this.flag = false;
    this.now = 0;
    this.init();
}
Carousel.prototype = {
    init: function (){
        this.initElement();
        //一定要加上不然，右箭头时很难清除，左箭头时清不了
        this.timer = window.setTimeout(()=>{
            this.beginTimer(this.directions,1);
        },2500);
        this.directionEvent();
        this.indexEvents();
    },
    initElement: function (){
        //初始化元素
        for(let i = 1;i<this.show.length;i++){
            this.show[i].style["left"] = "100%";
        }
        this.show[this.now].style["left"] = "0%";
        this.show[this.show.length-1].style["left"] = "-100%";
    },
    /**
     *  @param goWhere 左右方向函数
     *  @param process 定时器延时
     *  @param k 速度倍数
     */
    beginTimer: function (goWhere,process,k){
        //坑： 清除 右击事件 第一个setTimeout中的beginTimer;
        this.timer = window.setInterval(goWhere.bind(this,k),process);
    },   
    /**
     * @param x 速度倍数
     */
    directions: function (x){
        let k = x?x:x=1
        let num = this.now+1<this.toplimit?this.now+1:0;//优化，判断一次就可以
        this.show[this.now].style["left"] = parseFloat(this.show[this.now].style["left"])- k*1+"%";
        this.show[num].style["left"] = parseFloat(this.show[num].style["left"])- k*1+"%";
        if(parseFloat(this.show[num].style["left"]) === 0){
            //console.log(num)
            this.show[this.now-1>=0?this.now-1:this.toplimit-1].style["left"] = "100%";
            this.now<this.toplimit-1?this.now++:this.now=0;
            if( this.differ ){
                this.differ--;
                if(this.differ === 0){
                    window.clearInterval(this.timer)
                    this.waitTimer();
                }
            }else{
                window.clearInterval(this.timer)
                this.waitTimer();
            }
            this.discoloration();//下标
        }
    },
    /**
     * @param x 速度倍数
     */
    reversedirection :function (x){
        let k = x?x:1;
        let num = this.now-1>=0?this.now-1:this.toplimit-1;
        let num2 = num-1>=0?num-1:this.toplimit-1;
        this.show[this.now].style["left"] = parseFloat(this.show[this.now].style["left"]) + k*1+"%";
        this.show[num].style["left"] = parseFloat(this.show[num].style["left"])+ k*1+"%";
        if(parseFloat(this.show[this.now].style["left"]) === 100){
            this.show[num2].style["left"] = "-100%";
            //坑： this.now-1>=0 如果只大于0; now==1 时now = length-1;
            this.now-1>=0?this.now--:this.now=this.toplimit-1;
            if( this.differ ){
                this.differ++;
                if(this.differ === 0){
                    window.clearInterval(this.timer);
                    this.waitTimer();
                }   
            }else{
                window.clearInterval(this.timer)
                this.waitTimer();
            }
            this.discoloration();//下标
        }
    },
    waitTimer: function (){
        this.timer = window.setInterval(this.changeImg.bind(this),2000)
    },
    changeImg: function (){
        window.clearInterval(this.timer);//清楚等待定时器
        this.beginTimer(this.directions,1)
    },
    directionEvent: function (){
        this.direction[0].addEventListener("click",this.directionEventLeft.bind(this));
        this.direction[1].addEventListener("click",this.directionEventRight.bind(this));
    },
    directionEventLeft: function (){
        if( parseFloat(this.show[this.now].style["left"]) == 0 ){
            window.clearInterval(this.timer);
            this.beginTimer(this.reversedirection,1)
            //坑： 清除 右击事件 第一个setTimeout中的beginTimer;
        }
    },
    directionEventRight: function (){
        if( parseFloat(this.show[this.now].style["left"]) == 0){
            window.clearInterval(this.timer);
            this.beginTimer(this.directions,1)
            //坑： 清除 右击事件 第一个setTimeout中的beginTimer;
        }
    },
    discoloration: function (){
        for(let i =0;i<this.index.length ;i++){
            this.index[i].style.backgroundColor = "rgba(255, 255, 255,0.5)";
        }
        this.index[this.now].style.backgroundColor = "rgba(255, 0, 0, 0.9)";
    },
    indexEvents: function (){
        for(let i = 0;i<this.index.length; i++){
            this.index[i].addEventListener("mouseover",this.manualEvent.bind(this,i))
        }
        
    },
    manualEvent: function (i){
        if( parseFloat(this.show[this.now].style["left"]) == 0){
            window.clearInterval(this.timer);
            this.differ = i - this.now;//console.log(this.differ)
            if(this.differ>0){
                this.beginTimer(this.directions,1,5)
            }else if(this.differ<0){
                this.beginTimer(this.reversedirection,1,5)
            }   
        }
    },
}

/****
 * 正则 ip地址
 */

function Reg(){
    var ip = /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
    return ip
}



