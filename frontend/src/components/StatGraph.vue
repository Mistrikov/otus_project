<script setup>
import { ref, computed } from 'vue'
import { useVkStateStore } from 'stores/store'

const store = useVkStateStore();
const postsList = computed(() => store.postsList)

/*const props = defineProps({
  postsList: {
    type: Array,
    default() {
        return []
      }
  },
});*/

//const rows = computed(() => props.postsList)
function splitN(str, N) {
  const words = str.trim().split(/\s+/g);
  const res = [];
  let cur_str = words.shift();
  for (const word of words) {
    if (cur_str.length + 1 + word.length >= N || cur_str.length >= N) {
      res.push(cur_str);
      cur_str = word;
    } else {
      cur_str += ' ' + word;
    }
  }
  res.push(cur_str);

  return res //.join('\r');
}

defineOptions({
  name: 'StatGraph'
})

const series = [{
            name: 'Посты',
            data: [...postsList.value.map(a => a.post_looks)]
          }]
const chartOptions = {
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {  // Значения на столбцах
        position: 'top', // top, center, bottom 
      },
    }
  },
  dataLabels: {  // значения над столбиками
    enabled: true,
    formatter: function (val) {
      return val;
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },

  xaxis: {
    type: 'category',
    categories: [...postsList.value.map(a => a.org_name)],
    labels: {
      rotate: -90,
      rotateAlways: true,
      trim: false,
      //offsetY: 15,
      minHeight: undefined,
      maxHeight: 180,
      formatter: function (str) {
        return splitN(str, 25)
        //return val  // подписи под столбцами
      },
      align: 'center'
    },
    position: 'bottom',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    tooltip: {
      enabled: false,
    }
  },
  /*yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      formatter: function (val) {
        return val + "шт";  // всплывающие подсказки со значениями
      }
    }

  },*/
  title: {
    text: 'Количество постов',
    floating: true,
    //offsetY: 330, // сдвинуть вниз на 330
    align: 'center',
    style: {
      color: '#1976D2'
    }
  }
}

</script>

<template>
  <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</template>

<style lang="sass">

    
</style>