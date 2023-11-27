
<script setup>
import Table from '../components/Table.vue'
import { ref } from 'vue'

var dinnerName = "";
var dinnerGrams = "";
var dinnerCalories = "";
var dinnerFats = "";
var dinnerCarbs = "";
var dinnerProtein = "";

const searchQuery = ref('')
const gridColumns = ['name', 'grams', 'calories', 'fats', 'carbs', 'protein']
const gridData = []


function AddDinner() {
  gridData.push({ name: dinnerName, grams: dinnerGrams, calories: dinnerCalories, fats: dinnerFats, carbs: dinnerCarbs, protein: dinnerProtein })
  Table.sortData(1);
}
</script>

<template>
    <div class="container">
      <h1 class="journey_h1">Dinner</h1>
      <form id="search" class="small_text">
        Search <input name="query" v-model="searchQuery">
      </form><br>
      
      <div class="table_component" role="region" tabindex="0">
      <table>
          <thead>
              <tr>
                  <th>
                      <div>
                          <div>Dinner Name</div>
                      </div>
                  </th>
                  <th>Grams</th>
                  <th>Calories</th>
                  <th>Fats</th>
                  <th>Carbs</th>
                  <th>Protein</th>
              </tr>
              <tr>
                  <td><input v-model="dinnerName"></td>
                  <td><input v-model="dinnerGrams"></td>
                  <td><input v-model="dinnerCalories"></td>
                  <td><input v-model="dinnerFats"></td>
                  <td><input v-model="dinnerCarbs"></td>
                  <td><input v-model="dinnerProtein"></td>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
      </div>
      <button class="button_journey" @click="AddDinner">Add</button>
      <Table class="table_component"
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </Table>
      <RouterLink class="button_journey" to="/your_journey">Back</RouterLink>
    </div>
</template>