//상품소개 스토어

import { defineStore } from "pinia";

export const useCatesStore = defineStore('cates', () => {
    const upperPath = '/temp/'

    //리스트

    const cateList = ref([
        {
            url: '/cate01/',
            children: [

                {
                    number: '0',
                    thumImg: `${upperPath}images/cate/block4.jpg`,
                    title: '스팟 워싱블록(인조 화강블록)',
                    subTitle: '간결하면서도 도시적, 세련된 이미지',
                },
                {
                    number: '1',
                    thumImg: `${upperPath}images/cate/block2.jpg`,
                    title: 'l2, l3형 블록',
                    subTitle: '강도가 높고, 시공이 간단함',
                },
                {
                    number: '2',
                    thumImg: `${upperPath}images/cate/block3.jpg`,
                    title: 'U형블록',
                    subTitle: '결합식으로 뒤틀림이 없으며, 강도가 높고, 시공이 간단함',
                },
                {
                    number: '3',
                    thumImg: `${upperPath}images/cate/block1.jpg`,
                    title: '잔디블록',
                    subTitle: '취급에 용이하고, 잔디번식이 용이하다',
                },
                {
                    number: '4',
                    thumImg: `${upperPath}images/cate/block5.jpg`,
                    title: '조경 경계블록',
                    subTitle: '곡선을 만들수 있고 가격이 저렴하다',
                },
                
                

            ]
        }
    ])

    //상세페이지

    const cateGroup = ref([

        {
            number: '0',
            title: ' 스팟 워싱블록(인조 화강블록)',
            thumImg: `${upperPath}images/cate/block4.jpg`,
            floor: `${upperPath}`,
            table: `${upperPath}images/cate/samhwa1.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '1',
            title: ' l2, l3형 블록',
            thumImg: `${upperPath}images/cate/block2.jpg`,
            floor: `${upperPath}`,
            table: `${upperPath}images/cate/samhwa2.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '2',
            title: ' U형블록',
            thumImg: `${upperPath}images/cate/block3.jpg`,
            floor: `${upperPath}`,
            table: `${upperPath}images/cate/samhwa2.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '3',
            title: ' 잔디블록',
            thumImg: `${upperPath}images/cate/block1.jpg`,
            floor: `${upperPath}`,
            table: `${upperPath}images/cate/samhwa3.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },
        {
            number: '4',
            title: ' 조경 경계블록',
            thumImg: `${upperPath}images/cate/block5.jpg`,
            floor: `${upperPath}`,
            table: `${upperPath}images/cate/samhwa3.jpg`,
            textAll: [
                    {texts: '- 다양한 천연골재로 성형한 후 물과 에어로 워싱 처리'},
                    {texts: '- 자연석과 같은 질감으로 시공 시 자연ㅊ핀화적 풍경연출 가능.'},
                    {texts: '- 미끄럼 방지, 투수 기능을 가짐으로 보행자 안전을 도모.'},
                    {texts: '- 공원 산책로, 주차장, 휴게소, 자전거도로, 보도, 차도 등 사용.'},
                ]
        },

    ])

    
    return { cateList, cateGroup }

})