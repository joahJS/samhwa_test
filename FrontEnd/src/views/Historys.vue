<template>
    <subPageHero />
    <div id="hsTitles" class="web-common-inner">
        <BreadCrumbs />
        <h1 class="page-title">연혁</h1>
        <ul id="hsMilestone">
            <li @click="goToSlide(0)">{{ firstYear }}</li>
            <li>~</li>
            <li @click="goToSlide(lastYearIndex)">{{ lastYear }}</li>        
        </ul>
    </div>
    <div id="hsSwipers">
        <swiper class="web-common-inner" v-bind ="historySwiper" @swiper="onSwiper">
            <swiper-slide v-for="hsList in hsGroup">
                <h4>{{ hsList.hsYear }}</h4>
                <ul data-hs-list v-for="hsSubItem in hsList.childrens">
                    <li data-hs-item>
                        <p>{{ hsSubItem.hsItem }}</p>
                    </li>
                </ul>
            </swiper-slide>
            <div class="hs-nav-btns">
            <button type="button" class="hs-arr-l">이전</button>
            <button type="button" class="hs-arr-r">다음</button>

        </div>
        </swiper>
        
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

    import 'swiper/css';

    // import Swiper core and required modules
    // import { Navigation, Scrollbar } from 'swiper';
    import { Navigation, Scrollbar } from 'swiper';

    // Import Swiper styles
    import 'swiper/css/bundle';

    //store에서 데이터 import
    import { useIntrosStore } from '@/stores/introsStore'
    import { storeToRefs } from 'pinia';

    const introsStore = useIntrosStore()
    const { hsGroup } = storeToRefs(introsStore)

    const historySwiper = {
        modules: [Navigation, Scrollbar],
        slidesPerView: 2,
        spaceBetween: 20,
        
        navigation: {
            nextEl: '.hs-arr-r',
            prevEl: '.hs-arr-l',
        }
    }
    
    // 이 스와이퍼를 swiperInstance로 지정해서 value를 가져옴

    const swiperInstance = ref()

    function onSwiper(swiper) {
        swiperInstance.value = swiper
        console.log(swiperInstance.value)
    }

    // 슬라이드 마일스톤 이름 정하기

    const lastYearIndex = hsGroup.value.length - 1
    const lastYear = hsGroup.value[lastYearIndex].hsYear
    const firstYear = hsGroup.value[0].hsYear


    // 마일스톤에 해당하는 연도로 이동하기

    function goToSlide(e) {
        
        console.log(lastYear)
        
        swiperInstance.value?.slideTo(e)
    }

    if ( matchMedia("(max-width: 1279px)").matches ) {
            // 1279px보다 화면이 작을 때

            // 모바일에서 모든 연도 뒤의 두글자만 잘라 `xx 형태로 변경
            hsGroup.value.map(function(e) {
                var yearStr = e.hsYear.toString();
                var yearElem = yearStr.substring(2, 4);

                e.hsYear = '`' + yearElem
                
                return 
            })            

        } else {
            // 1279px보다 화면이 클 때
            
        }


</script> <!-- Logic Ends -->

<style lang="scss" scoped>

    .page-title {
        animation: title-animate .75s ease-in backwards;
    }

    @keyframes title-animate {
        0% {
            transform: translateY(20%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    #hsTitles {
        padding: 1rem 0;
    }

    #hsMilestone {
        @apply grid justify-between items-center relative top-0;

        width: fit-content;
        margin:2rem auto 4rem;
        
        animation: mile-animate .75s ease-in backwards;
        grid-template-columns: repeat(3, 1fr);

        li {
            padding: 1rem;
            cursor: pointer;
            text-align: center;

            &:nth-child(2):hover {
                color: rgb(var(--black));
                cursor: default;
            }

            &:hover {
                color: rgba(var(--main), 1);
            }
        }
        
    }

    @keyframes mile-animate {
        0% {
            transform: translateY(15%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    #hsSwipers {
        @apply relative;

        margin-bottom: 5rem;
        animation: swip-animate .75s ease-in backwards;
        animation-delay: .75s;

        &::after {
            @apply absolute;

            top: 7rem;
            content: '';
            display: block;
            width: 100vw;
            height: 1px;
            background-color: rgba(var(--black), .15);
        }

        h4 {
            @apply font-bold;

            font-size: var(--font100);
            margin-bottom: 4rem;
            opacity: .15;
        }

        .web-common-inner {
            overflow: visible;
        }

        .swiper-slide {
            @apply relative;

            * {
                pointer-events: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-use-select: none;
                user-select: none;
            }

            &.swiper-slide-active {
                h4 {
                  opacity: 1;
                } 

                &::after {
                    background-color: rgba(var(--black), 1);
                }
            }
            
            &.swiper-slide-next {
                h4 {
                  opacity: .25;
                } 

                &::after {
                    background-color: rgba(var(--black), .25);
                }
                                
            }
                
            &::after {
                @apply absolute block;

                content: '';
                width: .75rem;
                height: .75rem;
                background-color: #dcdcdc;
                top: 5.65rem;
                left: 0;
                border-radius: 1rem;
            }
        }

        .hs-nav-btns {
            @apply absolute flex font-bold;

            gap: .5rem;
            top: -2rem;
            font-size: var(--font14);
        }
    }

    @keyframes swip-animate {
        0% {
            transform: translateX(5%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
   }


    [data-hs-list] {
        @apply flex flex-col;

    }

    [data-hs-item] {
        margin: .5rem 0;

        p {
            line-height: 1.4;
            font-size: var(--font16);
        }
    }

//반응형

@media screen and (max-width: 1279px) {

}
@media screen and (max-width: 768px) {

    #hsMilestone {
        width: 100%;
    }

    [data-hs-list]{
        word-break: keep-all;
    }
}
@media screen and (max-width: 500px) {

    #hsSwipers {

        h4 {
            font-size: var(--font54);
        }
    }

    [data-hs-item] p{
        font-size: var(--font14);
    }

    #hsMilestone li {
        padding: .25rem;
    }
}
   
</style> <!-- Stylesheet Ends -->