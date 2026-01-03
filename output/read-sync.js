const fs=require('fs')
console.log('start reeding')
try{
    const data=fs.readFileSync('../../data/entries/diary.txt','utf-8')
    console.log('file content')
    console.log(data)
}catch(err){
    console.error(err.messege)
}

// const data=fs.readFileSync('./data/diary.txt' ,'utf-8')
console.log('finished')