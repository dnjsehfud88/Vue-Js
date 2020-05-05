<template>
    <v-app id="app">
        <h1>HI!</h1>
        <router-link :to="{ name: 'index' }" class="link"><v-btn color="success">메인</v-btn></router-link>
        <router-link :to="{ name: 'sign' }" class="link"><v-btn color="error">회원가입</v-btn></router-link>
        <router-link :to="{ name: 'login' }" class="link"><v-btn color="info">로그인</v-btn></router-link>
        <router-view></router-view>
    </v-app>
</template>

