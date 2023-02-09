<template>
    <div>
        <h1>Таблица</h1>
        <ag-grid-vue @grid-ready="onGridReady" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="rowData"
            :headerHeight="headerHeight"
            >
        </ag-grid-vue>
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
        AgGridVue,
    },
    data: function () {
        return {
            columnDefs: [
                {
                    headerName: "Фамилия Имя Отчество", valueGetter: this.fullNameGetter,
                    field: "last_name&first_name&patronymic"
                },
                { headerName: "Статус", field: "status" },
                { headerName: "Дата прохождения", field: "finished_at" },
                { headerName: "Тип отчета", field: "report_type" }
            ],

            gridApi: null,
            columnApi: null,
            defaultColDef: {
                sortable: true,
                resizable: true,
            },
            groupHeaderHeight: null,
            headerHeight: null,
            floatingFiltersHeight: null,
            pivotGroupHeaderHeight: null,
            pivotHeaderHeight: null,
            rowData: null,
        };
    },
    created() {
        this.headerHeight = 40;
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;

            const updateData = (data) => params.api.setRowData(data);

            fetch('https://ei-adult.way2wei.space/response.json')
                .then((resp) => resp.json())
                .then((data) => updateData(data));
        },
        
        fullNameGetter(params) {
            if (params.data.questionnaire == null) {
                return " "
            } else {
            return params.data.questionnaire.last_name + " " + 
            params.data.questionnaire.first_name + " " + params.data.questionnaire.patronymic;
            }
        },
    },
}
</script>

<style>
.ag-theme-alpine {
    height: 100vh;
    width: 100%;
}
</style>