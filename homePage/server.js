document.addEventListener('DOMContentLoaded', async function () {
    const dataFeed = document.querySelector(".dataFeed");
        try{
            const url="https://quad-backend-ten.vercel.app/show";
            const options={
                method:'get',
                headers:{
                    'Content-Type': 'application/json',
                }
            }
         const data= await fetch(url,options);
         console.log(data.status);
         const res= await data.json();
         console.log(res);
         const ARRAY=res.data;
         console.log(ARRAY[0].name);
         for(let i=0;i<=10;i++)
         {
            const diff=(((ARRAY[i].buy -ARRAY[i].sell)/ARRAY[i].buy)*100).toFixed(2)
            const location=document.querySelector(".lowerDataFeed");
            var parrent = document.querySelector('.lowerDataFeed');
            var text = `<div class="DataFeed">
            <h3 class="Serial ">${i+1}</h3>
            <h3 class="Platform "> ${ARRAY[i].name}</h3>
            <h3 class="LTP "> ₹${ARRAY[i].last}</h3>
            <h3 class="BSP ">₹ ${ARRAY[i].buy} /₹ ${ARRAY[i].sell}</h3>
            <h3 class="diff ">${diff}%</h3>
            <h3 class="Sav ">₹ ${(ARRAY[i].buy -ARRAY[i].sell).toFixed(2)}</h3>
            </div>`
            var child =document.createElement('div');
            child.innerHTML = text;
            parrent.appendChild(child);
         }
        }
        catch(error)
        {
           console.log("error in homePage/server.js in try block"+error.message);
        }

});
