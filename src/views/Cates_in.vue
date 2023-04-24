<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />
        
        <section v-if="cateGroup[getId]">
            <div class="cate-content-box">
                <img :src="cateGroup[getId].thumImg">
                <article class="cate-text-box">
                    <h1>{{cateGroup[getId].title}}</h1>
                    <article class="cate-text">
                        <p v-for="cateText in cateGroup[getId]?.textAll">{{cateText.texts}}</p>
                    </article>                   
                </article>
            </div>
            <!-- <div class="my-5 w-full">
                <h4 class="font-bold my-10">제품도면</h4>
                <img :src="cateGroup[getId].floor" class="w-full">
            </div> -->
            <div class="my-5">
                <h4 class="font-bold my-10"></h4>
                <img :src="cateGroup[getId].table" class="mx-auto">
            </div>

            <div class="mt-20 text-center ">
                <router-link :to="{name: 'Cates'}">
                    <button class="all-btn">목록</button>
                </router-link>
            </div>
        </section>
        
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    import { useRoute } from 'vue-router'

    //store에서 데이터 import
    import { useCatesStore } from '@/stores/catesStore'
    import { storeToRefs } from 'pinia';

    const catesStore = useCatesStore()
    const { cateGroup } = storeToRefs(catesStore)

    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)


</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.cate-content-box {
    @apply flex gap-6;

   > img {
        aspect-ratio: 1/1;
        object-fit: cover;
        max-width: 400px;
    }

    h1 {
        @apply font-bold mt-3;

        font-size: var(--font26);
    }
}

.cate-text {
    @apply mt-10;
    
    p {
        line-height: 1.5;
        text-indent:-10px;
    }
}

//반응형

@media screen and (max-width: 1279px) {

}
@media screen and (max-width: 768px) {

    .cate-content-box > img {
        max-width: 280px;
    }


}
@media screen and (max-width: 500px) {

    .cate-content-box {
        flex-direction: column;
        gap: .5rem;

        >img {
            max-width: 100%;
        }

        h1 {
            font-size: var(--font20);
        }

    }

    .cate-text {
        margin-top: 1.5rem;
    }
}
   
</style> <!-- Stylesheet Ends -->