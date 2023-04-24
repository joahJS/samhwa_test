<template>
    <div id="wrap" class="flex flex-col">
        <HeadPrimary />

        <main id="contentView">
            <div class="mx-auto">
                <router-view :key="$route.fullPath"></router-view>
            </div>
            <FootPrimary />
        </main>

       
    </div>
</template> <!-- Template Ends -->

<script setup>
    import HeadPrimary from './components/HeadPrimary.vue'
    import FootPrimary from './components/FootPrimary.vue'
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

//media 반응형

@media screen and (max-width: 1279px) {
    #contentView{
        padding-left: 0;
    }
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 500px) {

}

</style> <!-- Stylesheet Ends -->