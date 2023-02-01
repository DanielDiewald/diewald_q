<template>
  <q-dialog v-model="show">
    <q-card class="my-card2">
      <q-img :src="`/Images/products/${selected.image}`"></q-img>
      <q-btn
        size="1.5rem"
        class="absolute fixed-top-right q-my-md q-px-md q-py-ld q-mr-md"
        color="primary"
        round
        >€ {{ selected.discount }}</q-btn
      >
      <p class="absolute fixed-bottom text-center text-h6">
        {{ selected.name }}
      </p>
    </q-card>
  </q-dialog>

  <div class="q-pa-md">
    <q-table
      title="Our Products"
      :rows="filterProducts"
      :columns="columns"
      row-key="name"
      hide-bottom
      :rows-per-page-options="[20]"
      :visible-columns="filteredColumns()"
      style="height: 80vh"
    >
      <template #top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-primary"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <div>
            <q-img
              @click="openModal(props.row)"
              :src="`/images/products/${props.value}`"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { productStore } from '../stores/product.js';
import { useQuasar } from 'quasar';

const store = productStore();
const $q = useQuasar();

let products = ref([]);
const filter = ref('');
let show = ref(false);
let selected = ref(null);

onMounted(async () => {
  await store.getProducts();
  products.value = store.product;
  console.log(products.value);
});

const filterProducts = computed(() => {
  return products.value.filter((product) => {
    return product.name.toLowerCase().includes(filter.value.toLowerCase());
  });
});

const columns = [
  {
    name: 'item',
    label: 'Item#',
    field: 'itemNumber',
    sortable: true,
    align: 'left',
  },
  { name: 'image', label: 'Image', field: 'image', align: 'center' },
  { name: 'name', label: 'Name', field: 'name', align: 'center' },
  { name: 'category', label: 'Category', field: 'category', align: 'center' },
  { name: 'price', label: 'Price', field: 'price', align: 'center' },
];

const filteredColumns = () => {
  const cols = ['name', 'price'];
  if ($q.screen.gt.xs) cols.push('image');
  if ($q.screen.gt.sm) cols.push('item', 'category');
  return cols;
};

function openModal(product) {
  show.value = true;
  selected.value = product;
}
</script>

<style lang="sass">
.q-table__top
  background-color: $warning

.my-card2
    width: 100%
</style>
