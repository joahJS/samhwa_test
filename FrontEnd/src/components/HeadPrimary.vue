<template>
    <header v-if="webverIsShow" id="headPrimary">
        <div class="container flex justify-between items-center px-2">
            <h1 id="mainLogo">
                <router-link to="/">
                    <img src="../assets/images/logo_w.png" alt="mainLogo">
                    SAMHWA </router-link>
            </h1>

            <!-- 검색기능
                <div id="totalSearchbar">
                <input data-total-search-input type="text" placeholder="Search...">
                <router-link to="/search">
                    <button type="button" data-total-search-button>
                        <i class="ri-search-line"></i>
                    </button>
                </router-link>
                
            </div> -->
            
            <nav id="navPrimary" class="flex items-center gap-2">
                <ul class="nav-list">
                    <li v-for="navMenu in navGroup" class="nav-item" :class="navMenu.isVisible ? 'sub-nav-open' : ''" @click="checkNavStatus(navGroup, navMenu)">
                        
                            <p>{{ navMenu.navTitle }}</p>
                        
                        <ul class="sub-menus">
                            <li v-for="subMenu in navMenu.childrens" class="sub-item">
                                <router-link :to="subMenu.subTo">
                                    <p>{{ subMenu.subName }}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    <div id="mobileNav">
        <button @click="webverIsShow = !webverIsShow" data-mobile-hamburger-button>
            <span></span>
            <span></span>
            <span></span>
        </button>

        <router-link to="/" class="mLogo-router">
            <img src="../assets/images/logo_w.png" alt="mainLogo" class="m_logo">
         </router-link>
    </div>
</template> <!-- Template Ends -->

<script setup>
    import { useRoute } from 'vue-router'
    import router from '/src/router/index.js'
    import { watch } from 'vue'

    const route = useRoute()

    console.log(route.params)

    let navState = ref(null)
    const navGroup = ref([
        {
            navIndex: 0,
            linkTo : '',
            navTitle: '회사소개',            
            childrens: [
                {subTo: '/outline', subName: '개요'},
                {subTo: '/history', subName: '연혁'},
                {subTo: '/certificate', subName: '특허/인증'},
                {subTo: '/path', subName: '오시는길'},
            ],
            isVisible: false
        },
        {
            navIndex: 1,
            linkTo : '',
            navTitle: '제품소개',
            childrens: [
                {subTo: '/cates', subName: 'Products'},

            ],
            isVisible: false
        },
        {
            navIndex: 2,
            linkTo : '',
            navTitle: '고객센터',
            childrens: [
                {subTo: '/notice', subName: '공지사항'},
                {subTo: '/news', subName: '보도자료'},
                {subTo: '/datas', subName: '자료실'},
                {subTo: '/contact', subName: '견적문의'},
            ],
            isVIsible: false
        }
    ])

    function checkNavStatus(e, target) {
        navState = target.navIndex;

        e.forEach((x) => {
            if (x.navIndex === navState) {
                x.isVisible = true;
            } else {
                x.isVisible = false;
            }
        })
    }
    
    var webverIsShow = ref(false)
    
    // 해상도 1279px 이하일 시 nav 변경
        if ( matchMedia("(max-width: 1279px)").matches ) {
            // 1279px보다 화면이 작을 때
            webverIsShow.value = false
        } else {
            // 1279px보다 화면이 클 때
            webverIsShow.value = true
        }
    
    // url 변경 감지하여 메뉴 닫기(=페이지 이동시 모바일 메뉴 닫기)
    watch(route, () => {
        window.scrollTo(0,0);
        
        if ( matchMedia("(max-width: 1279px)").matches ) {
            // 1279px보다 화면이 작을 때
            webverIsShow.value = false
        } else {
            // 1279px보다 화면이 클 때
            webverIsShow.value = true
        }
    });

</script> <!-- Logic Ends -->

<script>



</script>

<style lang="scss" scoped>
#mainLogo {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 4rem;

    > a {
        @apply flex items-center;

        gap: .5rem;

        img {
            width: 2rem;
            margin-right: .25rem;
        }
    }
}

#totalSearchbar {
    @apply grid;

    background-color: rgb(var(--white));
    border-radius: 1rem;
    margin: 0 1rem 2rem 1rem;
    grid-template-columns: 1fr 3rem;

    > a {
        @apply flex justify-center items-center;
        
        border-radius: 1rem;

        &:hover {
            transform: scale(130%);
            transition: .35s;
        }
    }
}

[data-total-search-input] {
    @apply w-full;

    height: 1.75rem;
    border-radius: 1rem;
    padding: 0 1rem;
    outline: 0;
    flex: 1 0;
}

[data-total-search-button] {
    width: 2rem;

    .ri-search-line:before {
        font-size: var(--font20);
    }
}


#headPrimary {
    @apply flex justify-center absolute top-0 backdrop-blur-lg z-50;

    align-items: flex-start;
    height: 100vh;
    width: 320px;
    background-color: rgba(var(--black), 1);
    opacity: .85;

    > div {
        @apply flex relative;
        
        flex-direction: column;
        top: 3rem;
    }
}

#navPrimary {
    @apply w-full;

    padding: 0 1rem;
}

.nav-list {
    @apply flex relative w-full;

    color: rgba(255, 255, 255, 1);
    flex-direction: column;
    gap: .5rem;

    > li > p {
        pointer-events: none;
    }
}

.nav-item {
    @apply flex px-3 py-2 rounded text-[1rem] relative w-full; // Tailwind CSS의 유틸리티 스타일을 하나의 클래스 등에 포함시키는 방법
    @apply hover:font-bold;

    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    
}

.sub-menus {
    @apply w-full flex relative rounded;

    flex-direction: column;
    padding: 1rem 1rem 1rem 0;
    gap: 1rem;        
    display: none;

    
}

.sub-nav-open .sub-menus {
    display: block;
}

.sub-item {
    font-size: .8rem;
    font-weight: normal;
    padding-left: .5rem;

    @apply hover:bg-blue-300/[.3];
    @apply focus:bg-blue-300/[.15] focus:outline focus:outline-offset-2 focus:outline-1 focus:outline-emerald-500;
    @apply active:bg-blue-300/[.5];

    a {
        padding: .5rem;
    }        
}

#mobileNav {
    @apply w-full flex items-center fixed;

    flex-shrink: 0;
    background-color: rgb(var(--black));
    height: 4rem;
    display: none;
    padding: 0 1rem;
    z-index: 999;
}

[data-mobile-hamburger-button] {
    @apply flex flex-col;

    gap: .25rem;

    span {
        display: inline-block;
        width: 1.75rem;
        height: 2px;
        background-color: rgb(var(--white));
    }
}

.m_logo {
    height: 45px;
    margin: 0 auto;
}

.mLogo-router {
    width: calc(100% - 60px);
}

//media 반응형

@media screen and (max-width: 1279px) {
    #headPrimary {
        width: 100vw;
        top: 4rem;
        overflow: scroll;
        padding-bottom: 8rem;
    }
    #mainLogo {
        display: none;
    }

    #navPrimary {
        width: auto;
    }

    #mobileNav {
        display: flex;
        opacity: .85;
    }

    #totalSearchbar {
        margin-top: 1rem;
    }
}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 500px) {

}
</style> <!-- Stylesheet Ends -->