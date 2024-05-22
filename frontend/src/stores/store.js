import { defineStore } from 'pinia'

export const useVkStateStore = defineStore('vk_state', {
  state: () => ({
    leftDrawerOpen: false,
    isAuth: true,
    isLoading: false,
    orgsList: [
      {id_org: 1, org_type: 'ОИВ', org_name: 'Министерство цифрового развития РТ', vk_link: 'https://vk.com/mincifrart', owner_id: '48419448'}, 
      {id_org: 2, org_type: 'ОИВ', org_name: 'Министерство финансов РТ', vk_link: 'https://vk.com/minfinrt', owner_id: '60939146'},
      {id_org: 3, org_type: 'ОИВ', org_name: 'Министерство РТ по регулированию контрактной системы в сфере закупок', vk_link: 'https://vk.com/minzakuprt', owner_id: '119238214'},
      {id_org: 4, org_type: 'ОИВ', org_name: 'Служба по финансово-бюджетному надзору РТ', vk_link: 'https://vk.com/sfbn_rt', owner_id: '171119573'},
      {id_org: 5, org_type: 'ОИВ', org_name: 'Министерство дорожно-транспортного комплекса РТ', vk_link: 'https://vk.com/mindortrans_rt', owner_id: '133661510'},
      {id_org: 6, org_type: 'ОИВ', org_name: 'Министерство жилищно-коммунального хозяйства РТ', vk_link: 'https://vk.com/minzhkkh', owner_id: '215511587'},
      {id_org: 7, org_type: 'ОИВ', org_name: 'Министерство здравоохранения РТ', vk_link: 'https://vk.com/tuvaminzdrav', owner_id: '72574141'},
    ],
    postsList: [
      {id_stat_row: 1, org_type: 'ОИВ', org_name: 'Министерство цифрового развития РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/1', post_looks: 150, post_likes: 26},
      {id_stat_row: 2, org_type: 'ОИВ', org_name: 'Министерство финансов РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 100, post_likes: 58},
      {id_stat_row: 3, org_type: 'ОИВ', org_name: 'Министерство РТ по регулированию контрактной системы в сфере закупок', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 110, post_likes: 8},
      {id_stat_row: 4, org_type: 'ОИВ', org_name: 'Служба по финансово-бюджетному надзору РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 90, post_likes: 60},
      {id_stat_row: 5, org_type: 'ОИВ', org_name: 'Министерство дорожно-транспортного комплекса РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 110, post_likes: 58},
      {id_stat_row: 6, org_type: 'ОИВ', org_name: 'Министерство жилищно-коммунального хозяйства РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 125, post_likes: 8},
      {id_stat_row: 7, org_type: 'ОИВ', org_name: 'Министерство здравоохранения РТ', post_date: '01.05.2024', post_link: 'https://vk.com/mincifrart/2', post_looks: 100, post_likes: 58},
    ],
    orgsCat: [
      {id_cat: 1, catName: 'ВДЛ'},
      {id_cat: 2, catName: 'ОИВ'},
      {id_cat: 3, catName: 'ОМСУ'},
    ]
  }),

  getters: {
    getUserById: (state) => {
      //return (userId) => state.users.find((user) => user.id === userId)
    },
  },

  actions: {
    login(){
      this.isAuth=true
    },
    logout(){
      this.isAuth=false
    },
    delOrgs(idOrgs=[]) {
      this.isLoading = true
      idOrgs.forEach(element => {
        this.orgsList = this.orgsList.filter(item => item.id_org !== element)
      })
      this.isLoading = false
    },
    delPosts(idPosts=[]) {
      this.isLoading = true
      idPosts.forEach(element => {
        this.postsList = this.postsList.filter(item => item.id_stat_row !== element)
      })
      this.isLoading = false
    },
    async loginUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // пусть компонент формы отображает ошибку
        return error
      }
    },
  }
})
