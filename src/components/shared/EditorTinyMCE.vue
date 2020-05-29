<template>
    <div class="tinymce-box">
        <editor :disabled="disabled"
                :init="init"
                @onClick="onClick"
                v-model="myValue">
        </editor>
    </div>
</template>

<script>
    import tinymce from 'tinymce/tinymce'
    import Editor from '@tinymce/tinymce-vue'
    import 'tinymce/themes/silver'
    // @link https://www.tiny.cloud/docs/plugins/
    import 'tinymce/plugins/link'
    import 'tinymce/plugins/code'
    import 'tinymce/plugins/contextmenu'
    import 'tinymce/plugins/image' // 插入上传图片插件
    import 'tinymce/plugins/imagetools'
    import 'tinymce/plugins/media' // 插入视频插件
    import 'tinymce/plugins/table' // 插入表格插件
    import 'tinymce/plugins/lists' // 列表插件
    import 'tinymce/plugins/wordcount' // 字数统计插件
    import 'tinymce/plugins/colorpicker'
    import 'tinymce/plugins/textcolor'
    import 'tinymce/plugins/fullscreen'
    import 'tinymce/plugins/preview'
    import 'tinymce/plugins/print'
    import 'tinymce/plugins/pagebreak'
    import 'tinymce/plugins/codesample'

    export default {
        components: {
            Editor
        },
        props: {
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            plugins: {
                type: [String, Array],
                default: 'codesample pagebreak link code contextmenu lists image imagetools media table wordcount fullscreen preview print'
            },
            toolbar: {
                type: [String, Array],
                default: 'undo redo | fontselect fontsizeselect formatselect ' +
                    '| removeformat' +
                    '| bold italic forecolor backcolor ' +
                    '| alignleft aligncenter alignright alignjustify ' +
                    '| numlist bullist outdent indent  |pagebreak  ' +
                    '| lists image media table ' +
                    '| link unlink code codesample' +
                    '| fullscreen preview print'
            }
        },
        data() {
            return {
                init: {
                    language_url: '/tinymce/langs/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: '/tinymce/skins/ui/oxide',
                    // skin_url: 'tinymce/skins/ui/oxide-dark',//暗色系
                    height: 300,
                    plugins: this.plugins,
                    toolbar: this.toolbar,
                    contextmenu: "link image imagetools table",
                    branding: false,
                    menubar: false,
                    // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                    // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                    images_upload_handler: (blobInfo, success, failure) => {
                        const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                        success(img)
                        // let formdata = new FormData()
                        // formdata.set('upload_file', blobInfo.blob())
                        // axios.post('/api/upload', formdata).then(res => {
                        //   success(res.data.data.src)
                        // }).catch(res => {
                        //   failure('error')
                        // })
                    }
                },
                myValue: this.value
            }
        },
        // mounted () {
        //   // tinymce.init({})
        // },
        methods: {
            // 添加相关的事件，可用的事件参照文档=> https://github.com/tinymce/tinymce-vue => All available events
            // 需要什么事件可以自己增加
            onClick(e) {
                this.$emit('onClick', e, tinymce)
            },
            // 可以添加一些自己的自定义事件，如清空内容
            clear() {
                this.myValue = ''
            }
        },
        watch: {
            value(newValue) {
                this.myValue = newValue
            },
            myValue(newValue) {
                this.$emit('input', newValue)
            }
        }
    }

</script>
<style scoped>

</style>
