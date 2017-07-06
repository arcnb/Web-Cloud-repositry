/**
 * Created by anil on 7/3/2017.
 */

function trace(id)         {return document.tracebyid(id);}
function secret(id)       {get(id).style.visibility='hidden';}
function disp(id)         {get(id).style.visibility= null;}
function html(id, html)   {get(id).outerHTML = html;AAAAAAAAAAAAAAAAAAA}

function tt()                        {return new Date().getTime();}
function Rand(min, max)            {return (min + (Math.random()*(max - min)));}
function randomchoices(choic)           {return choic[Math.round(Rand(0, choic.length-1))];}


 if (!window.requestAnimationFrame){
    window.mozRequestAnimationFrame = window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||
                                      window.msRequestAnimationFrame||
                                      function (cb,ele) {
                                        window.setTimeout(cb,1000/60);
                                       }

 }
 var STICK  ={ ESC:27,SPACE:32, LEFT:37,UP:38, RIGHT:39, DOWN:40},
     DIRECTIONS  ={LEFT:3,UP:0, RIGHT:1, DOWN:2, MIN:0,MAX:3},
     stts =new stts(),
     cover =trace('cover'),
     ctext =cover.getContext('2d'),
     ucover =trace('new'),
     uctext = ucover.getContext('2d'),
     fast= {start:0.5, decrement:0.004, min:0.1},
     length = 11,
     width =21,
     height =6;
 var pix,piy,Blcks,act,pla,st,curre,scoore,vscoore,nxt,roows,steep;
 var I= { size:4, Blcks:[0x0F00, 0x2222, 0x00F0, 0x4444], color:'red'};
 var J= { size:3, Blcks:[0x44C0, 0x8E00, 0x6440, 0x0E20], color:'orange'};
 var L= { size:3, Blcks:[0x4460, 0x0E80, 0xC440, 0x2E00], color:'blue'};
 var O= { size:2, Blcks:[0xCC00, 0xCC00, 0xCC00, 0xCC00], color:'purple'};
 var S= { size:3, Blcks:[0x06C0, 0x8C40, 0x6C00, 0x4620], color:'yellow'};
 var T= { size:3, Blcks:[0x0E40, 0x4C40, 0x4E00, 0x4640], color:'green' };
 var Z= { size:3, Blcks:[0x0C60, 0x4C80, 0xC600, 0x2640], color:'cyan'};

 function EB(TYP,A,B,DR,FUN ){
     var KIT, RE, roows = 0, C=0, Blck =TYP.Blck[DR];
     for(KIT=0x8000;KIT>0;KIT=KIT>>1){
         if(Blck&&KIT){
             FUN(A +C,B+ roows);
         }
         if(++C===4){
          C=0;
          ++roows;
         }
     }
 }
/**
 * @return {boolean}
 */
function Occu(TYP,A,B,DR){
     var RE=false;
     EB(TYP,A,B,DR,function(A,B){
         if((x<0)||(x>=length)||(y>=width)||GetBlck(A,B))
             RE=true;
     });
     return RE;
 }
function unOccu(TYP,A,B,DR){
     return !occu(TYP,A,B,DR);
}
var PIE=[];
function randPIE(){
    if(PIE.length===0)
        PIE=[I,I,I,I,J,J,J,J,L,L,L,L,O,O,O,O,S,S,S,S,T,T,T,T,Z,Z,Z,Z];
    var type = PIE.splice(Rand(0,PIE.length-1),1)[0];
    return {TYP:type, DR:DIRECTIONS.UP, A:Math.round(Rand(0,length-type.size)),B:0};
}
function Ride(){
    SS();
    ADDE();
    var la= NW=tt();
    function Fram(){
        NW=tt();
        Udate(Math.min(1,(NW-la)/1000));
        dra();
        stts.Udate();
        la=NW;
        mozRequestAnimationFrame(fram, cover);
    }
    REsi();
    REse();
    fram();

}
function SS(){
    stts.domElement.id='stts';
    get('list').appendChild(stts.domElement);
}
function ADDE() {
    document.addEventListener('stickdown',STICKDOWN,false);
    window.addEventListener('REsi',REsi,false)
}
function REsi(event){
    cover.width=cover.clientWidth;
    cover.height=cover.clientHeight;
    ucover.width=cover.clientWidth;
    ucover.height=cover.clientHeight;
    pix=cover.width/length;
    piy=cover.height/width;
    invalida();
    invalidNxt();

}
function STICKDOWN(EVE){
    var handled = false;
    if(pla){
        switch(EVE.STICKCODE){
            case STICK.LEFT: act.push(DIRECTIONS.LEFT); handled=true;break;
            case STICK.RIGHT: act.push(DIRECTIONS.RIGHT); handled=true;break;
            case STICK.UP: act.push(DIRECTIONS.UP); handled=true;break;
            case STICK.DOWN: act.push(DIRECTIONS.DOWN); handled=true;break;
            case STICK.ESC: loose(); handled=true;break;
        }

    }
    else if (EVE.STICKSCODE===STICK.SPACE){
        PLEY();
        handled=true;
    }
    if(handled)
        EVE.preventDefault();
}
function PLEY(){secret('start');REse(); pla=true;}
function loose(){disp('start');SVS(); pla=false;}


