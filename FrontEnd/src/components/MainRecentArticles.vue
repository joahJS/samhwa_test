<template>
    <div id="recentArticles">
        <!-- 공지사항 -->
        <div class="recent-articles-panel">
            <div class="recent-article-title">
                <h2 class="recent-article-board-name">공지사항</h2>
                <router-link class="recent-article-board-link" to="/notice">
                    <span>더 보기</span>
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>

            <ul class="recent-article-list" v-for="notiItem in noticeList">
                <router-link v-for="notiSub in notiItem.children" :key="date" :to="{name: 'notice_in', params: {id: notiSub.bindIndex }}">
                <li class="recent-article-item">
                    <p class="recent-article-item-title">
                        <a href="">{{ notiSub.title }}</a>
                    </p>
                    <p class="recent-article-item-date">{{ notiSub.date }}</p>
                </li>
                </router-link>
            </ul>
        </div>

        <!-- 보도자료 -->
        <div class="recent-articles-panel">
            <div class="recent-article-title">
                <h2 class="recent-article-board-name">보도자료</h2>
                <router-link class="recent-article-board-link" to="/news">
                    <span>더 보기</span>
                    <i class="ri-arrow-right-line"></i>
                </router-link>
            </div>

            <ul class="recent-article-list" v-for="newsItem in newsList">
                <router-link v-for="newsSub in newsItem.children" :key="date" :to="{name: 'news_in', params: {id: newsSub.number}}">
                <li class="recent-article-item">
                    <p class="recent-article-item-title">
                        <a href="">{{ newsSub.title }}</a>
                    </p>
                    <p class="recent-article-item-date">{{ newsSub.date }}</p>
                </li>
                </router-link>
            </ul>
        </div>
    </div>
</template> <!-- Template Ends -->

<script setup>
//store에서 영역별 데이터 import
import { useNoticeStore } from '@/stores/noticeStore'
import { useNewsStore } from '@/stores/newsStore'
import { storeToRefs } from 'pinia';

const noticeStore = useNoticeStore()
const newsStore = useNewsStore()

const { noticeList } = storeToRefs(noticeStore)
const { newsList } = storeToRefs(newsStore)


</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #recentArticles {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 50px;
        margin-inline: auto;
        width: min(1200px, 100% - 30px);
    }

    .recent-articles-panel {
        flex: 1;
    }

    .recent-article-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 20px;
    }

    .recent-article-board-name {
        font-size: 20px;
        font-weight: 900;
    }

    .recent-article-list {
        border-top: 1px solid rgba(var(--black), .15);
    }

    .recent-article-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        padding: 20px 8px;
        transition: background-color .15s;
        border-bottom: 1px solid rgba(var(--black), .15);

        & + & {
            border-block-start: 1px solid rgba(var(--black), .15);
        }

        &:hover {
            background-color: rgba(var(--main), .1);

            > .recent-article-item-title {
            }
        }
    }

    .recent-article-item-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .recent-article-item-date {
        flex: 0;
        flex-basis: max-content;
        white-space: nowrap;
    }

    @media screen and (max-width: 480px) {
        .recent-article-item-title {
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .recent-article-item-date {
            display: none;
        }
    }
</style> <!-- Stylesheet Ends -->