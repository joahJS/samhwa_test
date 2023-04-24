//공지사항 스토어

import { defineStore } from 'pinia'

export const useNoticeStore = defineStore('notice', () => {
    const upperPath = '/temp/'

    //리스트
    const noticeList = ref([
        {
            url: '/notice/',
            children: [

                {
                    bindIndex:'0',
                    number: '1',
                    title: '홈페이지 단장!!',
                    date: '2023.03.01',
                },
            ]
        }
    ])

    //상세페이지
    const noticeGroup = ref([

        {
            number: '0',
            title: '홈페이지 단장!!',
            date: '2023.04.01',
            thumImg: `${upperPath}images/notice/img02.jpg`,
            textAll: [
                {texts: '새로운 홈페이지가 완성 되었습니다..'},
                {texts: '많은 관심 부탁드립니다.'},
            ]
        },

    ])

    return { noticeList, noticeGroup }
    
})


const upperPath = '/temp/'

    