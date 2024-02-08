import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const app = createApp({
    setup() {
        const baseUrl = 'https://vue3-course-api.hexschool.io/v2'
        const user = ref({
            username: '',
            password: ''
        })

        const login = () => {
            const api = `${baseUrl}/admin/signin`

            axios.post(api, user.value)
                .then((res) => {
                    const { token, expired } = res.data
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
                    window.location = 'products.html'
                })
                .catch((err) => {
                    alert(err.response.data.message)
                })
        }
        return {
            user,
            login,
        }
    }
})
app.mount('#app')