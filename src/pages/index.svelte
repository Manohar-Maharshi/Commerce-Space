<script>
    import { metatags } from '@roxi/routify'
    metatags.title = 'Commerce Space - Home'


    import ProductCard from '../components/ProductCard.svelte'
    import Spinner from '../components/utils/Spinner.svelte'

    const getProductsFromApi = async () =>{
        const url = "https://fakestoreapi.com/products";
        return await (await fetch(url)).json()
    }

</script>


<main>
    {#await getProductsFromApi()}
        <Spinner />
    {:then products}
        {#each products as {title,id,image,price,description}}
            <ProductCard {image} {title} {description} {price} />
        {/each}
    {/await}
</main>


<style>
    main{
        margin-top: 3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>