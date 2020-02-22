const a=10;
const b=15;
 console.log(a+b);
 let max
 
     if(a>b)
     {
         console.log('a');
         document
     }
     else{
         console.log('b');
        document
     }
console.log(max)
 
    function sochiahetchohai()
    {
        for(let i=1;i<100;i++)
        {
            const dieukien=(i% 2==0);
            if(dieukien) console.log(i)
        }
    }
sochiahetchohai();

function vehinh(sodong)
{
    for(let i=1 ; i<=sodong ; i++)
    {
        let s='';
        for(let j = 1; j<=sodong;j++)
        {
            if(j<=i)
            s +='*';
        }
        console.log(s);
    }
}
vehinh(10);
 
 function f1()
 {
     alert('xin chao');
 }

 var countdate = new Date('jan 1, 2020 00:00:00').getTime();
 function newyear(){
     var now =new Date().getTime();
     gap = countdate-now;
     var second= 1000;
     var minute= second * 60;
     var hour=minute * 60;
     var day=hour * 24;

     var d=Math.floor(gap/(day));
     var h=Math.floor((gap%(day)) /(hour));
     var m=Math.floor((gap%(day))/(minute));
     var s=Math.floor((gap%(day))/(second));

     document.getElementById('day').innerText=d;
     document.getElementById('hour').innerText=h;
     document.getElementById('minute').innerText=m;
     document.getElementById('second').innerText=s;

 }
 setInterval(function(){
    newyear();
 },1000)
