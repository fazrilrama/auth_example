<script>
/**
 * Maintenance component
 */
export default {};
</script>

<template>
  <BRow>
    <BCol cols="12" class="text-center">
      <div class="home-wrapper">
        <BRow class="justify-content-center">
          <BCol lg="4" sm="5">
            <div class="maintenance-img">
              <img src="/images/maintenance.png" alt class="img-fluid mx-auto d-block" />
            </div>
          </BCol>
        </BRow>
        <h3 class="mt-5">Site is Under Maintenance</h3>
        <p>Please check back in sometime.</p>

        <BRow>
          <BCol md="4">
            <BCard no-body class="mt-4 maintenance-box">
              <BCardBody class="p-4">
                <div class="avatar-sm mx-auto mb-4">
                  <div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20">
                    <i class="uil uil-cloud-wifi"></i>
                  </div>
                </div>
                <h5 class="font-size-15 text-uppercase">
                  Why is the Site Down?
                </h5>
                <p class="text-muted mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol md="4">
            <BCard no-body class="mt-4 maintenance-box">
              <BCardBody class="p-4">
                <div class="avatar-sm mx-auto mb-4">
                  <div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20">
                    <i class="uil uil-clock"></i>
                  </div>
                </div>
                <h5 class="font-size-15 text-uppercase">
                  What is the Downtime?
                </h5>
                <p class="text-muted mb-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical.
                </p>
              </BCardBody>
            </BCard>
          </BCol>
          <BCol md="4">
            <BCard no-body class="mt-4 maintenance-box">
              <BCardBody class="p-4">
                <div class="avatar-sm mx-auto mb-4">
                  <div class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-20">
                    <i class="uil uil-envelope-alt"></i>
                  </div>
                </div>
                <h5 class="font-size-15 text-uppercase">
                  Do you need Support?
                </h5>
                <p class="text-muted mb-0">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embar..
                  <a href="mailto:no-reply@domain.com" class="text-decoration-underline">no-reply@domain.com</a>
                </p>
              </BCardBody>
            </BCard>
          </BCol>
        </BRow>
      </div>
    </BCol>
  </BRow>
</template>
