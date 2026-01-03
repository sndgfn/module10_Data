const args=process.arg;

//process.arg[0]=node path
//process.arg[1]=fie path
//process.arg[2]=first argument

const name=args[2]||'guest'
const time=new Date().getHours();

let greeting;
if (time<12){
    greeting='ggood morning'
}
else if(time<18){
    greeting='ggood afternoon'
}else{
    greeting='good evening'
}
console.log(`${greeting} ${name}`)