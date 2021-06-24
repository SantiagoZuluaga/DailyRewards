var app = new Vue({
  el: '#app',
  data: {
    initValue: "",
    numberOfMonths: "",
    monthlyAddiciton: "",
    interests: "",
    isCalculated: false,
    totalRewards: 0
  },
  methods: {
    calculateRewards: function (e) {
      e.preventDefault();
      let tempTotal = parseInt(this.initValue, 10);
      let tempInterests = parseInt(this.interests, 10);
      for(let i=0; i<parseInt(this.numberOfMonths, 10) * 20; i++) {
        tempTotal = tempTotal + (tempTotal * tempInterests * 0.1);
        if ((i + 1) % 20 == 0) {
          tempTotal = tempTotal + parseInt(this.monthlyAddiciton, 10);
        }
        
      }
      this.totalRewards = Math.round(tempTotal);
      this.isCalculated = true;
    },
    cleanRewards: function (e) {
      e.preventDefault();
      this.initValue = "";
      this.numberOfMonths = "";
      this.monthlyAddiciton = "";
      this.interests = "";
      this.isCalculated = false;
      this.totalRewards = 0;
    }
  }
})
