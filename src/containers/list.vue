<template>
  <div>
    <Button type="primary" @click="modal1 = true">显示对话框</Button>
    <Modal
        v-model="modal1"
        title="普通的Modal对话框标题"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal2 = true">自定义页头和页脚</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>此任务删除后，下游 10 个任务将无法执行。</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">不带标题栏</Button>
    <Modal v-model="modal3">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal4 = true">国际化</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">设置宽度</Button>
    <Modal
        v-model="modal5"
        title="自定义宽度"
        width="300">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
    </Modal>
    <Button type="primary" @click="modal6 = true">显示对话框</Button>
    <Modal
        v-model="modal6"
        title="对话框标题"
        :loading="loading"
        @on-ok="asyncOK">
        <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </Modal>
    <Button @click="modal7 = true">禁用右上角关闭（含Esc键）</Button>
    <Modal
        title="对话框标题"
        v-model="modal7"
        :closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal8 = true">禁用遮罩层关闭</Button>
    <Modal
        title="对话框标题"
        v-model="modal8"
        :mask-closable="false">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal9 = true">距离顶部 20px</Button>
    <Modal
        title="对话框标题"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button @click="modal10 = true">垂直居中</Button>
    <Modal
        title="对话框标题"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">信息按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="error">错误按钮</Button>
    <Alert>消息提示文案</Alert>
    <Alert type="success">成功提示文案</Alert>
    <Alert type="warning">警告提示文案</Alert>
    <Alert type="error">错误提示文案</Alert>
    <Alert show-icon>
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="success" show-icon>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    <Alert type="warning" show-icon>
        警告提示文案
        <template slot="desc">
            警告的提示描述文案警告的提示描述文案警告的提示描述文案
        </template>
    </Alert>
    <Alert type="error" show-icon>
        错误提示文案
        <span slot="desc">
            自定义错误描述文案。
        </span>
    </Alert>
    <Alert show-icon>
        自定义图标
        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>
        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
    
    <Button @click="confirm">标准</Button>
    <Button @click="custom">自定义按钮文字</Button>
    <Button @click="async">异步关闭</Button>
  </div>
</template>
<script>
import { Modal, Alert } from 'iview'
export default {
  name: 'List',
  data () {
    return {
      modal1: false,
      modal2: false,
      modal_loading: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,
      modal9: false,
      modal10: false
    }
  },
  components: {
    modal: Modal,
    Alert
  },
  methods: {
    ok () {
      this.$Message.info('点击了确定')
    },
    cancel () {
      this.$Message.info('点击了取消')
    },
    del () {
      this.modal_loading = true
      setTimeout(() => {
        this.modal_loading = false
        this.modal2 = false
        this.$Message.success('删除成功')
      }, 2000)
    },
    confirm () {
      this.$Modal.confirm({
        title: '确认对话框标题',
        content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
        onOk: () => {
          this.$Message.info('点击了确定')
        },
        onCancel: () => {
          this.$Message.info('点击了取消')
        }
      })
    },
    custom () {
      this.$Modal.confirm({
        title: '确认对话框标题',
        content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },
    async () {
      this.$Modal.confirm({
        title: '确认对话框标题',
        content: '<p>对话框将在 2秒 后关闭</p>',
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove()
            this.$Message.info('异步关闭了对话框')
          }, 2000)
        }
      })
    }
  }
}
</script>
<style>
  
</style>
