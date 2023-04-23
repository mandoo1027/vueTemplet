import {  defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => {
  /**
   * Current name of the user.
   */ 

  const isLoginPage  = ref(false)
  const getIsLoginPage = computed(() => isLoginPage.value)

  function setLoginPage(value:boolean){
    isLoginPage.value = value
  }

  return {
    setLoginPage,
    getIsLoginPage
  }
})

