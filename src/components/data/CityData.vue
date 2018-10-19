<template>
  <div>
    <Table
      :columns="cityColumn"
      :data="cityList"
      stripe
      :loading="isLoading"></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityList: [],
      cityColumn: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
        },
        {
          title: '序号',
          key: 'publicCityId',
          align: 'center',
        },
        {
          title: '省份',
          key: 'proviceName',
          align: 'center',
        },
        {
          title: '城市',
          key: 'cityName',
          align: 'center',
        },
        {
          title: '状态',
          key: 'cityStatusValue',
          align: 'center',
        },
      ],
      isLoading: false,
    };
  },
  methods: {
    async getCityList() {
      this.isLoading = true;
      const result = await this.$service.data.getCity();
      if (result.result) {
        this.cityList = result.returnData;
      }
      this.isLoading = false;
    },
  },
  created() {
    this.getCityList();
  },
};
</script>
