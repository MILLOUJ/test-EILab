<template>
    <div>
        <h1>Таблица</h1>
        <ag-grid-vue class="ag-theme-alpine" :columnDefs="columnDefs.value" :rowData="rowData.value">
        </ag-grid-vue>
        <a href="/layout">Вёрстка</a>
    </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue3';
import { reactive, onMounted } from 'vue';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css"; // Тема таблицы (+ необходимо поменять класс)

export default {
    name: 'Table',
    components: {
        AgGridVue
    },
    setup() {
        const rowData = reactive({
            value: [{}]
        });
        const columnDefs = reactive({
            value: [
                { headerName: "Фамилия", field: "questionnaire.last_name"}, 
                { headerName: "Имя", field: "questionnaire.first_name"},
                { headerName: "Отчество", field: "questionnaire.patronymic"},
                { headerName: "Статус", field: "status" },
                { headerName: "Дата прохождения", field: "finished_at" },
                { headerName: "Тип отчета", field: "report_type" }
            ]
        });
        onMounted(() => {
            fetch("https://ei-adult.way2wei.space/response.json")
                .then((result) => result.json())
                .then((newRowData) => (rowData.value = newRowData));
        }
        )
        return {
            columnDefs,
            rowData,
        }
    }
}
</script>

<style>
.ag-theme-alpine {
    height: 200px;
    width: 100%;
}
</style>