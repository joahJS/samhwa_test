<template>
    <subPageHero />
    <div class="web-common-inner">
        <ul id="breadCrumbs">
            <li onclick="location.href='/'">Home</li>
            <li id="currentCr">{{ whatBread }}</li> <!--주소에 있는 배열 4번째를 불러오는 것 (0부터 시작)-->
        </ul>
        


    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>

    const getPath = window.location.href.split('/');
    let whatBread = ref()



    if ( getPath[3] === 'outline' ) {
        whatBread = '개요'
    } else if ( getPath[3] === 'history' ) {
        whatBread = '연혁'
    } else if ( getPath[3] === 'certificate' ) {
        whatBread = '특허/인증'
    } else if ( getPath[3] === 'path' ) {
        whatBread = '오시는 길'
    } else if ( getPath[3] === 'cates' ) {
        whatBread = '제품목록 '
    } else if ( getPath[3] === '/cates/' ) {
        whatBread = '제품 상세'
    } else if ( getPath[3] === 'notice' || getPath[3] === 'notice_writing' ) {
        whatBread = '공지사항'
    } else if ( getPath[3] === 'news' || getPath[3] === '/news_in/' ) {
        whatBread = '보도자료'
    } else if ( getPath[3] === 'datas' || getPath[3] === 'data' ) {
        whatBread = '자료실'
    } else if ( getPath[3] === 'contact' ) {
        whatBread = 'Contact Us'
    } 
    
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #breadCrumbs {
        @apply flex items-center;

        gap: .5rem;
        padding: 0 0 3rem 0;

        li {
            font-size: var(--font14);
            color: rgba(var(--black), .3);
            cursor: pointer;

            &#currentCr {
                color: rgba(var(--font));
            }
        }

        li + li:before {
            content: '';
            display: inline-block;
            vertical-align: middle;
            width: 1px;
            height: .7rem;
            background-color: rgba(var(--black), .3);
            margin-right: .5rem;
        }
    }

</style> <!-- Stylesheet Ends -->