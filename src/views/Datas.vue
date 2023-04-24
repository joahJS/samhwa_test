<template>
    <subPageHero />
    <div class="web-common-inner common-main-section">
        <BreadCrumbs />
        <h1 class="page-title">자료실</h1>
        
        <section id="data-list-box" v-for="datass in dataList">
            <router-link v-for="subData in datass.children.slice().reverse()" :to="{name: 'data_in', params: {id: subData.bindIndex}}"><!-- 반복구간 시작  // reverse()역순가져오기-->
                <div class="data-list-line">
                    <p class="num" data-datas-number>{{subData.number}}</p>
                    <p class="title" data-datas-title>{{subData.title}}</p>
                    <p class="date" data-datas-date>{{subData.date}}</p>
                </div>
            </router-link>
             <!--반복 끝-->

        </section><!--data-list-box-->
        <div class="pt-40 text-right">
            <router-link :to="{name: 'Datas_wr'}">
                <button class="all-btn">글쓰기</button>
            </router-link>
        </div>

    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    import { useDatasStore } from '@/stores/datasStore'
    import { storeToRefs } from 'pinia';

    const datasStore = useDatasStore()
    const { dataList } = storeToRefs(datasStore)


</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.data-list-line {
    @apply flex gap-2 w-full items-center px-2 py-6 border-b;

    font-size: var(--font16);

    .num {
        @apply text-center;

        min-width: 50px;
        color:rgba(var(--black), .5) ;

    }

    .title {
        @apply cursor-pointer font-bold;

        width: calc(100% - 150px);
        line-height: 1.4
        
    }

    .date {
        @apply text-right;

        min-width: 100px;
        color: rgba(var(--black), .5);
    }
}

    //media 반응형

    @media screen and (max-width: 1279px) {

    }
    
    @media screen and (max-width: 768px) {
    
    }

    @media screen and (max-width: 500px) {

        .data-list-line {
            font-size: var(--font14);
        
            .num {
                @apply text-center;
        
                min-width: 42px;
            }
        
            .title {
                @apply cursor-pointer font-bold;

                width: calc(100% - 122px);
            }
        
            .date {
                @apply text-right;

                min-width: 80px;
            }
        }
    }

</style> <!-- Stylesheet Ends -->