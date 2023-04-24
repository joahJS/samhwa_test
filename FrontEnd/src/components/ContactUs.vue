<template>
    
    <section id="contactUs">
        <router-link :to="{name: 'Contact'}">
             <button type="button" id="contactBtn" class="btn-hover color-1">Contact Us</button>
        </router-link>
    </section>
</template> <!-- Template Ends -->

<style lang="scss" scoped>

    #contactUs {
        @apply w-full grid justify-center items-center;

        background-image: url(/src/assets/images/img01.jpg);
        background-position: center;
        height: 8rem;
        margin-top: 8rem
    }

    .btn-hover {
        @apply rounded-3xl font-bold mx-auto py-2.5 px-3;

        width: 15rem;
        background-color: rgba(var(--white), .25);
        color: rgba(var(--white), 1);
        font-size: var(--font16);
        background-size: 300% 100%;
    
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }
    
    .btn-hover:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;

        box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }
    
    .btn-hover:focus {
        outline: none;
    }
    
    .btn-hover.color-1 {
        //background-image: linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673);
        background-image: linear-gradient(to right, #5558, #dedede, #2bb673, #30dd8a);
       // box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
    }


    @media screen and (max-width: 500px) {
        #contactUs{
            margin-top: 5rem;
        }
    }


</style>