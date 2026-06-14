import { chromium } from "playwright";
const ph = (w,h)=>`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><rect width='100%' height='100%' fill='#e7e2d6'/></svg>`;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:1.3, reducedMotion:"reduce" });
await ctx.route("**/_next/image*", async (r)=>{const u=new URL(r.request().url());const t=decodeURIComponent(u.searchParams.get("url")||"");if(t.includes("unsplash")||t.includes("pravatar")){const w=parseInt(u.searchParams.get("w")||"800",10);return r.fulfill({contentType:"image/svg+xml",body:ph(w,Math.round(w*0.7))});}return r.continue();});
const p = await ctx.newPage();
await p.goto("http://localhost:3100/",{waitUntil:"networkidle"});
await p.evaluate(async()=>{await new Promise(r=>{let y=0;const s=()=>{window.scrollBy(0,500);y+=500;if(y<2600)setTimeout(s,60);else r();};s();});});
await p.waitForTimeout(600);
// capture the marquee region (around rooms->activities)
await p.screenshot({path:"marquee.jpg",type:"jpeg",quality:84,clip:{x:0,y:0,width:1440,height:900}});
await b.close();
console.log("ok");
