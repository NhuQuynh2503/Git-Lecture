<template>
<div class="wrapper">
  <button @click="showPopup" class="btn-them" >Thêm sản phẩm</button>
  <div class="box-container" >
    <div class="box" v-for="(item,index) in sortedList" :key="item.id">
      <div class="image">
        <img :src="item.image" alt="">
      </div>
      <div class="content">
        <h2>{{ item.title }}</h2>
        <p class="des">{{ item.description }}</p>
        <div class="item">
          <div class="left"><Icon icon="material-symbols:attach-money"></Icon>{{ item.price }}</div>
          <div class="right"><button>Shop Now</button></div>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="popup-form" v-if="isShowPopup">
  <div class="form-container">
    <form action="">
      <h2>Thêm sản phẩm</h2>

      <label for="">Title:</label>
      <input type="text" id="title" required v-model="title">

      <label for="">Description:</label>
      <textarea name="" id="" required v-model="description"></textarea>

      <label for="">Price:</label>
      <input type="number" name="" id="price" required v-model="price">

      <label for="">Link image:</label>
      <input type="text" name="" id="image" required v-model="image">

      <button @click="addMore" class="more">Thêm</button>
      <button class="cancel">Hủy</button>

    </form>
  </div>
</div>
</template>
<script setup>
import {ref,computed} from "vue"
const list = ref([
  {
    id:1,
    title:"Women's costume Yves Sain Laurent",
    description:"Fashion is something we deal with everyday. Even people who say ...",
    price:1140,
    image:"https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBmYXNoaW9ufGVufDB8fDB8fHww",
  },
  {
    id:2,
    title:"Men's black hat Gucci",
    description:"The fedora hat is reimagined for Pre-Fall 2020 with a maxi embroidered label de...",
    price:540,
    image:"https://images.unsplash.com/photo-1467493330285-2fe6a9f97483?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:3,
    title:"Dress Larl Lagerfeld",
    description:"Another masterpiece from the legendary designer. He designed new dress dev...",
    price:640,
    image:"https://images.unsplash.com/photo-1531518326825-96490ddf2a89?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:4,
    title:"Men's black tie Valention",
    description:"Jacquard Valentino tie with Valentino logo motif. Faded affect, baggy cut...",
    price:225,
    image:"https://media.istockphoto.com/id/1192816153/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-%C4%91%E1%BA%B9p-trai-trong-m%E1%BB%99t-chi%E1%BA%BFc-%C3%A1o-kho%C3%A1c-h%C3%BAt-m%E1%BB%99t-%C4%91i%E1%BA%BFu-thu%E1%BB%91c-ch%C3%A2n-dung-ngh%E1%BB%87-thu%E1%BA%ADt-c%E1%BB%A7a.jpg?s=2048x2048&w=is&k=20&c=w8RiE7BQdJ5RYtisf_Rubc8c5zDk2bmYLY9NhR3IJhg=",
  },
  {
    id:5,
    title:"Men's jacket Off- white",
    description:"Off- White scuffed denim jacket. Faded affect, baggy cut, pointed collar, clasp...",
    price:215,
    image:"https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id:6,
    title:"Cotton blouse Dries van noten",
    description:"The fedora hat is reimagined for Pre- Fall 2020 with a maxi embroidered label de...",
    price:180,
    image:"https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
])
const title = ref("");
const description = ref("");
const price = ref("");
const image = ref("");
const isShowPopup = ref(false);
const createItemID = ref(null);
function showPopup (){
  isShowPopup.value = true;
}
const addOneMoreItem = (item) => {
  const newID = list.value.length > 0 ? list.value[list.value.length - 1].id + 1 : 1;
  const newItem = {
    id: newID,
    title: item.title,
    description: item.description,
    price: item.price,
    image: item.image
  }
  list.value.push(newItem);
  
}
function addMore(){
  addOneMoreItem({
    title: title.value,
    description: description.value,
    price: price.value,
    image: image.value
  })
  title.value = "";
  description.value = "";
  price.value = "";
  image.value = "";
  isShowPopup.value = false;
}
const sortedList = computed(() => {//Spread cho phep duyet qua cac phan tu trong list
  return [...list.value].sort((a, b) => a.price - b.price);
});


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lugrasimo&family=Nanum+Pen+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
body{
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}
.wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(176, 173, 173);
}
.btn-them{
  padding: 10px 20px;
  border-radius: 10px;
  margin-left: -80px;
  border: none;
  background:rgb(84, 84, 232);
  color: #fff;
}
.wrapper .box-container{
  width: 930px;
  height: auto;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;

  
}
.box-container .box{
  width: 300px;
  height:460px;
  margin: 3px;
  border-radius: 10px;
  background: #fff;
}
.box .image img{
  width: 100%;
  height: 230px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.content h2{
  font-size: 32px;
  margin: 20px;
  color: #484f5b;
  margin-top: -1px;
}
.content .des{
  width: 255px;
  height: 50px;
  font-size: 15px;
  margin:0 23px;
  color: #c6c6c6;
  margin-top: -10px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
}
.item .left{
  font-size: 30px;
  margin-top: 30px;
  font-family: "Lugrasimo", cursive;
  font-weight: 400;
  font-style: normal;
  margin-left: -15px;
}
.right button{
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #eda3b6;
  background: none;
  color: #eda3b6;
  margin-left: 50px;
  margin-top: 30px;
}
.right button:hover{
  background: #eda3b6;
  color: #fff;
}






/* popup */


.popup-form{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #858484;
  padding: 20px;
  background: #c6c6c6;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(245, 244, 244, 0.2);
  /* position: fixed; */
}
.form-container{
  margin-top: 20px;
  width: 500px;
  height: 450px;
}
.form-container form h2{
  font-size: 35px;
  margin-top: -20px;
  text-align: center;
}
.form-container form input[type="text"],
.form-container form input[type="number"],
.form-container form textarea{
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
}
.more,.cancel{
  padding: 10px 50px;
  border: none;
  border-radius: 10px;
  margin: 60px;
  color: #fff;
  
}
.more{
  background: rgb(82, 82, 186);
  
}
.cancel{
  background: rgb(209, 71, 71);
  
}
</style>