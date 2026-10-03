const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
const p=await b.newPage({viewport:{width:1280,height:769}});
await p.goto('file://'+__dirname+'/gig-image.html');await p.screenshot({path:'gig-image.png'});await b.close();})();
