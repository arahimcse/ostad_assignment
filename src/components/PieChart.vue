<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";
const pieChartCanvas = ref(null);
let chartInstance = null;
const dataset = [12, 19, 6, 8, 16, 5];
const data = {
    datasets: [
        {
            label: "Data",
            data: dataset,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
        },
    ],
};
const config = {
    type: "pie",
    data: data,
};
const createChart = () => {
    if (pieChartCanvas.value) {
        chartInstance = new Chart(pieChartCanvas.value, config);
    }
};
onMounted(() => {
    createChart();
});
onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.destroy();
    }
});
</script>

<template>
    <h2 class="my-5 text-3xl">Pie Chart</h2>
    <div>
        <canvas ref="pieChartCanvas"></canvas>
    </div>
</template>
<style scoped></style>
