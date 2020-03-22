<template>
  <div>
    <tree :subs="list"></tree>
  </div>
</template>

<script>
  import Tree from "./components/Tree";

  export default {
    components: {Tree},
    data() {
      return {
        list: [
          {
            name: 'Apple', type: 'comp',
            subs: [
              {name: 'Pine', type: 'child'},
              {name: 'Pine', type: 'child'},
              {name: 'Pine', type: 'child'},
              {
                name: 'Apple', type: 'comp',
                subs: [
                  {name: 'Pine', type: 'child'},
                  {name: 'Pine', type: 'child'},
                  {name: 'Pine', type: 'child'},
                ]
              }
            ]
          },
          {
            name: 'Apple', type: 'comp',
            subs: [
              {name: 'Pine', type: 'child'},
              {name: 'Pine', type: 'child'},
              {name: 'Pine', type: 'child'},
            ]
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

