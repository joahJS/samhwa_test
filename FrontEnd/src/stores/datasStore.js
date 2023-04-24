//자료실 스토어

import { defineStore } from 'pinia'

export const useDatasStore = defineStore('datas', () => {
    const upperPath = '/temp/'

    //리스트
    const dataList = ref([
        {
            url: '/datas/',
            children: [
                {
                    bindIndex:'0',
                    number: '1',
                    title: '카달로그 다운로드',
                    date: '2023.03.27',
                },

            ]
        }
    ])

    //상세페이지

    const dataGroup = ref([
        {
            bindIndex:'0',
            number: '1',
            title: '카달로그',
            date: '2023.03.27',
            thumImg: '',
            texts: '삼화기업 카달로그 아래 파일을 클릭 후 다운로드 해주시길 바랍니다.',
            uploaded: [
                {fileName:`${upperPath}/catalog/catalog1.pdf`, name:'카달로그.pdf'}
            ]
        },
        

    ])
    

    return { dataList, dataGroup }
    
})


    