/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = 'https://platzi-avo.vercel.app';
const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector('div#app');
appNode.className = 'container_info';

appNode.addEventListener('click',(evento)=>{
    if(evento.target.nodeName==='H2'){
        window.alert('hola');
    }
})

const formatPrice = (price)=>{
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency', 
        currency:"USD"
    }).format(price);
    return newPrice;
}

const getData = async ()=>{
    const response = await window.fetch(`${baseUrl}/api/avo`);
    const data = await response.json();
    data.data.forEach(item=>{

        const allItems = []

        //image
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;
        image.className = 'img';
        
        //name
        const name = document.createElement('h2');
        name.textContent = item.name;
        name.className = "title";

        //price
        const price = document.createElement('p');
        price.textContent = formatPrice(item.price);
        price.className = 'prize';
        
        const priceAndTitle = document.createElement('div')
        priceAndTitle.append(name, price);
        priceAndTitle.className = 'priceAndTitle';

        const container = document.createElement('div');
        container.append(image, priceAndTitle);
        container.className = "palta-container";

        allItems.push(container);

        appNode.appendChild(...allItems)
    });
    

} 



getData(baseUrl);
