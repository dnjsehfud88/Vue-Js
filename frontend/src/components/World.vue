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
            setTimeout(() => {
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
