<template>
    <subPageHero />
    <div id="pathSection" class="web-common-inner">
        <BreadCrumbs />
        
        <h1 class="page-title">오시는 길</h1>
        <ul id="pathMilestone">
            <li v-for="(goSection, getIndex) in pathGroup" @click="goToSection(getIndex)">{{ goSection.sectionTitle }}</li>
        </ul>
        
    </div>
    <div id="pathFrame" ref="textItems">
        <section data-path-map-headoffice v-for="(sectionItem, sectionIdx) in pathGroup">
            <div data-path-map-explain class="web-common-inner">
                <div data-path-map-pinetitle v-for="titleItem in sectionItem.compName">{{ titleItem.compFirst }}<span>{{ titleItem.compLast }}</span></div>
                <div data-path-map-texts>
                    <h2>{{ sectionItem.sectionTitle }}</h2>
                    <div id="pathContact">
                        <div>
                            <p data-path-map-subtitles>TEL</p>
                            <p data-path-map-subtexts>{{ sectionItem.tel }}</p>
                        </div>
                        <div>
                            <p data-path-map-subtitles>FAX</p>
                            <p data-path-map-subtexts>{{ sectionItem.fax }}</p>
                        </div>
                        <div>
                            <p data-path-map-subtitles>MAIL</p>
                            <p data-path-map-subtexts>{{ sectionItem.mail }}</p>
                        </div>
                    </div>
                    <div id="pathLocate">
                        <div>
                            <p data-path-map-subtitles>LOCATE</p>
                            <p data-path-map-subtexts>{{ sectionItem.locate }}</p>
                        </div>
                        <div>
                            <p data-path-map-subtitles>PUBLIC TRANSPORT</p>
                            <div data-path-public-route v-for="publicItem in sectionItem.publicTr">
                                <!-- <div>
                                    <p data-path-map-subtexts>지하철</p>
                                    <p data-path-public-texts v-for="subways in publicItem.subway">{{ subways.subwItem }}</p>
                                </div> -->
                                <div>
                                    <p data-path-map-subtexts>버스</p>
                                    <p data-path-public-texts v-for="busways in publicItem.bus">{{ busways.busItem }}</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div data-path-map-container class="web-common-inner">
                <iframe :src="sectionItem.mapUrl" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

    </div>
    
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    //store에서 데이터 import
    import { useIntrosStore } from '@/stores/introsStore'
    import { storeToRefs } from 'pinia';

    const introsStore = useIntrosStore()
    const { pathGroup } = storeToRefs(introsStore)


    //#pathMilestone 에서 선택한 영역으로 이동
    const textItems = ref(null)

    function goToSection(getIndex) {

        let moveTarget = textItems.value.children

        moveTarget[getIndex].scrollIntoView({behavior: "smooth"})
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

    #pathSection {
        padding: 1rem 0;
    }

   #pathFrame {
        @apply flex flex-col;

        gap: 12rem;
        padding: 1rem 0 0;

        > section {
            animation: map01-animate .75s ease-in backwards;
            animation-delay: .75s;

            &:nth-child(even) {
                background-color: rgba(var(--main), 1);
                padding: 12rem 0;
                animation: map02-animate .75s ease-in backwards;
                animation-delay: 1.5s;

                [data-path-map-texts] {
                    color: rgba(var(--white), 1);
                }

                [data-path-map-pinetitle] {
                    color: rgba(var(--white), 1);
                }
            }
        }

        iframe {
            width: 100%;
            height: 33vh;   
        }
   }


   @keyframes map01-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }


   @keyframes map02-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

   #pathMilestone {
        @apply flex justify-around items-center relative top-0;

        width: 15rem;
        margin:2rem auto 4rem;
        gap: 1rem;
        animation: mile-animate .75s ease-in backwards;

        li {
            padding: 1rem;
            cursor: pointer;

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

   [data-path-map-pinetitle] {
        font-size: var(--font26);
        opacity: .35;

        span {
            display: block;
            padding: .5rem 0;
        }
   }

   [data-path-map-explain] {
        @apply grid;

        gap: 2rem;
        grid-template-columns: 1fr 4fr;
   }

   [data-path-map-texts] {
        @apply flex flex-wrap;

        gap: 1rem;

        h2 {
            @apply w-full font-bold;

            font-size: var(--font36);
            // border-bottom: 1px solid #000;
            // padding-bottom: 1.5rem;
        }

        > div {
            @apply flex flex-col w-1/2;

            flex: 1 1;
        }

        [data-path-map-subtitles] {
            margin: 1rem 0;
            opacity: .5;
        }

        [data-path-map-subtexts] {
            font-weight: bold;
            font-size: var(--font20);
            line-height: 1.2;
        }
   }

   [data-path-public-route] {

        > div {
            margin-bottom: 1rem;

            p {
                line-height: 1.4;
            }
        }

        [data-path-map-subtexts] {
            margin-bottom: .5rem;
        }
   }

   #contactUs {
    margin-top: 0;
   }


   .frame-two{
   max-width: 960px;
   margin: 0 auto;
   padding: 1rem 0.2rem ;
   }

//반응형

   @media screen and (max-width: 1279px) {
    [data-path-map-pinetitle] {
        font-size: var(--font20);
    }
   }
   @media screen and (max-width: 768px) {

        [data-path-map-texts] h2{
            font-size: var(--font26);
        }

        #pathFrame{
            gap: 5rem;
        }

        [data-path-map-pinetitle] {
            display: none;
        }

        [data-path-map-explain]  {
            grid-template-columns: 1fr;
        }

        [data-path-map-texts] {
            flex-direction: column;
        }

        [data-path-map-texts] > div {
            width: 100%;
        }

        #pathContact {
            > div {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
        }

        [data-path-map-texts] {
            [data-path-map-subtexts] {
                font-size: var(--font16);
            }
        }

        [data-path-map-texts] {
            margin: 0 auto;
        }

        #pathFrame > section:nth-child(even) {
            padding: 4rem .25rem;
        }
         .web-common-inner {
            margin: initial;
        }
        .frame-two {
            padding:  0;
        }

   }
   
   @media screen and (max-width: 500px) {


   }

   
</style> <!-- Stylesheet Ends -->