<template>
    <div>
        <b-container>
            <b-row>
                <b-col md="9">

                </b-col>
                <b-col md="3">
                    <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col>
                    <b-table
                        bordered
                        hover
                        striped
                        responsive
                        :sorts="users"
                        :items="users"
                        :filter="filter"
                        :fields="fields"
                        :per-page="perPage"
                        :current-page="currentPage"
                    >
                        <template v-slot:cell(createdAt)="{ item }">
                            {{ item.createdAt | formatDate }}
                        </template>
                        <template v-slot:cell(updatedAt)="{ item }">
                            {{ item.updatedAt | formatDate }}
                        </template>
                        <template v-slot:cell(actions)="data">
                            <b-button variant="danger" @click="deleteItem(data.item.id)">Delete</b-button>
                        </template>
                        <!--                <template #table-caption>This is a table caption.</template>-->
                    </b-table>
                </b-col>
            </b-row>
            <b-row class="text-center">
                <b-col>
                    <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        aria-controls="my-table"
                    ></b-pagination>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "Users",
    // data() { return { users: null, } },
    data() {
        return {
            filter: "",
            // fields: ['_id', 'email', 'name', 'createdAt', 'updatedAt', 'blogs', 'actions'],
            fields: [
                { key: "name", label: "Name"},
                { key: "email", label: "Email" },
                { key: "blogs.0.title", label: "Blogs" },
                { key: "createdAt", label: "Created Date" },
                { key: "updatedAt", label: "Updated Date" },
                { key: "actions", label: "Action" }
            ],
            perPage: 2,
            currentPage: 1,
            users: null
        }
    },
    computed: {
        rows() {
            return this.users.length;
        },
    },
    methods: {
        deleteItem(id) {
            const index = this.users.indexOf((x) => x.id === id);
            this.users.splice(index, 1);
        },
    },
    async created() {
        // GET request using axios with async/await
        const response = await this.axios.get("http://127.0.0.1:8000/api/users");
        console.log(response.data);
        this.users = response.data;
    }
}
</script>

<style scoped>

</style>