<script setup></script>

<template>
  <q-responsive :ratio="16 / 9">
    <div class="row justify-center">
      <div class="daniels_banner relative-position">
        <div class="absolute-center overlay gt-xs" style="text-align: center">
          <h5><strong>WHAT ARE ESSENTIAL OILS?</strong></h5>
          <p>
            The purest distillation of nature, essential oils have enhanced
            lives for thousands of years, and new uses and benefits are still
            being discovered.
          </p>
        </div>
      </div>
    </div></q-responsive
  >
  <div class="row">
    <div class="col-6 col-xs-12 col-sm-6 daniels_container">
      <div class="relative-position" style="height: 100%; widht: 100%">
        <div class="absolute-center gt-sm" style="widht: 100%">
          <h5><strong>Experience the Benefits</strong></h5>
          <p>
            Essential oils are concentrated extracts harvested from plants,
            herbs, and trees, which are carefully steam distilled or cold
            pressed. These pure, precious oils are more potent than the
            botanicals from which they’re extracted and contain powerful,
            concentrated health and wellness benefits. <br /><br />
            Whether you use oils for aromatherapy, personal care, or as
            household solutions, all aspects of your life will get a boost with
            a few drops of essential oils!
          </p>
        </div>
        <div class="lt-md">
          <h5><strong>Experience the Benefits</strong></h5>
          <p>
            Essential oils are concentrated extracts harvested from plants,
            herbs, and trees, which are carefully steam distilled or cold
            pressed. These pure, precious oils are more potent than the
            botanicals from which they’re extracted and contain powerful,
            concentrated health and wellness benefits. <br /><br />
            Whether you use oils for aromatherapy, personal care, or as
            household solutions, all aspects of your life will get a boost with
            a few drops of essential oils!
          </p>
        </div>
      </div>
    </div>
    <div class="col-6 col-xs-12 col-sm-6 daniels_container">
      <q-img src="@/assets/images/benefits.jpg" spinner-color="white" />
    </div>
  </div>
</template>

<style>
.daniels_banner {
  background-image: url(@/assets/images/lavender.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.overlay {
  background: white;
  padding: 20px;
  border-radius: 20px;
}
.daniels_container {
  padding: 20px;
}
</style>
