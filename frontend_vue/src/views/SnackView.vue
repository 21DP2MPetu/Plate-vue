
<script setup>
import Table from '../components/Table.vue'
import { ref } from 'vue'

var snackName = "";
var snackGrams = "";
var snackCalories = "";
var snackFats = "";
var snackCarbs = "";
var snackProtein = "";

const searchQuery = ref('')
const gridColumns = ['name', 'grams', 'calories', 'fats', 'carbs', 'protein']
const gridData = []


function AddSnack() {
  gridData.push({ name: snackName, grams: snackGrams, calories: snackCalories, fats: snackFats, carbs: snackCarbs, protein: snackProtein })
  Table.sortData(1);
}
</script>

<template>
    <div class="container">
      <h1 class="journey_h1">Snack</h1>
      <form id="search" class="small_text">
        Search <input name="query" v-model="searchQuery">
      </form><br>
      
      <div class="table_component" role="region" tabindex="0">
      <table>
          <thead>
              <tr>
                  <th>
                      <div>
                          <div>Snack Name</div>
                      </div>
                  </th>
                  <th>Grams</th>
                  <th>Calories</th>
                  <th>Fats</th>
                  <th>Carbs</th>
                  <th>Protein</th>
              </tr>
              <tr>
                  <td><input v-model="snackName"></td>
                  <td><input v-model="snackGrams"></td>
                  <td><input v-model="snackCalories"></td>
                  <td><input v-model="snackFats"></td>
                  <td><input v-model="snackCarbs"></td>
                  <td><input v-model="snackProtein"></td>
              </tr>
          </thead>
          <tbody></tbody>
      </table>
      </div>
      <button class="button_journey" @click="AddSnack">Add</button>
      <Table class="table_component"
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </Table>
      <RouterLink class="button_journey" to="/your_journey">Back</RouterLink>
    </div>
</template>