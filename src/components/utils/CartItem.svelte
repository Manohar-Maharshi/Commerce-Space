<div class="cart">
	<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="cart__icon" viewBox="0 0 16 16">
  		<path stroke="#29a38a" stroke-width="0.5" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
	</svg>
	<span class="cart__title" >Cart</span>
	<span class="cart__itemCount">10</span>
</div>


<style>
	.cart{
		display: flex;
		align-items: center;
	}
	.cart__icon{
		margin-right: 0.2rem;
		fill: #29a38a;
		width: 1.4rem;
		height: 1.4rem;
		margin-bottom: 0.1rem;
	}
	.cart__title{
		font-size: 1.4rem;
		font-weight: 500;
		color: #29a38a;
	}
	.cart__itemCount{
		position: relative;
		right: 3px;
		bottom: 0.8rem;
		width: 0.9rem;
		height: 0.9rem;
		text-align: center;
		border-radius: 50%;
		background-color: #29a38a;
		font-size: 0.55rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		color: white;
		padding-top: 0.1rem;
	}
</style>