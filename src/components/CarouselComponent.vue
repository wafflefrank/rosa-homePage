<template>
  <div class="banner-wrapper bg-light">
    <div id="index_banner" class="banner-vertical-center-index container-fluid pt-5">
      <!-- Start slider -->
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row d-flex align-items-center">
              <div class="banner-content col-lg-8 col-8 offset-2">
                <div class="video-container">
                  <iframe
                    class="elementor-video"
                    frameborder="0"
                    allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="ROSA技術開發團隊"
                    width="740"
                    height="400"
                    src="https://www.youtube.com/embed/xxFG34jj96w"
                    id="widget2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row d-flex align-items-center">
              <div class="banner-content col-lg-8 col-8 offset-2">
                <div class="video-container">
                  <iframe
                    class="elementor-video"
                    frameborder="0"
                    allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="ROSA技術開發團隊"
                    width="740"
                    height="400"
                    src="https://www.youtube.com/embed/2FlGal6__v0"
                    id="widget2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row d-flex align-items-center">
              <div class="banner-content col-lg-8 col-8 offset-2">
                <div class="video-container">
                  <iframe
                    class="elementor-video"
                    frameborder="0"
                    allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="ROSA技術開發團隊"
                    width="740"
                    height="400"
                    src="https://www.youtube.com/embed/sNYJUeYDD-g"
                    id="widget2"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- End slider -->
    </div>
  </div>
</template>

<script>
// 引入 Bootstrap 的 JavaScript
export default {}
</script>
<style scoped>
/* 自定义样式来处理放大效果 */
.carousel-inner {
  height: 500px !important;
}
.video-container {
  position: relative;
  padding-bottom: 40.25%; /* 16:9 aspect ratio */
  height: 0px;
  overflow: hidden;
  max-width: 100%;
  /* background: #000; */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
