<script>
	import { db,auth } from './utils/firebaseApp'
	import { user,isLoggedIn,cart } from './utils/stores'
	import firebase from 'firebase/app';





	export let product;


	const addItemToCart = (product) =>{
		for(let item of $cart) {
			if(item.id === product.id) {
				item.quantity += 1;
				$cart = $cart;
				return;
			}
		}

		$cart = [...$cart, product];
	}
</script>

<div class="productCard">
	<div class="productCard__img">
		<img src={product.image} alt={product.title}>
	</div>
	<div class="productCard__title">
		<p>{product.title}</p>
	</div>
	<div class="productCar__dis">
		<p>{product.description}</p>
	</div>
	<div class="productCard__price">
		<p>₹{product.price}</p>
	</div>
	<div class="productCard_btn">
		<button disabled={!$isLoggedIn} on:click={() => addItemToCart(product)} tabindex="0">
			<span>ADD TO CART</span>
		</button>
	</div>
</div>


<style>
	.productCard{
		user-select: none;
		width: 14rem;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 8px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		margin: 1rem;
		border-radius: 10px;
		padding: 1rem;
		background-color: white;
	}
	.productCard__img{
		margin-bottom: 0.5rem;
	}
	.productCard__img img{
		width: 7rem;
		height: 10rem;
	}
	.productCard__title{
		font-weight: bold;
		opacity: 0.8;
		font-size: 1rem;
		margin-bottom: 0.3rem;
		display: -webkit-box;
	  	-webkit-line-clamp: 2;
	  	-webkit-box-orient: vertical;  
	  	overflow: hidden;
	}
	.productCar__dis{
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;  
	  overflow: hidden;
	  font-size: 0.8rem;
	  margin-bottom: 0.3rem	;
	}
	.productCard__price{
		font-size: 1.6rem;
		font-weight: 600;
		margin-bottom: 0.4rem;
		color: #3eac95;
	}
	.productCard_btn{
		width: 100%;
	}
	.productCard_btn button{
		width: 100%;
		height: 2.3rem;
		border: 0;
		outline: 0;
		font-family: inherit;
		cursor: pointer;
		background-color: #29a38a;
		font-size: 1rem;
		font-weight: 600;
		color: #fff;
	}
	.productCard_btn button:disabled{
		opacity: 0.9;
	}
	.productCard_btn button:active{
		opacity: 0.9;
	}
</style>