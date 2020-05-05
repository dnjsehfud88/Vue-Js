<template>
    <v-content class="wrap">
        <h1>Main Page</h1>
        <router-link :to="{ name: 'index' }" class="link">메인</router-link><br/>
        <router-link :to="{ name: 'sign' }" class="link">회원가입</router-link><br/>
        <router-link :to="{ name: 'login' }" class="link">로그인</router-link>
    </v-content>
</template>
<script>


</script>
