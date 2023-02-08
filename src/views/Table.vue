<template>
    <div>
        <h1>Таблица</h1>
        <ag-grid-vue @grid-ready="onGridReady" class="ag-theme-alpine" :columnDefs="columnDefs" :rowData="rowData"
            :groupHeaderHeight="groupHeaderHeight" :headerHeight="headerHeight"
            :floatingFiltersHeight="floatingFiltersHeight" :pivotGroupHeaderHeight="pivotGroupHeaderHeight"
            :pivotHeaderHeight="pivotHeaderHeight">
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
                    headerName: "Фамилия Имя Отчество", children: [
                        { field: "questionnaire.last_name" },
                        { field: "questionnaire.first_name" },
                        { field: "questionnaire.patronymic" }
                    ]
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
    // methods: {
    //     onGridReady(params) {
    //         this.gridApi = params.api;
    //         this.gridApi.setHeaderHeight(0)

    //     }
    // },
    created() {
        this.groupHeaderHeight = 50;
        this.headerHeight = 5;
        this.floatingFiltersHeight = 50;
        this.pivotGroupHeaderHeight = 50;
        this.pivotHeaderHeight = 100;
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
    },
    // setup() {
    //     const rowData = reactive({
    //         value: [{}]
    //     });
    //     const columnDefs = reactive({
    //         value: [
    //             {
    //                 headerName: "Фамилия Имя Отчество", children: [
    //                     { field: "questionnaire.last_name" },
    //                     { field: "questionnaire.first_name" },
    //                     { field: "questionnaire.patronymic" }
    //                 ]
    //             },
    //             { headerName: "Статус", field: "status" },
    //             { headerName: "Дата прохождения", field: "finished_at" },
    //             { headerName: "Тип отчета", field: "report_type" }
    //         ]
    //     });
    //     onMounted(() => {
    //         fetch("https://ei-adult.way2wei.space/response.json")
    //             .then((result) => result.json())
    //             .then((newRowData) => (rowData.value = newRowData));
    //     },
    //     )
    //     return {
    //         columnDefs,
    //         rowData,
    //     }
    // }
}
</script>

<style>
.ag-theme-alpine {
    height: 100vh;
    width: 100%;
}
</style>
