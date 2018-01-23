<template>
  <div id="app">
   <TopBar class="topbar"/>
   <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
   </main>
  </div>
</template>

<script>
import TopBar from './components/TopBar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  components: {
    TopBar, Editor, Preview
  }
}
</script>

<style lang="scss">
/*html, body, #app{
  height:100%;
}*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbar{
}
main{
  display: flex;
  flex: 1;
  >.editor{
    width: 450px;
  }
  >.preview{
    flex: 1;
  }
}

</style>
