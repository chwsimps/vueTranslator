<template>
  <div id="translateForm">
    <form @submit="formSubmit">
      <div class="langRadioGroup">
        <div class="btn btn-default langRadioBtn mostPopLang">
          <input type="radio" name="langType" id="es" value="es" v-model="language">
          <label for="es">Spanish</label>
        </div>
        <div class="btn btn-default langRadioBtn mostPopLang">
          <input type="radio" name="langType" id="zh" value="zh" v-model="language">
          <label for="zh">Chinese</label>
        </div>
        <div class="btn btn-default langRadioBtn mostPopLang">
          <input type="radio" name="langType" id="ar" value="ar" v-model="language">
          <label for="ar">Arabic</label>
        </div>
        <div class="btn-group toggle-group">
          <a href="#" class="btn dropdown-toggle" @click="showDropdown = !showDropdown">
            <span class="caret"></span>
          </a>
          <div v-show="showDropdown" class="toggle-display">
            <div class="langRadioBtn toggleBtns" v-for="lang in languages">
              <input type="radio" name="langType" :id="lang.id" :value="lang" v-model="language">
              <label :for="lang.id">{{ lang.val }}</label>
            </div>
          </div>
        </div>
      </div>
      <input class="btn btn-primary" type="submit" value="Translate">
      <div class="translateInput">
        <p class="selected-lang">English</p>
        <textarea type="text" v-model="textToTranslate" placeholder="Enter a word/phrase..."></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'TranslateForm',
  data() {
    return {
      textToTranslate: '',
      language: '',
      languages: [],
      showDropdown: false
    }
  },
  created() {
    this.language = 'es';
    this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20170507T184032Z.8de7dadfdb69d639.cb4d83404c405147a537b0c794b065da63a7ec34&ui=en')
    .then((response) => {
      let lang = this.languages;

      _.each(response.body.langs, function(val, ind) {
        if (ind != 'es' && ind != 'zh' && ind != 'ar') {
          lang.push({ id: ind, val: val });
        }
      });
    });
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      this.$emit('formSubmit', this.textToTranslate, this.language);
    }
  }
}
</script>

<style lang="scss">
  #translateForm {
    padding: 0 15px;

    .langRadioGroup {
        display: inline-block;

        @media (max-width: 350px) {
          width: 75%;
        }

      .langRadioBtn {
        position: relative;
        margin: 0 2.5px;

        &:first-child {
          margin-left: 0;
        }

        &.mostPopLang {
          @media (max-width: 350px) {
            display: block;
            margin: 10px;
          }
        }

        input {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          margin: 0;
          padding: .5em;
          border-radius: 3px;

          &:before, &:after {
            border: none;
            color: transparent;
            background: transparent;
          }

          &:checked {
            background: #4caf50;
          }

          &:checked + label {
            color: white;
          }
        }

        label {
          position: relative;
          z-index: 2;
          margin: 0;
          font-weight: bold;
          cursor: pointer;
        }
      }

      .toggle-group {
        position: static;
        margin: 0 5px 0 2.5px;

        .dropdown-toggle {
          background: white;

          &:hover {
            background: #efefef;
          }
        }

        .toggle-display {
          position: absolute;
          z-index: 2;
          left: 0;
          right: 0;
          margin: 50px 15px;
          border-radius: 4px;
          background: #efefef;
          box-shadow: 0 2px 4px gray;
          column-count: 5;
          column-gap: 0;
          border-left: 1px solid lightgray;

          @media (max-width: 600px) {
            column-count: 3;
          }

          .toggleBtns {
            background: white;
            border-bottom: 1px solid lightgray;
            border-right: 1px solid lightgray;
            margin: 0;
            transition: all 0.4s;

            &:hover {
              background: #efefef;
            }

            input {
              border-radius: 0;
            }
          }
        }
      }
    }

    input[type="submit"] {
      @media (max-width: 960px) {
        display: block;
        margin: 15px auto 0 auto;
      }
    }

    .translateInput {
      width: 48.5%;
      margin: 15px 15px 15px 0;
      position: relative;

      @media (max-width: 960px) {
        width: 100%;
        margin: 15px 0;
      }

      textarea {
        background: white;
        width: 100%;
        padding: 25px 10px 10px;
        box-shadow: 0 4px 8px lightgray;
        resize: none;
        border-radius: 3px;
        min-height: 200px;
        outline: none;
      }
    }
  }
</style>
