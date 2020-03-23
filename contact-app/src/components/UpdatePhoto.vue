<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelPhoto">
      <form method="post" enctype="multipart/form-data">
        <h3 class="heading"> :: 사진 변경</h3>
        <input type="hidden" name="no" class="long" disabled v-model="contact.no">
        <div>
          <label>현재 사진</label>
          <img class="thumbnail" :src="contact.photo"/>
        </div>
        <div>
          <label>사진 선택</label>
          <label>
            <input ref="photofile" type="file" name="photo" class="long btn btn-default">
          </label>
        </div>
        <div class="form-group">
          <div>&nbsp;</div>
          <button class="btn btn-primary" @click="submitPhoto" >변경</button>
          <button class="btn btn-primary" @click="cancelPhoto" >취소</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import eventBus from '../EventBus'

export default {
  name: 'updatePhoto',
  props: ['contact'],
  methods: {
    cancelPhoto() {
      eventBus.$emit('cancel')
    },
    submitPhoto() {
      let file = this.$refs.photofile.files[0]
      eventBus.$emit('updatePhoto', this.contact.no, file)
    }
  }
}
</script>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .form {
    background-color: white;
    margin: 100px auto;
    max-width: 400px;
    min-width: 200px;
    padding: 10px 10px 10px 10px;
  }

  img.thumbnail { width: 48px; height: 48px; margi-top: auto; margin-bottom: auto; display: block; cursor: pointer}

  .form .button {background: #2b798d; padding:  8px 15px 8px 15px; border: none; color: #fff}
</style>
