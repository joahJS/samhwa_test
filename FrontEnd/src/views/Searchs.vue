<template>
    <subPageHero />
    <div id="bcSection" class="web-common-inner">
        <BreadCrumbs />
        
        <h1 class="page-title">검색 결과</h1>
        <ul id="srchMilestone">
            <li><a href="#resultProd">제품소개</a></li>
            <li><a href="#resultNotice">공지사항</a></li>
            <li><a href="#resultNews">보도자료</a></li>
            <li><a href="#resultData">자료실</a></li>
        </ul>

        <div id="srchSection">
            <section id="srchLt">
                <div id="recentSrch">
                    <h3 data-Lt-titles>최근 검색어</h3>
                    <ul data-srch-recent-list>
                        <li data-srch-recent-word>시멘트</li>
                        <li data-srch-recent-word>벽돌</li>
                        <li data-srch-recent-word>단단</li>
                    </ul>
                </div>
                <div id="srchArea">
                    <h3 data-Lt-titles>검색영역</h3>
                    <div data-srch-area-list>
                        <div>
                            <input type="checkbox" id="srchProdChk">
                            <label for="srchProdChk">제품소개</label>
                        </div>
                        <div>
                            <input type="checkbox" id="srchcommChk">
                            <label for="srchcommChk">고객센터</label>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="srchRt">
                <div id="srchSumm">
                    <p>검색어 <span data-srch-used-word>콘크리트</span>에 대한 검색결과입니다.</p>
                </div>
                <div id="srchResults">
                    <div id="resultProd" class="srch-result-section">
                        <h2 data-srch-subts>제품소개 <span data-srch-result-number>3</span></h2>
                        <div v-for="prodItem in srchProdGroup" data-srch-prod-item>
                            <router-link to="">
                                <img data-srch-prod-img :src="prodItem.prodImg" alt="">
                                <div data-srch-prod-texts>
                                    <h4>{{ prodItem.prodTitle }}</h4>
                                    <p>{{ prodItem.prodText }}</p>
                                </div>
                                <button class="all-btn" data-srch-prod-button type="button">자세히 보기</button>
                            </router-link>
                        </div>
                        <ul class="common-pager">
                            <li>이전</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>다음</li>
                        </ul>
                    </div>
                    <!-- 검색결과 - 제품소개 끝 -->
                    <div id="resultNotice" class="srch-result-section">
                        <h2 data-srch-subts>공지사항<span data-srch-result-number>3</span></h2>
                        <div v-for="notiItem in srchNoticeGroup" data-srch-noti-item>
                            <p data-srch-noti-number>{{ notiItem.notiIndex + 1 }}</p>
                            <p data-srch-noti-title>{{ notiItem.notiTitle }}</p>
                            <p data-srch-noti-date>{{ notiItem.notiDate }}</p>
                        </div>
                        <ul class="common-pager">
                            <li>이전</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>다음</li>
                        </ul>
                    </div>
                    <!-- 검색결과 - 공지사항 끝 -->
                    <div id="resultNews" class="srch-result-section">
                        <h2 data-srch-subts>보도자료 <span data-srch-result-number>3</span></h2>
                        <div v-for="newsItem in srchNewsGroup" data-srch-news-item>
                            <router-link to="">
                                <img data-srch-news-img :src="newsItem.newsImg" alt="">
                                <div data-srch-news-texts>
                                    <p data-srch-news-site>{{ newsItem.newsSite }}</p>
                                    <h4 data-srch-news-title>{{ newsItem.newsTitle }}</h4>
                                    <p data-srch-news-text>{{ newsItem.newsDate }}</p>
                                </div>
                                <!-- <button class="all-btn" data-srch-news-button type="button">자세히 보기</button> -->
                            </router-link>
                        </div>
                        <ul class="common-pager">
                            <li>이전</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>다음</li>
                        </ul>
                    </div>
                    <!-- 검색결과 - 보도자료 끝 -->
                    <div id="resultData" class="srch-result-section">
                        <h2 data-srch-subts>자료실<span data-srch-result-number>3</span></h2>
                        <div v-for="dataItem in srchDataGroup" data-srch-data-item>
                            <p data-srch-data-number>{{ dataItem.dataIndex + 1 }}</p>
                            <p data-srch-data-title>{{ dataItem.dataTitle }}</p>
                            <p data-srch-data-date>{{ dataItem.dataDate }}</p>
                        </div>
                        <ul class="common-pager">
                            <li>이전</li>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>다음</li>
                        </ul>
                    </div>
                    <!-- 검색결과 - 자료실 끝 -->
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

    const srchProdGroup = ref([
        {
            prodIndex: 0,
            prodImg: '/public/images/srch_prod-sample01.png',
            prodTitle: '대형 옹벽 블록',
            prodText: '중력식 옹벽으로 간단한 설치가 장점',
        },
        {
            prodIndex: 1,
            prodImg: '/public/images/srch_prod-sample02.png',
            prodTitle: '고무링 삽입형 VR관',
            prodText: '국내 최초 고무링을 삽입하여 시공성, 수밀성이 우수',
        },
        {
            prodIndex: 2,
            prodImg: '/public/images/srch_prod-sample03.png',
            prodTitle: '호안블록',
            prodText: '블록의 요철로 간편한 설치',
        },
        {
            prodIndex: 3,
            prodImg: '/public/images/srch_prod-sample04.png',
            prodTitle: '식생블록',
            prodText: '법면과 일체화 구조',
        }
    ])

    const srchNoticeGroup = ref([
        {
            notiIndex: 0,
            notiTitle: 'XXXX콘크리트 홈페이지를 개장하였습니다.',
            notiDate: '2023.03.01',
        },
        {
            notiIndex: 1,
            notiTitle: 'XXXX콘크리트 10주년 창립기념일 안내',
            notiDate: '2023.03.27',
        },
    ])

    const srchDataGroup = ref([
        {
            dataIndex: 0,
            dataTitle: '카달로그 다운로드',
            dataDate: '2023.03.27',
        }
    ])

    const srchNewsGroup = ref([
        {
            newsIndex: 0,
            newsImg: '/public/images/news/news01.jpg',
            newsSite: '부산일보',
            newsTitle: '현대 시멘트도 못넘은 고대 로마 초강력 콘크리트 비밀 풀었다',
            newsDate: '2023.01.09',
        },
        {
            newsIndex: 1,
            newsImg: '/public/images/news/news02.jpg',
            newsSite: '연합뉴스',
            newsTitle: '삼표, 일본보다 62% 향상된 "자기치유 콘크리트" 기술 개발',
            newsDate: '2023.03.15',
        }

    ])

