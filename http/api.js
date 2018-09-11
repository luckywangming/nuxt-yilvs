import axios from '~/plugins/axios.js'


export const httpGetIndexLawyer = () => axios.post(`/market/findLawyerByChannel`)
