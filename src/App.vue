<template>
    <button @click="getData">Get Data</button>
    
      <div class="wrapper" >
        <div class="box" v-for="item in data" @click="onSelect(item)">
          <button class="arrow-btn left" @click="scrollLeft"><Icon icon="material-symbols-light:arrow-back-ios-new-rounded"></Icon></button>
          <img :src="item.image" alt="">
          <div class="content">
            <h5 class="title">{{ item.title }}</h5>
            <p class="price-after">${{ item.price*item.discount/100 }}</p>
            <div class="item">
              <p class="discount">{{ item.discount }}%</p>
              <p class="price">${{ item.price }}</p>
            </div>
            <a href="" class="location"><Icon icon="material-symbols:location-on-rounded"></Icon>{{ item.location }}</a>
            <div class="review">
              <p class="star" href=""><Icon class="star-icon" icon="material-symbols:kid-star"></Icon>4.5</p>
              <p class="sold">{{ item.sold }}</p>
            </div>
          </div>
        </div>
        <button class="arrow-btn right" @click="scrollRight"><Icon icon="material-symbols-light:arrow-forward-ios"></Icon></button>
      </div>
    
</template>
<script setup>
  import {ref} from "vue"
  import axios from "axios";
  const currentSelected = ref({
    newId:"",
    title:"",
    priceAfter:"",
    discount:"",
    price:"",
    location:"",
    sold:""
  })
  const scrollLeft = () => {
    const container = document.querySelector('.wrapper');
    container.scrollLeft -= 200; // Điều chỉnh giá trị di chuyển
  }
  const scrollRight = () => {
    const container = document.querySelector('.wrapper');
    container.scrollLeft += 200; // Điều chỉnh giá trị di chuyển
  }
  const data = ref([])
  const getData= () => {
    axios.get('https://6610ce890640280f219d706e.mockapi.io/api/message')
    .then((response)=>{
        data.value = response.data
    })
}
 
</script>
<style scoped>
  *{
    margin: 0;padding: 0;
  }
  .arrow-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(125, 124, 124, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .arrow-btn.left {
    left: 0;
  }
  .arrow-btn.right {
    right: 0;
  }
  .wrapper {
    display: flex;
    flex-wrap: nowrap; /* Không cho phép các sản phẩm xuống dòng */
    overflow-x: auto; /* Cho phép cuộn ngang nếu có nhiều sản phẩm */
    gap: 10px;
    padding: 10px;
  }
  .box {
    flex: 0 0 calc(20% - 10px); /* Mỗi box chiếm 20% của chiều rộng wrapper, trừ khoảng cách giữa các box */
    height: auto;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(74, 74, 74, 0.5);
    margin-right: 10px; 
    overflow: hidden;
  }
  img {
    width: 100%; 
    height: auto; 
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
  }
  .content {
    margin: 10px; 
  }
  .content h5 {
    font-size: 20px;
    margin-top: 5px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; /* Hiển thị dấu ba chấm (...) nếu tiêu đề quá dài */
  }
  .price-after {
    font-size: 20px;
    margin-top: 5px;
    color: #333;
  }
  .item {
    display: flex;
    margin-top: 5px;
  }
  .item .discount {
    margin-right: 10px;
    color: #ff9d9d;
    padding: 3px 5px;
    background: #ffeded;
    border-radius: 5px;
  }

  .price {
    color: #b2b2b2;
    margin-top: 3px;
  }
  .location {
    overflow: hidden;
    white-space: nowrap;
    text-decoration: none;
    color: #b2b2b2;
    font-size: 14px;
  }
  .review {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #b2b2b2;
  }
  .star{
    text-decoration: none;
    color: #b2b2b2;
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #b2b2b2;
    margin-bottom: 5px;
  }
  .star-icon {
    font-size: 14px;
    color: #ffab2b;
    margin-right: 5px;
    margin-top: 5px;
  }
  .sold {
    color: #b2b2b2;
  }
</style>