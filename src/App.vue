<template>
  <div id="app" class="text-center">
    <NavBar></NavBar>
    <TranslateForm @formSubmit="translateText"></TranslateForm>
    <TranslateOutput :translatedText="translatedText" :selectedLang="selectedLang"></TranslateOutput>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'

export default {
  name: 'app',
  components: {
    NavBar,
    TranslateForm,
    TranslateOutput
  },
  data() {
    return {
      translatedText: '',
      selectedLang: 'Selected Language'
    }
  },
  methods: {
    translateText: function(text, language) {
      let langId = language.id || language;
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170507T184032Z.8de7dadfdb69d639.cb4d83404c405147a537b0c794b065da63a7ec34&lang=' + langId + '&text=' + text)
      .then((response) => {
        this.translatedText = response.body.text[0];

        if (langId == 'es') {
          this.selectedLang = "Spanish";
        } else if (langId == 'zh') {
          this.selectedLang = "Chinese";
        } else if (langId == 'ar') {
          this.selectedLang = "Arabic";
        } else {
          this.selectedLang = language.val;
        }
      })
    }
  }
}
</script>

<style lang="scss">
  body {
    background: #efefef;
  }
</style>
