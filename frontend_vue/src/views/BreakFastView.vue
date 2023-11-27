
<script setup>
import Table from '../components/Table.vue'
import { ref } from 'vue'

var breakfastName = "";
var breakfastGrams = "";
var breakfastCalories = "";
var breakfastFats = "";
var breakfastCarbs = "";
var breakfastProtein = "";

const searchQuery = ref('')
const gridColumns = ['name', 'grams', 'calories', 'fats', 'carbs', 'protein']
const gridData = []


function AddBreakfast() {
  gridData.push({ name: breakfastName, grams: breakfastGrams, calories: breakfastCalories, fats: breakfastFats, carbs: breakfastCarbs, protein: breakfastProtein })
  Table.sortData(1);
}
</script>

<template>
    <div class="container">
      <h1 class="journey_h1">Breakfast</h1>
      <form id="search" class="small_text">
        Search <input name="query" v-model="searchQuery">
      </form><br>
      
      <div class="table_component" role="region" tabindex="0">
      <table>
          <thead>
              <tr>
                  <th>
                      <div>
                          <div>Breakfast Name</div>
                      </div>
                  </th>
                  <th>Grams</th>
                  <th>Calories</th>
                  <th>Fats</th>
                  <th>Carbs</th>
                  <th>Protein</th>
              </tr>
              <tr>
                  <td><input v-model="breakfastName"></td>
                  <td><input v-model="breakfastGrams"></td>
                  <td><input v-model="breakfastCalories"></td>
                  <td><input v-model="breakfastFats"></td>
                  <td><input v-model="breakfastCarbs"></td>
                  <td><input v-model="breakfastProtein"></td>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
      </div>
      <button class="button_journey" @click="AddBreakfast">Add</button>
      <Table class="table_component"
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </Table>
      <RouterLink class="button_journey" to="/your_journey">Back</RouterLink>
    </div>
</template>