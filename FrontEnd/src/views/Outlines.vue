<template>
    <subPageHero />
    <div id="outlineSection" v-for="introItem in outlineGroup">
        <BreadCrumbs />
        
        <section id="grtOutline" class="web-common-inner" v-for="outItem in introItem.outlineChildren">
            <h1 class="page-title">개요</h1>

            <p id="grtText" class="page-title-bottom">
                {{ outItem.outTitle }}
            </p>

            <section id="grtBtm">
                <div class="grt-imgs-div">
                    <img src="/src/assets/images/grt_sample.jpg" alt="CEO picture">
                </div>
                <div class="grt-texts-div">
                    <p v-for="subItems in outItem.outTexts">{{ subItems.texts }}</p>
 
                    <div data-grt-ceo-names>
                        <p class="grt-ceo-name">{{ outItem.outCEO }}</p>
                        <img data-grt-ceo-sign :src="outItem.outSign" alt="대표자 날인">
                    </div>
                    
                </div>
            </section>
        </section>

        

        <div id="ideology"> 
            <section id="ideoTexts" class="web-common-inner" v-for="ideoItem in introItem.ideoChildren">
                <div id="ideoTitle">
                    <h1 class="page-title">기업이념</h1>
                    <p class="page-title-bottom">
                        {{ ideoItem.ideoTitle }}
                    </p>
                    <p class="page-subtitle-texts">
                        {{ ideoItem.ideoSubT }}
                    </p>
                </div>
                <div id="ideoLists">
                    <ul data-ideo-list>
                        <li v-for="ideoFirst in ideoItem.ideoFirst">
                            <p data-ideo-subtitle><span class="font-color-main">{{ ideoFirst.ideoNameEng }}</span><span>{{ ideoFirst.ideoName }}</span></p>
                            <p data-ideo-subtext>{{ ideoFirst.ideoTexts }}</p>
                        </li>
                        <li  v-for="ideoSecond in ideoItem.ideoSecond">
                            <p data-ideo-subtitle><span class="font-color-main">{{ ideoSecond.ideoNameEng }}</span><span>{{ ideoSecond.ideoName }}</span></p>
                            <p data-ideo-subtext>{{ ideoSecond.ideoTexts }}</p>
                        </li>
                        <li v-for="ideoThird in ideoItem.ideoThird">
                            <p data-ideo-subtitle><span class="font-color-main">{{ ideoThird.ideoNameEng }}</span><span>{{ ideoThird.ideoName }}</span></p>
                            <p data-ideo-subtext>{{ ideoThird.ideoTexts }}</p>
                        </li>
                    </ul>
                </div>
            </section>
            
        </div>
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
    const { outlineGroup } = storeToRefs(introsStore)

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

#grtSection {
        padding-bottom: 5rem;
    }

    .page-title-bottom {
        @apply flex w-full justify-center text-center break-keep;

        padding: 0 0 4rem 0;
        font-size: var(--font28);
        line-height: 1.35;
    }

    #grtBtm {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    #grtOutline {
        animation: grt-animate 0.75s ease-in backwards;
    }

    @keyframes grt-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    .grt-texts-div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            line-height: 1.5;

            &.grt-ceo-name {
                margin-top: 1rem;
                text-align: right;
                font-size: var(--font26);
                font-weight: bold;
            }
        }
    }

    [data-grt-ceo-names] {
        @apply flex w-full justify-end items-center;

        gap: 1rem;
    }

    [data-grt-ceo-sign] {
        width: 6rem;
    }

    #outlineSection {
        padding: 1rem 0 0 0;

        .page-subtitle {
            padding: 0 0 1rem 0;
        }
    }

    .page-subtitle {
        @apply flex w-full justify-center text-center break-keep;

        padding: 0 0 4rem 0;
        font-size: var(--font32);
        line-height: 1.35;
    }

    .page-subtitle-texts {
        @apply flex w-full justify-center text-center break-keep relative;

        font-size: var(--font16);
        color: rgba(var(--font), .45);

        // &::after {
        //     @apply absolute;

        //     content: '';
        //     display: block;
        //     top: .5rem;
        //     width: 100%;
        //     height: .75rem;
        //     background-color: rgba(var(--white), .1);
        // }
    }

    .font-color-main {
        color: rgba(var(--main), 1);
    }

   #ideology {
        gap: 3rem;
        margin-top: 10rem;
        animation: ideo-animate .75s ease-in backwards;
        animation-delay: .75s;
        background-color: rgba(var(--main), 1);
        padding: 6rem 0 8rem;

        .page-title::after {
            background-color: rgba(var(--white), .3);
        }
   }

   @keyframes ideo-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

   #ideoTitle {
        @apply flex flex-col justify-center items-center;

        margin-bottom: 2rem;
        color: rgb(var(--white));

        P {
            &:last-child {
                line-height: 1.35;
                color: rgba(var(--white), .5);
            }
        } 

        .page-title-bottom {
            padding: 0 0 1rem 0;
        }
   }

   [data-ideo-list] {
        display: grid;
        gap: .5rem;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 4rem 1rem;

        li {
            @apply flex flex-col items-center;

            padding: 2rem 3rem;
            background-color: rgba(var(--white), 1);
            border-radius: 0.25rem;
            gap: 1rem;

           
        }
   }

   [data-ideo-list] li p {
        @apply break-all;

        &:last-child {
            line-height: 1.5;
            color: rgba(var(--font), 1);
        }
   }

   [data-ideo-subtitle] {
        @apply flex flex-col;

        font-size: var(--font20);
        
        span {
            display: inline-block;

            &:first-child {   
                font-size: 12px;
                margin-bottom: .75rem;
            }

            &:last-child {
                color: rgba(var(--font), 1);
            }
        }

        &::after {
            content: '';
            display: block;
            width: 1.5rem;
            height: 1px;
            background-color: rgba(var(--main), 1);
            margin: 1rem auto 0;
        }
   }

   #contactUs {
    margin-top: 0;
   }

   //반응형

   @media screen and (max-width: 1279px) {}
   @media screen and (max-width: 768px) {

        #grtBtm {
            grid-template-columns: 1fr;
            gap: 1rem;
            justify-items: center;
        }

        .page-title-bottom {
            padding-bottom: 1.5rem;
            font-size: var(--font18);
            font-weight: bold;
        }

        [data-ideo-list] {
            grid-template-columns: 1fr;
        }


   }
   @media screen and (max-width: 500px) {

        .page-title-bottom{
            padding-bottom: 1.5rem;
            font-size: var(--font16);
        }

        
        .grt-texts-div {
            p {
                &.grt-ceo-name {
                    font-size: var(--font18);
                }
            }
        }
        [data-grt-ceo-sign] {
            width: 4rem;
        }

        [data-ideo-list] {
            li{
                padding: 2rem 1rem; 
            }
        }

        [data-ideo-subtitle] {
            font-size: var(--font16);
        }

   }

</style> <!-- Stylesheet Ends -->