const Mock = require('mockjs')

Mock.mock('/resdata', 'get', () => {
  return require('../constants/resList.json')
})

Mock.mock('/roadbookdata', 'get', () => {
  return require('../constants/roadBookList.json')
})

Mock.mock('/namedata', 'get', () => {
  return require('../constants/nameOption.json')
})