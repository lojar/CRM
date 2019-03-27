<template>
  <div class="pager-wrapper" ref="pager">
    <div class="pager-input">
      <div>到</div>
      <input type="text" v-model="jumpPage">页
      <a class="pager-btn-go" href="javascript:void(0)" @click="Go()"><button>Go</button></a>
    </div>
    <div class="pager-box">
      <a class="pager-prev" :class="{'pager-disabled':prevDisable}" href="javascript:void(0)" @click="jumpPrev()">上一页</a>
      <template v-for="(i,index) in pageSize">
        <span v-if="i==pageNo" class="pager-curr"  :key="index">
          <em class="pager-em"></em>
          <em>{{i}}</em>
        </span>
        <a v-else-if="pageNo<5&&(i)<6" href="javascript:void(0)" @click="jump(i)" :key="index">
          {{i}}
        </a>
        <a v-else-if="pageSize<7||i==1||i==pageSize||(pageNo-2<=i&&i<=pageNo+2)" href="javascript:void(0)" @click="jump(i)" :key="index">
          {{i}}
        </a>
        <template v-else>
          <span v-if="pageNo<5&&i==6" class="pager-spr" :key="index">…</span>
          <span v-if="pageNo==4&&i==7" class="pager-spr" :key="index">…</span>
          <span v-if="pageNo>4&&i==pageNo-3" class="pager-spr" :key="index">…</span>
          <span v-if="pageNo>4&&i==pageNo+3" class="pager-spr" :key="index">…</span>
        </template>
      </template>
      <a class="pager-next" :class="{'pager-disabled':nextDisable}" href="javascript:void(0)" @click="jumpNext()">下一页</a>
    </div>
    
  </div>
</template>

<script>
export default {
  model: { // 通过v-model传过来的参数
    prop: 'pageNo',
    event: 'jumpPage'
  },
  props: {
    pageSize: {
      type: Number,
      default: 1
    },
    pageNo: { // 通过v-model传过来的参数
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      jumpPage: '' // 避免操作props参数
    }
  },
  computed: {
    prevDisable: function () { // “上一页”按钮是否可点
      if (this.pageNo > 1) {
        return false
      } else {
        return true
      }
    },
    nextDisable: function () { // “下一页”按钮是否可点
      if (this.pageNo < this.pageSize && this.pageSize > 1) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    jumpPrev: function () { // 点击上一页
      if (this.pageNo === 1) {
        return false
      } else {
        this.$emit('jumpPage', this.pageNo - 1)
      }
    },
    jumpNext: function () { // 点击下一页
      if (this.pageNo === this.pageSize) {
        return false
      } else {
        this.$emit('jumpPage', this.pageNo + 1) // 修改当前页码
      }
    },
    jump: function (id) { // 直接跳转
      if (id > this.pageSize) {
        id = this.pageSize
      }
      this.jumpPage = ''
      this.$emit('jumpPage', id) // 修改当前页码
    },
    Go: function () {
      if (this.jumpPage === '') { // 判空处理
        return false
      } else if (/^\d*$/.test(parseInt(this.jumpPage)) && this.jumpPage<=30) { // 填写数字才能跳转
        this.jump(parseInt(this.jumpPage))
        this.jumpPage = ''
      } else {
        this.jumpPage = ''
        return false
      }
    }
  }
}
</script>

<style scoped lang="stylus" type="text/stylus">
    .pager-wrapper{
        width 76vw;
        margin: 0 auto;
        display:flex;
        flex-direction: row-reverse;
        padding:0 0 2vw 0;
    }
    .pager-input{
        display:flex;

    }
    .pager-input[data-v-c51a5246]{
        padding:0 0 0 2vw;
    }
    .pager-input input{
        width:2vw;
        padding:0 0.5vw;
        border:1px solid skyblue;
        border-radius:0.2vw;
        margin:0 0.5vw;
    }
    .pager-btn-go{
        display:flex;
        text-decoration:none;
    }
    .pager-btn-go button{
        width:3.5vw;
        height:100%;
        margin:0 0 0 0.5vw;
    }
</style>
