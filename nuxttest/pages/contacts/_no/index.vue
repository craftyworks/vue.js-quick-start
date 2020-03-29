<template>
    <div>
        <hr class="divider">
        <h1>연락처 상세</h1>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                <tr class="active">
                    <td>일련번호</td>
                    <td>{{contact.no}}</td>
                </tr>
                <tr class="active">
                    <td>이름</td>
                    <td>{{contact.name}}</td>
                </tr>
                <tr class="active">
                    <td>전화</td>
                    <td>{{contact.tel}}</td>
                </tr>
                <tr class="active">
                    <td>주소</td>
                    <td>{{contact.address}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import constant from "../../../constant";

export default {
    name: "contactbyno",
    computed: mapGetters({
        contact: 'getContactOne',
    }),
    created() {
        const no = this.$route.params.no
        console.log('created', no)
        this.$store.commit(constant.CHANGE_NO, {no})
    },
    beforeRouteUpdate(to, from, next) {
        const  no = to.params.no
        this.$store.commit(constant.CHANGE_NO, {no})
        next()
    }
}
</script>

<style scoped>
    table.detail {width: 400px}
</style>
