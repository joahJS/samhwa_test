<template>
    <section id="mainPage">
        <MainSlider />

        <div id="mainIntro">
            <h1 class="page-title">
                삼화기업만의 자부심
            </h1>

            <div id="mainIntroGrid">
                <div class="main-intro-block">
                    <div class="main-intro-block-catchphrase">
                        <p class="catchphrase-main">제품에 대한 확고한 자부심</p>
                        <p class="catchphrase-sub">고객의 신뢰를 기업의 이념으로 알고 언제나 최고의 제품만을 생산합니다.</p>
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                간결하면서 도식적인 세련된 이미지
                            </dt>

                            <dd class="main-intro-block-subtext">
                                미끄럼 방지, 투수기능을 가짐으로 보행자의 안전을 도모하고, 자연석 같은 질감으로 자연친화적 풍경연출이 가능합니다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-01.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                다양한 색조합으로 공간특성을 살린 디자인
                            </dt>

                            <dd class="main-intro-block-subtext">
                                색상조합이 가능하여 미관, 조경용으로도 사용되며, 강도가 놓아서 동결융해가 안된다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-02.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                아름다운 색조합으로 미관 및 조경 디자인 연출
                            </dt>

                            <dd class="main-intro-block-subtext">
                                결합식 인터록킹 블록으로 제작되어 뒤틀림이 적고, 시공이 간단하며 강도가 높아거 동결융해가 안된다.
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-03.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-description">
                        <dl class="main-intro-block-overlay">
                            <dt class="main-intro-block-title">
                                블럭 조합으로 컨센 공간의 연출 가능
                            </dt>

                            <dd class="main-intro-block-subtext">
                                잔디번식이 용이하며, 블럭으로 주차선 표시가 가능하다
                            </dd>
                        </dl>
                    </div>

                    <div class="main-intro-block-background">
                        <img src="/images/intro-block/intro-block-04.jpg" alt="">
                    </div>
                </div>

                <div class="main-intro-block">
                    <div class="main-intro-block-custom">
                        <h2 class="main-intro-block-custom-ad">제품을 만든 사람들에게 구매하세요.</h2>

                        <div class="main-intro-button catalogue">
                            <a :href="catalogUrl">
                                <i class="ri-booklet-line"></i>
                                <span>카탈로그</span>
                            </a>
                        </div>

                        <div class="main-intro-button estimate">
                            <router-link to="../contact">
                                <i class="ri-survey-line"></i>
                                <span>시공문의</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MainTestimony />

        <MainRecentArticles />
    </section> <!-- #mainPage -->

    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import MainSlider from '@/components/MainSlider.vue'
    import MainTestimony from '@/components/MainTestimony.vue'
    import MainRecentArticles from '@/components/MainRecentArticles.vue'
    import ContactUs from '@/components/ContactUs.vue'

    const upperPath = '/temp/'

    const catalogUrl = `..${upperPath}catalog/catalog1.pdf`
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #mainPage {
        display: flex;
        flex-flow: column nowrap;
        gap: 100px;
    }

    #mainIntro {
        margin-inline: auto;
        width: min(1200px, 100% - 30px);
    }

    #mainIntroGrid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 20px;
    }

    .main-intro-block {
        position: relative;
        height: 200px;
        border-radius: 3px;
        background: {
            color: rgba(var(--main), .15);
            image: linear-gradient(to top right, rgb(var(--main)) 45%, transparent 55%);
            repeat: no-repeat;
            position: top 0 right 0;
            size: 250% 250%;
        }
        transition: background-position .3s;

        &:hover {
            background-position: top 100% right 100%;

            > .main-intro-block-background {
                > img {
                    transform: none;
                    filter: brightness(.5);
                }
            }

            :where(.main-intro-block-custom) {
                .main-intro-block-custom-ad {
                    color: rgba(var(--white));
                }

                .main-intro-button {
                    background-color: rgb(var(--white));
                    color: rgb(var(--font));
                }
            }
        }
    }

    .main-intro-block-catchphrase {
        position: absolute;
        inset: 1px;
        padding: 20px;
        border-radius: 2px;
        background-color: rgb(var(--main));
        color: rgb(var(--white));
    }

    .catchphrase-main {
        font-size: 20px;
        font-weight: 900;
    }

    .catchphrase-sub {
        margin-block-start: 10px;
        font-size: 16px;
    }

    .main-intro-block-description {
        position: absolute;
        inset: 1px;
        padding: 20px;
        border-radius: 2px;
        background: {
            image: linear-gradient(to bottom right, rgb(var(--white)) 35%, transparent 35%);
            repeat: no-repeat;
            position: top 0 left 0;
            size: 200% 250%;
        }
        color: rgba(var(--font), .75);
        transition: background-position .5s, color .5s;
        z-index: 2;

        &:hover {
            background-position: top 100% left 100%;
            color: rgba(var(--white), .9);

            .main-intro-block-subtext {
                top: 20%;
                opacity: 1;
                transition: top .5s, opacity .75s;
                transition-delay: .25s;
            }
        }
    }

    .main-intro-block-overlay {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .main-intro-block-title {
        font-size: 18px;
        font-weight: 900;
    }

    .main-intro-block-subtext {
        position: absolute;
        top: -20%;
        line-height: 1.4;
        word-break: keep-all;
        opacity: 0;
    }

    .main-intro-block-custom {
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        padding: 20px;
        height: 100%;
    }

    .main-intro-block-background {
        position: absolute;
        inset: 1px;
        border-radius: 2px;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: translateY(20px);
            transition: transform .5s, filter .3s;
        }
    }

    .main-intro-block-custom-ad {
        margin-block-end: auto;
        color: rgb(var(--main));
        font-size: 18px;
        font-weight: 900;
    }

    .main-intro-button {
        border-radius: 999px;
        background-color: rgb(var(--main));
        color: rgb(var(--white));
        transition: background-color .15s, color .15s;
        overflow: hidden;

        > a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            height: 100%;
        }

        &:has(a:hover) {
            background-color: red;
            color: rgb(var(--white));
        }
    }
</style> <!-- Stylesheet Ends -->