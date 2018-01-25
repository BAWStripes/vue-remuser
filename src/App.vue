<template>
  <div id="app" v-bind:class="{previewNode:previewNode}">
    <TopBar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exit" v-on:click="exit">退出预览</el-button>
  </div>
</template>

<script>
  import TopBar from './components/TopBar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    data() {
      return {
        previewNode: false,
        resume: {
          profile: {name: '', city: '', birth: ''},
          works: [{company: '', content: ''}],
          studies: [{school: '', duration: '', degree: ''}],
          projects: [{name: '', content: ''}],
          awards: [{name: ''}],
          contacts: [{qq: '', wechat: '', email: '', phone: ''}]
        }
      }
    },
    methods: {
      exit() {
        this.previewNode = false
      },
      preview() {
        this.previewNode = true
      }
    },
    components: {
      TopBar, Editor, Preview
    }
  }
</script>

<style lang="scss" type="text/scss">
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

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .topbar {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }

  main {
    display: flex;
    flex: 1;
    background: #ddd;

    > .editor {
      width: 450px;
      margin: 16px 8px 16px 16px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px;
      overflow: hidden;
    }

    > .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background: #fff;
      box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
      border-radius: 4px;
      overflow: auto;
    }
  }

  .previewNode > #topbar {
    display: none;
  }

  .previewNode #editor {
    display: none;
  }

  .previewNode #preview {
    max-width: 1000px;
    margin: 32px auto;
  }

  #exit {
    display: none;
  }

  .previewNode #exit {
    display: inline-block;
    position: fixed;
    right: 16px;
    bottom: 16px;
  }

</style>
