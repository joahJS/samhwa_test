<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />

        <section id="dateswr-detail">
            
           <input type="text" placeholder="제목입력" class="editor-title">
            <div class="editorWr">
                <QuillEditor :options="editorOption" theme="snow" />
            </div>
        </section>

        <div class="mt-20 text-center flex gap-2 justify-center ">
            <!-- <button class="all-btn">등록</button> -->

            <router-link :to="{name: 'Datas'}">
                <button class="all-btn">취소</button>
            </router-link>
        </div>
        
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    

</script>

<script>
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css'

    export default {
        components: {
            QuillEditor
        },
        data() {
            return {
                editorOption: {
                    placeholder: "내용일 입력하세요",
                    modules: {
                        toolbar: [
                            [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
                            // ["clean"],
                            ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
                            // ["clean"],
                            ["image", "video"],
                        ],
                        syntax: {
                            highlight: (text) => hljs.highlightAuto(text).value,
                        },
                    },
                },
                content: "",
            }
        },
    }
    
</script>



<style lang="scss" scoped>

#dateswr-detail {
    height: auto;
}
.editorWr {
    height: 500px;
}

.editor-title {
    @apply w-full border-b mb-3 p-3 outline-0; 
}


   
</style> <!-- Stylesheet Ends -->