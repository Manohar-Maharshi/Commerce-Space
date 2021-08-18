<script>
	import { url } from '@roxi/routify'

	import CartItem from './utils/CartItem.svelte'
	import AuthUser from './utils/authUser.svelte'
	

</script>
<nav>
	<ul>
		<li>
			<a class="title" href="/">
				Commerce Space
			</a>
		</li>
		<div class="commerceAction">
			<li>
				<a class="cart" href={$url('/cart')}>
					<CartItem />
				</a>
			</li>
			<li>
				<AuthUser />
			</li>
		</div>	
	</ul>
</nav>


<style>
	nav{
		width: 100%;
		/*box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 8px;*/
	}
	ul{
		width: 85%;
		height: inherit;
		padding-top: 1.5rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title{
		font-weight: 600;
		font-size: 1.5rem;
		color: #29a38a;
	}
	.commerceAction{
		display: flex;
	}
	.commerceAction li:not(:last-child){
		margin-right: 1rem;
	}
</style>
