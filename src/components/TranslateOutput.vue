<template>
  <div class="translated-text">
    <p class="selected-lang">{{ selectedLang }}</p>
    <span>{{ translatedText }}</span>
  </div>
</template>

<script>
export default {
  name: 'TranslateOutput',
  props: ['translatedText', 'selectedLang'],
}
</script>

<style lang="scss">
  .translated-text {
    position: relative;
    float: right;
    margin: 0;
    width: 48.5%;
    background: white;
    box-shadow: 0 4px 8px lightgrey;
    margin-right: 15px;
    margin-top: -222.5px;
    border-radius: 3px;
    padding: 25px 10px 10px;
    min-height: 200px;
    text-align: left;
    font-weight: bold;
    color: #2196f3;
    font-size: 16px;

    @media (max-width: 960px) {
      position: absolute;
      left: 15px;
      right: 15px;
      margin: 0;
      width: auto;
    }
  }

  .selected-lang {
    position: absolute;
    top: 0px;
    background: #064474;
    width: 100%;
    border-top-left-radius: 3px;
    left: 0;
    border-top-right-radius: 3px;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 10px;
    text-align: left;
    font-weight: bold;
  }
</style>
