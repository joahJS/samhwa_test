<template>
    <section id="subPageHero" :style="subpageBg">
        <p v-if="thisRoute === 'greeting'">인사말</p>
        <p v-if="thisRoute === 'outline'">개요</p>
        <p v-if="thisRoute === 'history'">연혁</p>
        <p v-if="thisRoute === 'certificate'">특허/인증</p>
        <p v-if="thisRoute === 'path'">오시는 길</p>
        <!-- cate -->
        <p v-if="thisRoute === 'cates'">Products</p>
        <p v-if="thisRoute === '/cates/' + thisRouteDetail">제품 상세</p>
        <!-- customers -->
        <p v-if="thisRoute === 'notice'">공지사항</p>
        <p v-if="thisRoute === 'notice_writing'">공지사항</p>
        
        <p v-if="thisRoute === 'news'">보도자료</p>
        <p v-if="thisRoute === '/news_in/' + thisRouteDetail ">보도자료</p>
        <p v-if="thisRoute === 'datas'">자료실</p>
        <p v-if="thisRoute === 'data'">자료실</p>
        <p v-if="thisRoute === 'contact'">Contact Us</p>
    </section>
</template> <!-- Template Ends -->

<script setup>
    import { useRoute } from 'vue-router'
    
    const upperPath = '/temp/'

    let thisRoute = useRoute().path.split('/')[1]
    let thisRouteDetail = useRoute().params.id

    console.log(thisRoute)

    const heroSecImgs = [
        "img02.jpg",
        "img03.jpg",
        "img04.jpg",
        "img05.jpg",
        "img06.jpg",
        "img07.jpg",
        "img09.jpg",
        "img10.jpg",
        "img12.jpg",
        "img13.jpg",
        "img14.jpg",
    ]

    const callRandomImg = heroSecImgs[Math.floor(Math.random() * heroSecImgs.length)]
    const subpageBg = `background-image: url('${upperPath}images/${callRandomImg}')`
</script>

<style lang="scss" scoped>
    #subPageHero {
        @apply w-full flex items-center justify-center relative;

        height: 10rem;
        background-color: #e8e8e8;
        background-position: center;
        background-size: cover;
        color: rgba(var(--white), 1);

        &::before {
            @apply absolute w-full h-full;

            background-color: rgba(var(--black), .25);
            content: '';
        }

        p {
            @apply relative;

            font-size: var(--font40);
            z-index: 9;
        }
    }

    @media screen and (max-width: 1279px) {
        #subPageHero {
            margin-top: 4rem;
        }
    }
</style>