</script>

<style lang="scss" scoped>

    #bcSection {
        padding: 1rem 0;  
    }

    #srchSection {
        @apply grid;

        grid-template-columns: 10rem 1fr;
        padding: 1rem 0;
        gap: 2rem;

        .web-common-inner {
            @apply w-full;
        }
    }

    #srchSumm {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(var(--black), .15);
        margin-bottom: 2rem;
    }

    #srchLt {
        @apply flex flex-col;

        gap: 3rem;
        animation: lt-animate .75s ease-in backwards;
        animation-delay: .75s;
    }

    @keyframes lt-animate {
        0% {
            transform: translateX(-5%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
   }


    #srchRt {
        animation: rt-animate .75s ease-in backwards;
    }

    @keyframes rt-animate {
        0% {
            transform: translateX(5%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
   }
    

    [data-srch-recent-list] {
        @apply flex flex-col;

        gap: .25rem;
        padding-left: .35rem;

        li {
            padding: .5rem 0;
            
            text-align: left;
            user-select: none;
        }
    }

    [data-Lt-titles] {
        @apply font-bold;

        font-size: var(--font20);
        margin-bottom: 1.5rem;
        user-select: none;
    }

    [data-srch-subts] {
        @apply flex items-end font-bold;

        font-size: var(--font32);
        gap: .5rem;
        margin-bottom: 2rem;
        user-select: none;

        &::before {
            content: '';
            display: inline-block;
            margin-right: .25rem;
            height: 1.5rem;
            width: 4px;
            background-color: rgb(var(--main));
        }
    }

    [data-srch-area-list] {
        @apply flex flex-col;

        // gap: .75rem;

        > div{
            @apply flex items-center;

            gap: .5rem;
            cursor: pointer;
            padding: .35rem;

            input, label {
                cursor: pointer;
            }

            input[type="checkbox"] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;

                &::after {
                    content: '';
                    border: 1px solid #000;
                    width: .6rem;
                    height: .6rem;
                    display: block;
                }

                
            }

            input[type="checkbox"]:checked {
                @apply relative;

                &::after {
                    @apply relative;

                    // border: 1px solid rgb(var(--main));
                    content: '✔';
                    display: block;
                    color: rgb(var(--main));
                    font-size: 10px;
                    bottom: 0;
                    right: 0;
                    
                }
            }
        }
    }

    [data-srch-used-word] {
        &:before {
            @apply inline-block;

            content: '"';
        }

        &:after {
            @apply inline-block;

            content: '"';
        }
    }

    [data-srch-result-number] {
        @apply flex font-normal;

        font-size: var(--font16);
        opacity: .35;

        &:before {
            content: '전체';
            display: inline-block;
            margin-right: .25rem;
        }

        &:after {
            content: '건';
            display: inline-block;

        }
    }

    .srch-result-section {
        padding: 1rem 0;
        margin-bottom: 3rem;
    }

    /* srchMilestone */

    #srchMilestone {
        @apply flex w-1/2 justify-between items-center relative top-0;

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

    /* 검색결과 - 제품소개, 보도자료 */

    [data-srch-prod-item] > a, [data-srch-news-item] > a{
        @apply flex justify-start items-center;

        gap: 2rem;
        padding: 1rem;
        
        [data-srch-prod-img], [data-srch-news-img] {
            width: 5rem;
        }

        & + div {
            
            border-top: 1px solid rgba(var(--black), .1);
        }

        &:hover {
            background-color: rgba(var(--black), .05);
        }
    }

    [data-srch-prod-button], [data-srch-news-button] {
        flex: 0 0 auto;
        margin-left: auto;
    }
    
    [data-srch-prod-texts], [data-srch-news-texts] {
        @apply flex flex-col;

        gap: 1rem;

        h4 {
            @apply font-bold;

            font-size: var(--font20);
            
        }

        h4, p {
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            /* height: 1rem; */
            display: -webkit-box;
        }
    }                
            
    /* 검색결과 - 공지사항, 자료실 */

    #resultNotice, #resultData {
        @apply flex flex-col;

    }

    [data-srch-noti-item], [data-srch-data-item] {
        @apply flex w-full items-center;

        gap: .5rem;
        border-bottom-width: 1px;
        padding: 1.5rem .5rem;
        font-size: var(--font16);
        
        &:hover {
            background-color: rgba(var(--black), .05);
        }
    }

    [data-srch-noti-number], [data-srch-data-number] {
        min-width: 2.5rem;
        color: rgba(var(--black), 0.5);
        text-align: center;
    }

    [data-srch-noti-title], [data-srch-data-title] {
        cursor: pointer;
        font-weight: 700;
        width: calc(100% - 150px);
        line-height: 1.4;
    }


    //반응형
    @media screen and (max-width: 1279px) {}
    @media screen and (max-width: 768px) {
        #srchLt{
            display: none;
        }

        #srchSection {
            grid-template-columns: 1fr;
        }

        [data-srch-prod-item] > a,
         [data-srch-news-item] > a {
            gap: 1rem;
         }

         #srchMilestone{
            width: 82%;
         }
    }
    @media screen and (max-width: 500px) {

        [data-srch-prod-item] {  
            > a{
                flex-direction: column;
                align-items: flex-start;
                border-bottom: 1px solid rgba(var(--black), .15);
                
                [data-srch-prod-img] {
                    width: 80%;
                    margin: 0 auto;
                }
            }
         }

         [data-srch-prod-texts], 
         [data-srch-news-texts] {
            gap: 0.5rem;
        }

        [data-srch-prod-texts] {
            h4{
                font-size: var(--font16);
            }
        }

        [data-srch-news-texts] {
            h4{
                font-size: var(--font14);
            }
        }

        #srchMilestone {
            width: 100%;
            gap: .1rem;

            li {
                padding: 1rem 0.1rem;
             }
        }

        [data-srch-subts] {
            align-items: center;
            font-size: var(--font20);
        }

        [data-srch-noti-item],
        [data-srch-data-item] {

            font-size: var(--font14);
        }

        [data-srch-noti-number],
        [data-srch-data-number] {
            display: none;
        }

        [data-srch-noti-title],
        [data-srch-data-title] {
            width: 100%;
        }

        [data-srch-news-item] {
           
            > a {
                gap: .5rem;
                padding: .5rem 0;

            }
        }
    }
</style>