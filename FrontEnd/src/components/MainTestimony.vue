<template>
    <div id="mainTestimony">
        <h1 class="page-title testimony-section-title">
            시공사진
        </h1>

        <swiper id="testimonyContainer" v-bind="testimonySliderSettings">
            <swiper-slide v-for="slide in testimonySlides" :key="slide.uniqueKey" class="testimony-container">
                <div class="testimony-overlay">
                    <img class="testimony-picture" :src="'/temp/images/users/' + slide.userPicture" alt="">
                    <h2 class="testimony-user">{{ slide.userName }}</h2>
                    <!-- <p class="testimony-workfield">{{ slide.workField }}</p> -->
                </div>

                <!-- <div class="testimony-comment">
                    {{ slide.commentAbout }}
                </div> -->
            </swiper-slide>
        </swiper>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue'
    import { Autoplay, Navigation, A11y } from 'swiper'

    import 'swiper/scss'
    import 'swiper/scss/autoplay'
    import 'swiper/scss/navigation'
    import 'swiper/scss/a11y'

    const testimonySliderSettings = {
        modules: [ Autoplay, Navigation, A11y ],
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 5,
        autoplay: {
            delay: 7500,
            disableOnInteraction: false
        },
        speed: 500,
        navigation: {
            prevEl: '#btnSliderPrev',
            nextEl: '#btnSliderNext'
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1920: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
        onSlideChange: () => {
            // 슬라이드 정보
        }
    }

    const testimonySlides = ref([
        {
            uniqueKey: 0,
            userPicture: 'show1.jpg',
            userName: '하동 한산사',
            workField: '.',
            commentAbout: '다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'
        },
        {
            uniqueKey: 1,
            userPicture: 'show2.jpg',
            userName: '함평 남산 미르체 아파트',
            workField: '.',
            commentAbout: '강도가높아 동결융해가 안되며, 포장즉시 사용가능'
        },
        {
            uniqueKey: 2,
            userPicture: 'show3.jpg',
            userName: '광주 수완지구 오천유통',
            workField: '.',
            commentAbout: '결합식 인터록킹 블록으로 제작되어 뒤틀림변이 없고 시공이 간단하고 포장즉시 사용가능'
        },
        {
            uniqueKey: 3,
            userPicture: 'show4.jpg',
            userName: '유어면 농로 정비공사 A',
            workField: '.',
            commentAbout: '잔디번식이 용이하고, 블록으로 구역 표시가 가능'
        },
        {
            uniqueKey: 4,
            userPicture: 'show5.jpg',
            userName: '주암천',
            workField: '.',
            commentAbout: '화단경계용으로 사용되며 곡선을 만들 수 있고 가격이 저렴해 많은 영역에서 사용가능'
        },
        {
            uniqueKey: 5,
            userPicture: 'show6.jpg',
            userName: '곡성역 진입도로',
            workField: '.',
            commentAbout: '화단경계용으로 사용되며 곡선을 만들 수 있고 가격이 저렴해 많은 영역에서 사용가능'
        },
    ])
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainTestimony {
        padding-block-end: 150px;
        background-color: rgb(var(--main));
    }

    #testimonyContainer {
        overflow: visible;
    }

    .testimony-section-title {
        margin-block: 100px 150px;
        text-align: center;
        color: rgb(var(--white));

        &::after {
            background-color: rgb(var(--white));
        }
    }

    .testimony-container {
        position: relative;
        padding: 40px 20px 40px;
        border-radius: 3px;
        background-color: rgb(var(--white));
        transform: translateY(15px);
        transition: box-shadow .75s, opacity .75s, transform .75s;

        &.swiper-slide-active {
            box-shadow: 0 15px 30px rgba(var(--black), .15);
            transform: none;
        }

        &:not(.swiper-slide-active) {
            opacity: .7;
        }
    }

    .testimony-overlay {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .testimony-picture {
        object-fit: cover;
    }

    .testimony-user {
        font-size: var(--font20);
        font-weight: 900;
    }

    .testimony-workfield {
        opacity: .5;
    }

    .testimony-comment {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-block-start: 20px;
        font-size: var(--font16);
        font-weight: 100;
        line-height: 1.4;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }

    @media screen and (max-width: 415px) {
        .testimony-comment {
            height: 100px;
            font-size: var(--font14);
            -webkit-line-clamp: 5;
        }
    }

    @media screen and (max-width: 767px) {
        #mainTestimony{
            padding: 1rem;
        }
    }
</style> <!-- Stylesheet Ends -->