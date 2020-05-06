<template>
    <v-content class="wrap">
        <h1>회원가입</h1>
        <v-form style="width: 500px; margin: auto auto auto auto">
            <v-text-field  placeholder="이름"/>
            <v-text-field  placeholder="아이디"/>
            <v-text-field type="password" placeholder="비밀번호"/>
            <v-text-field type="password" placeholder="비밀번호 체크"/>
            <v-text-field placeholder="이메일"/>
            <v-text-field placeholder="전화번호"/>
            <v-btn block>로그인</v-btn>
        </v-form>
    </v-content>
</template>