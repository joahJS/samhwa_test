<template>
    <subPageHero />
    
    <div class="web-common-inner common-main-section">
        <BreadCrumbs />
        <h1 class="page-title">보도자료</h1>
        <section v-for="item in newsList" id="news-list-box">
            <router-link v-for="subItem in item.children.slice().reverse()" :to="{name: 'news_in', params: {id: subItem.number}}"><!-- 반복구간 시작  // reverse()역순가져오기-->
            <div class="news-list-line">
                <img data-item-img :src="subItem.thumImg" alt="">
                <span data-item-site>{{subItem.site}}</span>
                <h4 data-item-title>{{subItem.title}}</h4>
                <span data-item-data>{{subItem.date}}</span>
            </div>
            </router-link>
            <!--반복 끝-->
            
        </section><!--news-list-box-->
        <div class="pt-40 text-right">
            <router-link :to="{name: 'news_wr'}">
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

    //store에서 데이터 import
    import { useNewsStore } from '@/stores/newsStore'
    import { storeToRefs } from 'pinia';

    const newsStore = useNewsStore()
    const { newsList } = storeToRefs(newsStore)

    
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

#news-list-box {
    @apply grid justify-start;

    grid-template-columns: repeat(3, auto);
}

.news-list-line {
    @apply px-2 py-4;

    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s linear;
    max-width: 320px;

    &:hover {
        transform: scale(1.04);
    }

    img {
        @apply mb-1.5;

        aspect-ratio: 1/1;
        object-fit: cover;
       
    }

    span {
        color: rgba(var(--black), .5);
    }

    h4 {
        @apply py-2;

        font-weight: bold;
        font-size: var(--font16);
        line-height: 1.2;
        height: 2.5rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;  /* 숫자를 변경하면 해당 하는 줄 수에서 ...으로 변경됨 본문글 3줄, 2줄에서도 ... 으로 가능함*/
        -webkit-box-orient: vertical;
        margin-bottom: .5rem;
    }
}

    //media 반응형

    @media screen and (max-width: 1279px) {

    }
    
    @media screen and (max-width: 768px) {
    
        #news-list-box {
        
            grid-template-columns: repeat(2, auto);
        }
        .news-list-line{
            max-width: 100%;
        }
    }

    @media screen and (max-width: 500px) {

        #news-list-box {
        
            grid-template-columns: repeat(1, auto);
        }
    }


</style> <!-- Stylesheet Ends -->