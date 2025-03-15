<template>
  <div class="home-profile">
    <div class="avatar-container">
      <img :src="avatar" alt="Profile Avatar" class="avatar" />
    </div>
    <h1 class="profile-name">{{ name }}</h1>
    <p class="profile-intro">{{ intro }}</p>
    <div class="contact-info">
      <h2>联系方式</h2>
      <img :src="qrCode" alt="微信二维码" class="qr-code" />
      <p>欢迎扫描二维码添加我的微信，咨询相关技术服务。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    intro: {
      type: String,
      required: true
    },
    qrCode: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.home-profile {
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.avatar-container {
  margin-bottom: 15px;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.profile-intro {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.contact-info {
  margin-top: 20px;
}

.qr-code {
  width: 200px;
  height: 200px;
  margin-top: 10px;
}
</style>