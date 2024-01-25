const product=[
    {
        id: 0,
        image:'images/2.jpg',
        title:'SweatShirt',
        price:500,
    },
    {
        id:1,
        image:'images/3.jpg',
        title:'T-Shirt',
        price:600,
    },
    {
        id:3,
        image:'images/clothes-2.jpg',
        title:'Crop T-Shirt',
        price:700,

    },
    {
        id:4,
        image:'images/clothes-1.jpg',
        title:'Crop Top',
        price:700,
    },
    {
        id:5,
        image:'images/4.jpg',
        title:'Long Polyester top',
        price:900,
    },
    {
        id:6,
        image:'images/6.jpg',
        title:'Ladies SuperPro Twill Shirt',
        price:900,
    }
];
const categories =[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>{
var {image,title,price} = item;
return(
   `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>" +
        `</div>
    </div>`
)
    }).join('')

    var cart=[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a,1);
        displaycart();
    }
    function displaycart(a){
        let j=0,total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML="Your cart is empty";
            document.getElementById("total").innerHTML="$ "+0+".00";
        }else{
            document.getElementById('cartItem').innerHTML=cart.map((items)=>
            {
                var{image,title,price}=items;
                total=total+price;
                document.getElementById("total").innerHTML="$ "+total+".00";
                return(
                    `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowing' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>`+ 
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                );
            }).join('');
        }
    }