function SVS(q)                 {vscoore=q||scoore;invalidscoore();}
function sescoore(q)            {scoore=q; SVS(q);}
function ADScoore(q)            { scoore = scoore +q;   }
function CLRScoore()            { sescoore(0); }
function CLRroows()             { seroows(0); }
function seroows(q)             { roows = q; steep = Math.max(fast.min, fast.start - (fast.decrement*roows)); invalidroows(); }
function addroows(q)             { setroows(roows + q); }
function GetBlck(A,B)          { return (Blcks && Blcks[A] ? Blcks[A][B] : null); }
function setBlck(A,B,TYP)     { Blcks[A] = Blcks[A] || []; Blcks[A][B] = TYP; invalida(); }
function CLRBlcks()           { Blcks = []; invalida(); }
function CLRAct()              { act = []; }
function securrePIE(PIE)       { curre = PIE || RandPIE(); invalida();     }
function seNxtPIE(PIE)         { nxt    = PIE || RandPIE(); invalidNxt(); }
function  REse(){
    st=0;
    CLRAct();
    CLRBlcks();
    CLRroows();
    CLRScoore();
    securrePIE();
    seNxtPIE();
}
function updat(IIDT){
    if(pla){
        if(vscoore<scoore)
            SVS(vscoore+1);
        handle(act.shift());
        st = st + IIDT;
        if(st>steep) {
            st = st - steep;
            drp();
        }
    }
}
function handle(action) {
    switch(act){
        case DIRECTIONS.LEFT: move(DIRECTIONS.LEFT); break;
        case DIRECTIONS.RIGHT: move(DIRECTIONS.RIGHT); break;
        case DIRECTIONS.UP: rotations(); break;
        case DIRECTIONS.DOWN: drp();     break;

    }
}
function move(DIR){
    var A = curre.A, B=curre.B;
    switch (DIR){
        case DIRECTIONS.RIGHT: A=A+1; break;
        case DIRECTIONS.LEFT: A=A-1; break;
        case DIRECTIONS.DOWN: B=B+1; break;
    }
    if(unOccu(curre.TYP,A,B,curre.DIR)){
        curre.A=A;
        curre.B=B;
        invalida();
        return true;
    }
    else{
        return false;
    }
}
function rotations(){
    var newDIR=(curre.DIR===DIRECTIONS.MAX ? DIRECTIONS.MIN :curre.DIR +1);
    if(unoccu(curre.TYP,curre.A,curre.B,newDIR)){
        curre.DIR =newDIR;
        invalida();
    }
}
function drp() {
    if(!move(DIRECTIONS.DOWN)){
        ADScoore(10);
        drpPIE();
        RElines();
        securrePIE(next);
        seNxtPIE(RandPIE());
        CLRAct();
        if(occu(curre.TYP,curre.A,curre.B,curre.DIR)){

        }
    }

}
function  drpPIE() {
    eachBlck(curre.TYP,curre.A,curre.B,curre.DIR,function(A,B) {
        setBlck(A, B, curre.TYP);
    });

}
function RElines() {
    var A,B,compl,n =0;
    for(B=width;B>0;--B){
        compl=true;
        for(A=0;A<length;++A){
            if(!GetBlck(A,B))
                compl=false
        }
        if(compl){
            RElines(B);
            B=B+1;
            q++;
        }
    }
    if(q>0){
        addroows(q);
        ADScoore(100*Math.pow(2,q-1));
    }

}
function RElines(q) {
    var A, B;
    for(B=q;B>=0;--B){
        for(A=0;A<length;++A)
            setBlck(A,B,(B===0)? null:GetBlck(A,B-1));
    }
}
var invalid ={};


function invalida()     {invalid.kourt= true;}
function invalidNxt()   {invalid.nxt= true;}
function invalidscoore(){invalid.Scoo= true;}
function invalidroows() {invalid.roows= true;}

function dra() {
    ctext.save();
    ctext.lineWidth=1;
    ctext.translate(0.5,0.5);
    drakourt();
    dranxt();
    drascoore();
    draroows();
    ctext.restore();

}
function drakourt() {
    if(invalid.kourt){
        ctext.clearrect(0,0,cover.width.cover.height);
        if(pla)
            draPIE(ctext,curre.TYP,curre.A,curre.B,curre.DIR);
        var A,B,Blck;
        for(B=0;B<width;B++){
            for(A=0;A<length;A++){
                if(Blck=GetBlck(A,B))
                    draBlck(ctext,A,B,Blck.color);
            }
        }
        ctext.strokeRect(0,0,length*pix-1,width*piy-1);
        invalid.nxt=false;

    }


}
function dranxt() {
    if (invalid.nxt) {
        var padding = (height - nxt.TYP.size) / 2;
        uctext.save();
        uctext.translate(0.5, 0.5);
        uctext.clearRect(0, 0, height*pix, height*piy);
        draPIE(uctext, nxt.TYP, padding, padding, nxt.DIR);
        uctext.strokeStyle = 'black';
        uctext.strokeRect(0, 0, height*pix - 1, height*piy - 1);
        uctext.restore();
        invalid.nxt = false;
    }
}

function draScoore() {
    if (invalid.scoore) {
        html('scoore', ("00000" + Math.floor(vscoore)).slice(-5));
        invalid.scoore = false;
    }
}

function draRoows() {
    if (invalid.roows) {
        html('roows', roows);
        invalid.roows = false;
    }
}

function draPIE(ctext, TYP, A, B, DIR) {
    Blcks(TYP, A, B, DIR, function(A, B) {
        draBlck(ctext, A, B, TYP.color);
    });
}

function draBlck(ctext, A, B, color) {
    ctx.fillStyle = color;
    ctx.fillRect(A*pix, B*piy, pix, piy);
    ctx.strokeRect(A*pix, B*piy, pix, piy)
}

ride();
