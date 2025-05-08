<script>
/**
 * Coming-soon component
 */
export default {
  data() {
    return {
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      starttime: "Nov 5, 2020 15:37:25",
      endtime: "Dec 31, 2024 16:37:25"
    };
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount(start, end) {
      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = start - now;
      var passTime = end - now;

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
      }
    },
    calcTime(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
</script>

<template>
  <BRow>
    <BCol lg="12">
      <div class="text-center">
        <BRow class="justify-content-center mt-5">
          <BCol lg="4" sm="5">
            <div class="maintenance-img">
              <img src="/images/coming-soon-img.png" alt class="img-fluid mx-auto d-block" />
            </div>
          </BCol>
        </BRow>

        <h4 class="mt-5">Let's get started with Minible</h4>
        <p class="text-muted">
          It will be as simple as Occidental in fact it will be Occidental.
        </p>

        <BRow class="justify-content-center mt-5">
          <BCol lg="10">
            <div data-countdown="2020/12/31" class="counter-number">
              <div class="coming-box">
                {{ days }}
                <span>Days</span>
              </div>
              <div class="coming-box">
                {{ hours }}
                <span>Hours</span>
              </div>
              <div class="coming-box">
                {{ minutes }}
                <span>Minutes</span>
              </div>
              <div class="coming-box">
                {{ seconds }}
                <span>Seconds</span>
              </div>
            </div>
          </BCol>
        </BRow>

        <BRow class="justify-content-center mt-5">
          <BCol lg="6">
            <div class="input-section pt-4">
              <BRow>
                <BCol class="col">
                  <div class="position-relative">
                    <input type="email" class="form-control" placeholder="Enter email address..." />
                  </div>
                </BCol>
                <BCol class="col-auto">
                  <BButton variant="primary" type="submit" class="w-md waves-effect waves-light">
                    Subscribe
                  </BButton>
                </BCol>
              </BRow>
            </div>
          </BCol>
        </BRow>
      </div>
    </BCol>
  </BRow>
</template>
