<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />

        <h1 class="page-title">Products</h1>
        <section v-for="cate in cateList" id="cate01-list-box">
            <router-link v-for="subItem in cate.children" :to="{name: 'Cates_in', params: {id: subItem.number}}"><!-- 반복구간 시작  // reverse()역순가져오기-->
                <div class="cate01-list-line">
                    <img data-cate01-img :src="subItem.thumImg">
                    <h4 data-cate01-title>{{ subItem.title }} </h4>
                    <span data-cate01-subtitle>{{subItem.subTitle}}</span>
                </div>
            </router-link>
        </section>

    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    //store에서 데이터 import
    import { useCatesStore } from '@/stores/catesStore'
    import { storeToRefs } from 'pinia';

    const catesStore = useCatesStore()
    const { cateList } = storeToRefs(catesStore)

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

#cate01-list-box {
    @apply grid justify-start;

    grid-template-columns: repeat(4, auto);
}

.cate01-list-line {
    @apply px-2 py-4;

    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s linear;
    max-width: 240px;

    &:hover {
        transform: scale(1.04);
    }

    img {
        @apply mb-1.5;

        aspect-ratio: 1/1;
        object-fit: cover;
    }

    h4 {
        @apply font-bold pb-1;

        font-size: var(--font16);
        line-height: 1.2;
        height: 2rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    span {
        line-height: 1.2;
        height: 1.7rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: rgba(var(--black), .75);
    }
}

</style> <!-- Stylesheet Ends -->