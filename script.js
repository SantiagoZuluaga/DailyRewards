var app = new Vue({
  el: '#app',
  data: {
    initValue: "",
    numberOfMonths: "",
    monthlyAddiciton: "",
    isCalculated: false,
    totalRewards: 0
  },
  methods: {
    calculateRewards: function (e) {
      e.preventDefault();
      let tempTotal = parseInt(this.initValue, 10);
      for(let i=0; i<parseInt(this.numberOfMonths, 10) * 20; i++) {
        tempTotal = tempTotal + (tempTotal * 0.007);
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
      this.isCalculated = false;
      this.totalRewards = 0;
    }
  }
})