<template>
    <subPageHero />
    
    <div class="web-common-inner common-main-section">
     <BreadCrumbs />

        <h1 class="page-title">견적문의</h1>

        <form method="POST" action="https://script.google.com/macros/s/AKfycbzQwXdbxWnh2QZOeeoPNfmGoXcKGIBBKmybf_ZmOG8vxhbFSC8-gSl4MhlIs-iZ7StgTw/exec" target="frAttachFiles">
            <div class="contact-input-box w-full ">
                <p class="contact-input-name">제목</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" name="제목"></p>
            </div>

            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">작성자</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" name="작성자" ></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">회사명</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" name="회사명"></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">연락처</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" name="연락처"></p>
            </div>
            <div class="contact-input-box w-1/2">
                <p class="contact-input-name">이메일</p>
                <p class="w-full self-center"><input type="text" class="contact-input-line" name="이메일"></p>
            </div>

            <div class="contact-input-box w-full ">
                <p class="contact-input-name">내용</p>
                <p class="w-full self-center"><textarea class="border w-full resize-none p-2 h-36 outline-none " name="본문"></textarea></p>
            </div>

            <div class="consent-form">
                <p class="p-1">개인정보 수집 및 이용동의</p>

                <ul class="p-1"> 
                    <li>1. 수집하는 개인정보의 항목</li>
                    <li>- 필수항목 : 작성자, 연락처</li>
                    <li>- 선택항목 : 회사명, 이메일</li>
                </ul>
                <ul class="p-1">  
                   <li> 2. 개인정보의 수집 및 이용 목적</li>
                   <li> 가. 상담 및 컨설팅 운영, 귀사 및 제휴업체의 재화 또는 서비스, 콘텐츠 제공 등 맞춤 서비스 제공 목적</li>
                   <li> 나. 민원 사무 처리: 서비스 제공에 관한 계약 이행 및 불만 처리 등 민원 처리, 고지 사항 전달, 분쟁 조정을 위한 기록</li>
                </ul>
                <ul class="p-1">   
                   <li> 3. 개인정보 파기 시기</li>
                   <li> 가. 사업을 폐업하는 경우</li>
                   <li> 나. 이용자가 동의를 철회, 거부한 경우</li>
                </ul>
            </div>
            <div class="p-2 w-full">
                <label><input type="checkbox" v-model="agreeIsCheck" ref="agreeCheck" checked="checked"> 개인정보 수집 및 이용 내용에 동의 합니다.</label>
            </div>

            <div data-cont-agree-box class="mx-auto mt-10 mb-10">
                <button :disabled="!agreeIsCheck" @click="submitComplete = !submitComplete" class="all-btn">보내기</button>
                <p v-show="!agreeIsCheck">※ 개인정보 수집 및 이용 내용에 동의해주세요.</p>
            </div>
        </form>
    </div>

    <iframe name="frAttachFiles" style="display: none"></iframe>

    <section data-submit-comp-back v-show="submitComplete">
        <div data-submit-comp-window>
            <div data-submit-comp-text>
                <p>견적문의가 완료되었습니다.</p>
                <p>빠른 시일 내에 답변드리겠습니다.</p>
            </div>
            <button class="all-btn" @click="submitComplete = !submitComplete" type="button">닫기</button>
        </div>
    </section>
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    let agreeIsCheck = ref(false)
    const submitComplete = ref(false)

    watch(agreeIsCheck, () => {
        if ( agreeIsCheck.value == true ) {
            console.log('true!')
        } else {
            console.log('false!')
        }
    })

     
    //  1. https://docs.google.com/spreadsheets/d/1Bn4m6iA_Xch1zzhNvo_6CoQWqOAgwwkOWJKC-phHx2Q/copy 에서 사본 만들기
    //  2. 확장프로그램 > Apps Script
    //  3. 8번째 줄 // var TO_ADDRESS = "example@email.net"; 에 받을 고객사 메일 삽입(example@email.net 자리에 삽입) 후 저장 (ctrl+s)
    //    ※ 21번째 줄 // 발송될 메일에 inline으로 스타일 삽입 가능 >> result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + sanitizeInput(obj[key]) + "</div>";
    //  4. 배포 > 새 배포
    //  5. 옵션 선택 >>  다음 사용자 인증 정보로 실행 : 웹 앱을 액세스하는 사용자, 액세스 권한이 있는 사용자 : 모든 사용자 선택 후 배포
    //  6. form의 action=""에 복사한 URL 삽입(웹 앱)
    
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

form {
    @apply flex flex-wrap;

    animation: form-animate .75s ease-in backwards;
}

@keyframes form-animate {
        0% {
            transform: translateY(5%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

.contact-input-box {
    @apply flex gap-3 p-1 border-b ;

    &:nth-child(1) {
        border-top: 1px solid rgba(var(--black), .15);
    }
    
    &:nth-child(6) {
        border-bottom: 0;
    }
}

.contact-input-name {
    @apply w-24 shrink-0 px-1.5 py-3.5 ;

    background-color: rgba(var(--black), .025);
    color: rgb(var(--font));
}

.contact-input-line {
    @apply border w-full p-1.5;

    font-size: var(--font14);
    outline: 0;

}

.consent-form {
    @apply border p-5 w-full mt-5;
}

[data-cont-agree-box] {
    @apply flex flex-col items-center;

    gap: 1rem;

    p {
        opacity: .5;
        line-height: 1.5;
    }
}

// 전송 확인창(팝업)

[data-submit-comp-back] {
    @apply fixed top-0 left-0;

    width: 100vw;
    height: 100vh;
    background-color: rgba(var(--black), .85);
    z-index: 999;
    transition: all 2s;
}

[data-submit-comp-window] {
    @apply absolute flex flex-col;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem 2rem;
    background-color: rgb(var(--white));
    border-radius: .25rem;
    min-width: 20vw;

    button {
        &.all-btn {
            width: 6rem;
            padding: .5rem .75rem;
            margin: 1rem auto 0;
        }
    }
}

*:disabled {
    opacity: .25;
}



[data-submit-comp-text] {
    @apply flex flex-col justify-center items-center;

    gap: .5rem;

    p {
        &:first-child {
            @apply font-bold;

            font-size: var(--font18);
        }
    }
}

//media 반응형

    @media screen and (max-width: 1279px) {

    }
    
    @media screen and (max-width: 768px) {

        .contact-input-box {
            @apply w-full

        }

        .consent-form {
            @apply p-1
        }
    
    }

    @media screen and (max-width: 500px) {

        .contact-input-name {
            width: 4rem;
        }
    }

</style> <!-- Stylesheet Ends -->