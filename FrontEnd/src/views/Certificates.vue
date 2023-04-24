<template>
    <subPageHero />
    <div id="certSection" class="web-common-inner">
        <BreadCrumbs />
        
        <h1 class="page-title">특허 / 인증</h1>
 
        <div id="certList">
            <div v-for="certItem in certGroup" class="cert-item" :key="certItem.certIndex">
                <p data-cert-category>{{ certItem.cate }}</p>
                <p data-cert-item-maintitle>{{ certItem.certTtitle }}</p>
                <div data-cert-img-container>
                    <img :src="certItem.imgUrl" alt="">
                </div>
                <ul class="cert-item-explain">
                    <li>
                        <p data-cert-exp-title>인증번호</p>
                        <p data-cert-exp-texts>{{ certItem.certNumber }}</p>
                    </li>
                    <li>
                        <p data-cert-exp-title>인증일자</p>
                        <p data-cert-exp-texts>{{ certItem.certDate }}</p>
                    </li>
                </ul>
                <button @click="certItem.isView = !certItem.isView" class="all-btn" type="button">자세히 보기</button>
                <div v-if="certItem.isView === true" data-cert-view-modal>
                    <div data-cert-view-container>
                        <!-- <img :src="'/temp/images/' + certItem.imgUrl" alt=""> -->
                        <img :src="certItem.imgUrl" alt="">
                        <button class="all-btn" @click="certItem.isView = !certItem.isView" type="button">닫기</button>
                    </div>
                </div>
            </div>
            

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
    const { certGroup } = storeToRefs(introsStore)

</script>

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

    #certSection {
        padding: 1rem 0;
    }

    #certList {
        @apply grid;

        grid-template-columns: repeat(3, 1fr);
        gap: .5rem .75rem;
        animation: cert-list-animate 0.75s ease-in backwards;

        .all-btn {
            pointer-events: all;
            width: 100%;
            margin-top: 1rem;
        }

        [data-cert-view-modal] {
            .all-btn {   
                margin: 0 auto 2rem;
                filter: drop-shadow(2px 2px 6px rgba(var(--white), .15));
                font-size: var(--font20);
            }   
        }
    }

    @keyframes cert-list-animate {
        0% {
            transform: translateY(5%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    [data-cert-view-container] {
         @apply flex flex-col;       
    }

    .cert-item {
        @apply flex flex-col relative select-none;

        gap: .5rem;
        padding: .75rem;
        background-color: rgba(var(--black), .04);

    }

    .cert-item-explain {
        @apply flex flex-col;

        gap: .5rem;

        li {
            @apply flex;

        }
    }

    [data-cert-category] {
        @apply w-1/2;

        padding: .25rem 0;
        text-align: center;
        margin-bottom: .25rem;
        background-color: rgba(var(--black), .25);
        color: rgba(var(--white), 1);
        letter-spacing: 1px;
    }

    [data-cert-item-maintitle] {
        @apply font-bold;

        font-size: var(--font20);
        line-height: 1.4;
        margin-bottom: .25rem;
    }

    [data-cert-img-container] {
        margin-bottom: 0.75rem;

        img {
            filter: drop-shadow(0 0 4px rgba(var(--black), .15));
        }
    }

    [data-cert-exp-title] {
        @apply shrink-0;

        color: rgba(var(--black), .5);
        width: 3rem;
        line-height: 1.4;
    }

    [data-cert-exp-texts] {
        line-height: 1.4;
        height: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;

    }

    [data-cert-view-modal] {
        @apply fixed flex flex-col justify-center items-center top-0 left-0;

        width: 100vw;
        height: 100vh;
        background-color: rgba(var(--black), .75);
        z-index: 99;

        img {
            @apply object-contain h-full;

            padding: 2rem 0;
            max-height: 80vh;
        }
    }

    
//반응형

   @media screen and (max-width: 1279px) {}
   @media screen and (max-width: 768px) {

        [data-cert-item-maintitle] {
            font-size: var(--font18);
        }
   }
   @media screen and (max-width: 500px) {

        #certList {
            grid-template-columns: repeat(2, 1fr);
            gap: .75rem .25rem;
        }

        [data-cert-item-maintitle] {
            font-size: var(--font14);
        }


        [data-cert-view-modal] img {
            max-height: 59vh;
        }

        #certList .all-btn {
            width: 75%;
            margin: 1rem auto .5rem ;
        }
   }
</style>