<template>
    <header>
        <div class="header">
            <div class="phone">Call us: (00)1234567</div>
            <div class="more"> <span>Take 35%</span> off when you spend $99 or more with code <span>"Emmable99"</span> <a href="">More details</a></div>
            <nav>
                <ul>
                    <li>{{ header.about }}</li>
                    <li>{{ header.emmable }}</li>
                    <li>{{ header.help }}</li>
                </ul>
            </nav>
        </div>
        <div class="nav">
            <h2 id="logo">Emmable</h2>
            <div class="box-search">
                <div class="category">
                    <Icon class="icon-list" icon="clarity:view-list-line"></Icon>
                    <p>Category</p>
                </div>
                <input type="search" name="search" id="" placeholder="Search in Emmable">
                <div class="border-search"><Icon class="icon-search" icon="clarity:search-line"></Icon></div>
            </div>
           <div class="cart-login">
            <Icon class="icon-cart" icon="clarity:shopping-cart-line"></Icon>
            <button class="btn-login">Login</button>
           </div>
        </div>
    </header>
    <section class="banner">
        <img :src="bannerImg" alt="">
    </section>
    <button @click="getData" >Get Data</button>
    <section id="list">
        <div class="header">
            <div class="sale">
                <h2>Flash Sale</h2>
                <div class="hour">
                    <p class="endsin">Ends in</p>
                    <p class="second">1:10:34</p>
                </div>
            </div>
            <a href="">See More</a>
        </div>
        <div class="list-wrapper">
            <div class="box" v-for="item in data">
                <div class="image">
                    <img :src="item.image" alt="">
                </div>
                <div class="content">
                    <h5>{{ item.title }}</h5>
                    <p class="priceAfter">${{ item.price*item.discount / 100 }}</p>
                    <div class="discount">
                        <div class="percent">{{ item.discount }}%</div>
                        <div class="price">${{ item.price }}</div>
                    </div>
                    <div class="location">
                        <Icon class="icon-location" icon="material-symbols:location-on"></Icon>
                        <p>{{ item.location }}</p>
                    </div>
                    <div>
                        <div class="review">
                            <Icon class="icon-star" icon="material-symbols:star-rate-rounded"></Icon>
                            <p class="numberstar">{{ currentSelected.newStar }}</p>
                            <div class="sold">Sold {{ item.sold }} </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="company">
        <div class="head">
           <div class="check"> 
                <Icon class="icon-check" icon="mdi:check-bookmark"></Icon>
                <h2 class="official">Official Store</h2>
            </div>
            <a href="">See More</a>
        </div>
        <div class="item-container">
            <div class="item" v-for="item in list" :key="item.id">
                <div class="img">
                    <img :src="item.image" alt="">
                </div>
                <div class="intension">
                    <h4>{{ item.title }}</h4>
                    <div class="check-official">
                        <Icon class="icon-check-item" icon="mdi:check-bookmark"></Icon>
                        <p>{{ item.nameCompany }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>  
    import {ref} from "vue";
    import axios from "axios";
    const list = ref([
        {
            id:1,
            image:"https://images.aukey.com/en/images/20191223191741-AUKEY-LOGO-PNG-1200.jpg",
            title:"Aukey",
            nameCompany:"Official Store"
        },
        {
            id:2,
            image:"https://images.unsplash.com/photo-1662947995689-ec5165848ad0?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Samsung",
            nameCompany:"Official Store"
        },
        {
            id:3,
            image:"https://shojiki.vn/wp-content/uploads/2021/04/philips-logo.jpg",
            title:"Philips",
            nameCompany:"Official Store"
        },
        {
            id:4,
            image:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/mlogo/3SO-60023-f99863a1-e6db-431b-af70-2d76f4d6149e.jpg",
            title:"3Second",
            nameCompany:"Official Store"
        },
        {
            id:5,
            image:"https://ih1.redbubble.net/image.1193004591.9338/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            title:"ACE indonesia",
            nameCompany:"Official Store"
        },
        {
            id:6,
            image:"https://upload.wikimedia.org/wikipedia/commons/9/99/Wings_%28Indonesian_company%29_logo.svg",
            title:"Wings Food",
            nameCompany:"Official Store"
        },
        {
            id:7,
            image:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.jpg",
            title:"Apple",
            nameCompany:"Official Store"
        }
    ])
    const header = ref({
        about:'About',
        emmable:'Emmable',
        help:'Help'
    })
    const currentSelected = ref({
        newID:"",
        newTitle:"",
        newPriceAfter:"",
        newPercent:"",
        newPrice:"",
        newLocation:"",
        newStar:"4.8",
        newSold:""
    })
    
    const bannerImg = ref('https://cdn.pixabay.com/photo/2020/04/19/21/18/prairie-5065663_1280.jpg')
    const data = ref([])
    const getData = () => {
        axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
        .then((res)=>{
            data.value=res.data
        })
    }



    
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        margin: 0;
        padding: 0;
    }
    header {
        height: 110px;
        background-color: #afaeae; 
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 15px;
    }
    .more span{
        color: #070707;
        font-weight: bold;
    }
    nav  ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    nav ul li {
        display: inline-block;
        margin-right: 20px; 
    }
    nav ul li a {
        text-decoration: none;
        color: #333; 
    }
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    #logo{
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        color: #333;
    }
    .box-search{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        height: 45px;
        background: #fff;
        border-radius: 10px;
        border-bottom: 0 0.5 rgba(0, 0, 0, 1);
    }
    .category{
        display: flex;
        padding: 10px;
        align-items: center;
        border-right: 1px solid #cecccc;
    }
    .category p{
        font-size: 15px;
        text-align: center;
        padding-left: 5px;
    }
    .box-search .icon-list{
        font-size: 20px;
        color: #a4a4a4; 
        cursor: pointer;
    }
    .box-search input[type="search"]{
        /* padding: 7px 300px;
        border: none; */
        flex-grow: 1;
        outline: none;
        font-size: 10px;
        font-size: 13px;
        color: #333;
        padding-left: 10px;
        margin-top: 5px;
    }
    .box-search input{
        padding:7px 0 ;
        border: none;
    }
    .border-search{
        padding: 10px 10px;
        background: #5a4098;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .icon-search{
       margin-right: 10px;
       border: 1px solid #5a4098;
       color: #fff;
       font-size: 20px;
    }
    .cart-login{
        display: flex;
        align-items: center;
    }
    .cart-login .icon-cart{
        font-size: 30px;
        margin-right: 20px;
        color: #808080; 
        cursor: pointer;
    }
    .cart-login .btn-login{
        padding: 5px 10px;
        border-radius: 5px;
        background: #fff;
        border: none;
        margin-right: 10px;
    }
    .cart-login .btn-login:hover{
        background: rgb(80, 80, 239);
        color: #fff;
    }
    section{
        margin: 30px 168px;
    }
    .banner img{
        object-fit: cover;
        width: 100%;
        height: auto;
    }
    #list,#company{
        background:#f9f9f9;
        border-radius: 10px;
    } 
    .header{
        padding-top: 20px;
    }
    .header h2, .check h2{
        color: #454545;
        font-weight: bold;
        font-size: 25px;
    }
    .sale{
        display: flex;
    }
    .hour{
        display: flex;
        color: #fff;
        padding: 10px 0;
        font-size: 12px;
        background: #eb765c;
        margin-left: 10px;
        border-radius: 10px;
        
    }
    .hour .endsin{
        border-right: 1px solid #b9b8b85d;
        margin: 0 10px;
        padding-right: 10px;
    }
    .hour .second{
        margin: 0 10px;
    }
    .header a{
        text-decoration: none;
    }
    .list-wrapper, .item-container{
        display: flex;
        gap: 10px;
        padding: 20px;
        flex-wrap: nowrap;
        overflow-x: auto;
        margin-top: 10px;
    }
    .box, .item{
        height: auto;
        box-shadow: 0 0 rgba(0, 0, 0, 1);
        margin-right: 10px;
        flex: 0 0 calc(20% - 10px);
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
    }
    .image{
        width: 100%;
        height: auto;
    }
    .image img{
        width: 100%;
        height: auto;
    }
    .content{
        margin: 10px;
    }
    .content h5{
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .content .priceAfter{
        font-size: 22px;
        color: #4e4e4e;
    }
    .content .discount{
        display: flex;
    }
    .discount .percent{
        padding: 2px 7px;
        border-radius: 5px;
        background: #ffd1d1;
    }
    .discount .price{
        padding: 2px 10px;
        color: #b9b8b8;
    }
    .location{
        display: flex;
        margin-top: 5px;
    }
    .icon-location{
        font-size: 20px;
    }
    .review{
        display: flex;
        margin-top: 5px;
    }
    .icon-star{
        font-size: 20px;
        color: #ffd18c;
    }
    .numberstar{
        border-right: 1px solid #b9b8b8;
        padding-right: 10px;
        margin-right: 10px;
        color: #b9b8b8;
    }
    .sold{
        padding: 0 5px;
        color: #b9b8b8;
    }
    .head{
        display: flex;
        justify-content: space-between;
    }
    .head a{
        font-size: 15px;
        text-decoration: none;
        padding: 15px;
    }
    .check{
        display: flex;
        margin-top: 10px;
    }
    .icon-check{
        font-size: 20px;
        color: rgb(15, 159, 15);
        margin-top: 15px;
    }
    .official{
        font-size: 20px;
        padding:3px 5px;
    }
    .item-container{
        width: 100%;
        height: auto;
    }
    .img img{
        width: 100%;
        height: 150px;
        object-fit: cover;
        overflow: hidden;
    }
    .intension h4{
        font-size: 18px;
        text-align: center;
        font-weight: bold;
    }
    .check-official{
        display: flex;
        margin-top: 5px;
        text-align: center;
        margin-left: 70px;
    }
    .icon-check-item{
        font-size: 18px;
        color: rgb(15, 159, 15);

    }
</style>