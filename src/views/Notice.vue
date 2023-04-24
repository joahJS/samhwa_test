<template>
    <subPageHero />
    <div class="web-common-inner common-main-section">
        <BreadCrumbs />
        <h1 class="page-title">공지사항</h1>

        <section id="notice-list-box" v-for="noti in noticeList">
            <router-link v-for="subNoti in noti.children.slice().reverse()" :to="{name: 'notice_in', params: {id: subNoti.bindIndex}}"><!-- 반복구간 시작  // reverse()역순가져오기-->
                <div class="notice-list-line">
                    <p data-notice-number class="number">{{subNoti.number}}</p>
                    <p data-notice-title class="title">{{ subNoti.title }}</p>
                    <p data-notice-data class="date">{{subNoti.date}}</p>
                </div>
            </router-link>
             <!--반복 끝-->
        </section><!--notice-list-box-->
        <div class="pt-40 text-right">
            <router-link :to="{name: 'notice_wr'}">
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

    import { useNoticeStore } from '@/stores/noticeStore'
    import { storeToRefs } from 'pinia';

    const noticeStore = useNoticeStore()
    const { noticeList } = storeToRefs(noticeStore)

    

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.notice-list-line {
    @apply flex gap-2 w-full items-center px-2 py-6 border-b;

    font-size: var(--font16);

    .number {
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
        .notice-list-line {
            font-size: var(--font14);
        
            .number {
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