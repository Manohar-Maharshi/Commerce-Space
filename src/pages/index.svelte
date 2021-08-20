<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Commerce Space - Home'

    import ProductCard from '../components/ProductCard.svelte'
    import Spinner from '../components/utils/Spinner.svelte'
    import {products} from '../components/utils/products.js';
    import { user,isLoggedIn,cart } from '../components/utils/stores'
    import { db,auth } from '../components/utils/firebaseApp';

 



       // $: $cart.forEach(item =>{
       //      const ref = db.collection("user").doc(auth.currentUser.uid).collection("cart");
       //      if(item.id === ref.get().then(i => {return i})){
       //          console.log("gooo")
       //      }
       //      // db.collection("user").doc(auth.currentUser.uid).collection("cart").add({
       //      //     id: item.id,
       //      //     title: item.title,
       //      //     price: item.price,
       //      //     image: item.image,
       //      //     quantity: item.quantity,
       //      // }).then(() => {
       //      //     console.log("Document successfully written!");
       //      // }).catch((error) => {
       //      //     console.error("Error writing document: ", error);
       //      // });
       //  });




</script>


<main>
        {#each $products as product}
            <ProductCard {product}/>
        {/each}
</main>


<style>
    main{
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>