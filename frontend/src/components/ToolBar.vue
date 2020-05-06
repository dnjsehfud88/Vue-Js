<template>
<nav>
    <v-toolbar flat height="60px">
        <v-toolbar-title>
            <h1>HI!</h1>
        </v-toolbar-title>
        <v-toolbar-items style="margin-left: auto;">
            <v-btn :to="{ name: 'index' }" flat exact>메인페이지</v-btn>
            <v-btn :to="{ name: 'sign' }" flat>회원가입</v-btn>
            <v-btn :to="{ name: 'login' }" flat>로그인</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</nav>
</template>