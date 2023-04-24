<template>
    <footer id="footPrimary">
        <div class="container inner-box">
            <div class="text-center">
                <img src="../assets/images/logo_b.png" class="w-16 mx-auto mb-1">
                <span class="font-bold">SAMHWA</span>
            </div>
            <div class="self-center leading-4">
                <p>전남 순천시 서면 구랑실재길 133(구상리 245)</p>
                <p><span class="font-bold">TEL</span> : 061 - 755 - 6848</p>
                <p><span class="font-bold">FAX</span> : 061 - 755 - 6849</p>
                <br>
                <p class="copyright">© {{ copyYear }} by 소나무정보기술, All rights reverved. </p>
            </div>
        </div>
    </footer>
</template> <!-- Template Ends -->

<script setup>
    const copyYear = ref(new Date().getFullYear())
</script> <!-- Logic Ends -->

<style lang="scss" scoped>
    #footPrimary {
        @apply mt-auto py-5 px-10;

        background-color: rgba(var(--black), .15);
        font-size: var(--font14);
        color: rgb(var(--font));
    }

    .inner-box {
        @apply mx-auto flex gap-10 items-center;
    }

    .copyright {
        color: rgba(var(--font), .75);
    }

    //media 반응형

    @media screen and (max-width: 1279px) { }

    @media screen and (max-width: 767px) {
        #footPrimary {
            @apply p-3;

            font-size: var(--font13);
        }

        .inner-box {
            @apply flex-col gap-4;

            img {
                @apply w-12 text-center;
            }
        }
    }

    @media screen and (max-width: 500px) { }

</style> <!-- Stylesheet Ends -->