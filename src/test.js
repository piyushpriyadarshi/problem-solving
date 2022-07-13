import * as PImage from "pureimage"
import fs from 'fs'
import * as client from "http"

let url = "http://vr.josh.earth/webxr-experiments/physics/jinglesmash.thumbnail.png"
let filepath = "output.png"
let fontpath = 'DancingScript-Medium.ttf'
PImage.registerFont(fontpath,'MyFont').loadPromise()
    //Promise hack because https module doesn't support promises natively)
    .then(()=>new Promise(res => client.get(url,res)))
    .then(stream => PImage.decodePNGFromStream(stream))
    .then(img => {
        //get context
        const ctx = img.getContext('2d');
        ctx.fillStyle = '#000000';
        ctx.font = "60pt MyFont";
        ctx.fillText(new Date().toDateString(), 50, 80);
        return PImage.encodePNGToStream(img, fs.createWriteStream(filepath))
    })
    .then(()=>{
        console.log('done writing',filepath)
    })