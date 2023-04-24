<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />

        <section v-if="noticeGroup[getId]" id="notice-detail">
            <div class="noti-title-box">
                <h1>{{noticeGroup[getId].title}}</h1>
                <span>{{noticeGroup[getId].date}}</span>
            </div>
            <div class="noti-content-box">
                <div>
                    <img :src="noticeGroup[getId].thumImg">
                </div>
                <div class="noti-text-box">
                    <p v-for="notitext in noticeGroup[getId]?.textAll" class="notice-text">{{notitext.texts}}</p>
                </div>
            </div>

            <div class="pt-10 text-center">
                <router-link :to="{name: 'Notice'}">
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

    ////store에서 데이터 import
    import { useNoticeStore } from '@/stores/noticeStore'
    import { storeToRefs } from 'pinia';

    const noticeStore = useNoticeStore()
    const { noticeGroup } = storeToRefs(noticeStore)

    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)

    const upperPath = '/temp/'

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.noti-title-box {
    @apply flex flex-col;
    
    >h1 {
        @apply font-bold py-2;
        
        font-size: var(--font20);
        border-bottom: 1px solid rgba(var(--black), .05);
        line-height: 1.2
    }

    >span {
        @apply text-right py-2;
    }
}

.noti-content-box {
    @apply my-20 ;
}

.noti-text-box {
    @apply py-5
}

.notice-text {
    line-height: 1.3;

}


   
</style> <!-- Stylesheet Ends -->