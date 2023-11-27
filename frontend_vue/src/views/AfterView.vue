
<script setup>
import Table from '../components/Table.vue'
import { ref } from 'vue'

var afterName = "";
var afterGrams = "";
var afterCalories = "";
var afterFats = "";
var afterCarbs = "";
var afterProtein = "";

const searchQuery = ref('')
const gridColumns = ['name', 'grams', 'calories', 'fats', 'carbs', 'protein']
const gridData = []


function AddAfter() {
  gridData.push({ name: afterName, grams: afterGrams, calories: afterCalories, fats: afterFats, carbs: afterCarbs, protein: afterProtein })
  Table.sortData(1);
}
</script>

<template>
    <div class="container">
      <h1 class="journey_h1">After</h1>
      <form id="search" class="small_text">
        Search <input name="query" v-model="searchQuery">
      </form><br>
      
      <div class="table_component" role="region" tabindex="0">
      <table>
          <thead>
              <tr>
                  <th>
                      <div>
                          <div>After Name</div>
                      </div>
                  </th>
                  <th>Grams</th>
                  <th>Calories</th>
                  <th>Fats</th>
                  <th>Carbs</th>
                  <th>Protein</th>
              </tr>
              <tr>
                  <td><input v-model="afterName"></td>
                  <td><input v-model="afterGrams"></td>
                  <td><input v-model="afterCalories"></td>
                  <td><input v-model="afterFats"></td>
                  <td><input v-model="afterCarbs"></td>
                  <td><input v-model="afterProtein"></td>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
      </div>
      <button class="button_journey" @click="AddAfter">Add</button>
      <Table class="table_component"
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </Table>
      <RouterLink class="button_journey" to="/your_journey">Back</RouterLink>
    </div>
</template>