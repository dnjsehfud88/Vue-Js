# Vue js 프로젝트

## 프론트 엔드
### 환경 설정
1. yarn 설치
```bash
npm install -g yarn
```
2. vue/cli 설치
```bash
yarn global add @vue/cli
```
3. frontend 폴더 생성
```bash
vue create frontend
```
4. frontend 폴더 이동
```bash
cd frontend
```
5. yarn 서버 실행
```bash
yarn serve
```
6. http://localhost:8080 -> 접속 후 구동 확인

## 백엔드
### 환경 설정 
1. express-generator 설치
```bash
yarn global add express-generator
```
2. backend폴더 생성
```bash
express --view=ejs backend
```
3. backend 폴더 이동
```bash
cd backend
```
4. yarn 설치
```bash
yarn install
```
5. 백엔드 서버 실행
```bash
yarn start
```
6. http://localhost:3000 -> 접속 후 구동 확인

## 프론트 엔드 백엔드 연동
1. frontend 폴더에 vue.config.js 파일 생성
2. 아래 내용을 입력한다
```javascript
module.exports = { 
    devServer: {
      proxy: { 
        '/api': { 
          target: 'http://localhost:3000/api',
          changeOrigin: true, 
          pathRewrite: { 
            '^/api': ''
          } 
        } 
      } 
    },
    outputDir: '../backend/public',
}
```
1. frontend 폴더로 이동
```bash
cd frontend
```
2. build 명령어를 이용해서 빌드 실행
```bash
yarn build
```
3. backend 폴더로 이동 (워크스페이스에서)
4. public 폴더 내부에 favicon.ico과 index.html폴더가 있다면 성공

## 라우터 설정 및 Hello World 출력
1. backend/routes 폴더 내부에 world.js파일 생성
```javascript
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    
});

module.exports = router;
```
2. frontend/src/components 폴더 내부에 World.vue 생성
``` javascript
<template>
    <div class="wrap">
        <h1>Hello, {{ name }}</h1>
    </div>
</template>
<script>

export default {
    created () {
    
     },
    data () {
        return {
            name: "world"   
        }
    }
}
</script>
```
3. frontend 폴더에서 Vue 라우터 패키지 설치
```bash
yarn add vue-router
```
4. frontend/src폴더에 routes 폴더 생성
5. index.js 파일 생성
``` javascript
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/World'

Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        }
    ]
})
```
6. frontend/src/app.vue에 <router-view> 요소를 추가해준다
```javascript
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
```
7. axios 패키지 설치
```bash
yarn add axios
```
8. frontend/src/main.js를 아래와 같이 수정해 준다.
```javascript
import Vue from 'vue'
import App from './App.vue'
import {router}  from './routes/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
```
9. 프론트엔드 서버 실행
```bash
yarn serve
```
10. http://localhost:8080 접속 후 결과 확인

## Hello World -> Hello John 변경
1. backend/routes/world.js 수정
```javascript
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ name: "john"}); //json 데이터 전달
});

module.exports = router;
```
2. frontend/src/components/World.vue 수정 
```javascript
<template>
    <div class="wrap">
        <h1>Hello, {{ name }}</h1>
    </div>
</template>
<script>

export default {
    created () {
           
        this.$http.get('/api/worlds')
            .then((response) => {
            setTimeout(() => { //결과 확인을 위해서 2초의 지연시간 부여
                 this.name = response.data.name
            }, 2000);          
        });
    },
    data () {
        return {
            name: "world"   
        }
    }
}
</script>
```
1. yarn 서버 실행 VSCode 디버그 모드로 backend 서버 실행
```bash
yarn serve
```
2. http://localhost:8080 접속해서 결과 확인
3. frontend에서 yarn build로 서버 빌드해서 백앤드만 실행해서 결과 확인
```bash 
cd frontend
yarn build
```
4. http://localhost:3000에 접속해서 확인

## 홈페이지 틀 제작
1. App.vue 파일 수정(페이지가 바뀌어도 바뀌지 않는 요소)
```javascript
<template>
    <v-app id="app">
        <h1>HI!</h1>
        <router-link :to="{ name: 'index' }" class="link">메인</router-link><br/>
        <router-link :to="{ name: 'sign' }" class="link">회원가입</router-link><br/>
        <router-link :to="{ name: 'login' }" class="link">로그인</router-link>
        //라우터 뷰 외부의 요소는 고정된다
        <router-view></router-view>     
    </v-app>
</template>
```
2. Main, Login, Sign.vue 파일 생성
```javascript
//메인 페이지
<template>
    <div class="wrap">
        <h1>메인 페이지</h1>
    </div>
</template>
//로그인
<template>
    <div class="wrap">
        <h1>로그인</h1>
    </div>
</template>
//회원가입
<template>
    <div class="wrap">
        <h1>회원가입</h1>
    </div>
</template>
```
3. index.js 수정
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Main'
import login from '@/components/Login'
import sign from '@/components/Sign'

Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
    {
        path: '/',
        name: 'index',
        component: Index
    },
     {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/sign',
        name: 'sign',
        component: sign
      }
 ]
})
```
4. frontend 폴더로 이동
```bash
cd frontend
```
5. yarn 서버 실행
```bash
yarn serve
```
6. http://localhost:8080 접속 후 확인

## Vutify 설정 및 세팅
1. frontend 폴더로 이동
```bash
cd frontend
```
2. 명령어로 Vuetify설치
```bash
vue add vuetify
```
3. 탐색기에서 node_modules폴더 내부에서 vuetify폴더 확인
4. main.js 에 설정 추가
```javascript
import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import Index from '@/components/Main'
import login from '@/components/Login'
import sign from '@/components/Sign'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)
export const router = new Router({
 mode: 'history',
 routes: [
    {
        path: '/',
        name: 'index',
        component: Index
    },
     {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/sign',
        name: 'sign',
        component: sign
      }
 ]
})
```
5. app.vue 수정
```javascript
<template>
    <v-app id="app">
        <h1>HI!</h1>
        <router-link :to="{ name: 'index' }" class="link"><v-btn color="success">메인</v-btn></router-link>
        <router-link :to="{ name: 'sign' }" class="link"><v-btn color="error">회원가입</v-btn></router-link>
        <router-link :to="{ name: 'login' }" class="link"><v-btn color="info">로그인</v-btn></router-link>
        <router-view></router-view>
    </v-app>
</template>
```
6. Main, Login, Sign.vue 파일 수정
```javascript
//메인 페이지
<template>
    <v-content class="wrap">
        <h1>Main Page</h1>
    </v-content>
</template>
//로그인
<template>
    <v-content class="wrap">
        <h1>로그인</h1>
    </v-content>
</template>
//회원가입
<template>
    <v-content class="wrap">
        <h1>회원가입</h1>
    </v-content>
</template>
```
7. http://localhost:8080 접속 후 확인

## 툴바 컴포넌트화
1. src/component 폴더에 ToolBar.vue 파일 생성
```javascript
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
```
2. app.vue 수정
```javascript
<template>
    <v-app id="app">
        <toolbar />
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
</template>
<script>
import toolbar from "./components/ToolBar"

export default {

  name: 'App',
  components:{ toolbar },
  data () {
    return {
      //
    }
  }
}
</script>
```
3. 서버 실행해서 확인
```bash
yarn serve
```