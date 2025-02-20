export const UUID = '772c9859-4dd3-4a0d-b87d-d76b9f43cfa4'
export const EVENTS_ID = {
  READY: '00b2fcbe-f27f-437b-a0d5-91072d840ed3',
  INACTIVE: '29e75851-6cae-44f4-8a9c-f6489c4dca88',
  CONTEXT: '7330d8fc-4c64-11e3-af49-080027ab4d7b',
}

export const API_BASE = 'https://biz.nanosemantics.ru/api/bat/nkd/json'

export const API_ROUTES = {
  INIT: {
    method: 'POST',
    route: '/Chat.init ',
  },
  REQUEST: {
    method: 'POST',
    route: '/Chat.request ',
  },
  EVENT: {
    method: 'POST',
    route: '/Chat.event',
  },
}