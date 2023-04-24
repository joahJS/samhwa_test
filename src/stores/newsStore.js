//보도자료 스토어

import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
    const upperPath = '/temp/'

    //리스트
    const newsList = ref([
        {
            url: '/news/',
            children: [


                {
                    number: '0',
                    thumImg: `${upperPath}images/news/news02.jpg`,
                    site: 'NEWS1뉴스',
                    title: '류승원 삼화기업 대표, 순천시에 마스크 2천매 기부',
                    date: ' 2020-02-26',
                },
                {
                    number: '1',
                    thumImg: `${upperPath}images/news/news01.jpg`,
                    site: '내외뉴스통신',
                    title: '박옥순 삼화기업 전 대표, 순천시에 5천만원 쾌척',
                    date: '2022-05-19',
                },
            ]
        }
    ])

    //상세페이지
    const newsGroup = ref([



        {
            number: '0',
            site: 'NEWS1뉴스',
            title: ' 류승원 삼화기업 대표, 순천시에 마스크 2천매 기부',
            date: ' 2020-02-26',
            thumImg: `${upperPath}images/news/news02.jpg`,
            linkTo: 'https://www.news1.kr/articles/?3854287',
        },
        {
            number: '1',
            site: '내외뉴스통신',
            title: ' 박옥순 삼화기업 전 대표, 순천시에 5천만원 쾌척',
            date: '2022.05.19',
            thumImg: `${upperPath}images/news/news01.jpg`,
            linkTo: 'http://www.nbnnews.co.kr/news/articleView.html?idxno=677338',
        },
    ])

    return { newsList, newsGroup }
    
})


    