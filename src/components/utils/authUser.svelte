<script>
	import { auth,googleProvider } from './firebaseApp';
	import { user,isLoggedIn } from './stores';

	const loginWithGoogle = async () =>{
		try{
			const res = await auth.signInWithPopup(googleProvider);
			$user = res.user;
			$isLoggedIn = true;

		}catch (error){
			alert(error.message);
		}
	}
	const logoutFromGoogle = async () =>{
		try{
			const res = await auth.signOut()
			$user = {};
			$isLoggedIn = false;

		}catch(error){
			alert(error.message)
		}
	}
	$: auth.onAuthStateChanged(authUser => {
	  if (authUser) {
	    $user = authUser;
	    $isLoggedIn = true;
	  } else {
	    $user = {};
	    $isLoggedIn = false;
	  }
	});
	
</script>


{#if $isLoggedIn}
	<div class="user__logout" on:click={logoutFromGoogle} text="click to logout">
		<p class="user__text" text="click to logout">
			<img class="user__pic" src={$user.photoURL} alt="{$user.email} {$user.displayName}">
			<span text="click to logout">{$user.displayName}</span>
		</p>
	</div>
{:else}
	<div on:click={loginWithGoogle} class="user__login">
		<p class="user__text">
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="user__svg" viewBox="0 0 16 16">
	  			<path stroke="#29a38a" stroke-width="1" d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
	 		 	<path stroke="#29a38a" stroke-width="1"  fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
			</svg>	
			<span>LogIn</span>
		</p>
	</div>
{/if}

<style>
	.user__login{
		display: flex;
		align-items: center;
	}
	.user__svg{
		border-radius: 50%;
		fill: #29a38a;
		width: 1.3rem;
		height: 1.3rem;
		margin-right: 0.3rem;
	}
	.user__text{
		box-shadow: 0px 0px 0px 2px #29a38a;
		color: #29a38a;
		padding: 0.27rem 0.5rem;
		font-weight: 600;
		display: flex;
		align-items: center;
	}
	.user__logout{
		display: flex;
		align-items: center;
	}
	.user__pic{
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.4rem;
		box-shadow: 0px 0px 0px 2px #29a38a;
		border-radius: 50%;
	}
</style>