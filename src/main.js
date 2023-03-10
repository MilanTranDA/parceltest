import anime from "animejs";
import { text } from "./module/modules";

console.log(text);
anime({
    targets: 'h1',
    rotate: 360,
    duration: 3000
});

//Images

const img = document.createElement('img');
document.body.append(img);
// img.src ='./media/duckduck.jpg'

console.log(import.meta.url);

const imgURL = new URL('./media/duckduck.jpg', import.meta.url);

img.src = imgURL;